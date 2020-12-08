angular.module('myapp',[])
.controller('myctrl',function($scope)
{
    $scope.listCakes=[
        {id:'C1',name:'BLACK FOREST',price:5000,hours:72},
        {id:'C02',name:'Java',price:3455,hours:48},
        {id:'C03',name:'C++',price:4205,hours:36},
        {id:'C04',name:'C programming',price:2000,hours:24}
    ];
    $scope.save=function()
    {
        var index=getindex($scope.id);
        $scope.listCakes[index].name=$scope.name;
        $scope.listCakes[index].price=$scope.price;
        $scope.listCakes[index].hours=$scope.hours;
    }
    $scope.add=function()
    {
        $scope.listCakes.push({
            id:$scope.id,name:$scope.name,price:$scope.price,hours:$scope.hours
        });
    }
    function getindex(id)
    {
        for(var i=0;i<$scope.listCakes.length;i++)
        if($scope.listCakes[i].id==id)
        return i;
        return -1;
    }
    $scope.edit=function(id)
    {
        var index=this.$index;
        var cakee=$scope.listCakes[index];
        $scope.id=cake.id;
        $scope.name=cake.name;
        $scope.price=cake.price;
        $scope.hours=cake.hours;
    }
    $scope.delete=function()
    {
        var result=confirm('Are you sure?');
        if(result==true)
        {
            var index=this.$index;
            $scope.listCakes.splice(index,1);
        }
    };
});
