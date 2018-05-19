/*
* 视频自动播放问题
* 前几天帮朋友做网站遇到的一个问题就是视频在safari上无法播放的问题
* 后来查了好久也没找到好的办法，后来知道safari11之后就不允许自动播放视频
* 这个好像在安卓/ios上一直都是无法自动播放的，
* 由此引发的一系列思考以及参考别人的资料进行的自我总结
*/

/*
* 浏览器厂商对自媒体播放的限制，具备以下条件就可以
	1. 没音频轨道， 或者设置了muted属性
	2. 在视图中是可见了，在DOM里display不为none或者visibility不为hidden，并且要在可视区域内的
*/

/*
* 执行尝试过在safari中无法播放的时候页面加载完调用一次play但是失败了。浏览器规定必须要有动作的触达才
* 可以播放，无论你是点击还是滑动还是其他的必须有动作的触发,关于视频的测试，可以直接用里面的两个mp4资源
*/

/*
* 原生播放视频我们用video表情，音频除了audio标签还有一个API就是AudioContext
* AudioContext可以做的事情很多，具体可以参考mdn的api
*/

//首先我们看一下张鑫旭大神给的例子，在看一下写api的具体作用然后在回到之前怎么样去播放
//http://www.zhangxinxu.com/wordpress/2017/06/html5-web-audio-api-js-ux-voice/
//附上mdn链接:https://developer.mozilla.org/zh-CN/docs/Web/API/AudioContext

//兼容老的webkit浏览器
window.AudioContext = window.AudioContext || window.webkitAudioContext;

(function () {
    if (!window.AudioContext) { 
        alert('当前浏览器不支持Web Audio API');
        return;
    }
    
    // 按钮元素
    var eleButton = document.getElementById('button');
    
    // 创建新的音频上下文接口
    var audioCtx = new AudioContext();
    
    // 发出的声音频率数据，表现为音调的高低
    var arrFrequency = [196.00, 220.00, 246.94, 261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88, 523.25, 587.33, 659.25, 698.46, 783.99, 880.00, 987.77, 1046.50];
    
    // 音调依次递增或者递减处理需要的参数
    var start = 0, direction = 1;
    
    // 鼠标hover我们的按钮的时候
    eleButton.addEventListener('mouseenter', function () {
        // 当前频率
        var frequency = arrFrequency[start];
        // 如果到头，改变音调的变化规则（增减切换）
        if (!frequency) {
            direction = -1 * direction;
            start = start + 2 * direction;
            frequency = arrFrequency[start];
        }
        // 改变索引，下一次hover时候使用
        start = start + direction;
        
        // 创建一个OscillatorNode, 它表示一个周期性波形（振荡），基本上来说创造了一个音调
        var oscillator = audioCtx.createOscillator();

        // 创建一个GainNode,它可以控制音频的总音量
        var gainNode = audioCtx.createGain();

        // 把音量，音调和终节点进行关联
        oscillator.connect(gainNode);

        // audioCtx.destination返回AudioDestinationNode对象，表示当前audio context中所有节点的最终节点，一般表示音频渲染设备
        gainNode.connect(audioCtx.destination);

        // 指定音调的类型，其他还有square|triangle|sawtooth
        oscillator.type = 'sine';

        // 设置当前播放声音的频率，也就是最终播放声音的调调
        oscillator.frequency.value = frequency;

        // 当前时间设置音量为0
        gainNode.gain.setValueAtTime(0, audioCtx.currentTime);

        // 0.01秒后音量为1
        //linearRampToValueAtTime()方法表示音量在某时间线性变化到某值，这里linearRampToValueAtTime(1, audioCtx.currentTime + 0.01)实际上表示的是在0.01秒的时间内，声音音量线性从0到1。
        gainNode.gain.linearRampToValueAtTime(1, audioCtx.currentTime + 0.01);

        // 音调从当前时间开始播放
        oscillator.start(audioCtx.currentTime);

        // 1秒内声音慢慢降低，是个不错的停止声音的方法
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 1);

        // 1秒后完全停止声音
        oscillator.stop(audioCtx.currentTime + 1);
    });
})();

	
//回到之前的例子,用AudioContext播放音频
/*
* 先请求音频文件，放到ArrayBuffer里面，然后用AudioContext的API进行decode解码，解码完了再让它去play，就行了
* responseType值的类型如下
	‘’ 				---> DOMString(默认类型)
	arraybuffer     ---> ArrayBuffer对象
	blob            ---> Blob对象
	document        ---> Document对象
	json            ---> Javascript object, parsed from a JSON string returned by the server
	text            ---> DOMString

* 所以如果我们是从网络上请求资源的话 请别忘记把responseType 设置成arraybuffer
*/

/*
* createMediaElementSource() 方法用于创建一个新的 MediaElementAudioSourceNode 对象,输入某个存在的 HTML <audio> or <video> 元素, 对应的音频即可被播放或者修改.
* 如果出现跨域的情况 放在本地服务器上就好了，或者通过js 创建audio
*/
let audioContext = new (window.AudioContext || window.webkitAudioContext)();
let myAudio = document.querySelector('audio');

// Create a MediaElementAudioSourceNode
// Feed the HTMLMediaElement into it
let source = audioContext.createMediaElementSource(myAudio);
// 创建一个GainNode,它可以控制音频的总音量
let gainNode = audioContext.createGain();
source.connect(gainNode);
gainNode.connect(audioContext.destination);


















