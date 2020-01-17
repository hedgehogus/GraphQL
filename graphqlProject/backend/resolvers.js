import mongoose from 'mongoose';
import courseModel from './models/course';


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
        allCourses: (root, {searchTerm}) => {
            // return coursesData;
            console.log(searchTerm) 
            if (searchTerm !== ''){
                return courseModel.find({$text: {$search: searchTerm}}).sort({voteCount: 'desc'});
            } else {
                return courseModel.find().sort({voteCount: 'desc'});
            }
        },
        course: (root, {id}) => {
            //return courseModel.findOne({id:id});
            /*return coursesData.filter(course => {
                return course.id === id
            }) [0]*/
            return courseModel.findOne({id: id});
        } 
    },
    Mutation: {
        upvote: (root, {id}) => {
            // const course = coursesData.filter(course => {
            //     return course.id === id
            // }) [0]; 
            // course.voteCount++;
            // return course;
            return courseModel.findOneAndUpdate({id: id}, {$inc: {"voteCount": 1}}, {returnNewDocument: true});       
        },
        downvote: (root, {id}) => {
            // const course = coursesData.filter(course => {
            //     return course.id === id
            // }) [0];
            // course.voteCount--;
            // return course;
            return courseModel.findOneAndUpdate({id: id}, {$inc: {"voteCount": -1}}, {returnNewDocument: true});    
        },
        addCourse: (root, {title, author, description, topic, url}) => {
            const course = new courseModel({title, author, description, topic, url})
            return course.save();
        }
    }
}

export default resolvers;