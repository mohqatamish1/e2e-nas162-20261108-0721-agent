FROM node:22-alpine@sha256:c610fcdfb1d5b4740dd70c284ed3cb16bb857e0f7166196e36a5501df7a3aa32 AS dependencies
WORKDIR /workspace
COPY ./missing-source .
RUN npm ci --ignore-scripts
FROM dependencies AS build
RUN npm prune --omit=dev --ignore-scripts
FROM node:22-alpine@sha256:c610fcdfb1d5b4740dd70c284ed3cb16bb857e0f7166196e36a5501df7a3aa32 AS runtime
WORKDIR /workspace
COPY --from=build /workspace/ ./
RUN addgroup --system nashir && adduser --system --ingroup nashir nashir
ENV NODE_ENV=production PORT=3000
USER nashir
EXPOSE 3000
CMD ["npm","start"]
