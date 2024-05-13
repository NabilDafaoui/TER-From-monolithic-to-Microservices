FROM node:latest

# Créez le répertoire de travail de l'application
WORKDIR /app

# Copiez les fichiers de votre application
COPY . .

# Installation des dépendances
RUN npm install

# Téléchargez et copiez le JAR de l'exportateur Jaeger dans le répertoire de votre application
ADD https://repo1.maven.org/maven2/io/opentelemetry/opentelemetry-exporter-jaeger/1.34.1/opentelemetry-exporter-jaeger-1.34.1.jar .

# Téléchargez et copiez l'agent OpenTelemetry Java dans le répertoire de votre application
ADD https://repo1.maven.org/maven2/io/opentelemetry/javaagent/opentelemetry-javaagent/1.29.0/opentelemetry-javaagent-1.29.0.jar .

# Spécifiez l'utilisation de l'agent OpenTelemetry Java avec l'exportateur Jaeger
ENV JAVA_TOOL_OPTIONS "-javaagent:./opentelemetry-javaagent-1.29.0.jar"

# Commande pour démarrer votre application Node.js
CMD ["npm", "run", "dev"]

# Expose le port de l'application Node.js
EXPOSE 8000
