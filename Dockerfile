# ---------------------------------------------------------------------------
# stage 1 - builder
# ---------------------------------------------------------------------------
FROM node:20 as builder

# install bun
RUN npm install -g bun

# setup default user and working directory
USER node
WORKDIR /home/node/app

# install dependencies
COPY --chown=node:node package.json bun.lockb ./
RUN bun install --frozen-lockfile

# copy source code
COPY --chown=node:node . .

# build docs
RUN bun run build

# ---------------------------------------------------------------------------
# stage 2 - runner
# ---------------------------------------------------------------------------
FROM nginx:1.25.3-alpine as runner

# copy nginx configuration server block file
COPY .nginx/default.conf /etc/nginx/conf.d/default.conf

# copy web files
COPY --from=builder /home/node/app/docs/.vitepress/dist /usr/share/nginx/html
