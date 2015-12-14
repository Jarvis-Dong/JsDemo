/**
 * Created by jiawei.dong on 11/23/2015.
 */
(function($){
   //$('#box1').velocity({
   //    width:'300',
   //    height:'300px',
   //},{
   //    duration:3000
   //}
   //);
   /* var seq =[
        {
            elements:$('#box1'),
            properties:{width:'300px'},
            options:{duration:1000}
        },
        {
            elements:$('#box2'),
            properties:{width:'300px'},
            options:{duration:1000}
        },
        {
            elements:$('#box3'),
            properties:{width:'300px'},
            options:{duration:1000}
        }

    ];
    $.Velocity.RunSequence(seq);*/

    $('#box1').on('mouseover',function(){
        $(this).velocity('callout.shake');
    });
    //自定义动画
    $.Velocity.RegisterEffect('d.pulse',{
        defaultDuration:500,
        calls:[
            [{scaleX:1.1},0.5],
            [{scaleX:1.0},0.5]
        ]
    });
    $('#box2').on('mouseover',function(){
        $(this).velocity('d.pulse');
    })

    //定义变量
    var container = $('.container');
    var box = $('.box');
    var buddy = $('.buddy');
    var pop = $('.pop');
    var open = $('.btn');
    var close = $('.close');
    var imgs = pop.find('img');
  //创建一个自定义动画d.slideUpIn 等等
    $.Velocity.RegisterUI('d.slideUpIn',{
        defaultDuration:500,
        calls:[
            [{opacity:[1,0],translateY:[0,100]}]
        ]
    });
    $.Velocity.RegisterUI('d.slideDownOut',{
        defaultDuration:300,
        calls:[
            [{opacity:[0,1],translateY:[100,0]}]
        ]
    });
    $.Velocity.RegisterUI('d.scaleIn',{
        defaultDuration:300,
        calls:[
            [{opacity:[1,0],scale:[1,0.3]}]
        ]
    });
    $.Velocity.RegisterUI('d.scaleOut',{
        defaultDuration:300,
        calls:[
            [{opacity:[0,1],scale:[0.3,1]}]
        ]
    });
   //定义动画序列
    var seqInit = [{
        elements: container,
        properties:'d.slideUpIn',
        options:{
            delay :300
        }
    },{
        elements: box,
        properties:'d.slideUpIn',
        options:{
            sequenceQueue:false  //同步执行 不要队列执行
        }

    },{
        elements: buddy,
        properties:'d.slideUpIn',
        options:{
            sequenceQueue:false,  //同步执行 不要队列执行
            delay :60
        }
    }];
    //定义按键后的动画序列
    var seqClick =[{
        elements:container,
        properties:'d.slideDownOut'

    },{
        elements: box,
        properties:'d.slideDownOut',
        options:{
            sequenceQueue:false  //同步执行 不要队列执行
        }
    },{
        elements:container,
        properties:'d.slideUpIn'
    },{
        elements:pop,
        properties:'d.slideUpIn',
        options:{
            sequenceQueue:false  //同步执行 不要队列执行
        }
    },{
        elements:imgs,
        properties:'d.scaleIn'


    }];
    var seqClose =[
        {
            elements:imgs,
            properties:'d.scaleOut'


        },
        {
        elements:container,
        properties:'d.slideDownOut'

    },{
        elements: pop,
        properties:'d.slideDownOut',
        options:{
            sequenceQueue:false  //同步执行 不要队列执行
        }
    },{
        elements:container,
        properties:'d.slideUpIn'
    },{
        elements:box,
        properties:'d.slideUpIn',
        options:{
            sequenceQueue:false  //同步执行 不要队列执行
        }
    }];
    //事件绑定
    $.Velocity.RunSequence(seqInit);
    open.on('click', function () {
        $.Velocity.RunSequence(seqClick);
    });
    close.on('click', function () {
        $.Velocity.RunSequence(seqClose);
    });

})(jQuery);