FROM node:latest
ENV PYTH /node_modules/typescript/bin
RUN git clone https://github.com/tdworowy/TypeScriptPlayground.git
WORKDIR  /TypeScriptPlayground/full_stack_example/full_stack_app
RUN npm install
RUN npm run tsc 
RUN ls -l
RUN npm run dev
EXPOSE 8082
CMD [ "npm", "start" ]
