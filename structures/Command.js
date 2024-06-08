module.exports = class Command {
    constructor(builder, options = {}) {
        this.builder = builder;
        this.runCommand = options.runCommand;
    }
}