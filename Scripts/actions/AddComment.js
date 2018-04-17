export default (name, comment, id) => (
    {
        type: 'ADD_COMMENT',
        name: name,
        comment: comment,
        id: id
    }
)