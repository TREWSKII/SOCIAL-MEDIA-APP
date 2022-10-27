const router = require('express').Router();

const {
    getThought,
    getSingleThoughtById,
    createNewThought,
    updateThoughtById,
    deleteThoughtById,
    createReaction,
    deleteReaction,
} = require('../../controllers/thought')

// api/thought
router.route('/').get(getThought).post(createNewThought)

// api/thought:id
router.route('/:thoughtId').get(getSingleThoughtById).put(updateThoughtById).delete(deleteThoughtById)

// api/thoughts:id/reactions
router.route('/:thoughtId/reaction').post(createReaction)

//api/thoughts/:thoughtId/reaction/:reactionId
router.route('/:thoughtId/reaction/:reactionId')
  .delete(deleteReaction);


module.exports = router;