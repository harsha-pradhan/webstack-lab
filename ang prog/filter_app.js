angular.module("MyApp",[])
.controller("MyCtrl",function($scope)
{
    var cakes=[
        {name:"chocolate truffle",id:'1.1',toppings:"chocochips/grated white chocolates",price:520},
        {name:"chocolate dip",id:'1.2',toppings:"sprinklers/ grated white chocolates",price:500},
        {name:"chocolate moose",id:'1.3',toppings:"chocochips/grated white chocolates",price:520},
        {name:"chocolate (dark)",id:'1.4',toppings:"white chocochips/ grated white chocolates/sprinklers",price:580},
        {name:"vanilla truffle",id:'2.1',toppings:"chocochips/cherries",price:500},
        {name:"vanilla strawberry mix",id:'2.2',toppings:"sprinklers/cherries",price:575},
        {name:"vanilla fondant",id:'2.3',toppings:"chocochips,sprinklers/cherries",price:530},
        {name:"vanilla dip",id:'2.4',toppings:"white chocochips,grated milkc chocolates/ cherries",price:510},
        {name:"vanilla delight",id:'2.5',toppings:"chocochips/ cherries",price:500},
        {name:"black forest",id:'3.1',toppings:"chocochips/ cherries",price:600},
        {name:"white forest",id:'3.2',toppings:"chocochips/cherries/sprinklers",price:600},
        {name:"Rainbow delight",id:'3.3',toppings:"chocochips, cherries",price:610},
        
        
    ];
    console.log(cakes);
    $scope.courses=cakes;
    $scope.rowlimit=4;
});
