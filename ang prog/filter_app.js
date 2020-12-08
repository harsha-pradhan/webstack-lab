angular.module("MyApp",[])
.controller("MyCtrl",function($scope)
{
    var cakes=[
        {name:"black forest",id:'100',toppings:"choco chips",price:500},
        {name:"white forest",id:'101',toppings:"choco chips,sprinklers",price:500},
        {name:"pineapple delight",id:'102',toppings:"cherries",price:550},
        {name:"strawberry",id;'103',toppings:"white chocolate",price:500},
        {name:"chocolate truffle",id;'104',toppings:"sprinklers",price:500},
        {name:"chocolate moose",id:'105',toppings:"choco chips,white choco chips",price:500},
        {name:"vanilla dip",id:'106',toppings:"choco chips,sprinklers",price:500},
        {name:"choco vanilla",id:'107',toppings:"choco chips,sprinklers",price:500},
        {name:"strawberry dip",id:'108',toppings:"white choco chips,sprinklers",price:500},
        {name:"red velvet cake",id:'109',toppings:"sprinklers",price:500},
       
       
    ];
    console.log(cakes);
    $scope.cakes=cakes;
    $scope.rowlimit=4;
});
