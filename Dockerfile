FROM nginx:alpine

# Copying source files
COPY ./dist/halfmoon-angular-test /usr/share/nginx/html
