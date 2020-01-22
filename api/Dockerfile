FROM ruby:2.6
RUN apt-get update -qq && apt-get install -y postgresql-client

RUN groupadd --gid 1000 node \
    && useradd --uid 1000 --gid node --shell /bin/bash --create-home node

RUN mkdir /app
WORKDIR /app

COPY Gemfile /app/Gemfile
COPY Gemfile.lock /app/Gemfile.lock

# RUN bundle install
COPY . /app

# Add a script to be executed every time the container starts.
COPY ./scripts/start_rails.sh /usr/bin/
RUN chmod +x /usr/bin/start_rails.sh
ENTRYPOINT ["start_rails.sh"]
EXPOSE 4000

# Start the main process.
CMD ["bash"]
