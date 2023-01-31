const Service = require('moleculer').Service;

class GreeterService extends Service {
  constructor(broker) {
    super(broker);

    this.parseServiceSchema({
      name: 'greeter',
      version: 'v2',
      meta: {
        scalable: true
      },
      dependencies: [
        'math'
      ],

      settings: {
        upperCase: true
      },
      actions: {
        hello: this.hello,
        welcome: {
          cache: {
            keys: ['name']
          },
          params: {
            name: 'string'
          },
          handler: this.welcome
        }
      },
      events: {
        'user.created': this.userCreated
      },
      created: this.serviceCreated,
      started: this.serviceStarted,
      stopped: this.serviceStopped,
    });
  }

  hello() {
    return 'Hello Moleculer';
  }

  welcome(ctx) {
    return this.sayWelcome(ctx.params.name);
  }

  sayWelcome(name) {
    this.logger.info('Say hello to', name);
    return `Welcome, ${this.settings.upperCase ? name.toUpperCase() : name}`;
  }

  userCreated(user) {
    this.broker.call('mail.send', { user });
  }

  serviceCreated() {
    this.logger.info('ES6 Service created.');
  }

  serviceStarted() {
    this.logger.info('ES6 Service started.');
  }

  serviceStopped() {
    this.logger.info('ES6 Service stopped.');
  }
}

module.exports = GreeterService;
