
function Course(title,instructor,views){
    this.title=title
    this.instructor=instructor
    this.views=views
    this.updateViews=function(){
        return ++this.views
    };
};
var course1=new Course("JavaScript","JK",12)
console.log(course1)