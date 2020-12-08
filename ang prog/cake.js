angular.module('myapp',[])
.controller('myctrl',function($scope)
{
    $scope.listCourses=[
        {id:'C01',name:'black forest',price:500,},
        {id:'C02',name:'white forest',price:550},
        {id:'C03',name:'chocolate truffle',price:560},
        {id:'C04',name:'vanilla dip',price:440}
    ];
    $scope.save=function()
    {
        var index=getindex($scope.id);
        $scope.listCourses[index].name=$scope.name;
        $scope.listCourses[index].price=$scope.price;
        
    }
    $scope.add=function()
    {
        $scope.listCourses.push({
            id:$scope.id,name:$scope.name,price:$scope.price,hours:$scope.hours
        });
    }
    function getindex(id)
    {
        for(var i=0;i<$scope.listCourses.length;i++)
        if($scope.listCourses[i].id==id)
        return i;
        return -1;
    }
    $scope.edit=function(id)
    {
        var index=this.$index;
        var course=$scope.listCourses[index];
        $scope.id=course.id;
        $scope.name=course.name;
        $scope.price=course.price;
    }
    $scope.delete=function()
    {
        var result=confirm('Are you sure?');
        if(result==true)
        {
            var index=this.$index;
            $scope.listCourses.splice(index,1);
        }
    };
});
