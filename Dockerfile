FROM node:22-alpine

ENV PORT=3000

WORKDIR /app

COPY package*.json ./

RUN npm install && npm install -g serve

COPY ./public ./public
COPY ./src ./src
COPY index.html nx.json project.json tsconfig.json tsconfig.app.json tsconfig.spec.json tsconfig.storybook.json vite.config.ts ./

RUN npm run build

RUN rm -rf ./public
RUN rm -rf ./src
RUN rm package*.json index.html nx.json project.json tsconfig.json tsconfig.app.json tsconfig.spec.json tsconfig.storybook.json vite.config.ts
RUN rm -rf node_modules

ENV NODE_ENV=production

CMD serve -p $PORT ./dist/clarivate-assessment