const createHttpError = require('http-errors');
const { Vote } = require('../db/models');

module.exports = class VoteService {
    static async createVote({ body }, next) {
        const vote = await Vote.create(body);
        if (!vote) {
            return next(createHttpError(400, 'Vote cannot be created'));
        }
        return vote;
    }
};