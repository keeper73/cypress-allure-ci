FROM node:12
RUN apt-get update; \
    apt-get install -y libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb;
WORKDIR /e2e
COPY package.json /e2e
COPY package-lock.json /e2e
RUN npm install;
ENV PATH="/e2e/node_modules/cypress/bin:${PATH}"
COPY . .
CMD ["bash"]
