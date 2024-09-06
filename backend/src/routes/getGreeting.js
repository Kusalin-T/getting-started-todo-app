const GREETING = 'Hello WW!';

module.exports = async (req, res) => {
    res.send({
        greeting: GREETING,
    });
};
