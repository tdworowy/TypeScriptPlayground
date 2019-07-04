FROM node:latest
RUN git clone https://github.com/tdworowy/TypeScriptPlayground.git
RUN cd full_stack_example/full_stack_app
RUN npm install
RUN npm run tsc 
RUN npm run dev
EXPOSE 8082
CMD [ "npm", "start" ]
