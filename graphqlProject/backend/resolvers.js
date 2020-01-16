let coursesData = [
    {
        id: '1',
        title: 'title1',
        author: 'Andrew',
        description: 'dfdfdfdf',
        topic: 'node.js',
        url: 'https://fdfdfdfd.com',
        voteCount: 0

    },
    {
        id: '2',
        title: 'title2',
        author: 'Andrew2',
        description: 'sghyjff',
        topic: 'node.js',
        url: 'https://fdfsdsdfdfd.com',
        voteCount: 0

    },
    {
        id: '3',
        title: 'title3',
        author: 'Andrew3',
        description: 'svrbhyjj',
        topic: 'node.js',
        url: 'https://fdfdfqqqdfd.com',
        voteCount: 0

    },
]


const resolvers = {
    Query: {
        allCourses: (root, {serchTerm}) => {
            return coursesData;
        },
        course: (root, {id}) => {
            //return courseModel.findOne({id:id});
            return coursesData.filter(course => {
                return course.id === id
            }) [0]
        }
    },
    Mutation: {
        upvote: (root, {id}) => {
            const course = coursesData.filter(course => {
                return course.id === id
            }) [0];
            course.voteCount++;
            return course;
        },
        downvote: (root, {id}) => {
            const course = coursesData.filter(course => {
                return course.id === id
            }) [0];
            course.voteCount--;
            return course;
        },
        addCourse: (root, {title, author, description, topic, url}) => {
            return null;
        }
    }
}

export default resolvers;