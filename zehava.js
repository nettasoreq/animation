(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"zehava_atlas_1", frames: [[21,20,9,7],[86,0,18,15],[95,17,8,8],[50,28,10,3],[106,0,14,14],[43,26,5,8],[53,11,13,15],[21,0,16,18],[122,0,6,2],[39,0,12,24],[79,17,14,11],[32,26,9,6],[53,0,31,9],[68,11,9,21],[115,16,7,23],[106,16,7,24],[0,0,9,37],[11,0,8,37]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.currentSoundStreamInMovieclip;
	this.soundStreamDuration = new Map();
	this.streamSoundSymbolsList = [];

	this.gotoAndPlayForStreamSoundSync = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.gotoAndPlay = function(positionOrLabel){
		this.clearAllSoundStreams();
		var pos = this.timeline.resolve(positionOrLabel);
		if (pos != null) { this.startStreamSoundsForTargetedFrame(pos); }
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(this.currentFrame);
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
		this.clearAllSoundStreams();
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
		this.clearAllSoundStreams();
	}
	this.startStreamSoundsForTargetedFrame = function(targetFrame){
		for(var index=0; index<this.streamSoundSymbolsList.length; index++){
			if(index <= targetFrame && this.streamSoundSymbolsList[index] != undefined){
				for(var i=0; i<this.streamSoundSymbolsList[index].length; i++){
					var sound = this.streamSoundSymbolsList[index][i];
					if(sound.endFrame > targetFrame){
						var targetPosition = Math.abs((((targetFrame - sound.startFrame)/lib.properties.fps) * 1000));
						var instance = playSound(sound.id);
						var remainingLoop = 0;
						if(sound.offset){
							targetPosition = targetPosition + sound.offset;
						}
						else if(sound.loop > 1){
							var loop = targetPosition /instance.duration;
							remainingLoop = Math.floor(sound.loop - loop);
							if(targetPosition == 0){ remainingLoop -= 1; }
							targetPosition = targetPosition % instance.duration;
						}
						instance.loop = remainingLoop;
						instance.position = Math.round(targetPosition);
						this.InsertIntoSoundStreamData(instance, sound.startFrame, sound.endFrame, sound.loop , sound.offset);
					}
				}
			}
		}
	}
	this.InsertIntoSoundStreamData = function(soundInstance, startIndex, endIndex, loopValue, offsetValue){ 
 		this.soundStreamDuration.set({instance:soundInstance}, {start: startIndex, end:endIndex, loop:loopValue, offset:offsetValue});
	}
	this.clearAllSoundStreams = function(){
		this.soundStreamDuration.forEach(function(value,key){
			key.instance.stop();
		});
 		this.soundStreamDuration.clear();
		this.currentSoundStreamInMovieclip = undefined;
	}
	this.stopSoundStreams = function(currentFrame){
		if(this.soundStreamDuration.size > 0){
			var _this = this;
			this.soundStreamDuration.forEach(function(value,key,arr){
				if((value.end) == currentFrame){
					key.instance.stop();
					if(_this.currentSoundStreamInMovieclip == key) { _this.currentSoundStreamInMovieclip = undefined; }
					arr.delete(key);
				}
			});
		}
	}

	this.computeCurrentSoundStreamInstance = function(currentFrame){
		if(this.currentSoundStreamInMovieclip == undefined){
			var _this = this;
			if(this.soundStreamDuration.size > 0){
				var maxDuration = 0;
				this.soundStreamDuration.forEach(function(value,key){
					if(value.end > maxDuration){
						maxDuration = value.end;
						_this.currentSoundStreamInMovieclip = key;
					}
				});
			}
		}
	}
	this.getDesiredFrame = function(currentFrame, calculatedDesiredFrame){
		for(var frameIndex in this.actionFrames){
			if((frameIndex > currentFrame) && (frameIndex < calculatedDesiredFrame)){
				return frameIndex;
			}
		}
		return calculatedDesiredFrame;
	}

	this.syncStreamSounds = function(){
		this.stopSoundStreams(this.currentFrame);
		this.computeCurrentSoundStreamInstance(this.currentFrame);
		if(this.currentSoundStreamInMovieclip != undefined){
			var soundInstance = this.currentSoundStreamInMovieclip.instance;
			if(soundInstance.position != 0){
				var soundValue = this.soundStreamDuration.get(this.currentSoundStreamInMovieclip);
				var soundPosition = (soundValue.offset?(soundInstance.position - soundValue.offset): soundInstance.position);
				var calculatedDesiredFrame = (soundValue.start)+((soundPosition/1000) * lib.properties.fps);
				if(soundValue.loop > 1){
					calculatedDesiredFrame +=(((((soundValue.loop - soundInstance.loop -1)*soundInstance.duration)) / 1000) * lib.properties.fps);
				}
				calculatedDesiredFrame = Math.floor(calculatedDesiredFrame);
				var deltaFrame = calculatedDesiredFrame - this.currentFrame;
				if(deltaFrame >= 2){
					this.gotoAndPlayForStreamSoundSync(this.getDesiredFrame(this.currentFrame,calculatedDesiredFrame));
				}
			}
		}
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Path_1_10 = function() {
	this.initialize(ss["zehava_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Path_1_13 = function() {
	this.initialize(ss["zehava_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Path_1_15 = function() {
	this.initialize(ss["zehava_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Path_1_17 = function() {
	this.initialize(ss["zehava_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Path_1_19 = function() {
	this.initialize(ss["zehava_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Path_1_8 = function() {
	this.initialize(ss["zehava_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Path_2_11 = function() {
	this.initialize(ss["zehava_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Path_3_9 = function() {
	this.initialize(ss["zehava_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Path_47 = function() {
	this.initialize(ss["zehava_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Path_4_2 = function() {
	this.initialize(ss["zehava_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Path_52 = function() {
	this.initialize(ss["zehava_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Path_54 = function() {
	this.initialize(ss["zehava_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Path_57 = function() {
	this.initialize(ss["zehava_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Path_5_3 = function() {
	this.initialize(ss["zehava_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Path_6_5 = function() {
	this.initialize(ss["zehava_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Path_7_5 = function() {
	this.initialize(ss["zehava_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Path_8_3 = function() {
	this.initialize(ss["zehava_atlas_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Path_9_4 = function() {
	this.initialize(ss["zehava_atlas_1"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.tree = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0D1010").s().p("AJrDgQAAgPgWgQQgOgLgYgaQgWgYgHgKQgDgEgFgCIAAAAQgJgFgqgBQgfgBgSgCQgXgEgYgGQgZgGgOAAQgNAAgNAIQgMAFgTgCIgigHIg2gDQgvgEgkgHIgJgDIgDgBQgagGgSgLIgBgBIgMgIIgBgBIgFgDIgBgCIgFgEIgBgBIgSgPIgDgCIgHgGQgbgUgNgQQgKgOgEgFQgugtgMgLQgHgGgqgGIgpgGQgOAKgLAGQgGAEgDAJIgGAPQgEAFAEAPIAFAZQABAGALALQAIAHgGACQgIACgJgLIgJgMQgRgVACgJQAEgMgBgBQgCgGgPgBQgPABgUAPQgUAQgGADQgJAFgDgEQgCgDALgIIAYgTQANgKANgDIAVgEQAHgCAGgHIAMgPQAFgFABgGQAAgFgTAIQgYAMgGABIhIAMQgPADgFgDQgHgGgJgGQgKgGgJgDIgOgFIgDgCIgCAAIgCAAIgFgBIgCAAIgDAAIgDAAIgDgBIgBAAIgRgBIgrABIgOACQgfAHgegQIgagJQgKgEAFgEQAEgEAXAGIAIACIAAAAIAXAGIAGABIAOAAIAEgBQAQgBAcgEIAWgCQAFAAgHgGIgDgDIgDgDIgBgBIgGgFIgBgBIgBgBIgCgBIgBgBIgBAAIgBgBIgBgBIgDAAQgUgFgLgHQgGgDgngEIg1gGQgNgBgFgGQgGgGAIABQAHABAtADQAvADANgBIAEAAIABAAIADABIACABIAFACIAFACIAAAAIALAHIADABIAWAQIAAAAIAgAXIACABIADABQAOAGAlAFQAdADANAAIAWABQARABALgJQAKgIASgEIAggFQAPgCAAgBQAAgDgMgFQgIgDghgXQghgYgGgDIgQgCQgVAAgZAFIgEABIgCABIgCgBQgWABgcgTQgRgMgFgDQgFgCgLABQgJAAgEgBIgIgHQgEgDAHAAIAMgCQAEgBAFAAIANACQAFABAZAOQAZAOAIACQAKACAcgEQAcgEAKgFQAHgDAMAFIAXAPQAKAFAUARQAXASAMAJQASALAcAJQAZAIAZADQAPACALAFQAHAEAKAJIAFAEIAIAGQALAGAOARIAZAfQAXAZAmASQAVAJBSAaIAPADIAAgBIAAAAIAAgBIgCgDIgCgBIgDgCIgIgEQgQgJgLgQQgQgagMgLQgRgSACgJQACgJgEgEQgGgFgDgIQgDgJgGgGQgFgEgFgJQgEgKgFgDIAAgBIgHgCIhkgkQgUgFgUgJQgMgGgFgGIgHgJIgNgVIgHgDIAAAAIgUgEQgOgDgIgEQgJgDgSgFIgZgFIgDgCIAAAAIgCgBIAAAAIgBgBIAAAAIgBgBIAAgBIABAAIAAgBIAIgHIACAAIACgBQALABAmAHIATAGQAPAFAJAAQAKgBAGAHIAEAKQABADAGAFIAIAIQANAKAGgBIADgCIACgFIACgDQAEgHgEgIIgIgQQgCgHAFABIAGACIAMAMIAFAQQAEANgEAJQAAABgBABQAAABAAAAQAAABAAAAQABABAAAAIACAAIAFADQAHAEAHACQAIABALAHIAEAAIACABIABAAIADgBIAIgBQADAAACgCIADgCQAJgFgXg4IgYgcIgHgGIARAAIAEAEIAVAHQAKADAKAZIAJAZIAJAOQAJAOADAAIACAAIABABIABAAIABAAIABAAIABABIACAAIADAAIAAAAIADABIAAAAIADABQANAEACACQAEACAEAAIACAAIACAAIABgBIABgBQAHgIANgWQASgeAGgUQADgIAAgOIAdAAIABADQACAAAFgDIAXAAIgDABQgMACgNAPQAAAMgGAJQgGAUgJAIQgKAHgCALIgFAYQgFANABAJQACAHAIAIQALAIAMAlIABACQACAGAJADIACABIAUgCQAVgDAJgGQAJgGAKgQQAIgLADgKQACgEATgKQAagNAJgGQAXgPAvgSQAGgEAIAAQAHgBgEAEIgCABIAAABQgBACABADIACACIggANQggAOACABIA1AJQgCAIgLAAIgZgDIgbgEQgIgBgOAJIgNAKIgEABIgBABIgEADIgGAHIgGAJIgBACIgBACIgDAGIAAADIgBAAIAAADIgBAAIgBAGQAAABAAAAQAAABABAAQAAABAAAAQABAAAAAAIAHAAIABAAIAEABIABAAIAEAAIABABIAaAFIABAAIAKACIACAAIABAAIABAAIAGABIACAAIAEABIADAAIADABIACAAIAEAAQALAAAUgEIAhgJQAMgDASgRIAbgZIAEgDIABgBIAEgDIAAAAIAFgCIAAgBIAFgDIAAAAIAFgDIANgEIAHAAQALACgmAUIgKAHIgBABIgHAGIgCABIgCADIgBAAIgKALQgGAGgGAEIgMAGQgFAEAJACIAXAEQAJADAPAAQAOABAFACIAJADQAAABgSABQgRACgkgCIgpgDQgHAAguAHQgIABgbgCIgrgFQgRgBgbAJQgUAHgIAEQgFAEgCAIQgCAJAHAFIAhAfIgBAAIAMALQAIAHARAFIAGACIAdAFIAlAFQAcADAMADIAHACIgJgDIANAEQAWABAxgCQAtgCAWgDQAZgEALACQAPADAQARQAXAWAjAXIAAC9QgghAAAgCg");
	this.shape.setTransform(203.75,121.7,3.1421,4.2274,0,0,0,-0.2,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0D1010").s().p("AJ2D4IgRgYQAAgPgWgQQgOgLgYgaQgWgYgHgKQgDgEgFgCIAAAAQgJgFgqgBQgfgBgSgCQgXgEgYgGQgZgGgOAAQgNAAgNAIQgMAFgTgCIgigHIg2gDQgvgEgkgHIgJgDIgDgBQgagGgSgLIgBgBIgMgIIgBgBIgFgDIgBgCIgFgEIgBgBIgSgPIgCgCIgIgGQgbgUgNgQQgKgOgEgFQgugtgMgLQgHgGgqgGIgpgGQgOAKgLAGQgGAEgDAJIgGAPQgEAFAEAPIAFAZQABAGALALQAIAHgGACQgIACgJgLIgJgMQgRgVACgJQAEgMgBgBQgCgGgPgBQgPABgUAPQgUAQgGADQgJAFgDgEQgCgDALgIIAYgTQANgKANgDIAVgEQAHgCAGgHIAMgPQAFgFABgGQAAgFgTAIQgYAMgGABIhIAMQgPADgFgDQgHgGgJgGQgKgGgJgDIgOgFIgDgCIgCAAIgCAAIgFgBIgCAAIgDAAIgDAAIgDgBIgBAAIgRgBIgrABIgOACQgfAHgegQIgagJQgKgEAFgEQAEgEAXAGIAIACIAAAAIAXAGIAGABIAOAAIAEgBQAQgBAcgEIAWgCQAFAAgHgGIgDgDIgDgDIgBgBIgGgFIgBgBIgBgBIgCgBIgBgBIgBAAIgBgBIgBgBIgDAAQgUgFgLgHQgGgDgngEIg1gGQgNgBgFgGQgGgGAIABQAHABAtADQAvADANgBIAEAAIABAAIADABIACABIAFACIAFACIAAAAIALAHIADABIAWAQIAAAAIAgAXIACABIADABQAOAGAlAFQAdADANAAIAWABQARABALgJQAKgIASgEIAggFQAPgCAAgBQAAgDgMgFQgIgDghgXQghgYgGgDIgQgCQgVAAgZAFIgEABIgCABIgCgBQgWABgcgTQgRgMgFgDQgFgCgLABQgJAAgEgBIgIgHQgEgDAHAAIAMgCQAEgBAFAAIANACQAFABAZAOQAZAOAIACQAKACAcgEQAcgEAKgFQAHgDAMAFIAXAPQAKAFAUARQAXASAMAJQASALAcAJQAZAIAZADQAPACALAFQAHAEAKAJIAFAEIAIAGQALAGAOARIAZAfQAXAZAmASQAVAJBSAaIAPADIAAgBIAAAAIAAgBIgCgDIgCgBIgDgCIgIgEQgQgJgLgQQgQgagMgLQgRgSACgJQACgJgEgEQgGgFgDgIQgDgJgGgGQgFgEgFgJQgEgKgFgDIAAgBIgHgCIhkgkQgUgFgUgJQgMgGgFgGIgHgJIgNgVIgHgDIAAAAIgUgEQgOgDgIgEQgJgDgSgFIgZgFIgDgCIAAAAIgCgBIAAAAIgBgBIAAAAIgBgBIAAgBIABAAIAAgBIAIgHIACAAIACgBQALABAmAHIATAGQAPAFAJAAQAKgBAGAHIAEAKQABADAGAFIAIAIQANAKAGgBIADgCIACgFIACgDQAEgHgEgIIgIgQQgCgHAFABIAGACIAMAMIAFAQQAEANgEAJQAAABgBABQAAABAAAAQAAABAAAAQABABAAAAIACAAIAFADQAHAEAHACQAIABALAHIAEAAIACABIABAAIADgBIAIgBQAEAAACgCIADgCQAIgFgXg4IgYgcIgHgGIARAAIAEAEIAWAHQAJADAKAZIAJAZIAJAOQAJAOADAAIACAAIABABIABAAIABAAIABAAIABABIACAAIADAAIAAAAIADABIAAAAIADABQANAEACACQAEACAEAAIACAAIACAAIABgBIABgBQAHgIANgWQASgeAGgUQADgIAAgOIAdAAIABADQACAAAFgDIAXAAIgDABQgMACgNAPQAAAMgGAJQgGAUgJAIQgKAHgCALIgFAYQgFANABAJQACAHAIAIQALAIAMAlIABACQACAGAJADIACABIAUgCQAVgDAJgGQAJgGAKgQQAIgLADgKQACgEATgKQAagNAJgGQAXgPAvgSQAGgEAIAAQAHgBgEAEIgCABIAAABQgBACABADIACACIggANQggAOACABIA1AJQgCAIgLAAIgZgDIgbgEQgIgBgOAJIgNAKIgEABIgBABIgEADIgGAHIgGAJIgBACIgBACIgDAGIAAADIgBAAIAAADIgBAAIgBAGQAAABAAAAQAAABABAAQAAABAAAAQABAAAAAAIAHAAIABAAIAEABIABAAIAEAAIABABIAaAFIABAAIAKACIACAAIABAAIABAAIAGABIACAAIAEABIADAAIADABIACAAIAEAAQALAAAUgEIAhgJQAMgDASgRIAbgZIAEgDIABgBIAEgDIAAAAIAFgCIAAgBIAFgDIAAAAIAFgDIANgEIAHAAQALACgmAUIgKAHIgBABIgHAGIgCABIgCADIgBAAIgKALQgGAGgGAEIgMAGQgFAEAJACIAXAEQAJADAPAAQAOABAFACIAJADQAAABgSABQgRACgkgCIgpgDQgHAAguAHQgIABgbgCIgrgFQgRgBgbAJQgUAHgIAEQgFAEgCAIQgCAJAHAFIAhAfIgBAAIAMALQAIAHARAFIAGACIAdAFIAlAFQAcADAMADIAHACIgJgDIANAEQAWABAxgCQAtgCAWgDQAZgEALACQAPADAQARQARAQA1AdIAAC9QgHgPgUgbg");
	this.shape_1.setTransform(200.2,119.9,3.1421,4.2274,0,0,0,-0.8,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0D1010").s().p("AJ2D4QgdgXAAgBQAAgPgWgQQgOgLgYgaQgWgYgHgKQgDgEgFgCIAAAAQgJgFgqgBQgfgBgSgCQgXgEgYgGQgZgGgOAAQgNAAgNAIQgMAFgTgCIgigHIg2gDQgvgEgkgHIgJgDIgDgBQgagGgSgLIgBgBIgMgIIgBgBIgFgDIgBgCIgFgEIgBgBIgRgPIgDgCIgIgGQgbgUgNgQQgKgOgEgFQgugtgMgLQgHgGgqgGIgpgGQgOAKgLAGQgGAEgDAJIgGAPQgEAFAEAPIAFAZQABAGALALQAIAHgGACQgIACgJgLIgJgMQgRgVACgJQAEgMgBgBQgCgGgPgBQgPABgUAPQgUAQgGADQgJAFgDgEQgCgDALgIIAYgTQANgKANgDIAVgEQAHgCAGgHIAMgPQAFgFABgGQAAgFgTAIQgYAMgGABIhIAMQgPADgFgDQgHgGgJgGQgKgGgJgDIgOgFIgDgCIgCAAIgCAAIgFgBIgCAAIgDAAIgDAAIgDgBIgBAAIgRgBIgrABIgOACQgfAHgegQIgagJQgKgEAFgEQAEgEAXAGIAIACIAAAAIAXAGIAGABIAOAAIAEgBQAQgBAcgEIAWgCQAFAAgHgGIgDgDIgDgDIgBgBIgGgFIgBgBIgBgBIgCgBIgBgBIgBAAIgBgBIgBgBIgDAAQgUgFgLgHQgGgDgngEIg1gGQgNgBgFgGQgGgGAIABQAHABAtADQAvADANgBIAEAAIABAAIADABIACABIAFACIAFACIAAAAIALAHIADABIAWAQIAAAAIAgAXIACABIADABQAOAGAlAFQAdADANAAIAWABQARABALgJQAKgIASgEIAggFQAPgCAAgBQAAgDgMgFQgIgDghgXQghgYgGgDIgQgCQgVAAgZAFIgEABIgCABIgCgBQgWABgcgTQgRgMgFgDQgFgCgLABQgJAAgEgBIgIgHQgEgDAHAAIAMgCQAEgBAFAAIANACQAFABAZAOQAZAOAIACQAKACAcgEQAcgEAKgFQAHgDAMAFIAXAPQAKAFAUARQAXASAMAJQASALAcAJQAZAIAZADQAPACALAFQAHAEAKAJIAFAEIAIAGQALAGAOARIAZAfQAYAZAlASQAVAJBSAaIAPADIAAgBIAAAAIAAgBIgCgDIgCgBIgDgCIgIgEQgQgJgLgQQgQgagMgLQgRgSACgJQACgJgEgEQgGgFgDgIQgDgJgGgGQgFgEgFgJQgEgKgFgDIAAgBIgHgCIhkgkQgUgFgUgJQgMgGgFgGIgHgJIgNgVIgHgDIAAAAIgUgEQgOgDgIgEQgJgDgSgFIgZgFIgDgCIAAAAIgCgBIAAAAIgBgBIAAAAIgBgBIAAgBIABAAIAAgBIAIgHIACAAIACgBQALABAmAHIATAGQAPAFAJAAQAKgBAGAHIAEAKQABADAGAFIAIAIQANAKAGgBIADgCIACgFIACgDQAEgHgEgIIgIgQQgCgHAFABIAGACIAMAMIAFAQQAEANgEAJQAAABgBABQAAABAAAAQAAABAAAAQABABAAAAIACAAIAFADQAHAEAHACQAIABALAHIAEAAIACABIABAAIADgBIAIgBQAEAAACgCIADgCQAJgFgYg4IgYgcIgHgGIARAAIAEAEIAWAHQAKADAJAZIAJAZIAJAOQAJAOADAAIACAAIABABIABAAIABAAIABAAIABABIACAAIADAAIAAAAIADABIAAAAIADABQANAEACACQAEACAEAAIACAAIACAAIABgBIABgBQAHgIANgWQASgeAGgUQADgIAAgOIAdAAIABADQACAAAFgDIAXAAIgDABQgMACgNAPQAAAMgGAJQgGAUgJAIQgKAHgCALIgFAYQgFANABAJQACAHAIAIQALAIAMAlIABACQACAGAJADIACABIAUgCQAVgDAJgGQAJgGAKgQQAIgLADgKQACgEATgKQAagNAJgGQAXgPAvgSQAGgEAIAAQAHgBgEAEIgCABIAAABQgBACABADIACACIggANQggAOACABIA1AJQgCAIgLAAIgZgDIgbgEQgIgBgOAJIgNAKIgEABIgBABIgEADIgGAHIgGAJIgBACIgBACIgDAGIAAADIgBAAIAAADIgBAAIgBAGQAAABAAAAQAAABABAAQAAABAAAAQABAAAAAAIAHAAIABAAIAEABIABAAIAEAAIABABIAaAFIABAAIAKACIACAAIABAAIABAAIAGABIACAAIAEABIADAAIADABIACAAIAEAAQALAAAUgEIAhgJQAMgDASgRIAbgZIAEgDIABgBIAEgDIAAAAIAFgCIAAgBIAFgDIAAAAIAFgDIANgEIAHAAQALACgmAUIgKAHIgBABIgHAGIgCABIgCADIgBAAIgKALQgGAGgGAEIgMAGQgFAEAJACIAXAEQAJADAPAAQAOABAFACIAJADQAAABgSABQgRACgkgCIgpgDQgHAAguAHQgIABgbgCIgrgFQgRgBgbAJQgUAHgIAEQgFAEgCAIQgCAJAHAFIAhAfIgBAAIAMALQAIAHARAFIAGACIAdAFIAlAFQAcADAMADIAHACIgJgDIANAEQAWABAxgCQAtgCAWgDQAZgEALACQAPADAQARQAKAJAkAPQApAQAHAFIAAC9QgHgPgggbg");
	this.shape_2.setTransform(193.55,121.7,3.1421,4.2274,0,0,0,-2,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0D1010").s().p("AJ2D4QgjgXAAgBQAAgPgWgQQgOgLgYgaQgWgYgHgKQgDgEgFgCIAAAAQgJgFgqgBQgfgBgSgCQgXgEgYgGQgZgGgOAAQgNAAgNAIQgMAFgTgCIgigHIg2gDQgvgEgkgHIgJgDIgDgBQgagGgSgLIgBgBIgMgIIgBgBIgFgDIgBgCIgFgEIgBgBIgRgPIgDgCIgIgGQgbgUgNgQQgKgOgEgFQgugtgMgLQgHgGgqgGIgpgGQgOAKgLAGQgGAEgDAJIgGAPQgEAFAEAPIAFAZQABAGALALQAIAHgGACQgIACgJgLIgJgMQgRgVACgJQAEgMgBgBQgCgGgPgBQgPABgUAPQgUAQgGADQgJAFgDgEQgCgDALgIIAYgTQANgKANgDIAVgEQAHgCAGgHIAMgPQAFgFABgGQAAgFgTAIQgYAMgGABIhIAMQgPADgFgDQgHgGgJgGQgKgGgJgDIgOgFIgDgCIgCAAIgCAAIgFgBIgCAAIgDAAIgDAAIgDgBIgBAAIgRgBIgrABIgOACQgfAHgegQIgagJQgKgEAFgEQAEgEAXAGIAIACIAAAAIAXAGIAGABIAOAAIAEgBQAQgBAcgEIAWgCQAFAAgHgGIgDgDIgDgDIgBgBIgGgFIgBgBIgBgBIgCgBIgBgBIgBAAIgBgBIgBgBIgDAAQgUgFgLgHQgGgDgngEIg1gGQgNgBgFgGQgGgGAIABQAHABAtADQAvADANgBIAEAAIABAAIADABIACABIAFACIAFACIAAAAIALAHIADABIAWAQIAAAAIAgAXIACABIADABQAOAGAlAFQAdADANAAIAWABQARABALgJQAKgIASgEIAggFQAPgCAAgBQAAgDgMgFQgIgDghgXQghgYgGgDIgQgCQgVAAgZAFIgEABIgCABIgCgBQgWABgcgTQgRgMgFgDQgFgCgLABQgJAAgEgBIgIgHQgEgDAHAAIAMgCQAEgBAFAAIANACQAFABAZAOQAZAOAIACQAKACAcgEQAcgEAKgFQAHgDAMAFIAXAPQAKAFAUARQAXASAMAJQASALAcAJQAZAIAZADQAPACALAFQAHAEAKAJIAFAEIAIAGQALAGAOARIAZAfQAYAZAlASQAVAJBSAaIAPADIAAgBIAAAAIAAgBIgCgDIgCgBIgDgCIgIgEQgQgJgLgQQgQgagMgLQgRgSACgJQACgJgEgEQgGgFgDgIQgDgJgGgGQgFgEgFgJQgEgKgFgDIAAgBIgHgCIhkgkQgUgFgUgJQgMgGgFgGIgHgJIgNgVIgHgDIAAAAIgUgEQgOgDgIgEQgJgDgSgFIgZgFIgDgCIAAAAIgCgBIAAAAIgBgBIAAAAIgBgBIAAgBIABAAIAAgBIAIgHIACAAIACgBQALABAmAHIATAGQAPAFAJAAQAKgBAGAHIAEAKQABADAGAFIAIAIQANAKAGgBIADgCIACgFIACgDQAEgHgEgIIgIgQQgCgHAFABIAGACIAMAMIAFAQQAEANgEAJQAAABgBABQAAABAAAAQAAABAAAAQABABAAAAIACAAIAFADQAHAEAHACQAIABALAHIAEAAIACABIABAAIADgBIAIgBQAEAAACgCIADgCQAJgFgYg4IgYgcIgHgGIARAAIAEAEIAWAHQAKADAKAZIAIAZIAJAOQAJAOADAAIACAAIABABIABAAIABAAIABAAIABABIACAAIADAAIAAAAIADABIAAAAIADABQANAEACACQAEACAEAAIACAAIACAAIABgBIABgBQAHgIANgWQASgeAGgUQADgIAAgOIAdAAIABADQACAAAFgDIAXAAIgDABQgMACgNAPQAAAMgGAJQgGAUgJAIQgKAHgCALIgFAYQgFANABAJQACAHAIAIQALAIAMAlIABACQACAGAJADIACABIAUgCQAVgDAJgGQAJgGAKgQQAIgLADgKQACgEATgKQAagNAJgGQAXgPAvgSQAGgEAIAAQAHgBgEAEIgCABIAAABQgBACABADIACACIggANQggAOACABIA1AJQgCAIgLAAIgZgDIgbgEQgIgBgOAJIgNAKIgEABIgBABIgEADIgGAHIgGAJIgBACIgBACIgDAGIAAADIgBAAIAAADIgBAAIgBAGQAAABAAAAQAAABABAAQAAABAAAAQABAAAAAAIAHAAIABAAIAEABIABAAIAEAAIABABIAaAFIABAAIAKACIACAAIABAAIABAAIAGABIACAAIAEABIADAAIADABIACAAIAEAAQALAAAUgEIAhgJQAMgDASgRIAbgZIAEgDIABgBIAEgDIAAAAIAFgCIAAgBIAFgDIAAAAIAFgDIANgEIAHAAQALACgmAUIgKAHIgBABIgHAGIgCABIgCADIgBAAIgKALQgGAGgGAEIgMAGQgFAEAJACIAXAEQAJADAPAAQAOABAFACIAJADQAAABgSABQgRACgkgCIgpgDQgHAAguAHQgIABgbgCIgrgFQgRgBgbAJQgUAHgIAEQgFAEgCAIQgCAJAHAFIAhAfIgBAAIAMALQAIAHARAFIAGACIAdAFIAlAFQAcADAMADIAHACIgJgDIANAEQAWABAxgCQAtgCAWgDQAZgEALACQAPADAQARQAJAJArAPQAuAQAIAFIAAC9QgIgPglgbg");
	this.shape_3.setTransform(188.2,118.1,3.1421,4.2274,0,0,0,-2.6,-0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0D1010").s().p("AJ2D4QgFgUAAgEQAAgPgWgQQgOgLgYgaQgWgYgHgKQgDgEgFgCIAAAAQgJgFgqgBQgfgBgSgCQgXgEgYgGQgZgGgOAAQgNAAgNAIQgMAFgTgCIgigHIg2gDQgvgEgkgHIgJgDIgDgBQgagGgSgLIgBgBIgMgIIgBgBIgFgDIgBgCIgFgEIgBgBIgSgPIgDgCIgIgGQgagUgNgQQgKgOgEgFQgugtgMgLQgHgGgqgGIgpgGQgOAKgLAGQgGAEgDAJIgGAPQgEAFAEAPIAFAZQABAGALALQAIAHgGACQgIACgJgLIgJgMQgRgVACgJQAEgMgBgBQgCgGgPgBQgPABgUAPQgUAQgGADQgJAFgDgEQgCgDALgIIAYgTQANgKANgDIAVgEQAHgCAGgHIAMgPQAFgFABgGQAAgFgTAIQgYAMgGABIhIAMQgPADgFgDQgHgGgJgGQgKgGgJgDIgOgFIgDgCIgCAAIgCAAIgFgBIgCAAIgDAAIgDAAIgDgBIgBAAIgRgBIgrABIgOACQgfAHgegQIgagJQgKgEAFgEQAEgEAXAGIAIACIAAAAIAXAGIAGABIAOAAIAEgBQAQgBAcgEIAWgCQAFAAgHgGIgDgDIgDgDIgBgBIgGgFIgBgBIgBgBIgCgBIgBgBIgBAAIgBgBIgBgBIgDAAQgUgFgLgHQgGgDgngEIg1gGQgNgBgFgGQgGgGAIABQAHABAtADQAvADANgBIAEAAIABAAIADABIACABIAFACIAFACIAAAAIALAHIADABIAWAQIAAAAIAgAXIACABIADABQAOAGAlAFQAdADANAAIAWABQARABALgJQAKgIASgEIAggFQAPgCAAgBQAAgDgMgFQgIgDghgXQghgYgGgDIgQgCQgVAAgZAFIgEABIgCABIgCgBQgWABgcgTQgRgMgFgDQgFgCgLABQgJAAgEgBIgIgHQgEgDAHAAIAMgCQAEgBAFAAIANACQAFABAZAOQAZAOAIACQAKACAcgEQAcgEAKgFQAHgDAMAFIAXAPQAKAFAUARQAXASAMAJQASALAcAJQAZAIAZADQAPACALAFQAHAEAKAJIAFAEIAIAGQALAGAOARIAZAfQAXAZAmASQAVAJBSAaIAPADIAAgBIAAAAIAAgBIgCgDIgCgBIgDgCIgIgEQgQgJgLgQQgQgagMgLQgRgSACgJQACgJgEgEQgGgFgDgIQgDgJgGgGQgFgEgFgJQgEgKgFgDIAAgBIgHgCIhkgkQgUgFgUgJQgMgGgFgGIgHgJIgNgVIgHgDIAAAAIgUgEQgOgDgIgEQgJgDgSgFIgZgFIgDgCIAAAAIgCgBIAAAAIgBgBIAAAAIgBgBIAAgBIABAAIAAgBIAIgHIACAAIACgBQALABAmAHIATAGQAPAFAJAAQAKgBAGAHIAEAKQABADAGAFIAIAIQANAKAGgBIADgCIACgFIACgDQAEgHgEgIIgIgQQgCgHAFABIAGACIAMAMIAFAQQAEANgEAJQAAABgBABQAAABAAAAQAAABAAAAQABABAAAAIACAAIAFADQAHAEAHACQAIABALAHIAEAAIACABIABAAIADgBIAHgBQAEAAACgCIADgCQAJgFgXg4IgYgcIgHgGIARAAIAEAEIAVAHQAKADAKAZIAJAZIAJAOQAJAOADAAIACAAIABABIABAAIABAAIABAAIABABIACAAIADAAIAAAAIADABIAAAAIADABQANAEACACQAEACAEAAIACAAIACAAIABgBIABgBQAHgIANgWQASgeAGgUQADgIAAgOIAdAAIABADQACAAAFgDIAXAAIgDABQgMACgNAPQAAAMgGAJQgGAUgJAIQgKAHgCALIgFAYQgFANABAJQACAHAIAIQALAIAMAlIABACQACAGAJADIACABIAUgCQAVgDAJgGQAJgGAKgQQAIgLADgKQACgEATgKQAagNAJgGQAXgPAvgSQAGgEAIAAQAHgBgEAEIgCABIAAABQgBACABADIACACIggANQggAOACABIA1AJQgCAIgLAAIgZgDIgbgEQgIgBgOAJIgNAKIgEABIgBABIgEADIgGAHIgGAJIgBACIgBACIgDAGIAAADIgBAAIAAADIgBAAIgBAGQAAABAAAAQAAABABAAQAAABAAAAQABAAAAAAIAHAAIABAAIAEABIABAAIAEAAIABABIAaAFIABAAIAKACIACAAIABAAIABAAIAGABIACAAIAEABIADAAIADABIACAAIAEAAQALAAAUgEIAhgJQAMgDASgRIAbgZIAEgDIABgBIAEgDIAAAAIAFgCIAAgBIAFgDIAAAAIAFgDIANgEIAHAAQALACgmAUIgKAHIgBABIgHAGIgCABIgCADIgBAAIgKALQgGAGgGAEIgMAGQgFAEAJACIAXAEQAJADAPAAQAOABAFACIAJADQAAABgSABQgRACgkgCIgpgDQgHAAguAHQgIABgbgCIgrgFQgRgBgbAJQgUAHgIAEQgFAEgCAIQgCAJAHAFIAhAfIgBAAIAMALQAIAHARAFIAGACIAdAFIAlAFQAcADAMADIAHACIgJgDIANAEQAWABAxgCQAtgCAWgDQAZgEALACQAPADAQARIAWAYQAMAOAMAHIAAC9QgIgQgHgag");
	this.shape_4.setTransform(206.8,121.7,3.1421,4.2274,0,0,0,0.4,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{x:203.75}}]}).to({state:[{t:this.shape_1,p:{y:119.9}}]},2).to({state:[{t:this.shape_2,p:{x:193.55,y:121.7}}]},2).to({state:[{t:this.shape_3,p:{y:118.1}}]},2).to({state:[{t:this.shape_3,p:{y:121.7}}]},2).to({state:[{t:this.shape_2,p:{x:192.95,y:118.1}}]},2).to({state:[{t:this.shape_1,p:{y:121.7}}]},2).to({state:[{t:this.shape_4}]},2).to({state:[{t:this.shape,p:{x:204.35}}]},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.6,-3.6,425.6,248.79999999999998);


(lib.Symbol6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AHVUGQgQgDgTgYQgyg/gkgzQgHgKADgGIACgCIiyjhQg/AKgxAAQiUgBh5gbIjADzIACACQADAGgIAKQgpA6gsA4QgTAYgQADQgMABgTgHQg1gXgrgnQgoglgFgkQgDgXAMgUQAMgVAVgEQAcgFAlAfQAGgKAUgYIATgXIACACIAQgZQBBhnBPhgQhdgshJhEQBvhFBPhqIgDgBQBFiEA2iGQhkgBhlgEIgBgYQhygWiNhJQhQgphEguQgZgRgGgDQgfgOgxAAQgSAAgcADIguAGIgWACQgNgBgJgEQgKgFgFgLQgFgMAFgIQAHgLAZgDIB6gQIhrgVQgWgFgNgKQgSgNAFgQQAKgTBDAAQA+AAAuAPQg7gVgdgQQg0gdALgZQAHgRBMATQBMASAsAdIAJglQAEgQALgUQAJgTAMgIQAIgFAJABQAJAAAGAGQAGAHABAQQAAAVgGAVQgHAagCARQgFAnAKAjQAEAOALAUQAfA0A3AjQApAZBLAaQAvAQA0AJIAQADIABgWIABACICqAFQB4AIBMAZIAfAKIADggQh1gIhlgwQiNhBhOhMQhXhXgriGIgLgaQgOAHgPACQghAFgVgMQgVgLgSghQgPgbAIgeQAIgdAXgOQANgIATABQATAAAXAJQgGhNAShTQAShSAmhBQgOgQgGgKQgLgVAEgSQg4gBgogOQgogOgbgfQgdghAAgnQhIAPgsgVQgcgOgPgaQgQgdAHgbQhaAchNA6QAGhXAthNQAuhOBJgwIAlCdQAggKAgADQAiACAbARQAcARAPAdQARAegDAgQAmgKAoAJQAoAJAeAZQAcAXARAiQADgCAFgBQANgEASAJQAQAHAMAPQAvgsAxgdQBshCBmgPQBbgOBuAZQBGgPBPAGQBQAGA+AbQBaAnBDA6QAOgXAXgKQASgJANAFIAIADQARgiAcgWQAfgZAogIQAogIAnAKQgDggARgeQAQgdAcgQQAcgQAigCQAggDAfALIAoicQBIAwAtBPQAsBPAEBXQhJg6hdggQAIAcgRAcQgQAbgcAMQgsAVhIgQQgBAngdAhQgcAegoAOQgoAOg4gBQADATgLATQgHAOgSAQIAlAzQAWAgAZBBQAbBGAEAsQAVgGAXAIQAXAJALATQANAYgGAdQgGAdgWARQgVASgdACQgcADgagMQh+E9jSB7QhVAyhrATIABArIAdgMQA5gZBvgEIBrgEQA+gCAuACIADAMIAvgMQBLgXArgYQA4ggAhgzQAegsgFg/QgBgRgGgaQgFgVABgVQABgQAGgHQAGgGAKAAQAJAAAHAFQALAHAKAVQAJAUAEARIAHAlQAugbBMgPQBNgQAGARQAKAag1AbQgeAOg7ATQAugNA+ADQBDADAKATQADARgRALQgPAKgWADIhrASIB4ATQAaAEAGAMQAFAJgFALQgGALgLAFQgNAGgfgEIgtgIQgcgFgSgBQgwgCggANQgGACgbARQgwAehAAgQhrA1hfAcIAFAaQjDAmhiAHQA8CSANBsIgBABQAWAlATAbIAsA+QAeApBDBFQg+AmhhAeQA8BNA4BYIABAAIAPAZIADgCIATAXQAUAYAGAKQAlgfAcAFQAVAEAMAVQALAUgDAXQgFAkgoAlQgqAng1AXQgQAGgLAAIgEAAg");
	this.shape.setTransform(113.2292,128.6125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,226.5,257.3), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3C393E").s().p("AgPAmIgBAAQgSgHgMgNQgYgXAKgiIAPAPQATAQAXAHQAWAGAYgDQANgCAIgCQgKAhgiAHQgJACgJAAQgIAAgJgCg");
	this.shape.setTransform(85.8567,84.7715,0.8444,0.862);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3C393E").s().p("AgJAjQgQgEgHgNQgHgOAFgOQAEgOAOgIQANgHAOAEQAOAFAHANQAIAOgEAOQgFAOgNAIQgJAEgIAAQgFAAgFgCg");
	this.shape_1.setTransform(86.973,78.8156,0.8444,0.862);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3C393E").s().p("AgIAfQgNgEgGgMQgGgLADgMQAEgNAMgGQAMgHALAEQANAEAGAMQAHALgEAMQgEANgMAGQgHAEgIAAIgIgBg");
	this.shape_2.setTransform(96.5032,75.8415,0.8444,0.862);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3C393E").s().p("AgIAfQgNgEgGgMQgGgLADgMQAEgNAMgGQALgGAMADQANAEAGAMQAHALgEAMQgEANgMAGQgHAEgIAAIgIgBg");
	this.shape_3.setTransform(80.6289,70.9901,0.8444,0.862);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgGAYQgZgIAIgXQAHgYAXAIQAZAHgHAXQgGATgQAAIgJgCgAgIgEIgBAEQgDAKAJADQAJADADgLIABgEQAEgKgKgDIgEgBQgFAAgDAJg");
	this.shape_4.setTransform(87.3765,106.6303,0.8442,0.8618);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUASIAOguIAOAEIgKAiIAXAHIgEAMg");
	this.shape_5.setTransform(82.9878,105.419,0.8442,0.8618);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgUASIAOguIAOAEIgJAiIAWAHIgEAMg");
	this.shape_6.setTransform(79.2522,104.2771,0.8442,0.8618);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgZASIANguIAnALIgEAMIgYgIIgCAHIAVAGIgEAKIgUgGIgBAHIAYAHIgEALg");
	this.shape_7.setTransform(75.7277,103.0706,0.8442,0.8618);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AABAaIAGgSIgQgFIgFASIgPgEIAPguIAOAEIgFARIAPAFIAFgRIAPAEIgOAug");
	this.shape_8.setTransform(71.3168,101.7349,0.8442,0.8618);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2FCAFE").s().p("AiYAEIAbhbIEWBUIgbBbg");
	this.shape_9.setTransform(79.5003,104.2305,0.8444,0.862);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00C077").s().p("AjqBWIBXkeIF9BzIhVEeg");
	this.shape_10.setTransform(78.3603,108.1524,0.8444,0.862);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00C077").s().p("AjpBWIBVkdIF/ByIhXEdg");
	this.shape_11.setTransform(86.973,78.8239,0.8444,0.862);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F13536").s().p("AgKAkQgPgEgHgOQgIgOAFgOQAEgPAOgHQAOgIAOAFQAPAEAHAOQAHAOgEAOQgFAPgNAHQgJAFgJAAQgEAAgGgCg");
	this.shape_12.setTransform(85.8362,53.2234,0.8444,0.862);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2FCAFE").s().p("AghA9IAmiCIAdAJIgmCCg");
	this.shape_13.setTransform(83.6166,60.7657,0.8444,0.862);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F13536").s().p("AgKAkQgPgEgHgOQgIgOAFgOQAEgPAOgHQAOgIAOAFQAPAEAHAOQAHAOgEAOQgFAPgNAHQgJAFgJAAQgEAAgGgCg");
	this.shape_14.setTransform(101.7104,58.0936,0.8444,0.862);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2FCAFE").s().p("AghA9IAmiCIAdAJIgmCCg");
	this.shape_15.setTransform(99.4908,65.6358,0.8444,0.862);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F7C42B").s().p("AgXBBQgPgFgHgNQgIgOAFgPIAThBQAFgPANgHQANgIAPAFIAiAKIgpCJg");
	this.shape_16.setTransform(70.0353,73.1053,0.8444,0.862);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F7C42B").s().p("AgQBJIgigKIApiJIAhAKQAPAEAIAOQAHAOgFAOIgTBCQgFAPgNAHQgJAFgIAAQgFAAgGgCg");
	this.shape_17.setTransform(104.2515,83.0341,0.8444,0.862);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2FCAFE").s().p("AhCAIIAMggQAVgeAyAPQAxAOABAkQAAATgKAPg");
	this.shape_18.setTransform(75.4473,143.9026,0.8444,0.862);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2FCAFE").s().p("AhCAIIALggQAVgeAxAOQAyAPACAlQAAASgJAQg");
	this.shape_19.setTransform(61.0307,139.4322,0.8444,0.862);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F7C42B").s().p("AhSBxIBLj8IBaAbIhLD8g");
	this.shape_20.setTransform(79.2469,131.8997,0.8444,0.862);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F7C42B").s().p("AhSBxIBLj8IBaAbIhLD8g");
	this.shape_21.setTransform(64.8292,127.4821,0.8444,0.862);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#4A4A4A").s().p("AguA2IAlh8IA4ARIglB8g");
	this.shape_22.setTransform(62.8238,97.5287,0.8444,0.862);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#4A4A4A").s().p("AguA2IAlh8IA4ARIglB8g");
	this.shape_23.setTransform(97.0633,108.0231,0.8444,0.862);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#4A4A4A").s().p("Ag1AkIAchfIBPAYIgcBeg");
	this.shape_24.setTransform(82.73,93.2835,0.8444,0.862);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2FCAFE").s().p("AAUA2QAHgLACgNQAEgZgZgGQgXgIgMAWIgHAYIgngMQgGgTAGgSQAJgdAbgNQAcgOAeAJQAeAJAQAbQAPAagIAcQgFATgQANg");
	this.shape_25.setTransform(47.3456,116.7359,0.8444,0.862);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F7C42B").s().p("Ag2CKQgmgCgcgfQAFgyASg2QAlhsA8gXQAagKAfAEQAVACAsAOIgvBmQgKgIgSAPQgiAdghB0QgMAEgPAAIgHAAg");
	this.shape_26.setTransform(54.7178,103.1411,0.8444,0.862);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#2FCAFE").s().p("AANA0QAHgLABgNQADgagYgGQgYgHgLAWIgGAYIgggKQgGgUAGgRQAIgdAcgNQAcgOAdAJQAfAJAQAbQAPAagIAcQgGAUgPAMg");
	this.shape_27.setTransform(99.2169,132.5961,0.8444,0.862);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F7C42B").s().p("AgwCWIgagVQAjh0gMgrQgDgOgIgFIgIgCIARhvQArAMAUAKQAbAOAQAXQAnA0geBuQgOA3gXAtQgOAEgNAAQgZAAgVgNg");
	this.shape_28.setTransform(102.4165,116.8012,0.8444,0.862);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#FEFFFB","#F9F9F6","#EAE8E7","#E0DCDD"],[0,0.329,0.773,1],13.5,-44.8,-51.5,172.2).s().p("AprIBIGA0CINXEBImAUBg");
	this.shape_29.setTransform(81.827,95.5516,0.8442,0.8618);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#59544F").s().p("AqBITIGO0vIN1EKImNUug");
	this.shape_30.setTransform(81.8059,95.5516,0.8442,0.8618);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#D8D8D8").s().p("AqBITIGO0vIN1EKImNUug");
	this.shape_31.setTransform(81.8059,95.5516,0.8442,0.8618);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#2FCAFE").s().p("AtOJuIHi5GIS7FrIniZGg");
	this.shape_32.setTransform(81.8059,95.5731,0.8442,0.8618);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#B5B5B5").s().p("AtcJ4IHp5hITQFxInqZig");
	this.shape_33.setTransform(81.8059,95.5731,0.8442,0.8618);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#FEFFFB","#FCFDF9","#F5F5F2","#EAE7E7","#E0DCDD"],[0,0.459,0.702,0.894,1],53.9,59.9,-116.1,-129.1).s().p("AtcJ4IHp5hITQFxInqZig");
	this.shape_34.setTransform(81.8059,95.5731,0.8442,0.8618);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFE228").s().p("AvLKwIIa8FIV+GmIobcFg");
	this.shape_35.setTransform(81.8059,95.5731,0.8442,0.8618);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#DBCFB8").s().p("AvLKwIIa8FIV+GmIobcFg");
	this.shape_36.setTransform(81.8059,95.5731,0.8442,0.8618);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-0.3,0,164.20000000000002,191.2), null);


(lib.star = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF99").s().p("Ag6BXIi0AjIB2iMIhYihICqBGIB9iGIgOC4ICmBNIiyArIgYC3g");
	this.shape.setTransform(-39.125,42.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF99").s().p("Ag4BUIisAhIBxiGIhUiaICiBDIB4iBIgNCwICfBLIirApIgWCvg");
	this.shape_1.setTransform(-39.125,42.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF99").s().p("Ag1BQIimAgIBtiAIhRiUICcBAIByh7IgMCpICZBHIikAnIgWCog");
	this.shape_2.setTransform(-39.15,42.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF99").s().p("AgzBNIieAeIBoh6IhNiNICVA9IBth2IgMChICSBEIidAmIgUCgg");
	this.shape_3.setTransform(-39.125,42.925);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF99").s().p("AgxBJIiWAdIBjh1IhJiGICNA6IBohwIgLCaICLBAIiVAkIgUCZg");
	this.shape_4.setTransform(-39.125,42.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF99").s().p("AguBFIiPAcIBfhvIhHiAICHA4IBjhrIgLCSICEA9IiNAjIgTCRg");
	this.shape_5.setTransform(-39.15,42.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFF99").s().p("AgrBBIiIAbIBZhpIhCh5IB/A1IBfhmIgKCLIB8A5IiGAhIgSCJg");
	this.shape_6.setTransform(-39.15,42.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFF99").s().p("AgpA+IiAAZIBUhjIg/hzIB5AyIBYhfIgJCCIB2A3Ih/AfIgRCBg");
	this.shape_7.setTransform(-39.15,42.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFF99").s().p("AgmA7Ih5AXIBPhdIg7hsIByAvIBThaIgJB7IBvAzIh3AdIgQB6g");
	this.shape_8.setTransform(-39.175,42.925);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFF99").s().p("AgkA3IhxAWIBKhYIg3hlIBrAsIBOhUIgJBzIBoAxIhwAbIgPByg");
	this.shape_9.setTransform(-39.15,42.925);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFF99").s().p("AgiAzIhpAVIBFhSIgzhfIBjAqIBJhPIgIBsIBhAtIhpAZIgNBrg");
	this.shape_10.setTransform(-39.15,42.925);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFF99").s().p("AgfAwIhjATIBBhMIgwhYIBdAmIBDhJIgHBkIBbAqIhiAYIgNBjg");
	this.shape_11.setTransform(-39.175,42.925);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFF99").s().p("AgdAsIhbASIA8hGIgshSIBVAkIA/hEIgHBdIBUAmIhaAWIgMBcg");
	this.shape_12.setTransform(-39.175,42.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63,18.6,47.8,48.699999999999996);


(lib.Scene_1_dark = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// dark
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.847)").s().p("Eia4A9JMAAAh6RME1xAAAMAAAB6Rg");
	this.shape.setTransform(288.625,391.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(694));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.replay = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000033").s().p("AABBkQgvhggWghIgCAbQgHBSgIAfQgNAzgdABQg8AKAXirQAJg7APg6QAOg2AGAAQA6AGAbAmQATAbA7BvIAVh+QAIgdARgJQAKgFAZgBIAHgBQAlAAACAVIABAJQABAygaBxQgdCAgdAGIgIABQgmAAgphGg");
	this.shape.setTransform(229.9999,221.7981);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000033").s().p("Ag+CzQgGgGgHgRIgCgCIAAgiQAAgsANhdQAMhXAKgqQAEgWACgEQAHgPAPgBQAfAAAaAOQAcAPAHAZIAAAgQAACJgsBrQgGATgUAOQgTAOgZgBQgRABgJgKg");
	this.shape_1.setTransform(200.6158,220.0899);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000033").s().p("ABvDLQgPgEgVhCQgSg6gCgcQgBgDgEAAIgqACQgeACgJADQgKAFgeBEQgaA8gcgGQgMgCgJgLQgHgKAAgMQgLglA9h7QA2hwAeggQASgXAEgFQAPgOAVAAQAhAAAMAGQArAXASCVQALBYAABgQAAAPgKAOQgLAQgQAAIgIgBgAAFhOQgTAwAAAPIBBACIgBhDQgCgrgLgIQgLADgVAyg");
	this.shape_2.setTransform(172.7395,221.2321);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000033").s().p("AiCDGQg6gkAAhcQAAgrAZg4QAag6AogvQBjhzBmAtQAJAEALALQALANAAAIQAAAHgEAIQgFAJgGgCQgsgJgzAkQguAigjA4QgiA4gCAuQgCA0AqAPQAxAPAsgwQAlgoAGgpIg0gIQgigGgLgKQgFgEAGgQQAHgSASgBQAygDA2AIQBIALgBAbQgCBGg8A7Qg3A3hJAUQgdAIgaAAQgpAAgggUg");
	this.shape_3.setTransform(137.8444,220.2437);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000033").s().p("ABvDLQgPgEgVhCQgSg6gDgcQAAgDgEAAIgqACQgeACgJADQgKAFgeBEQgaA8gcgGQgMgCgJgLQgHgKAAgMQgLglA9h7QA2hwAeggQASgXAEgFQAPgOAVAAQAhAAAMAGQArAXASCVQALBYAABgQAAAPgKAOQgLAQgQAAIgIgBgAAFhOQgTAwAAAPIBBACIgBhDQgCgrgLgIQgLADgVAyg");
	this.shape_4.setTransform(98.8928,221.2321);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000033").s().p("Ag4DWQgSgMgHgOQgGgMAAgVQAAgSAHgkQAHgjAAgSIgBgEQgXgZgmhRQgjhJgFgXIAAgGQAAgOAHgIQAHgKAOAAQAwAAApAsQAhAjANAqIADACQA0hEBLhAQAZgNATABQALgBACAJIAAARQAAAXg8BYQhBBbgHAuQgCAGAAAhQgQB7g8AAIgVgEg");
	this.shape_5.setTransform(214.9402,139.9936);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000033").s().p("ABuDLQgOgEgVhCQgSg6gDgdQAAgCgEAAIgqACQgeACgJACQgKAFgeBFQgaA8gcgGQgNgDgIgKQgHgKAAgMQgLglA9h8QA2hvAeghQASgXAEgEQAPgOAVAAQAhAAAMAGQArAXASCVQALBYAABgQAAAPgKAOQgLAQgRAAIgIgBgAAFhOQgTAwAAAOIBBADIgBhDQgDgsgLgHQgKADgVAyg");
	this.shape_6.setTransform(180.8391,141.6357);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000033").s().p("AiJC7QgBgGAAgiQAAhXAQhqQAZigAtAAQAXAAAVASQAUASAAAUIAAACQAEAXgSBrQgUBxAAARQAAAEABABQAAABAAAAQABAAAAAAQABABAAAAQABAAABAAIAEAAIAPgEIASgEIAkgGQAggFASABQA7AEguBDQgZAWhoAKQgfADgXAAQg9AAgMgUg");
	this.shape_7.setTransform(147.5386,139.1218);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000033").s().p("AiZDTQgJgEgFgaIABgtQAChAAKheQAMhqAEg0QAEgQAXAAIACAAIARADIAIgDQAhgKAwgEQA9gEA1AbQA5AdgBAtQgCBWhKA3Qg1Aog4AIIgCAOQgLA3gNAXQgVAkgsAGQgFACgJAAIgegBgAgPiTIgHCJIACAAQAUABAqgbQA2gjADgsQABgWgrgIQgWgEgWAAIgcACg");
	this.shape_8.setTransform(114.6456,140.1428);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F4F08C").s().p("AgcQRIwZIOIDdyAIs3tDISMiRIIbwTIHyQnISGDAItYMhICvSIg");
	this.shape_9.setTransform(168.0173,160.8426);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFCCFF").s().p("AgcQRIwZIOIDdyAIs3tDISMiRIIbwTIHyQnISGDAItYMhICvSIg");
	this.shape_10.setTransform(168.025,160.85);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF66FF").s().p("AgcQRIwZIOIDdyAIs3tDISMiRIIbwTIHyQnISGDAItYMhICvSIg");
	this.shape_11.setTransform(168.025,160.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_10},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_11},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,336.1,321.7);


(lib.playbutton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#11003F").s().p("Ag8E+IgOgDQgXgSgJgUQgIgTAAgeQAAgaAJg1QAJg0AAgZIgBgIQgfglgxh3QguhsgFghIAAgIQAAgVAIgMQAKgPASABQA9gBA3BBQArA0ASA8IADAEQBFhnBhhaQAggUAYAAQAPAAADANIABAZQAAAihQCCQhUCFgKBFQgCALAAAtQgUC3hPAAIgOgEg");
	this.shape.setTransform(207.3554,181.081,0.7147,0.7147);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#11003F").s().p("ACQEqQgUgFgbhiQgYhVgDgqQAAgEgFAAQgTAAgkADQgoADgMAEQgMAHgOAiQgIAUgRAvQgiBYglgJQgQgDgLgQQgKgOAAgRQgNg4BOi2QBHikAngvQAXgiAGgGQAUgVAbAAQAsAAAQAJQA3AhAYDcQAOCCAACNQAAAWgNAVQgNAXgWAAIgLgCgAAGhzQgZBGAAAVIBVAEQAAhTgBgQQgDg/gPgLQgNAEgcBKg");
	this.shape_1.setTransform(175.5337,182.8099,0.7147,0.7147);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#11003F").s().p("AizETQgBgJAAgyQAAiBAVibQAfjsA8AAQAdAAAcAbQAbAbAAAdIAAADQAFAjgYCcQgbCnAAAZQAAAGABABQABACAFAAIAGAAIArgKIAvgJQApgIAYACQBMAFg7BjQghAgiIAPQgoAFgeAAQhPAAgQgeg");
	this.shape_2.setTransform(144.4893,180.168,0.7147,0.7147);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#11003F").s().p("AjHE2QgMgFgHgnIABhCQADhfANiKQAPicAHhNQACgMALgGQAKgGAMAAIACABIALADIALABIALgEQApgPBAgFQBRgGBFAoQBKAqgBBCQgEB/hgBRQhFA7hJAMIgDAUQgPBSgQAhQgcA1g5AJQgHACgMAAIgmgBgAgTjZIgJDKIACAAQAaABA3goQBGgzAEhCQACgfg5gMQgcgGgdAAQgRAAgTADg");
	this.shape_3.setTransform(113.8014,181.2496,0.7147,0.7147);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF99").s().p("AAANCIvVKjIFUx2IuxrUISmgeIGNxiIGMRiISmAgIuxLTIFSR2g");
	this.shape_4.setTransform(158.725,151);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCCFF").s().p("AAANCIvVKjIFUx2IuxrUISmgeIGNxiIGMRiISmAgIuxLTIFSR2g");
	this.shape_5.setTransform(158.725,151);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF33FF").s().p("AAANCIvVKjIFUx2IuxrUISmgeIGNxiIGMRiISmAgIuxLTIFSR2g");
	this.shape_6.setTransform(158.725,151);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_6},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,317.5,302);


(lib.kidsshadow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ADlSbIADgPIAAgMIgRjDIgFgpIgqAAIgEgTIANgGQgKhkgXg4QgSA5AABZIARAKIgEALIgpADIAAA/QABBXAFBkIABADIABAAIAWATIhFACIAXgXIgEguIABAAIgTiNIAAAAIgJg8IhbAGIgEgSIAKgFQAGh4ALhrQgDgCgCgDQgEgJAIg8IACgJIAAgBIAAgCIgEgDQgEgEAAgCIgXgKIAQguQhRiNAFiFIAAgSIAGgsIAAgBQghgPgVgOQgVgPACgHIABgBIAAAAIAIgYIARACQBAhaAugtIABgBQATgTAPgKIAHgFIAHgDIAEgCIABAAIACgCIABAAIADgBIACgBIABAAIAFgBIACAAIACgBIANAAIAEAAIAEAAIgDh3QgkgTgcgVQgvgLgpgXQhkg2hChsQg/hJgnhRQgmhQAFgrQADgaA8ARQgchAgHguQgHgwAOgkQAIgWAuAYQABhJAOgvQAOgwAcgcQAUgTAoA+QBehNCfgfQBkgTA5AqQBMA3g/COIAegOQAhgMATASQAuAqgTCWIgDAUIgBACIgDASIAAAEIgIApIgKApIAAABQAEB+ASA6IAEAGQALAXAVAMQAZAOAGAJQAEAGgJAMQgJAOgNACIgFABQgQBUgrA+QguBEg0AAQgbAAg5gUIAPBoIAZAJIgBABQATAHAJAHIADACIAEAEIACACIAKARIAHAQQAKAbAHArIAAAAIAFAzIAEBOIABACIAFBwIACAcQAHBoAQBXIgQAEIAFAUIgBAAQAMAsAKAzIAWACIAFAPQAFAPgDAGQAAACgJABQAKBAgEALIgEAFIATBzIATAFIgCALIABABIABAJIhfgBIgEDEIACABIABAnIACAFIAEAAIA7AVgAg/DlIgDAZQgFA4AMA7QAKA0AbA/IANg9IADgaIADgaIgBhyIAAgCIgDgpIgBgBIgBgKQgPAAgfgJg");
	this.shape.setTransform(0.022,0.0291);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ACHRPIAHgOIACgBIADgzIAAAAIgFikIgBg4IgrAFIgFgOIAJgDQgLhPgagyQgVAygIBQIASANIgCAEIAAABIgBAHIhTgUIgnA9IgBgBIhJByIACAAIgVAkIgCAWIgBAAIAOA8Ig3hRIATgDIAVgpIABABQAuhZAqhbIgjgIIAAgOIAIAAIAQhcQgFgFAAgVQAAgTAEgVIgJgCQgHgDAFgPIAHgOIASACIAAgFIABgEQgGgBgBgBQgGgFAHgvIgFgZIglgRIAdgvIABgDQgEhPAThIIAbhJIgCgBIgJAKIACAEIgQASIAAAAQgKAIgsgkIgIALIgYApQgbA0gLBAQgJA3ACBKQAJARAFARQAEAFADANQADAMgDABIgFADIgBACQgBAGgEAEQgIAIgFgGIAAAAQgHAHgFgGQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAQgFABgGgLQgFgKAGgCQAEgBAEAHQgGgLAFgOQADgJADgOQgYicAwh5IAAAAIAFgNIAeg4IAAgBQgagZgOgVQgOgWAFgFIABgBIAAAAIARgTIAPAIQB6hPA9gSQAQgWAMgCIAFgDIAIgBIAYgBIADAAIALhJQg9gdgugmQgugNgogZQhgg6g9hwQg7hLgjhVQghhRAGgrQAFgZA6ATQgYhBgFgvQgEgwAPgjQAKgWAsAbQAFhJAQguQARgvAegbQAUgRAlA/QBjhICggWQBkgOA3AtQBJA6hGCLIAegNQAigKASATQAsAtgbCUIgEAVIAAABIgJAmIgBADIgFASIAAADIgMApIAAABQgDB/APA6IAEAGQAJAXAVAOQAYAOAGAKQADAGgJAMQgKAOgOABIgEAAQgVBTguA8QgxBCg0gDQgNgBgXgGIAAA7IAZAIIgBAAQAYAIAIAIIADACIAHAOQARAmgGBRQgEAwgOB4IgBAEQgJBfAFBNIgdAEIABAEQAjBXAxDNIAUgCIgDAIIAAAAIAAAHIhQAKQgQBjgOB8IABAAIgDApIAFAKIAFgBIAxAXg");
	this.shape_1.setTransform(24.8193,0.0179);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhlRxIALgRIADgBIASg6IABAAIAoisIAAAAIAJgnIhbALIAAgQIAKgEQAIg7gGgvQgEgggSg3QgEgBgEgDQgGgGgTglIgRgjIATgMIgGgRIgHgCQAEAMgCABIgFADIgBACQAAAFgEAGQgHAIgGgFIAAAAQgHAHgFgFQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAIgFACQgCABgEgDQgDgCgDgFQgGgJAGgDQAEgCAFAJIAAABIABAAQgJgMAFgQIACgJIgCgBIADgGIAAgHQglihAtiDIARgqIABgDIAEgIIgIAHQgMAGglgqIgpAvQgiAvgUA9QgSA1gJBKQAFAQADATQADAHABAMQABAMgDABIgFACIgCACQgBAFgFAEQgJAHgEgGIAAgBQgIAFgEgFQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIgEABIgBAAQgCABgDgEQgDgDgBgFQgDgKAFgCQAFgBADAKIAAABIAAAAQgGgPAJgNQAEgGAFgQQAAicBDhxIgBAAIAtg/IABgBQgWgdgKgXQgLgXAGgFIABAAIAAgBIATgPIAOAJQB3gzA/gNQAKgNAIgCIAFgDIAGgBIABAAIAIgBIAKAAIACgBIAEAAIAEAAIAKheQgqgXgigcQgvgOgkgYQhdg5g3htQg2hKgfhSQgdhQAKgqQAFgZA6ATQgVg/gCgvQgCgvASgjQALgUArAaQAJhIASgtQATgvAggZQAWgSAhA+QBphHCegVQBmgNA0ArQBGA6hOCIIAfgNQAigJARASQAnApgdCDIgqCNQgJB9ALA4IADAGQAIAXAVANQAWAOAGAKQADAGgKALQgLANgNACIgFABQgZBRgxA7Qg2BAgzgDQgZgBgogQIACBNIACAAIAWAIIgBAAQAUAIAJAIIAAAAIAFAFIAHAQQAOAgAAA7QAAAmgIBXIAAAEIAAAAIgCAbIgBADIgEA3IAAADIgCAZQgGBmAFBNIgfAIICkD+IAWgDIACAFIAFAGIgwAZIBiCyIABgCIAWAkIASAOIAAAAIA8AUIhkACIAHgRIgagmIABAAQgrhAgzhGIgYgiIgEgEIhOApIgLgKIADgEIgJgGIgCAFIguAGIgUAvIgBAAQgmBcgcBMIgRAvIADAKIAGgBIAuAcgAijDuQgWA0gGA+QgFA2AHBHIAHgPIAJgXIABgCIARgxQAEgLACgLIABgCIAShsIADhEIgHgFg");
	this.shape_2.setTransform(42.4078,0.0151);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AnAPxIAQgDIABABIChhuIghghIAIgOIAGADQApg4ASgxQAOgkAEgrIgKg/IgBgLIgBgCIgHgDIgigOIAlhPIARgyQAEgKACgLIABgDIAShvIAEirIAFg6IACgIQgDgXALgFIAKgYQAUgjAOgDIAAAAIAEgDIABAAQADgBADAAIABgBIAIgBIAMAAIAEAAIAEAAIAKheQgrgYghgbQgrgMgpgaQhbg4g4huQg2hKgfhTQgdhPAKgrQAFgYA6ATQgVhAgCguQgCgvASgjQAKgUAsAZQAIhHATgtQATguAggaQAVgSAiA+QBmhGChgWQBlgOA1AsQBGA6hOCIIAfgNQAigKARASQAnApgdCEIgqCMQgJB+ALA4IADAGQAIAXAVANQAWAOAGAKQADAFgKAMQgLANgNABIgFABQgZBRgxA7Qg2BAgzgCQgXgCgqgPIABAxQA4gTA9gIIABgFIAYgDIAAAAQAMABALA3IA7gTQA2gXAxgpQAqglAug6QAFgTAGgPQABgHAFgLQAGgLADAAIAGABIACgBQAEgDAGgBQALgBAAAHIAAABQAKAAAAAGQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAIAFACIAAAAQAGACgEANQgCALgGgCQgEgCACgKIABgBIgBAAQgBAPgPAIQgHADgMAKQhWCOh8A9IgDABIgKAFIgDABIgqAQQADAlgDAZQgDAZgHABIgBAAIgZAEIgHgQIgzgHIABAQIgBAwIgEA2IAAACIgCASIAAABIAAAHIASALQA0AcA/AMQA3ALBKAAQAQgIASgFQAGgEAMgCQAMgDACADIACAFIACABQAGABAEAEQAEAEAAAEQABADgDACIAAAAQAGAIgFAEQgBAAAAABQgBAAgBAAQAAAAgBAAQAAAAgBAAIACAFIAAAAQACAFgMAGQgKAEgCgFQgCgEAIgEQgNAGgMgGIgXgGQibATh5gzIgGgDIgEAwIAAAEIgCAYQgGBlAFBPIgiAJQANAFACACQBgArA+AzQALAJAPATQAPAVAJATIAMgBIACAFIAFAHIg5AkIgNAzQgPA3gQBFIABAAIgKAtIAEALIAFAAIAoAlIhUgaIAIgOIACABIAKg4IABAAIAQiMIAAgBIgiAVIgLgNIAHgKQAEgTAAgHQgBgJgGgEQg1gfh4gJIgkBBIATALQgEAagIAGQgDABgJgDQggA4gKAGQgGAFgKgCIgjA6IAJAKIgHAFIgEAFIg2g2IiABGIAAAAIgmAXIgGAKIADADIgBAzg");
	this.shape_3.setTransform(90.0758,-8.1085);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AFlQsIACgBIgbg4IhDh5IgZguIhJAgIgLgMIAGgFQgvhOhVgmQgNAQgNAbIAPAFQABAagGAHQgCACgLgBQgSA8gIAJQgGAGgKABIgNAhQgGANgUARQgSARgWAMIACAMIgFADIAAAAIgHAGIgqg5Ig5gKIiDgUIAAABIgvgGIgLAFIAAAFIgjAuIAThcIAPAIIAAACIA8AGICUAEIgZgiIANgNIAKAGQAUADAIgBQAJgCADgHQAbg5gCh4IgBgDQgIgNgOhCIgDgNIgigPIAMgXIAEgHIAdhFIAQgyIAOhFIAAgDIAHhVIACiVIAFgmQAFghAPgaQATgjAOgDIAAgBIAFgCIAAAAIAGgCIACAAIAHgBIABAAIAJAAIAHAAIADgBIALhdQgrgYghgcQgrgMgpgZQhdg5g3huQg2hKgfhSQgdhQAKgqQAFgYA6ATQgVhBgCgtQgCgvASgjQALgVArAaQAJhIASgtQATguAggaQAWgSAhA/QBmhHCigWQBlgNA1AsQBFA5hOCIIAfgNQAigJARASQAoAqgeCDIgoCJIgCADQgJB8AMA5IACAGQAJAXARALQADgaACgkQgJgVgDgOQgDgGgCgMQgCgNADgBIAFgCIABgCQABgFAFgFQAIgHAFAGIAAAAQAIgGAEAGQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAIAEgBQAGgCAFAMQAEAKgGACQgEACgEgKIAAgBIAAAAQAHANgHAPIgIAWQAEAwgDAwIAGAJQACACgDAGQgDAGgFAFQgJBSghBFIgQAdIgCAEIgJAOIgNATIAAAAIAVAaQA9gxA6haQAEgWAEgOQAAgHAFgMQAEgLADAAIAGABIACgBQAEgFAGgBQALgCABAIQAJgBABAHQABAAAAABQAAABAAAAQgBABAAAAQAAAAgBABIAEABIABAAQAFACgCANQgBALgGgCQgEgBABgIQgCANgMAIQgGAEgMALQgzBqhKBDQAIAQgFAEIgBABIABAAIgTASIgOgJIgyAbIgYANIgQAIQAGAkAAAZQgBAZgHACIgBAAIgZAGIgCgEIgGBdIgBAFIAAABIgFA2IAAADIgEA3QgGBeAGBWIghAIIAWAJQA8A/CACsIAOgFIABAIIAAAAIADAGIghAOIASAtQAVA1AgBLIAAAAIAVAtIAKAIIAEgDIA3AHIhUAfgAA7gKQAVgfAagdQgWgFgbgKgADNhqIAHAGIAlgyQASgeAMgfQgfBBgrAog");
	this.shape_4.setTransform(157.4517,-20.2835);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AkJP1IARgBIABABIA0gcIAAAAIB+hQIgogOIADgSIAMAAQASgKAGgFQAGgGgBgIQgGgpgdgzQgTgigng3QgWAHgKgQQgGgLgLgwIgBgDIgEgRIgrgSIAZgvIAehRIAUhaIAAgDIAIhVIACiUIAEgnQAGghAOgaQAUgkANgCIABgBQACgCACAAIABgBIAGgBIABAAIAHgBIANAAIAEgBIAEAAIAKhdQgrgZghgbQgrgMgpgZQhcg5g3huQg3hKgehSQgdhQAJgqQAGgZA6AUQgVhBgCguQgCgvASgiQAKgVArAaQAJhIATgtQATguAfgaQAWgSAhA/QBmhHCigWQBlgNA1AsQBGA5hOCIIAfgNQAigJARASQAnAqgdCCIgqCNQgKB8AMA5IADAGQAIAXAVANQAWAOAGAKQADAGgKAMQgLAMgNACIgFABQgZBRgyA7Qg1BAgzgDQgYgBgpgQIABA4QApgUAjgLIAAgFIAXgIQAFAAAKAOQAJANAJAYIA2geQAxghAogyQAjgsAhhCQABgSADgSQAAgHADgMQAEgMACAAIAGAAIACgBQADgFAHgCQAKgDACAHIAAABQAJgDACAHQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAABIAEAAIABAAQACABACAEQABAEAAAFQgBAMgGgBQgDgBgBgIQAAANgMAJQgHAHgIAKQg6CchtBUIgCACIgxAfIgCABQAKAgADAbIAFgBQA6gLA4gfQAygaA4gvQAKgVAIgLQACgHAIgKQAIgJACABIAFACIADAAQAEgDAHAAQALABgBAIIAAAAQAJACgBAHQAAAAAAABQAAAAgBABQAAAAAAAAQgBABgBAAIAEADQAFADgFAMQgGAKgEgDQgDgCADgIQgGAMgOAEQgHACgOAIQhxB3iGAkIgsAKIgDAAIgNACIgCAAQgEAkgIAYQgIAZgHgBIgBAAIgFA6IAAACIgHBaQgGBeAFBUIgOAEIABAAIAIAEIAGAGQA3A8CACoIANgFIABAIIABAAIADAGIghAPIBGCsIABAAIAUAtIAKAIIAEgDIA3AHIhUAfIgBgSIABgBIgag4IhdinIhJAgIgLgMIAGgEQgVgjgZgYQACAKgBAFQAAAHgJAHIAIAjQACAOgGAaQgHAYgKAWIAIAJIgDAFIgCAJIhCgXIg0AXIh4A5IAAABIgqAVIgHALIADAEIgDA5g");
	this.shape_5.setTransform(223.1518,-12.9585);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAIQ1IAIgPIACAAIAGg7IABAAIAHiHIgwAEIgGgOIAHgDQgThXhChAQgqgMgSgNQgJAHgLAAQgNAAgGgLQgJgNgRhDIgBAAIgHgZIgbgLIAZgwIAehRIAUhaIAAgDIAIhVIABiEIAFg2IAAgBQgBgKAEgFQAGgYALgUQAUgjANgDIABAAIAEgDIABAAIAGgCIABAAIAHgBIANAAIAEAAIAEAAIAKheQgrgYghgbQgrgMgpgaQhcg5g3htQg3hLgehSQgdhQAJgqQAGgZA6AUQgVhAgCguQgCgvASgjQAKgVArAaQAJhHATgtQATgvAfgZQAWgSAhA+QBmhGCigWQBlgOA1AsQBGA6hOCIIAfgNQAigKARASQAnAqgdCDIgqCMQgKB9AMA5IADAGQAIAXAVANQAWAOAGAKQADAFgKAMQgLANgNABIgFABQgZBSgyA6Qg1BAgzgCQgYgCgpgPIABBMIACABQAogJAfgDIABgEIAYgDIAAAAQAMABAKA2IAEAAIA3gQQA3gVAygoQArgjAwg5QAFgUAHgOQABgHAGgLQAGgLADABIAFABIACgBQADgDAIgBQALAAAAAHQAKAAAAAHQAAABgBAAQAAABAAAAQAAABgBAAQAAABAAAAIAEACIAAAAQAGACgEANQgBAFgDACQgCACgDgBQgDgBACgIQgEANgNAGQgIADgLAKQhaCKh+A6IgDABIgNAGQgQAHgKADIgNAEIgDABIgBAAQADA3gIAXIADABIAJABIAQACQA6AGA/gOQA3gMBDgdQAMgNAPgMQAEgGAKgHQAKgHACACIAFADIACABQAFgCAGADQAFACACADQACADgCADIAAAAQAJAEgDAGQgBABAAAAQAAABgBAAQAAABgBAAQgBAAAAAAIADAEQACACgCAEQgBAEgEAEQgIAIgDgEQgDgDAGgHQgKALgOgBQgHAAgQADQiIBQiCAAIgvgCIgZgEIgBAGIAAAAIgHBUIAAAAIgGBTQgGBkAFBRIgQAEIABAKIAGAHQA2A1CMCmIANgFIABAHIABAAIADAGIgwAYIAPAmQAhBUAUAtIAAgBIAUAuIAKAIIAEgDIA4AHIhVAeIgBgRIACgBIgbg4IAAAAIhDh6IgVgmIgmATIAAAEIAAAAIABAHIhKAGIgBAIIgXCDIABAAIgHAvIAEAMIAFAAIApAjg");
	this.shape_6.setTransform(291.3469,0.0165);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ag+QgIACAAIAKg7IABAAIAPiBIAAgBIAGgxIg0AJIgHgPIAHgDQgQgygfgoIgHBZIANAFIgEAHIABAAIgCAHIhGgXIhNB3IABAAIgYApIgBAMIAEACIAYAxIhEg0IANgLIACABIAdg0IAAAAIA6h3IABgCIgugPIAAgQIAHAAQAThigihIQgOgMgHgLQgMADgLgFQgOgGgBgOQAAgMAPhHIABAAIACgJIgUgQIA3hBIASgZQAEgGAFgIIAQgcIAdg8IABgEIAHgPIAAgBIAAgCIAAAAIgDgZIAOgFIADgIQAMhMAPg4QAXhTAWgKQALgRALgMQAdgfANABIABAAIAFgBIABgBIAGAAIABABIAHABIACAAIAPADIADABIAOgkQgUgOgQgNQgtgNgngZQhcg5g3htQg3hKgehSQgdhQAJgqQAGgZA6ATQgVhAgCguQgCgvASgjQAKgVArAbQAJhIATgtQATgvAfgZQAWgSAhA+QBmhGCigWQBlgOA1AsQBGA6hOCIIAfgNQAigJARASQAnApgdCDIgqCNQgKB7AMA6IADAGQAIAXAVANQAWAOAGAKQADAGgKALQgLANgNACIgFAAQgaBSgxA7Qg1BAgzgDQgkgChGghIgIAhIAVAOIgBAAQAPALAHAIIAAABIACADIAAAAIACADIAAAAIACAEIADAQIABAHIAAABQACAkgQA9QAGATALAoIAFAAIAGAXIgBAAQABAGgPAIQgPAIgYAHIAZA5QAcAzAvAsQApAnA+AnQAWADAOAFQAHgBAMAFQALAEAAADIgBAGIABACQAFADABAHQACALgHABIgBAAQACAJgHABQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAIgBAEIAAABQgCAFgNgCQgLgBABgGQACgDAIAAQgNgBgIgNQgFgGgLgLQiWhHhKh0IgCgDIgGgKIgCgDIgBgDIgCAEIgJAaIgBAEIgHAXQgMAjgIAiQAkAvA3AuQAXAHAMAFQAHABALAGQAKAGAAADQAAAEgCABIABADQAEAEAAAGQABALgHAAIgBAAQAAAKgHAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAIgBAEIAAABQgDAFgMgEQgLgDACgFQABgEAJACQgNgEgGgNQgEgIgKgLQg8gngpgrIgPBFIgjgBIgDAOQAvBRBQC/IAOgBIgBAIIABAAIABAHIg7AKIgNAyIgfCEIABAAIgKAvIAEAJIAFgBIArAVIhbAGg");
	this.shape_7.setTransform(378.1924,-0.0085);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("ADmSbIACgPIAAgMIgRjCIgEgqIgrAAIgEgTIAOgGQgKhjgXg5QgSA1gBBdIASAKIgEALIgqADIABA/IAFC7IABADIACAAIAVATIhFACIAXgXIgDguIABAAIgUiNIAAAAIgJg9IhbAHIgEgSIALgFQAFh3ALhsQgDgCgBgDQgFgJAJg8IACgMIgFgDQgCgCgCgEIgXgKIAQguQhQiLAEiIIAAgDIABgOQAAgOADgOIACgQIAAgBQghgPgVgOQgVgPADgHIAAgBIAJgYIARACQA7hVAzgyIAAgBQATgSAPgLIAFgEIAMgFIACgBIACgCIABAAIACgBIAFgBIACgBIACAAIADAAIACgBIAMAAIAFAAIADAAIgCh3QgggQghgYQgugLgpgXQhkg2hChsQg/hIgnhSQgmhPAFgsQACgaA8ARQgchAgHguQgHgwAOgkQAJgWAtAYQABhJAOgvQAOgwAcgcQAVgTAnA+QBfhNCfgfQBjgTA6AqQBLA3g/COIAegOQAhgMATASQAuAqgTCWIgDAUIAAACIgVBmIAAACIAAABQAECAASA4IADAGQALAXAWAMQAYAOAGAJQAEAGgJAMQgJAOgMACIgGABQgQBUgrA+QguBEgzAAQgcAAg5gUIAPBoIAZAJIAAABIAGACIAAAAIAMAGIAJAGIAAAAIAEACIAAABIADACIAAABIACACIAJAQIABABQAQAfAIA3IAAAAQAEAeABAVIABAAIACAmIAAABIABATIAAACIABAUIAAAEIAFBpIAAADIACAcQAGBjARBbIgRAFQAMAqAPBJIAWACIAGAPQAFAPgDAGQgCACgHABQAJBAgDAKIgEAGIATBzIATAFIgCALIAAABIABAJIhfgBIgBAsIAAAAIgDCYIACABIABAnIACAFIAEAAIA8AVgAg4DGIgKA4QgFA4AMA7QALA0AaA/IACgGIAAgCIAOhMIAAgDIACgUIAChfIgFhDIAAgCIgBgKQgQAAgegJg");
	this.shape_8.setTransform(419.547,-9.7209);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("ABFRUIAHgOIADAAIACg0IgEikIgCg4IgqAFIgFgOIAIgDQgKhNgag0QgWA3gGBLIASANIgCAFIgCAHIhTgUIgoA9IgBgBIhIByIABAAIgUAkIgDAWIgBAAIAOA8Ig3hRIATgDIAVgpIABABQAuhZArhbIgkgIIABgOIAHAAIAQhcQgFgFABgVQAAgTAEgVIgKgCQgHgDAFgOIAHgOIAVABIABgJQgHAAgDgCQgHgGAKg0IADgQIgvgUIAdgvIAXgxQATgwAKg3QgagDgQgFQgQgGAAgGIAAgBIAAAAIAAgZIAQgEQAehzAdg9IAAgCIABABIAAgBQAGgaAJgQIAEgGQAUghAPgCIAAAAIAFgCIABgBIAHgBIAagBIARhtQgogcgbgZQgogOgegVIgDgCIgEgDQhghAg3h4Qg2hQgdhWQgdhTALgrQAFgYA6AXQgVhDgBgvQgBgwASgiQALgVAqAeQAKhJATgtQAUguAggYQAWgRAgBCQBmhACigMQBlgHA0AwQBEBAhPCFIAfgLQAigHARAUQAnAsgfCFIAAAAIgrCMQgLB9ALA8IADAHQAIAYAUAPQAWAQAGAKQACAGgKAMQgLAMgNAAIgFABQgaBRgxA5Qg2A+gzgGQgagDgxgYIAABWIAZAIIgBAAQAYAHAIAJIAAAAIACADIAIAMIAAABQARAmgGBRQgEAwgOB4IgBADQgIBbAEBSIgdAFIABADQAOAjAMAoIABABQAHACAKAHQALAHgBADIgCAFIAAACQAEAFAAAGQgBALgHgBIgBAAQAAAHgFACQAZBXARBJIAUgCIgDAIIAAAAIAAAHIhQAKQgOBWgQCJIABAAIgDAqIAFAJIAGgBIAvAXg");
	this.shape_9.setTransform(486.1837,0.0309);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AmvPvIAPgDIABABIAwgeIAAABIBwhQIACgBIghghIAHgOIAGADQAqg4ASgxQAOglAEgrIgDgEQgFgKACg8IgBgBIACghIgqgZIAwhGIAkhEIABgDIAHgRIAWhBIAShPIgPAPIgBgBQgKAHgogoIggAoIgGAJQghAwgRA+QgPA2gFBKQAHAVADAOQADAGACANQABAMgCABIgGACIgBACQAAAFgGAFQgJAHgEgGIAAgBQgIAHgEgHIgBgEIgFABQgFACgFgNQgDgKAFgCQAEAAADAHQgFgMAIgNIAHgWQgGicA8h1IAAAAIAFgIIABgEIAkg1IAAAAQgXgdgLgWQgMgXAFgFIABAAIATgRIAOAJQBjgxA8gTIALgQQAYggAPgBIAAAAIAFgBIABgBIAFAAIACAAIAQABIABABIACAAIAIABIAYhXQgfgWgYgXQgkgNgigWIgHgFQhfhBg3h3Qg2hPgdhWQgdhTAKgrQAGgYA6AXQgVhDgBgvQgBgwASgjQALgUAqAdQAKhIATgtQAUguAfgYQAXgRAgBCQBlhBCjgMQBlgHA0AxQBFA/hPCGIAfgLQAigHARATQAmAtgeCEIgBABIgVBOIgWA9IAAABQgLB/ALA6IADAGQAIAYAUAPQAXAQAFALQADAGgKALQgLANgOAAIgEAAQgaBRgyA6Qg2A9gzgGQgfgEg7geIgKBMIABABIAVALIgBAAIAQAKIAHAHIABAAIACADIAAAAIACADIABABIABACIAHAYIAAABQAEAbgFAmQAIA+gKA9IAJgGIAHAaQgYARgbAKIgRBHQAKA1BGAXQAvAPBGAAIAcgMQAKgFAQgEQAQgEABADQABAAAAABQAAABABAAQAAABAAAAQAAABAAAAIADACQAFAAAFAFQADADABADIAAABIAAACIgCAEIAAAAQAGAHgFAFIgEACIABADIAAABQACAFgMAGQgKAEgCgFQgBgEAHgDQgMAFgNgGIgJgDQgpAHgsgBQhHgCgxgWQgXgKgTgTQgOBHgFA6IgcACQBfArBCA1QALAJAPATQAPAUAJATIALAAIAHAMIg4AjIgOA0IgeB8IAAAAIgJAsIAEAMIAEAAIAoAlIhUgaIAJgOIACAAIAKg3IARiOIgiAVIgLgMIAHgKQADgTAAgHQAAgJgHgEQgfgTgygKQgkgHg4gEIgkBBIAUALQgEAagIAFQgDACgKgDQgeA2gLAIQgGAEgKgBIgkA6IAJAKIgGAEIAAABIgFAFIg1g2IgTAKIhtA8IAAAAIgmAXIgHAKIADADIAAAyg");
	this.shape_10.setTransform(549.4346,-10.5441);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AErQdIABgCIgbg3IAAAAIhfimIhIAgIgLgMIAGgEQgxhOhUglQgMAQgNAbIAPAFIAAAOQgBAPgEAEQgCADgKgCQgTA9gIAJQgFAFgLABIgMAiQgGANgUASQgSAQgVANIACAMIgFADIAAAAIgIAGIgqg4IgLgCIgBAAIgpgHIiHgUIAAABIgvgFIgMAFIAAAFIgiAuIAThcIAPAIIAAACIA7AFIAAAAICVADIgagiIAMgNIALAGQAUACAIgBQAJgBADgHQAag5gDh5IgBgDQgJgOgRhoIgZgQIAzhHIAkhBIABgDIAIgRIAIgVIAghqIABgDIAEgRIAAgBIAMg/QgdAHgbABIAHAIIgWAOQgWgYgTgnIgRAEIgCAAQgXAGgUAHQgTAIgKAIQgWAYAMD0IAAgBQASAuADASQAEAGABANQABAMgCABIgGACIgBACQgBAFgFAFQgEADgEAAQgDAAgCgCIAAgBQgIAGgEgGQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAQgGABgFgMQgEgLAHgBQADAAAEAHQgFgMAHgNIAGgQQgWhmgIhYQgMiSAngcQANgJAYgJIAJgEQAcgJAXgFQgKglgDghIATgDIACALQBpgVBGAMIACgCQAZggAPAAIABAAIAEgCIABAAIAIAAIAGAAIACABIAIABIAAAAIACAAIAIABIAehiQgXgRgPgOQgkgOghgWIgDgBIgFgDQhfhBg3h3Qg2hQgdhWQgchTAKgrQAGgZA5AYQgUhDgCgvQgBgwASgiQALgVArAeQAKhJATgtQATguAggYQAVgRAhBCQBohCCggKQBlgHA0AwQBFBAhPCFIAfgLQAigHARATQApAwglCTIgGAUIAAABIgLAlIgBADIgGATIgBACIgPApQgLB8ALA9IADAHQAIAYAVAPQAWAQAFAKQADAGgKAMQgLAMgNAAIgFABQgaBRgyA5Qg2A9gzgGQgmgEhHgpIgPBXIADACIATALIAAAAIAFADIAAABIAFADIAAAAIAEAEIABAAIADADIABAAIAIAKIAAAAIACADIAGAYIAAABQABAJAAAKQAfA1AQBBIAGgJIARAVQgVAhghAaQAJAaANAWIAFAIQAdAvBKgGQAzgEBAgbIAWgVQAHgJANgJQANgKADABIADAEIADAAQAFgCAHADIAFAEIABABIAAABIABABIgBAEIAAABQAJAEgDAGIgCACIgBACIACACQAFAFgKAKQgHAIgEgFQgCgDAFgGQgJAKgPAAIgJAAQglAWgoAQQhCAag1gCQhagCgshmIgUAKIgUBKQgXBcgKBTIAPASIgBAAQA/BIBfB9IAOgFIABAIIABAAIADAGIghAOIAAABIARAqIA3CCIABgBIAVAtIAKAIIAEgDIA3AGIhUAgg");
	this.shape_11.setTransform(621.6223,-8.0941);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhfRQIAEgRIADAAIAFg/IACjEIg7ADQgMAZgSAXIAHAKIgEAFIAAAAIgFAIIg8glIi5ApIAAABIguAMIgJAJIACAFIgPA3IgQhcIARABIABACIA5gQICMgzIgkgXIAGgQIAMACQAUgGAHgDQAIgFAAgIQADgzgOhCQgKgvgWhAQgLACgIgFQgKgFAAgMQAAgKANgxIAAgBQAAgKAFgLIgagXIA8g9IAsg5QgJgQgEgLQgfhTBNhQQgYgSgTgYIARgOIAGAIQBKhBBBgkQAMgRAOgMQAdgdAPACIABAAIAEgBIABAAIAGAAIAYAHIADABIAbg4QgfgcgZgfQgkgUgcgZIgGgGQhVhOglh/QgqhWgQhaQgPhWAQgpQAKgXA1AfQgKhFAFgvQAGgvAXggQAOgTAmAkQAUhGAagqQAagqAjgUQAXgMAWBFQBxgxChANQBlAIAsA3QA6BJhiB5IAhgHQAjgCAOAWQAfAzgyB9IAAABIgPAiIAAACIgIARIgCAEIgmBKIgBABQgdB8ACA7IACAHQAEAZASASQAUATADALQACAGgLAKQgNALgNgCIgFAAQgmBMg6AxQg+A1gygNQgbgIgtgfIgPAwIAUAQIgBAAIAFAEIAAABIAFAEIAGAHIABABIAGAIIABABIABAEIACAJIAAAZQgDAwgnBcIhPC6QAyARBMgBQAXgMAQgEQAGgEAMgDQAMgDACADIACAFIACABQAFAAAGAFQAHAIgFAFIgBAAQAHAHgFAFQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAIACAEIAAABQACAFgMAGQgKAFgCgGQgBgEAJgEIABgBIAAAAQgNAIgPgGIgJgDQghAGglAAQg6ACgugNQgXBAgPA5IgZgCQAUBOAdDZIANAAIgDAIIABAAIgBAHIgjACIAAABIgGArQgMBVgHBAIACAAIgGAyIAFALIADgBIAxAbgAjNC2IgGAHQgXAhALAtIAshaIAMggIgDgCQgQAOgTAZg");
	this.shape_12.setTransform(676.0219,0.0297);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Ak2RQIAJgQIACgBIAWg+IAmiMIABgHIABgCIgSgGIiGB/IABABIgfAfIgEAQIACAHIgTAzIgHhXIAIABIAhgjIAAAAIBPhiIAXgcIg3gPIACgSIAZgDQAMgJAEgFQAFgGgBgHQgHg5gbhAQgSgpghg5IgBgVQgNgEADgPIAIgSQACgIAMgUIglghIA8g8IAAgBIAPgSIABgBQgvg+gMg4QgUhYBYhDQgWgYgPgYIATgLIAFAIQArgdAxgYQBSgqA0gBQARgNALAAIAAAAIAFgBIABAAIAGABIAZAHIADAAIAshcQgggegWgbQgkgUgcgZIgHgGQhUhOgmh/QgphXgQhZQgQhWARgpQAJgYA1AgQgKhFAGgvQAGgvAXggQAOgSAlAjQAVhGAZgqQAagqAjgUQAZgMAWBFQBvgxCiANQBlAIAsA3QA6BJhiB5IAggHQAkgCANAWQAgAygyB+Ig/CDIAAAAIgBACQgeB8ACA7IACAHQAFAZARASQAUATAEALQACAGgMAKQgNALgNgCIgEAAQgmBMg6AxQg/A1gxgNQgegJgygjIgcBYIABABIATANIAAABIAAAAIAJAJIADACIABACIADACIAGAJIABACIACAFIACANIAAAVQgDAdgLAjIAAAAIgBAEQgHAVgIAUIAAAAIgOAhIAAABIgVAxIAAACIgBAAIgWAzIAFAKQAdAwBOgHQA0gFBCgdQAVgRAPgIQAFgFALgFQALgGACACIAEAFIACAAQAFgBAGAEQAJAGgEAGIAAABQAHAFgDAGQgBAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAIACAEQADAFgKAIQgJAHgDgFQgCgEAHgFQgLAIgOgCQgIgCgNABQgmAWgoAPQg/AYgzgCQgzgBglgjIgBACQgmBdgVBNIgRgBIAAAOIAAAAQgFBlgWCfIAOAAIgEAIIAAAAIgCAHIglACIAAABIgRArQgiBVgXA8IACAAIgTAyIACALIAEgBIAqAagAlVCrIgHAGQgfAhAKA0QAIApAfAyIAAgBIANgTIABgBIAOgWIA3hzIAAgCIAIgVQghgNgcgWQgVAOgUAUg");
	this.shape_13.setTransform(725.5087,0.0297);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AmxQHIgCgBIABgCIgHgNIANAAIAngsIAAAAIB3iaIgMgDQgLANgOANIABAEIgEADIgGAHIgggcIgqAdIhlBJIAAABIgjAbIgHAPIABAHIgZAwIAFhXIAIACIAlgeIABAAIBchWIgBAAIAggeIg1guIAKgOIAYAIQAPgEAFgDQAHgDACgHQATg2AChGQABgqgFhEIAAgBQgSgHAKgQQAEgFAOgQIAGgIIgZgYQAKgGAKgKIAFgEIAjgiIAug3IAAAAIA2hbIAAgBIAQgjIAAgBIAVg2IASgxIAcg9IAAABQAQgcAWgQQAdgZAPADIAAAAIAFgBIABAAIAGABIABAAIAFACIAggQIAXgsQgugcgjggQgtgOgngcQheg+g4hyQg3hOgghWQgehSAJgrQAGgZA5AWQgVhDgDgvQgCgwARgiQALgWArAdQAIhIASguQATguAfgZQAVgRAiBBQBmhEChgPQBlgJA1AvQBFA+hMCIIAfgMQAigJASAUQAnAsgbCEIgTBMIgCAEIgTA8IAAAAIgBACQgICAANA5IADAHQAIAYAVAOQAXAPAFALQADAGgKALQgKANgOABIgEAAQgQA2gdAvQgeAxgjAZIAEgBQA6gdAyg0QArgsAvhIQAEgUgJgTIgNgWQgGgMgBgMQgCgMAFgBQAEgBADAHIAGARQAHANACgBQABgBgHgdQgKggALgDQAEgBADAIIAGAWIAHAQQACAFAFgBQACgBgBgHIgBgUQgBgOADgJQACgJAFAAQAFAAAAAIIABAXIAHAoQAEAUAIAHQAGAGASgHQAPgHACAHQADAGgSAKIgqAWQgNAHgSASQhJCNhwBGIg4AeIgMAFIgCAAQAFAfAAAYQgBAYgFAHIAMgCQBAgHBBghQA3gbBEg0QALgSgDgVIgFgZQgCgNADgMQADgLAFAAQAEAAAAAIIAAASIACALQABABAAABQAAAAABAAQAAABAAAAQABAAAAAAQABAAACgeQADghAKABQAFAAgBAJIgBAWIABARQACAFAEABQACAAACgHIAFgTQAEgOAFgHQAGgHAEABQAEACgCAHQgFAPgBAHIgHAoQgDAUAGAKQAEAHASgBQARgBAAAHQAAAHgUAEIgvAGQgOADgXAKQh0BtiBAdIAAAAIg/AKIgJAAIgFAAQgHAkgJAYQgKAXgHgBIgBAAIAAAAIgNgBQgUAwgzBwQguBrgXBRIgqgHQgYBdhGCyIANAFIgGAGIAAABIgEAGIgkgKIgeAfIhuB1IABABIglAoIgEASIAIAJIgEAygACcBPIgEgJIgNgBIAAAKIAEAAIAKAAIADAAg");
	this.shape_14.setTransform(765.2507,0.0277);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AlXMsIhJgIQhGgIhggJIABABIg3gFIgRAIIgCAEIgwAPIA6hDIAIASIgCAEIAvgBIAAACICVgCIgBAAIA8AAIgvg5IALgLIAHAFQA8gpAYg6IhaAxQgNAHgfADQgcADgcgCIgBAEIgHgBIgIABIgCgrIgzgLIh6gXIAAABIgsgHIgPAFIgEAGIg1AOIA3guIABAAIALgKIAEAIIAvAGIAAAAQA/AFA/ADIAJAAIAjADIgDhHIAQgDIALAXQANAJAGACQAHACAHgDQAwgWAygrQAggcAqguQABgGAHgEIADgBIAHgDIgIgcIA4gLQALgCALgEIABAAIAVgHIAFgCIApgQIABgBIASgIIAEgCIAjgUIAAAAIBBgtIACgBQAegYA2guIAAgBIA1gmQAegQAagDQAlgIAMAKIADABIABABIACABIAAAAIADACIAAABQAfgFAigBIAWgPQgUgWgKgQQgigVgcgbIgGgGQhShSgdh/QgmhZgLhaQgMhXASgoQALgXAzAiQgGhFAIgvQAJgvAYgeQAPgSAkAlQAXhFAcgoQAcgqAkgRQAagMARBHQB1gsCfAVQBkANAqA6QA2BMhoBzIAhgFQAjAAANAWQAdA0g5B7IgBAEIhFB+QgjB5gBA8IABAHQAEAZAQARQATAVADAKQAJgSgDgUIgFgYQgDgNACgMQADgLAFAAQAEgBAAAJIABARQADAPACgBQACAAABgdQABgiALABQAEAAAAAJIAAAWIABARQACAFAEABQACAAACgHIAFgUQADgNAGgIQAEgHAFABQAEABgCAHIgGAXIgFAoQgCATAFAKQAEAHAUgCQAQgBAAAHQAAAHgTAEIgvAIQgKACgbAMQgyAyg4AlQgnAogmATQgqAVgigLIgIgEIgBABIgxAGIAAAAQgHAwgMAYQAzAIA3gHQAygGA8gSIAVgKQAUgJAKgTIALgXQAGgMAIgIQAKgIAEADQADACgFAHIgJAPIgGAKQAAABAAABQAAAAAAABQAAAAAAABQABAAAAAAQABABATgXQAVgaAIAGQADADgFAHIgNASIgJAOQgDAGAEADQACABAFgFIAPgNQALgJAJgDQAJgDACAEQADAEgGAEIgTAQIgcAcQgNAPgBALQgBAIAPAKQAPAJgEAFQgEAGgTgIIgqgWQgKgEgKgDQiFA9h7gKIg/gKIgNgDIgBAAQgRAhgQATQgQAUgHgEIgYgLIAAgBIgXASIgFADIg2AmIAAAAIhWA9QhMA6g0AyIgPgMIgIAnQgjAnhVBOIhfBUIAEALIgFAEgAFTEZIgRgIIgBABIASAHgAKgBOIATgPIgKgBg");
	this.shape_15.setTransform(790.4,0.0133);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("Ah0IBIgNABIgQABIhSAEIg/AEQhmAIhWAQIgGgWIgRAFIgCgHQhbAAi9gVIgFAMIgHgDIAHg1IghhMQgdhDgkhKIAAABIgYgyIgPgLIgEAAIglgiIBXARIgMAPIgFABIAZAnIgBACIBLCAIABgBIASAgIAGgwIAQABIABAIQAjAJAhABIgTgEQgOgDgVgSQgSgQgPgUIgEACIgDgEIgFgGIAqgqIANhJQALhEAHg3IgBAAIAGgsIgGgOIgGgEIgQg0IA6BAIgHAFIgFAvIgDB9IAAATIAogoIANAJIgOAaQAAAOACAGQACAHAGACIA/AVQAlAMATAFIAIABIAAgBIAHgPIAHgQIBqAgIAHABQAKACAIABIAGABIAXADIB1AEICVgQIACAAIAPgCIAEgBIAOgBIADAAIAkgDIALAAIADgBIAMABQAfABAXAHIACgFQAJAJAWALQARAJACAHIAAABIACACIAAAAIACAGIAAABIABAFIAAACIBDgLQgGgUgIgfQgcgogPgrQgmhpAWh+QAChgAZhXQAYhUAhgdQATgRAhA0QAWhDAagnQAbgoAigSQAVgLASAxQAxg2AqgaQAqgbAogBQAbgBgLBIQB7AGCLBTQBWA0AQBGQATBbiNBAIAgAJQAgAOADAZQAGA7hlBaIgCACIgKAJIgFAEIhgBKIgDABQhSBjgYA2IgBAGQgGASADAQIA5gCQAWgGAPgOIASgRQAIgJALgFQAKgGADACQACACgGAFIgNALQgLAJACABIAZgQQAbgTAGAGQACACgHAFIgSAMIgNALQgEADADADQABABAHgEIARgIQAdgOACAGQACADgHADIgVALIgjAUQgRALgEAIQgDAGALAHQAKAHgFAEQgGAEgOgGIgfgRQgIgEgOgDIgwAGQAIAUgCANQgBAHgPADQgQAEgLgHIgEgDQgzAng5AVQg9AWgsgGQAGADgCAFQgDAHgUgFIgugMQgLgDgUAAQiqBkhhADIgGAAQhMAAgLg9gAg1H9QAJAuBpgfQBIgUBpg1IgBgCQhKAKhDgBIAAABIgCACIgBACIgDADIgCACIgCACIgPAJIgCABIgRAHQgPAGgTAFIgNALIgBgDQgFAEgRgFIgCAAIgBAAIAAAAg");
	this.shape_16.setTransform(911.1181,41.4041);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},3).to({state:[{t:this.shape_2}]},3).to({state:[{t:this.shape_3}]},3).to({state:[{t:this.shape_4}]},3).to({state:[{t:this.shape_5}]},3).to({state:[{t:this.shape_6}]},3).to({state:[{t:this.shape_7}]},3).to({state:[{t:this.shape_8}]},3).to({state:[{t:this.shape_9}]},3).to({state:[{t:this.shape_10}]},3).to({state:[{t:this.shape_11}]},3).to({state:[{t:this.shape_12}]},3).to({state:[{t:this.shape_13}]},3).to({state:[{t:this.shape_14}]},3).to({state:[{t:this.shape_14}]},2).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},2).to({state:[{t:this.shape_16}]},1).wait(28));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.2,-128.8,1048.1,246.70000000000002);


(lib.kidshaddow2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#050505").s().p("AqyWeQgqgCgKgYQgGgNAHgRQAGgOANgMQAVgTAegKQAdgJAdABIgPgsIgOgrQghhtAChRQACg4AZgbIAJg5IADgfIDTjHQgmgKgigMIgZgKIAEgYQAJh4AmhzQAmhzA/hnQAJgOAJgIIABABQAHg9gBgtQgChEgUgGQjCg3iWh/QBEgpA7hFQApgxAqhGQAYgnAuhYQhYBJh3AUQh2AUhtgmQgPhQAAhaIAEhKQgOgFgPgJQgfgRgKgXQgMgbAKgYQAIgWAYgLQATgKAlAOQATAGAPAJIAFgTQAIgXAMgWQBDh1BuhUQAygmBzgpQACgSADgOQARhMAzg0QAqgqBEgcIgXBCQgSBNAYAzQApg0AwgeQAzgfA/gKQgVAigGA1QgFAwAIArQBThKBugQQg2BAgFBUQgBAQAGAHQBnArBYBFQBHA4BKBVQA8gMA9AHQALACAIAFQAIAHgDAIQgBAEgHAFIhLAyQAggBAfAOQAeANAVAZQg/ADg3ANQAQAiAJAhQA4gUAfgNQBAgaAogaQA0gkAZguIASgoQAJgWANgRQAIgLAJgCQAHgCAIAFQAHAEADAIQAFANgDATQgEAYgEANQgFANgMAVQA4AIAzATQA7AYAMAbQgDAXg6gEQgrgDgsgOQAqAPAsAdQA0AjABAWQgGAOgUABQgQAAgSgJIhdgqIBTBOQASAQgBANQgBAKgKAGQgKAFgLgCQgOgCgVgTIhAg6QgWgTgMgEQgNgFgcACQgtAFg2ASQggAKhAAaIgcAMQABAygMAwQgTBegxA/QgrA3haA8QghAWgxAMQgRAEhIANQgOAMgcAUQgmAcgVALQgoAVgtATIglAOIgKBTIADgEIBPgjIAFgKIANgJIAUADQAfgMAPgFIAMAcQEGAyCnAJQBGADAugHQA/gJApggIAkgeQATgQATgKQANgHAIACQAIACAFAIQAEAGAAAIQAAAQgMASQgNAUgLAMQgKALgSANQAtAYArAwQArAxgHAVQgRAQgsgcQgUgNg4gvQAYAXATAhQANAXARApIAKAXQAFANgEAFQgRAVgmgrIhBhOIASArQAKAXAHAVQAJAdgHALQgEAIgMACQgLABgJgHQgMgIgLgaIgdhBQgLgZgKgKQgLgLgZgJQgrgOg4gHQgigEhFgEIkZgOIAIAUIjqBZQgLAGgCAFQgCAFAFAMQBTCYAoCpQAcAqAJA1QAJA0gJA0QgNBWg8BYQARBBAvBDIASAbIAkAuQAIAJAJAOQACgCAIAAQAoAHARAfQAJAPAAATQgBATgMANQgJALgZALIhWAnQgjARgTAHQgfALgaABQgPACgLgFQgOgFgFgLQgGgRAVgaQAMgOASgQIAhgbQABgCgCgDIhUhtQgdgogNgUQgWgjgMgeQgHgUgEgPQgwghgngdQARgoAmgUIgYgFQgmBOhFAkIgGBCQgfACgjgCQgWALgJANQgQAXANAyIAZBTQADAJABAGIAAABIAAgBQAMAMADARQADAQgEAOQgFAQgUARQgpAig0ARQgqAPgsAAIgSgBg");
	this.shape.setTransform(0.0101,0.0049);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#050505").s().p("AiRWpQgLgKgBgSQgBgPAHgRQALgaAXgVQAWgVAagMIgFAHIAGgHIgfgfIgCgCIgfghQhFhLgghBIgBAAQgYg0gQgzQhWAhh0gGQggAtgWA7IgLAfIgSA3QgCAIgIATQAEABADAGQARAlgPAgQgIAQgQAKQgQAJgRgCQgPgBgXgPIhRgwQghgUgRgMQgagUgRgUQgJgMgDgMQgEgOAHgKQALgPAgADQATABAXAHIApAMQACgBACgDIAriDQAQgtAKgXQAQgmASgbQARgZAXgVIAChBQAqgIAlAUIABgBQgohcAHhnIADAPIAdgEIgIgDIAEgZQAKh4AmhzQAlhzA/hmQAKgPAJgHIAAAAQAHg8gBgtQgChEgUgGQjBg3iWh/QBEgqA6hFQAqgxAphFQAagsAshUQhYBJh3AVQh2AUhtgmQgOhQAAhaIADhKQgNgFgQgJQgegSgLgXQgLgaAJgYQAJgWAXgMQATgJAlANQATAHAPAIIAFgSQAJgXAMgWQBAhzBwhWQAzgoBzgnQABgRAEgQQAdiJCUg8IgXBCQgSBMAYAzQAqg0AwgdQAygfA/gKQgVAhgGA1QgFAwAIArQBUhKBtgPQg2BAgEBTQgBARAFAHQBoAqBXBGQBHA3BLBWQAogIApAAIAugtQAxgyAZgnQAig2AFg0QABgMgBggQAAgXAEgVQAEgOAHgFQAGgFAJACQAIABAGAGQAJAIAGAVQAGAXABAOQABANgCAZQA2gQA1gCQBAgCAXAUQAGAXg3ATQgqAOguAFQAtgDA1AJQA+AMAJATQAAAQgSAIQgOAGgVAAIhmgCIBsAnQAWAHAEAMQAEAKgHAJQgHAJgLADQgNADgbgJIhSgbQgcgJgNABQgQABgWANQgoAXgqAlQgaAXgwAxIgNANQAhANAYAbQg5ADg1ALIgHAHQAcA7AHBDQAGBCgPBAQgSBegyBAQgqA3hbA8QggAVgxAMQgRAFhJAMQhBA1gkASQgoAVgtATIglAPIgKBTIADgEIBCgdQBHgeAagJIAMAaQD0gmCcgvQBDgUApgWQA4gfAcgrIAYgpQAMgVAPgRQAKgLAIAAQAIgBAHAFQAGAFADAIQAFAQgFAVQgGAXgGAOQgGAOgMATQAyAHA5AfQA5AfAAAWQgKAVgzgMQgZgGhDgZQAeAOAeAZQAUASAeAfIARASQAJALgCAGQgJAZgygbIhYgzIAgAiQARASANARQATAXgDAOQgCAKgLAFQgKAFgKgDQgPgFgSgUIgxgzQgUgVgMgFQgNgHgbAAQgtABg4ANQghAHhCAUIkmBZIAPAlIjpBaQgMAFgCAFQgCAHAGALQBkC5AlDPIgLABQAVA/ABA2QACBYgsBCQAFARgBAQIANAkQgTALgWAKQgPAUgCAOQgDARAJATQAHANAPASIAOAQQALANAKAKIAXAaQAGAGADAGIABAAIAAAAQAPAFALAOQAJANADAPQACAPgLAZQgWAwgnAmQgmAlgyAVQgTAHgOAAQgPAAgKgIg");
	this.shape_1.setTransform(0.0108,0.0254);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#050505").s().p("ADfWLQgKgMgGgRQgIgbAEgfQADgeANgaIgsgFIgCAAQhHgHgvgLQg/gOgxgYQgzgagOgiQgHgUABgjIABgTQgLgdgJgbIgbAHQh3AYicg4QgUgHgFgMQgCgDAAgIQhXAShTBIIgZAWQgfAfgLAJQgJAJgMAKQACADAAAHQgCAogdAVQgPALgSABQgTABgOgKQgMgIgOgZIgwhRQgUgigIgSQgOgegFgZQgCgPADgMQADgPALgFQAQgJAcATQAQALARAQIAeAeQADAAADgBIBJhGIAAAAIAbgYQAjghAUgQQAggZAdgPQBOgoBaAMIAHgcQAqABAiAdQgOhNAOhMIgKgEIAEgYQAKh4AmhzQAlhzA/hnQAKgOAJgIIAAABQAHg9gBgtQgChEgUgGQjCg4iVh+QBEgqA6hEQAqgyAphFQAagsAshUQhYBJh3AVQh2AUhtgmQgPhQABhaIADhKQgNgFgQgJQgfgRgKgXQgMgbAKgYQAJgWAXgMQATgJAlAOQATAGAPAJIAFgTQAJgXAMgWQBAh0BwhVQAxglB0gqIAFggQARhMAzg0QAqgqBEgcIgXBCQgSBNAYAzQAqg0AwgeQAxgfA/gKQgVAigGA1QgFAwAIArQApgkAygXQAygYA1gHQg2BAgFBTQAAARAFAHQBkApBUBBQBGA2BHBQQALgoAHggQAPhEAAgvQABhAgYguQgFgLgSgbQgNgUgHgTQgEgNADgJQADgHAIgEQAIgDAIACQANACAPAOQARARAJALQAIALAKAWQAngqAsgeQA1glAdAGQARAQgkAtQgcAigkAdQAkgbAygUQA6gXASAMQAJANgLARQgJANgRAKIhXA1IBvgZQAYgFAJAIQAHAGAAAMQgBALgIAIQgKAKgbAHIhUAUQgcAIgLAHQgMAJgNAXQggA7gYBuQAQAAAVACQALABAIAGQAJAGgDAJQgCAEgHAEIhHAwIAAADQAfAAAeANQAdAOAVAYQg+ADg5AMQAeA7AHBFQAHBEgQBCQgSBegyA/QgrA3haA8QggAVgxANQgTAEhHANIgqAgQgnAcgVALQgoAVgtATIglANIgJBUIACgEIBCgdQBIgfAagIIAIATQBxhCBLgxQBkhCBPg+QA3gsAdgjQApgxALgzIAHgvQADgZAHgUQAFgNAIgFQAHgDAIACQAJADAFAGQAKANAEAVQADAXAAAQQgBAPgEAWQAxgMBAAIQBBAIAIAUQgCAXgzAIQgZAEhIACQAhABAkANQAYAIApATIAXALQAMAGAAAGQACAcg5gHIhlgPIAqAUQAXAKATALQAaAPACAOQACAKgIAIQgHAIgLABQgPACgZgMIhAgeQgZgMgPAAQgQgBgYAKQgqARgvAgQgbATg2ArIkIDSQgUARgVALIARApIjqBZQgKAEgDAHQgDAGAHALQBkC6AlDPIgMAAQAVA9ACA5QACBegyBDIAWA+QgYANgfAOQACAMAEAIQAJAPATAIQAOAGAXAEIBXAMQAKABAFACIABAAIgBAAQAQgGARAEQAPADAMALQAMAKAHAaQAOAzgGA2QgGA2gZAvQgTAlgaAAQgPAAgMgNg");
	this.shape_2.setTransform(-0.0034,0.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#050505").s().p("AFuVjQgOgGgNgMQgUgUgMgdQgLgcgBgdIACAEIgCgEIgpARIgCABQhCAbgvANQg/ASg2ABQg4ABgcgXQgPgMgRghQgWgtgPguIgVAFQgWgxgRg3IgcAIQh3AYibg5QgVgHgFgLQgCgHABgKQhXgShtAjIgfAMIg2AUQgNAGgPAEIABAAQABAFgDAFQgIAQgNAMQgOAMgRAEQgSAEgRgGQgSgGgJgPQgIgMgEgcIgNhdQgFgngBgUQgCghAGgZQAEgPAHgKQAJgMALgBQATgBASAbQALAQAKAWIAQAnIAFABIAsgQIBVggQAugRAYgGQAngMAggCQA3gFA2ARIAHgXQAqABAhAcQgNhNAOhLIgLgEIAEgZQAKh4AmhzQAmhzA/hmQAKgQAIgGIABAAQAGg9gBgtQgBhEgVgGQjBg2iWh/QBEgqA6hFQAqgxAqhFQAagtAshTQhZBJh3AUQh2AVhtgnQgOhPAAhbIADhKQgNgEgPgJQgfgSgKgXQgMgbAJgXQAJgWAYgMQATgJAlANQATAHAOAIIAGgTQAIgXAMgWQBBhzBvhVQAzgnBzgpQACgSADgOQAQhMA0g0QAqgpBEgdIgXBDQgSBMAXAzQAqg0AwgdQAzgfA9gKQgUAhgFA1QgGAwAIArQBUhLBugOQg3A/gEBUQgBAPAFAIQBfAnBSA+QBEAzBFBLQAlgrAggoQAqg3AVgqQAcg5gCg0IgEgsQgDgYACgVQABgNAHgHQAGgFAJAAQAIABAHAFQALAIAGATQAJAXADANQADAOAAAYQA0gWA1gIQA/gKAZASQAIAVg0AaQgmATgsAJQAsgIAzAEQA/AEALATQACAPgRAKQgOAIgUACIhlAKIBvAaQAXAGAFALQAFAJgGAKQgGAJgKAEQgOAFgbgGIhUgRQgbgGgPADQgPADgVAPQg1AmhFBYQARAAAVADQALABAHAGQAJAGgDAIQgDAFgGAEIhKAzQAggBAfANQAeAOAVAYQg+ADg5ANQAeA7AHBFQAHBDgPBCQgTBegxBAQgrA3haA7QghAWgxAMQgRAEhIANIgrAgQgnAdgUAKQgpAUgtATIgkAPIgJBTIADgEIBBgdQBHgfAagIIAMAaQCGgnBSgcQB2gnBegqQA/gcAmgbQA0gmAXgvIASgrQAKgXAMgSQAHgLAJgDQAIgCAIAFQAHAEADAIQAIARgDATQgCAXgFAQQgEANgJAVQAyABA8AXQA9AYADAWQgHAWg1gFQgYgDhHgQQAgAKAgAVQAWAOAjAcIATARQAKAJgBAFQgGAbg1gVIhegnIAkAeQATAOAQAQQAVAVgBAOQAAAKgKAGQgKAGgKgCQgPgCgVgSIg3gsQgVgSgOgDQgPgFgaAEQgtAFg2AUQgfALg/AdIk0CKQgOAHgOAEIAOAiIjpBaQgLAEgDAGQgCAHAGAKQBkC6AlDPIgMABQAWA8ABA5QABAsgLApQgNArgZAhIAXA+IgjASIAQAbQAKAPALAHQAZAPAwgQIBSgfQAJgEAGAAIABgBIgBAAQALgMAQgFQAQgEAPAEQAPADATAUQAkAmAVAzQAUAyABA1QAAAqgXAMQgHAEgIAAQgHAAgIgDg");
	this.shape_3.setTransform(0.035,0.0135);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.6,-145.7,195.3,291.5);


(lib.kidjump = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0A0A0A").s().p("AFzV3QgMgFgPgQQgagegSgnQgWANgngbQg4gngegJQgngMgLgbQgTgxgPgTQgZgfgNhYQgIg5gChFIgRgEIgMjIQgBgPgEgGQgFAHgBAOIgMDIIgNACQgICtgnAxQgSAXgNAyQgJAggmAMQgjAKgpAlQgdAbgTgLQgQAkgcAgQgNAPgNAGQgVAJgNgKQgHgGgGgQQgGgOgBgLQgGhkBShmQASgXARACQAGAAAFAEQAIADAGAGIANjRIgFg3QgWgIgFgJQgGhggBgkQgChPAIg4IhDgQQAniYAQiGQAIhCAAglQgggEgygNQhkgZhagrIAIgRQiEgTiSg/Qh7g2gggjQgWgZgEgDQgbgWgwgLQgSgFgcgDIgvgGQgegEgMgKQgKgHgCgMQgCgNAIgIQAKgJAZADIB8APIhlgwQgUgKgLgNQgOgRAIgOQAPgRBCAQQA9APApAaQg0gjgYgWQgtgqARgWQALgOBHAlQBGAkAlAoIARgiQAJgQAPgRQAOgQAOgFQAIgDAJADQAJADAEAHQAFAJgEAPQgFAWgLATQgNAXgGAQQgWA6APA1QAQA2AyANIAwAIQAfAEAUAIQARAHAdgDQAdgCARAHQA5AaAwAOIAIgjQDLAeDmgiIABABIAAgpQhtgShXgyQjXh8iEk/QgaAMgcgCQgegDgVgRQgXgSgGgdQgHgdANgYQAOgZAegHQAegHAWAQIAAAAQgaitBRkKQAUg/AsgmQArglA0ADQA3ADAjBAQAAgnAegmQAfgmAmgIQArgIAnAbQAiAYATAoQAdhgBJgEQAqgDAfAdQAcAaAGAmQAFglAhgZQAggZAkAFQAqAGAZAaQAXAZAFApQAIghAggVQAggVAgAGQAoAJAZAgQAWAdADAkQAbgwAlgTQASgKAYAEQAYADAPAQQAUATASAnQASAoAJAwQATBfABBvQAABogQBbQAtgTAgAPQAVAJALAYQALAZgIAWQgMAfgoARQgfAOggAAQgNAAgFADQgGAEgEANQgtCRhhB0QhjB3iEBAQhpAxh1AKIAFAuQARAEAxAEQAyAEAdAAQBWAAA9gDQBIgEBGgJIATgEQAJAPACAFIAEAJQAkgIAwgRQAQgFAgACQAeACARgKQApgVBDgTQA0gUAVg0QAUgygRg9QgEgQgMgZQgJgUgDgWQgCgQAFgIQAEgHAKgCQAJgBAIADQANAFANASQAOASAHARIAOAjQApgkBIgeQBKgfAJAQQAQAXgxAlQgaAVg3AeQArgWA/gKQBDgKANASQAHAPgPAPQgMANgVAIIhoAmIB8gEQAagBAIALQAHAIgDAMQgDAMgKAHQgNAJgeABIgvACQgdABgSACQgxAIgdATIgcAaQgnAkh2A3QiVBFh/ARIABAKQACARgDAHQgEAHgNAIQh0BEi8AMQAsCjAmDKQgTAHgeAHQAJA/gCBbQgBA2gHBbQgEAIgRAFIgFA2IAqDIQAGgGAIgEQAHgEAFAAQAQgCATAXQBSBmgGBkQgBALgGAOQgGAQgHAGQgGAFgKAAQgKgBgIgDg");
	this.shape.setTransform(0.0239,140.2862);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0A0A0A").s().p("AGbVxQgNgFgOgQQgbgegRgnQgVAJgpgoQgzgxgjgKQg1gMgQgHQgXgKgfgnQgZgfgNhYQgIg6gChFQgOgBgEgCIgLjJQgBgOgEgGQgFAFgBAPIgMDJIgNACQgKCvglAvQggAngWAKIhFATQgjAKg0AxQgpAogUgJQgRAngcAeQgNAQgNAFQgJAEgJAAQgKAAgGgFQgHgFgGgQQgGgOgBgLQgGhjBRhnQATgXARABQAFABAGAEQAGACAJAHIBSi9IgFg3QgWgIgFgJQgGhagBgrQgChOAIg5QgjgHgggIQAniYAQiGQAIhDAAgkQgggEgygNQhkgahagqIAIgTQiAgYiVhVQh1hDgngrQgUgYgGgEQgbgWgwgMQgSgEgcgEIgvgFQgfgFgMgJQgJgIgCgMQgCgMAIgIQAJgJAaADIB7AOIhkgvQgUgKgLgNQgOgRAIgPQAPgQBCAQQA+APApAbQg1glgYgWQgtgpARgWQAMgPBGAlQBGAlAlAoIARgjQAJgPAPgRQAOgRANgEQAJgDAJADQAJACAEAIQAEAHgDARQgFAVgLATQgOAYgFAPQgWA7APA1QAQA2AyARQAeAKBFAQQATAHAbARQAfASAPAHQA+AcArAMIAIgjQDLAeDmgiIABAAIAAgoQhrgRhZg0QjWh6iFlAQgaAMgdgDQgdgCgWgRQgWgSgGgdQgHgeANgYQAOgYAegIQAegHAWARQgaiuBRkJQAUhAAsglQArgmA0ADQA3AEAjBAQAAgnAegmQAfgmAmgIQArgJAnAcQAhAXAUAoQAdhfBJgFQAqgDAfAeQAcAaAGAlQAFglAhgZQAggZAkAFQAqAGAZAbQAXAZAFAoQAIggAggVQAggWAgAHQAoAJAZAgQAWAcADAlQAagwAlgTQATgKAYADQAYAEAPAPQAUAUARAnQATApAJAvQATBfABBvQAABpgQBaQAWgKAVgBQATAAAOAGQAWAKALAYQALAZgIAVQgMAggoARQgfANghAAQgMAAgGAEQgFADgEAOQgtCRhhB0QhjB3iFA/QhnAyh2AKIAFAuQAQAEAyAEQAxAEAeAAQBVAAA+gDQBHgEBHgJIATgEIALAUIAEAJQAhgHAygSQA4gUAogVQAZgNAhgJIAygNQA1gQAUgzQAUgzgRg9QgEgQgMgZQgJgUgDgVQgCgQAFgIQAEgHAKgCQAJgCAIAEQANAFANASQAOASAHAQIAOAkQAogkBJgfQBKgeAJAPQAPAYgwAlQgaAVg4AeQAsgXA/gJQBDgKANARQAHAQgPAPQgNANgVAHIhnAnIB8gEQAaAAAIAJQAHAJgDAMQgDAMgKAHQgMAIgfACIgvABQgcABgTADQgxAIgdATQgGAEgWAVQgqAoh0A8QiWBNh+AUIACAKQADAQgEAJQgEAHgNAIQhzBCi9AOQAsCjAmDKIgxAOQAIA+gCBbQgBAzgGBfQgEAIgRAFIgFA2IBSC+QAFgGAJgEQAGgEAGgBQARgBASAXQBSBmgHBkQAAAKgGAPQgGAQgHAFQgGAGgJAAQgJAAgKgFg");
	this.shape_1.setTransform(0.0239,146.4118);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0A0A0A").s().p("An8U8QgHgFgGgQQgFgOgBgLQgGhkBRhmQATgXAQABQAHABAFAEQAJAEAGAGIB6huIgGg3QgVgIgFgJQgHhhAAgkQgChOAIg4IhEgQQAniYAQiGQAJhCAAglQgggEgygNQhkgZhagrIAIgTQiAgYiWhWQh1hCgmgrQgUgYgGgEQgcgWgvgMQgSgEgdgDIgugGQgfgEgMgKQgJgIgCgMQgCgMAHgIQAKgJAaADIB7AOIhkgvQgUgKgLgNQgOgRAIgPQAPgQBCAQQA8APApAaQg0gjgXgWQgtgqARgWQALgOBGAkQBGAlAlAoIASgjQAIgPAPgRQAPgRANgEQAJgDAJADQAJADAEAHQAFAJgEAPQgFAVgLATQgOAYgGAQQgWA7AQA0QAQA2AyARQAdAKBGAQQASAIAcAQQAfASAPAHQA8AbAtAMQAEgRADgRQDMAcDmggIABABIAAgpQhrgRhZgzQjXh8iEk/QgaAMgdgCQgdgDgWgRQgWgSgHgdQgHgeAOgYQAOgYAegHQAegIAWARQgaiuBRkJQATg/AsgmQAsgmAzADQA4AEAjBAQgBgnAfgmQAfgmAmgIQArgJAnAcQAhAXAUAoQAdhfBJgFQAqgDAfAeQAbAaAGAlQAFglAhgZQAhgZAjAFQArAGAYAbQAYAZAEAoQAJggAggVQAggWAgAHQAoAJAZAgQAWAcADAlQAagwAlgTQATgKAXADQAZAEAPAPQAUAUARAnQATApAJAvQATBfAABvQABBogQBbQAWgKAVAAQATgBAOAGQAWAKALAYQALAZgJAWQgMAfgnARQgfANghAAQgOABgEADQgGAEgEANQgsCQhhB1QhjB3iFA/QhoAyh1AKIAFAuQAQADAyAEQAxAEAeAAQBXAAA7gDQBJgEBGgIIASgEQAKAOACAFIADAJQAhgHAzgRQA4gUAogVQAYgNAhgJIAzgNQA1gQATgzQAUgzgQg9QgFgQgLgZQgJgUgEgVQgCgQAFgIQAFgHAKgCQAIgCAJAEQAMAFAOASQANATAHAQIAPAjQAogkBJgfQBJgeAKAPQAPAYgwAlQgZATg3AfQArgWA9gJQBDgKAOARQAHAQgQAPQgMANgVAHIhoAnIB9gEQAZgBAJALQAHAIgDAMQgDAMgKAHQgNAIgfACIgvABQgcABgTADQgwAIgdATQgGAEgXAVQgqAohzA7QiWBOh+AUIACAKQACARgEAIQgDAGgOAJQhzBDi9ANQAuCpAlDEIgxAOQAIA5gCBPQgBArgGBaQgFAKgaAJIgFA1IB5A8QAIgHAIgDQAFgEAGgBQARgBATAXQBRBmgGBkQgBALgGAOQgGAQgHAFQgGAFgKAAQgJAAgJgEQgNgFgNgQQgcgegRgnQgZANhCgVQhBgUgUAMQgzAegVAAQgdAAgigqQgWgcgNhKQgJg1gDhDIgJgCIgLjJQgBgOgFgGQgEAHgBANIgMDJQgFACgJAAQgICugmAwQgiAqgdAAQgVAAgzgeQgVgMhAApQhCArgZgHQgRAngcAfQgOAQgNAFQgJAEgJAAQgJAAgHgFg");
	this.shape_2.setTransform(0.0021,137.4493);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0A0A0A").s().p("An8UAQgHgFgGgQQgFgOgBgLQgGhkBRhmQATgXAQABQAHABAFAEQAIADAIAIIB5AJIgGg3QgVgIgFgJQgHhhAAgkQgChOAIg5QgmgHgegIQAniYAQiGQAJhDAAgkQgggEgygNQhkgahagqIAJgVQh9ghiZh+QhZhIhDhMQgUgYgGgEQgcgWgvgMQgSgEgdgDIgvgGQgegEgMgKQgJgIgCgMQgCgMAHgIQAKgJAaADIB7AOIhkgvQgUgKgLgNQgOgRAIgPQAPgQBCAQQA9APAoAaQgzgjgYgWQgtgqARgWQALgOBGAkQBGAlAlAoIASgjQAIgPAPgRQAOgRAOgEQAJgDAJADQAJADAEAHQAFAJgEAPQgFAVgLATQgOAYgGAQQgWA7AQA0QASA8AtAwQAiAjBEAsQAnAYA1AYQA8AcAtAMIAHgjQDLAeDngiIABAAIAAgoQhrgQhZgzQjXh8iEk/QgaAMgdgDQgdgCgWgRQgWgSgHgdQgHgeAOgYQAOgYAegIQAegHAWARIAAAAQgaiuBRkJQATg/AsgmQAsgmAzADQA4AEAjBAQgBgnAfgmQAfgmAmgIQArgJAnAcQAhAXAUAoQAdhfBJgFQAqgDAfAeQAbAaAGAlQAFglAhgZQAhgZAjAFQArAGAYAbQAYAZAEAoQAJggAfgVQAhgWAgAHQAoAJAZAgQAWAcADAlQAagwAlgTQATgKAXADQAZAEAPAPQAUAUARAnQATApAJAvQATBfAABvQABBogQBbQAWgKAVgBQATAAAOAGQAWAKALAYQALAZgJAWQgMAfgnARQgfANghAAQgNAAgFAEQgGAEgEANQgsCRhhB0QhjB3iFA/QhoAxh1AKIAFAuQAQAEAxAEQAyAEAeAAQBXAAA7gDQBJgEBGgJIASgEQAKAPACAFIADAJQAhgHAzgSQA4gUAogVQBHglAlggQAygsAWg6QAUgzgQg9QgFgQgLgZQgJgUgEgVQgCgQAFgIQAFgHAKgCQAIgCAJAEQAMAFAOASQANATAHAQIAPAjQAogkBJgfQBJgeAKAPQAPAYgwAlQgZAUg1AdQAqgVA8gJQBDgKAOARQAHAQgQAPQgMANgVAHIhoAnIB8gEQAbgBAIALQAHAIgDAMQgDAMgKAHQgNAIgfACIgvABQgcABgTADQgwAIgdATQgGAEgXAVQhFBChYA9QiaBsh7AcIADAOQACARgEAIQgDAHgOAIQh0BDi8ANQAuCpAlDEIgxAOQAIA5gCBPQgBArgGBaQgHAKgYAIIgFA2IB3gvQAJgJAJgEQAFgEAGgBQARgBATAXQBRBmgGBkQgBALgGAOQgGAQgHAFQgNAKgVgJQgNgFgNgQQgbgdgRgmQgdAZg+AcQhPAigHAFQgzAegWAAQgcAAgigqQgWgcgNhKQgJg1gDhDIgJgCIgLjJQgBgPgFgFQgEAGgBAOIgNDJQgEACgJAAQgICugmAwQgiAqgdAAQgVAAgzgeQgSgLhEgLQhAgLgbgUQgRAmgbAeQgOAQgNAFQgJAEgJAAQgJAAgHgFg");
	this.shape_3.setTransform(0.0021,136.4993);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0A0A0A").s().p("ABBTWQgWgcgNhKQgJg1gDhEQgGAAgDgBIgMjJQgBgPgEgFQgFAGgBAOIgMDJIgNACQgICtgnAxQghAqgdAAQgVAAg0geQgxgdiAiNIgBAAQgRAlgaAcQgNAQgNAFQgVAJgNgKQgHgFgGgQQgGgPgBgKQgGhkBShmQATgXAQABQAFABAHADQAHAEAHAHQAHAGACAGIBxB2IgFg3QgWgIgFgJQgGhhgBgkQgChOAIg5QglgHgegIQAniYAQiGQAIhDAAgkQgggEgygNQhkgahagqIAPgkQiBggiaiZQhYhZhBhcIgXgfQgZgZgugRQgRgGgcgHIgugKQgdgHgLgMQgJgJAAgMQgBgMAIgHQALgJAZAGIB5AdIheg7QgTgLgKgPQgLgSAJgOQARgPBAAYQA7AWAmAfQgxgrgVgYQgoguAUgUQANgNBBAsQBCAtAgArIAVggQAKgOARgPQAQgPAOgDQAJgCAJAEQAIAEAEAHQADAKgFAOQgIAVgNASQgQAWgIAOQgcA5AKA1QAKA/AoA0QAeAnA+AzQAlAeAxAcQAlAWAWALQAcAOAnAPIAFgXQDLAeDmgiIABAAIAAgoQhrgQhZg0QjXh7iEk/QgaAMgcgDQgegCgVgRQgWgSgHgdQgHgeAOgYQANgYAegIQAegHAXARQgairBQkMQAUhAAsglQAsgmAzADQA3AEAjBAQAAgnAegmQAfgmAmgIQArgJAnAcQAiAXATAoQAdhfBJgFQAqgDAfAeQAcAaAGAlQAFglAhgZQAggZAkAFQAqAGAZAbQAXAZAFAoQAIggAggVQAggWAgAHQApAJAYAgQAWAcADAlQAbgwAlgTQASgKAYADQAYAEAQAPQATAUASAnQASAoAKAwQATBfAABuQAABpgQBaQAugSAfAOQAVAKALAYQALAYgIAWQgMAggoARQgfANggAAQgNAAgFAEQgGAEgEANQgsCQhhB1QhjB3iFA/QhpAxh1AKIAFAuQAQAEAyAEQAyAEAdAAQBWAAA9gDQBIgEBGgKIATgDIALATQAjgNAagNQAVgLAkgVQAzgeAigcQA+gzAegnQAog0ALg/QAKg0gdg6QgHgPgQgVQgOgSgHgVQgFgPADgJQADgHAJgEQAJgEAJACQANADARAPQAQAPALAOIAVAgQAggrBCgtQBBgsANANQATAUgnAuQgWAZgwAqQAmgfA7gWQBAgYAQAPQAKAOgMASQgJAPgTALIheA7IB5gdQAZgGALAJQAIAHgBAMQgBAMgIAJQgLAMgdAHQg+AMgdALQguARgZAZQgHAGgQAZQhBBchWBXQiYCYiAAiIAEAaQACARgDAIQgEAHgNAIQhyBDi+AMQAtCrAmDDQgWAHgcAHQAJA5gCBOQgBApgHBdQgEAJgaAJIgGA2IBxh2QAHgPARgIQAHgDAFgBQAQgBATAXQBRBmgGBkQgBAKgFAPQgGAQgHAFQgGAFgKAAQgKAAgIgEQgNgFgOgQQgagcgRglIAAAAQh/CMgzAeQgzAegVAAQgdAAghgqg");
	this.shape_4.setTransform(0.025,130.8112);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},3).to({state:[{t:this.shape_2}]},3).to({state:[{t:this.shape_3}]},3).to({state:[{t:this.shape_4}]},3).to({state:[{t:this.shape_4}]},3).to({state:[{t:this.shape_3}]},3).to({state:[{t:this.shape_2}]},3).to({state:[{t:this.shape_1}]},3).to({state:[{t:this.shape}]},3).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125.1,0,250.3,286.2);


(lib.girlshaddow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AASYnQgSgEgPgRQgNgQgFgUQgHgfAMgyQAYhiAzhUQAVgiAVgHQAag5AghqQAlh8APgmQgcAIgoAIQhVARhXgCIhFCVQgrBbgbA+QACATgFAQQgcBigiBKQgTArgUAUQgOANgRAGQgTAHgRgEQgTgEgOgRQgOgQgFgUQgHgfAMgyQAXhhA1hVQANgWAMgJQA9iHAyh9QhagThOgmIg8gjQAbjWAMiOQAHhYABhVIgBhEQgVgTgagcQg1g4gdguQgSgcgZgtQgfgHgnguIjdj/Qgsg0gZgYQgogpgmgYQgWgOgQgDQgJgBgqAHQgmAGgXAGQgcAHgNgEQgLgDgFgHQgGgHADgJQAEgLAYgHQASgFAggMIAygQIhWgEQg+gDACgaQADgOA5gJQA5gJAuAGQg2gIghgOQgugUAEgZQAGgPBEACQBHADAsAUQgBgXADgSQADgNAJgaQAFgTALgJQAGgFAJgBQAIgBAGAFQAHAFADAPQADAUgDAaQgFAhABAOQAAA0AfA4QAXApAuA0QBIBTBhBcQBCA+BzBkQARgQAIgMIBMAyQBkA1BxAQIABgHIAIgtQAEgaAAgTQg6gMgxgRQisg7hhh5QhXhtgYigQgEgXgFgvIgEAAQgRACgJgEQgKgDgIgLQgQgVAEgZQACgMAHgKQAIgKALgEQALgFARADQgSgZgDgmQgDgdAGgxQAEggAdg4QAZgyAXgeIAMgPIgLgOQgTAMgXALQhaApg0gjQgjgZgDgzQgDgvAZgqIg1AFQggAEgUgHQgkgMgNgpQgMgpATgiQASghAngPQAlgPAnAHQgYgbACgmQACgmAYgaQAYgZAmgFQAlgFAgAQQAeARATAgQASAgABAjQAmgXAZgJQAmgMAdAMQAdALAQAhQAPAeAAAkQAAAqgRAoQgQAngdAfQAGABAIAHQAEADAGAIQA1ghBcgjQBkgnCeAIQClAIB2A3QCoBQBwBkIAQgPIAHgFQgshDATg1QAPgrAygSQAugRAxALQgZgrAXgzQAXgzAxgKQAwgKAqAmQApAmgGAyQAkgTArAHQAsAHAbAeQAcAfAFArQAEArgVAkQgWAjgoAPQgpAQgogLQAWALAIAZQAJAYgIAZQgNArg1AaQguAXg4gFQg2gGgtgeIgVATQBGB1gDBnQgEB6hsBRQAbgDAZASQAaATgDAaQgFArgkAOQgiAMgfgYQg2BlgtA5QhABQhMAiQg3AZhJAGQg1AEhQgGIgggCQgIAvgBAkQBfAEAngEQAxgFA8gZQBNgfA/giIAPAgQDlhvCGhYQA7gmAhghQAsgtAPgyQAEgMAHggQAEgYAJgTQAHgNAIgEQAHgDAIAEQAIADAFAHQAHAKABAVQABAVgFAWQgCAJgLAgQBTgMBCAWQARAFAGAEQALAGABAKQABANgTAFQgHADgfAEQgdAEg7gBQAbAFAiAMIA7AXQAVAJAIAEQAOAJACALQABAIgLAFQgLAFgMABQgLAAgOgDIhjgYIBdA7QAUANABAMQABAKgHAGQgHAGgKABQgKAAgIgDIgRgIIhMgpQgYgOgOgCQgPgCgZAIQgsANgxAcQggASg3AlIkZC5QgRALgMAGQg0BKg/BDQgLA1AdBQQAdBQA+BXQA0BIAvAqQAYAVANAGQgRAZgjAiQhIBFhiAzQAPAXgJAWIALgUIjSHyQgWBMgfBDQgTArgUAUQgOANgRAGQgMAFgLAAIgNgCgAJUnoIADgBIgCgCg");
	this.shape.setTransform(120.701,157.6396);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4).to({skewY:180,x:120.699},0).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,241.4,315.3);


(lib.Group = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFED4").s().p("AgbKXQgvAAgdgiQgigoADhLQACglAigSQAggQAsAIQAsAIAdAdQAiAhAAAxQAAAngjAcQgiAagpAAIgCAAgAh3DNQgTiPAOjaQANjUAjiUQAnihAqAQQBiAAAYCEQAIAtAABAIgCBXIgCAYQgODdgfCqQgyEThKgBIgIABQg0AAgViYg");
	this.shape.setTransform(957.4628,66.6074);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFED4").s().p("AjgJ3IACgBQgkgDgPgzQgLgfgCg2IAAh6QAAieAYjAQASiLAmjOIgGgGQg+gGgMAAIhQgOQgjgJgZgOQgkgUAAgZQAAhHAWgPQGQhtCzgMQFEgXAADEQAAA0gQASQgPAQgxAIQhKAJhVARQh9AagSAWIAED3QADCxgQBzQgwFbj2AeIAEABg");
	this.shape_1.setTransform(885.5,65.3292);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFED4").s().p("ABJHqQgYiEAHi9IhvAEQhMADgkgDIgIAmQgcCWggA7Qg0BfhqAAQgRAAgBi1QgBi5AQjXQATj5AhiZQAoi4A1gEQA6gEAaAbQAVAVAFA0IACHiIDdAOQAUiQAsiYQAghyBAiwQAEgJAYgIQAVgHAPAAQAKAAAnAPQAqAPADAIIAMBIIAACMQAADogpFjQg5HlhYATQgTAIgRAAQhVAAggi5g");
	this.shape_2.setTransform(786.0188,75.0785);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFED4").s().p("AldJVQiahsAAkWQAAiDBCiqQBEiwBsiMQB4ibCDg7QCUhECMBGQAZANAcAiQAfAmAAAZQAAAUgMAXQgNAbgPgEQh1gdiLBvQh9BlhcCpQhcCpgFCMQgFCcBwAuQCEAuB3iRQAug5AhhIQAehCAHgyQhZgMgzgKQhegTgbgfQgNgPAPguQASg2AzgEQCEgKCRAaQDBAigCBRQgHDTifCzQiTCmjGA6QhPAYhGAAQhtAAhUg6g");
	this.shape_3.setTransform(684.4016,66.1266);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFED4").s().p("AioIbQgPgSgUgxQgCgGgCgCIAAhmQAAiEAjkeQAfkDAaiAQAMhCAFgNQASgtApAAQBVAABEAoQBNAtARBNIAABgQAACsgRCPQgdDghIDEQgPA9g2ApQg1AohBAAQgtAAgagdg");
	this.shape_4.setTransform(601.2,65.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFED4").s().p("AACEtQggg/hAiOQg7iEgeg2IgGBUQgSD4gVBeQgjCbhOACQhVAQgWiaQgSh+AbjeQAWi1ApiuQAmijAPABQBYALAyAdQAxAcAoA/QAcAsA5B3QBOClAvBaIA4l9QAXhWAtgcQAagQBCgEIAUgCQAqAAAbAOQAhAQACAiIACAaQACA6gSCNQgTCWgeCRQhPGDhOAQQgKACgKAAQhlAAhvjSg");
	this.shape_5.setTransform(522.5958,70.6992);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFED4").s().p("AmGIyQgYgRgPglQgDgJgEgwIgFg7IgCgoQAAiSAhldQAQiwARiSQBMhVCMgWQCGgVCKAsQCRAuBZBkQBjBvAACVQAAESkPDSQjSCjkiBMQgmAAgZgSgAijlBIACAGQgBBrgHDLQgGC5AABmIAAANQABAHAFAGQCfhVBmh0QCAiQAAiYQAAhEhUguQhHgohKAAIgQAAQiKAAAAAWg");
	this.shape_6.setTransform(350.4,59.1884);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFED4").s().p("Aj7HlQhWg6gvhnQgthigCh4QgCh3AqhyQBUjhCGhsQDCieENCBQByA3AXCsQAVCdg7C/Qg8DChtB/Qh4CNiFAAQh9AAhdg/gAhkiDQhUCwAFCfQAnBwBSg7QBGgzBJiUQBGiOATh6QAWiHg+gMQiJAVhhDJg");
	this.shape_7.setTransform(250.7961,54.7885);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFED4").s().p("Aj7HlQhWg6gvhnQgthigCh4QgCh3AqhyQBUjhCGhsQDCieENCBQByA3AXCsQAVCdg7C/Qg8DChtB/Qh4CNiFAAQh9AAhdg/gAhkiDQhUCwAFCfQAnBwBSg7QBGgzBJiUQBGiOATh6QAWiHg+gMQiJAVhhDJg");
	this.shape_8.setTransform(152.1961,54.7885);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFED4").s().p("AldJVQiahsAAkWQAAiDBCiqQBEiwBsiMQB4ibCDg7QCUhECMBGQAZANAcAiQAfAmAAAZQAAAUgMAXQgNAbgPgEQh1gdiLBvQh9BlhcCpQhcCpgFCMQgFCcBwAuQCEAuB3iRQAug5AhhIQAehCAHgyQhZgMgzgKQhegTgbgfQgNgPAPguQASg2AzgEQCEgKCRAaQDBAigCBRQgHDTifCzQiTCmjGA6QhPAYhGAAQhtAAhUg6g");
	this.shape_9.setTransform(50.4016,66.1266);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,971,142.6), null);


(lib.Path_56 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Path_57();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_56, new cjs.Rectangle(0,0,31,9), null);


(lib.Path_55 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#E0A055","#DF9753","#DC7F4D","#DB794C","#D6764A","#C96E45","#B3613B","#934E2E","#6B361E","#562915"],[0,0.09,0.243,0.271,0.388,0.514,0.651,0.788,0.929,0.996],-14.3,-9.3,0,-14.3,-9.3,25.5).s().p("AgdCEQgPgwANhDIAGgeQABgIgJAJQgUATgMAsQABgeAOgYIgLAEQgLAHgFAJIgCgFQAKgSAigjQAZgZgJACQgaAHgXAWQAVghAugMQAIgBAEgBQADgCgHgBQgmgJgPglIAAgBQANALAVAIQApAPAogUIALgFQgsAigZAhQg4BMAdBwIgGABIgHgBg");
	this.shape.setTransform(7.9625,13.8625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_55, new cjs.Rectangle(0,0.6,16,26.599999999999998), null);


(lib.Path_53 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Path_54();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_53, new cjs.Rectangle(0,0,9,6), null);


(lib.Path_51 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F7EEE2","#ECE7DD","#CED6D0","#A0BABB"],[0.078,0.263,0.588,1],0.2,-0.1,0,0.2,-0.1,2.5).s().p("AABAGQgSgDAIgFQAJgIAJAKQAIAHgJAAIgHgBg");
	this.shape.setTransform(1.1987,0.6489);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_51, new cjs.Rectangle(-0.1,0,2.6,1.3), null);


(lib.Path_50 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FBFAF8").s().p("AgHAGQgBgCACgEQAGgHAEABQAHACgEAFQgCAFgFABIgDABQgBAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAAAg");
	this.shape.setTransform(0.8595,0.7447);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_50, new cjs.Rectangle(0,0,1.7,1.5), null);


(lib.Path_49 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FBFAF8").s().p("AgGALQgMgFgBgHQAAgFAIgDQARgJAKALQAEAFAAAFQgBAGgGADQgEACgEAAQgFAAgGgDg");
	this.shape.setTransform(1.9775,1.366);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_49, new cjs.Rectangle(0,0,4,2.8), null);


(lib.Path_48 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#12BAC7","#76B7D7"],[0,1],-37.9,0,38,0).s().p("AjVE/IATguIgWgFQgkgNgngsQhChJgShwQgShyBIh+QAkhAAogoIHrAAQAoAoAkA/QBIB/gSByQgSBwhBBIQgoAsgkAOIgVAFIASAug");
	this.shape.setTransform(37.926,31.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_48, new cjs.Rectangle(0,0,75.9,63.9), null);


(lib.Path_46 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E0A269").s().p("AAJARQAKgKADgKQAFgQgOgHQgNgGgOAJQgKAGgEAJQACgIANgKQANgKAPAFQAPAGgCAQQgCAMgMANQgMANgPAEQAMgFAKgLg");
	this.shape.setTransform(2.8618,3.3055);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_46, new cjs.Rectangle(0,0,5.7,6.7), null);


(lib.Path_45 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag4AZQgLgSA4gaQAbgOAdgKQATAEgHAVQgGASgXAUQgXAUgWAEIgIAAQgUAAgLgTg");
	this.shape.setTransform(5.8857,4.4302);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_45, new cjs.Rectangle(0,0,11.8,8.9), null);


(lib.Path_44 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFB000","#FFB80C","#FFCC2D","#FFE95C","#FFE967","#FFE983","#FFE9B1","#FFE9D9"],[0,0.122,0.345,0.608,0.667,0.769,0.898,1],-14.9,-30.8,0,-14.9,-30.8,96.8).s().p("AgWAZQhCgNgeAAQApgXB7gqQgSBWBbAVIiNgdg");
	this.shape.setTransform(11.925,5.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_44, new cjs.Rectangle(0,0,23.9,10.8), null);


(lib.Path_43 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgrA/QgpgSgJggQgJgfAigTQAdgPA1gLQAbgGAWgCQAbgEAEAGQAEAEgIAMQgWAiAMAMQAWAUgZAJQgZAKgjgTQgjgSgHAEQgIADATAbQATAfgFAJQgBAEgHAAQgLAAgYgKg");
	this.shape.setTransform(9.5104,7.3611);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_43, new cjs.Rectangle(0,0,19.1,14.7), null);


(lib.Path_42 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E0DCC0").s().p("AiVADIFdgGIh+AFQgjABgnAAIiVAAIgyABg");
	this.shape.setTransform(20.025,0.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_42, new cjs.Rectangle(0,0,40.1,0.7), null);


(lib.Path_41 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DDDDDD").s().p("AgZAgQgCgBgBgDQANAJANgDQAHgDAGgHQAEgEACgKQABgGAAgNQAAgSgMgGQgMgGgKAIIAFgFQAEgDAEgBQAPgEAJAMQAJALgBAQQgBAUgKAOIgCACQgFAHgHACQgFACgGAAQgLAAgHgKg");
	this.shape.setTransform(2.8803,4.214);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_41, new cjs.Rectangle(0,0,5.8,8.5), null);


(lib.Path_40 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#44BC1D").s().p("AgNAIIABAAQAHAHAIgJQAFgGACgJIACgCQABgBAAAAQAAAAABAAQAAAAAAAAQAAAAAAABQgBAFgEAHQgDAHgFACQgCADgEAAQgEAAgEgFg");
	this.shape.setTransform(1.4,1.2908);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_40, new cjs.Rectangle(0,0,2.8,2.6), null);


(lib.Path_39 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DDDDDD").s().p("AgKAuQgVgDgGgWIgBgHQALASANADQAJACAIgEQAGgDAFgJQAGgIAFgNQAHgTgKgNQgKgOgNADIAGgCQAGgBAEABQASAEAEATQAEAQgHAQQgLAXgPAJIgDABQgFADgFAAIgFAAg");
	this.shape.setTransform(3.8696,4.6505);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_39, new cjs.Rectangle(0,0,7.8,9.3), null);


(lib.Path_38 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#44BC1D").s().p("AgUAEIABgBQAEAFAGABQAGABAFgEQAHgGAGgIIADgDQABAAABAAQAAAAAAAAQAAAAABAAQAAABgBAAQgBAGgHAGQgHAGgFACIgHACQgIAAgFgIg");
	this.shape.setTransform(2.0542,1.2058);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_38, new cjs.Rectangle(0,0,4.1,2.4), null);


(lib.Path_37 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#8D48A3","#803399"],[0,1],-228,0,228,0).s().p("EgjnABUIAAinMBHPAAAIAACng");
	this.shape.setTransform(228.025,8.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_37, new cjs.Rectangle(0,0,456.1,16.8), null);


(lib.Path_36 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIAuIgBgBQAQg1gFgkIACgBQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAJAUgGAaQgEAXgLAWIgBAAIAAAAg");
	this.shape.setTransform(1.033,4.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_36, new cjs.Rectangle(0,0,2.1,9.3), null);


(lib.Path_35 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#8D48A3","#803399"],[0,1],-228,0,228,0).s().p("EgjnAAoIAAhPMBHPAAAIAABPg");
	this.shape.setTransform(228.025,3.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_35, new cjs.Rectangle(0,0,456.1,7.9), null);


(lib.Path_34 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ED4C8A").s().p("AACCnQhIgCg+gVQhBgWgdgTQgvgggCgjQgUAIgRgEQgTgFgHgTQgEgOADgNQAEgQAMgGQgQgEgGgUQgGgTAIgRQADgIAHgFQgKgHgEgOQgEgOADgNIAEgKIgCANQgBAIACAGQAFAOAOAJQAPAJAPAAQASgBAIgOQAAgBABAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAQAAAAABAAQAAABgBAAQAAAAAAABQgIASgKAFQgGAFgJABQgCALAGAHQAFAHALgEQAJgEADgJQACgGgDgKQAEAAADACIABgDIALAHQgEgZAMgVIAFgQQAEgJADgFIgBAWQABALAGAIQALAQAUAHIACABIAJADQAAAAABAAQAAABAAAAQABABAAAAQAAABABABQAAADgBACQAFAUAUAWQAPARAWAPQAhAVBEAWQAgALAYADQAYAEAogDIAfgCQARgCANgEQAJgCAQgIQARgIAJgCQADgBADADQAJgKAFgCIAAgBQACgDAEAAQADAAADABIAEAFIADAFIANAHQAaAJAOgKIAAABQgNANgNACQgBAMAGAFQAJAIATgBQASgBAKgKIADgDQADgEgBgEQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABABQAFAMgJAOQgIAMgOAFIAAAAQAFAUgSATQgPAQgVAGQgNAEgNAAQgPgBgJgHQgLAZgiAFQgiAEgRgVQgKAIgSAEIgeAEQgZAEgbAAIgQgBg");
	this.shape.setTransform(35.0859,16.7673);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_34, new cjs.Rectangle(0.1,0,70.10000000000001,33.6), null);


(lib.Path_33 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#79645E").s().p("Ah5BxIAAjhIDyAAIAADhg");
	this.shape.setTransform(12.15,11.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_33, new cjs.Rectangle(0,0,24.3,22.5), null);


(lib.Path_32 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#79645E").s().p("AiXBxIAAjhIEvAAIAADhg");
	this.shape.setTransform(15.15,11.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_32, new cjs.Rectangle(0,0,30.3,22.5), null);


(lib.Path_31 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#79645E").s().p("Ah4BxIAAjhIDxAAIAADhg");
	this.shape.setTransform(12.05,11.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_31, new cjs.Rectangle(0,0,24.1,22.5), null);


(lib.Path_30 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_29 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#79645E").s().p("Ah3BxIAAjhIDvAAIAADhg");
	this.shape.setTransform(11.95,11.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_29, new cjs.Rectangle(0,0,23.9,22.5), null);


(lib.Path_28 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#79645E").s().p("Ah5BxIAAjhIDyAAIAADhg");
	this.shape.setTransform(12.15,11.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_28, new cjs.Rectangle(0,0,24.3,22.5), null);


(lib.Path_27 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#79645E").s().p("AiVBxIAAjhIErAAIAADhg");
	this.shape.setTransform(15,11.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_27, new cjs.Rectangle(0,0,30,22.5), null);


(lib.Path_26 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_25 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#79645E").s().p("AhxA4IAAhvIDiAAIAABvg");
	this.shape.setTransform(11.35,5.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_25, new cjs.Rectangle(0,0,22.7,11.2), null);


(lib.Path_24 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#79645E").s().p("AhKBEIAAiHICVAAIAACHg");
	this.shape.setTransform(7.475,6.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_24, new cjs.Rectangle(0,0,15,13.7), null);


(lib.Path_23 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#79645E").s().p("AhKBEIAAiHICVAAIAACHg");
	this.shape.setTransform(7.45,6.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_23, new cjs.Rectangle(0,0,14.9,13.7), null);


(lib.Path_22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#79645E").s().p("AhKBEIAAiHICVAAIAACHg");
	this.shape.setTransform(7.475,6.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_22, new cjs.Rectangle(0,0,15,13.6), null);


(lib.Path_21 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#79645E").s().p("AhKBEIAAiHICVAAIAACHg");
	this.shape.setTransform(7.45,6.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_21, new cjs.Rectangle(0,0,14.9,13.6), null);


(lib.Path_20_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C9CBC4").s().p("AgKgSIAJAAIAEAAIACAAIADAAIASAgIgZgDIgaAIg");
	this.shape.setTransform(2.625,1.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_20_0, new cjs.Rectangle(0,0,5.3,3.9), null);


(lib.Path_20 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#79645E").s().p("AhKBEIAAiHICVAAIAACHg");
	this.shape.setTransform(7.475,6.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_20, new cjs.Rectangle(0,0,15,13.7), null);


(lib.Path_19 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#79645E").s().p("AhKBEIAAiHICVAAIAACHg");
	this.shape.setTransform(7.45,6.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_19, new cjs.Rectangle(0,0,14.9,13.7), null);


(lib.Path_18_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2FB9D8").s().p("AicAgQg6AAgVgYQgOgPAEgYQAIAsBRAAIE5AAQBRAAAIgsQAEAYgOAPQgVAYg6AAg");
	this.shape.setTransform(24.675,3.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_18_0, new cjs.Rectangle(0,0,49.4,6.4), null);


(lib.Path_18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#79645E").s().p("AhKBEIAAiHICVAAIAACHg");
	this.shape.setTransform(7.475,6.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_18, new cjs.Rectangle(0,0,15,13.7), null);


(lib.Path_17 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#79645E").s().p("AhKBEIAAiHICVAAIAACHg");
	this.shape.setTransform(7.45,6.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_17, new cjs.Rectangle(0,0,14.9,13.7), null);


(lib.Path_16_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E3A78B").s().p("AgoASQgLgRABgSQAAgNARgJQAUgLAaAMQAcAMAIAfQAHAfgRAHIgWACQgoAAgRgbg");
	this.shape.setTransform(5.0832,4.5082);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_16_1, new cjs.Rectangle(0,0,10.2,9), null);


(lib.Path_16_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EACB8B").s().p("AhIAGIBJgUIBIAHIhJAWg");
	this.shape.setTransform(7.3,1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_16_0, new cjs.Rectangle(0,0,14.6,3), null);


(lib.Path_16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#79645E").s().p("AhkA4IAAhvIDJAAIAABvg");
	this.shape.setTransform(10.125,5.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_16, new cjs.Rectangle(0,0,20.3,11.2), null);


(lib.Path_15_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C9CBC4").s().p("AgQgIIAJABIAHgEIARAVIgSgCIgJAEg");
	this.shape.setTransform(1.65,1.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_15_0, new cjs.Rectangle(0,0,3.3,2.5), null);


(lib.Path_15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#EAF6F9","#C0E4ED"],[0.039,1],0,0,0,0,0,1.4).s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape.setTransform(1.425,1.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_15, new cjs.Rectangle(0,0,2.9,2.9), null);


(lib.Path_14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#EAF6F9","#C0E4ED"],[0.039,1],0,0,0,0,0,2).s().p("AgNAOQgGgGAAgIQAAgIAGgFQAGgGAHAAQAJAAAFAGQAGAGAAAHQAAAIgGAGQgFAGgJAAQgHAAgGgGg");
	this.shape.setTransform(2.025,2.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_14, new cjs.Rectangle(0,0,4.1,4.1), null);


(lib.Path_13_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E3A78B").s().p("AgJAaQgRAAgEgOQgFgMAOgNQARgPAUADQAWADgHAaQgBAGgGAFQgLALgVAAIgBAAg");
	this.shape.setTransform(3.2923,2.6582);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_13_0, new cjs.Rectangle(0,0,6.6,5.3), null);


(lib.Path_13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CBD4E5").s().p("ABoBDQhUgQg6gbQhOghgfgPQg/gfgqgfQBGAOBOA9QAeAYAiAIQAeAIAogFQAjgCAQAAQAbAAAXAIQASAFAZAOIAqAWIAkAPQhqgMgqgHg");
	this.shape.setTransform(25.25,8.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_13, new cjs.Rectangle(0,0,50.5,17.3), null);


(lib.Path_12_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#607256").s().p("AgeARIAQgpIAtAGIgQArg");
	this.shape.setTransform(3.1,2.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_12_1, new cjs.Rectangle(0,0,6.2,5.1), null);


(lib.Path_12_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CBD4E5").s().p("AAUBVIhUgtQgegQgjgDQgbgDgqAFQgdADgUgCQgZgDgXgMQgOgHgZgTQgbgVgOgHQgmgVgagKQgmgOgfAAIgBgBQAZgLAiAFQAVADAnANIB+AsQA4AUBMAMQAsAGBaAKQCWAPBogrIA7gaQAjgOAbgGQAhgHApAIQAtA7AOAqIgWAFQgNgJgIgNQgPgWgMgCQgXgHgYARQgbAXgPAJQgjAXgxABQgMABgXgIQgYgJgLgBQgUgBgaARQgcAWgOAHQgMAHgSAAQgYAAgjgOg");
	this.shape.setTransform(51,9.9339);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_12_0, new cjs.Rectangle(0,0,102,19.9), null);


(lib.Path_12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E3A681").s().p("AASAwQgSgHgVgkQgYglgXgMQACgGgBgBQASAEAKADQAnAQAJAcQAIAfAPAHQALAFAaAEQgOAFgOAAQgMAAgLgEg");
	this.shape.setTransform(6.9,5.2132);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_12, new cjs.Rectangle(0,0,13.8,10.5), null);


(lib.Path_11_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#607256").s().p("AghgYIAtgHIAWA5QgZAFgVAAg");
	this.shape.setTransform(3.375,3.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_11_1, new cjs.Rectangle(0,0,6.8,6.3), null);


(lib.Path_11_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CBD4E5").s().p("AixAwQARgFARgLIAagSQAegRAoAQQAoARBGggQAPgGARgOIAdgYQAQgMAPAOQAJAIAOAWQgoAKgjAMIhHAZQgmAMgjAEQgaAEgeAAQglAAgrgFg");
	this.shape.setTransform(17.775,5.2614);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_11_0, new cjs.Rectangle(0,0,35.6,10.5), null);


(lib.Path_11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#79645E").s().p("Ag2A6IAAhzIBtAAIAABzg");
	this.shape.setTransform(5.475,5.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_11, new cjs.Rectangle(0,0,11,11.5), null);


(lib.Path_10_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E3A78B").s().p("AA0AkIgDgDQggAHgdgGQg8gLAJhAQAQBHBUgGQgDgIACgOIACgMQAGAaAVAaQgJgDgEgDg");
	this.shape.setTransform(6.5223,4.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_10_3, new cjs.Rectangle(0,0,13.1,8.4), null);


(lib.Path_10_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ED4C8A").s().p("AgbBjQgCgIgLgHIgTgHQglgPgWgUIgBgCQgOgKgPgWQgUgaADgSQABgGgFACIgHADQgQAGgNgDIgDgCQAWgGASgPQAXgUgGgaIgDgJQATAFALAMQALgUAdACQAbABAOARQAJgKARgCQAQgDANAFQAUAGALAQIAAAAQAagGAXASQAXARgCAZQAVgEATAIQAWAJAEATQAOgEAQAGQgIABgDAIIgIAhIgKAYQghAng3AEQgLAAgkgCQgUgBgJgCQgRgHgJgBQgEgEgCAEQgHAJgGAFQAEgJgCgHg");
	this.shape.setTransform(20.875,11.4448);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_10_2, new cjs.Rectangle(0,0,41.8,22.9), null);


(lib.Path_10_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EACB8B").s().p("AgYAEIAWgLIAbADIgYAMg");
	this.shape.setTransform(2.5,0.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_10_1, new cjs.Rectangle(0,0,5,1.6), null);


(lib.Path_10_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CE9000").s().p("AhBgUQgNgXgDgXQBEAqBFARQheg3BaAuIATAJQADAhAGAgIACAJQhlgKguhNg");
	this.shape.setTransform(8.2,6.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_10_0, new cjs.Rectangle(0,0,16.4,13.4), null);


(lib.Path_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E3A681").s().p("Ag/gKIAJgPQALAGAOAEQASAGAWACIAeAAQAUAAACAIQgPACgJAGQgKAFgGAMQgpgYgtgMg");
	this.shape.setTransform(6.35,2.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_10, new cjs.Rectangle(0,0,12.7,5.3), null);


(lib.Path_9_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Path_9_4();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_9_3, new cjs.Rectangle(0,0,8,37), null);


(lib.Path_9_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ED4C8A").s().p("AgQC2QhIgBg/gVQhAgVgfgUQgvgfgCgjQgUAIgRgEQgTgFgHgTQgEgOADgOQAEgPAMgGQgUgFgEgcQgEgcARgMQgKgHgEgOQgFgOAEgNQAEgLAFgHQgEAXANAPQAKANARACQARABANgJQAKgHADgLQAEgLgEgLQAbAFAbglIgDAMQgCANADAMQADANAKAHQAVAQAagNQACAQARAEQAPAEARgHQAUgIAHgTQAGgRgFgUIAHAGQAFAFABAHIABANQgCAYAcANQAZAMAcgQQAPgIAJgPQAAAGgEAHQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAIABABQANAQAZgBQAYgCAQgOIAEgFQAJAagLAPQgDgCgCADQgKARATAQQAOAMAXgCQgBAJAFAHQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAIACABQABAAAAAAQABAAAAAAQABAAAAAAQAAAAAAAAQAJAAATgKQAKgEARAFQARAEAGAKIACABQAWAPAegBQAhgBAJgZQAFgPgKgPQgJgOgQgHQASgEAIALQABADADAAQAKgDADgKQACgJgFgJQgGgLgQgCQAIgCAGADIABAAQADABACgCQAKgSgNgLQAKADAKAHQAJAHADAKQAEAMgHAHQAEAFACAGQACAJgCAIQgCALgHADQAHAJABASQAAAOgEAMQgJAbgcAIQAHANgJAOQgIAOgPAFQAGATgSAUQgPAQgVAHQgNAEgNgBQgPgBgJgGQgLAZgiAFQgiAEgSgVQgJAIgSAEIgeAFQgaAEgcAAIgNgBg");
	this.shape.setTransform(37.1059,18.2591);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_9_2, new cjs.Rectangle(0,0,74.3,36.5), null);


(lib.Path_9_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CE9000").s().p("AjhhzQAugFAqgHQBRgOBVgpQBUgoBJg8QAACvAUCVQAKBKAJAnIkwCAQhVj0g9iag");
	this.shape.setTransform(22.55,28.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_9_1, new cjs.Rectangle(0,0,45.1,56.6), null);


(lib.Path_9_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#12BAC7","#76B7D7"],[0,1],-97.2,0,97.3,0).s().p("AvMKxIIc8GIV8GmIoacFg");
	this.shape.setTransform(97.25,110.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_9_0, new cjs.Rectangle(0,0,194.5,221.9), null);


(lib.Path_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJAKQgEgFAAgFQAAgFAEgEQAEgEAFAAQAFAAAFAEQAEAEAAAFQAAAFgEAFQgFAEgFAAQgFAAgEgEg");
	this.shape.setTransform(1.4,1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_9, new cjs.Rectangle(0,0,2.8,2.8), null);


(lib.Path_8_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Path_8_3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_8_2, new cjs.Rectangle(0,0,9,37), null);


(lib.Path_8_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CE9000").s().p("Aj4BrICZlzQCMB3CuArIAdAGQg1BihACOQgfBGgWAzg");
	this.shape.setTransform(24.85,26.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_8_1, new cjs.Rectangle(0,0,49.7,53.1), null);


(lib.Path_8_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#12BAC7","#76B7D7"],[0,1],-77.3,0,77.4,0).s().p("AsFoKIT/kGIEMUbIz/EGg");
	this.shape.setTransform(77.35,78.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_8_0, new cjs.Rectangle(0,0,154.7,157), null);


(lib.Path_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E3A681").s().p("AgagCQgJgOgCgMQAJAAAIgJQAQAQAfAIIALABQgaAMAFAWQADAJAFAGQghgLgSgcg");
	this.shape.setTransform(3.775,3.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_8, new cjs.Rectangle(0,0,7.6,7.5), null);


(lib.Path_7_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Path_7_5();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7_4, new cjs.Rectangle(0,0,7,24), null);


(lib.Path_7_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CBC3B6").s().p("AgJATQAAgJAFgHQAFgHgEgIQgCgDgEACIgGAEQAPgOALACIAEgMIABgBQAAAKgGAYIgEASQgCAKgFAEIgFADQgDgLAAgFg");
	this.shape.setTransform(1.625,3.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7_3, new cjs.Rectangle(0,0,3.3,7.1), null);


(lib.Path_7_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2FB9D8").s().p("AgYA7Qg+gGg/gMQgLgCgJgIQgmgiABg7QALAdAXATQAJAIAMACQBFALBEAGQBvAJA+gNQAcgHAUgOQgGAXgSASQgUATgdAHQgiAIgyAAQgiAAgogEg");
	this.shape.setTransform(20.6737,6.317);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7_2, new cjs.Rectangle(0,0,41.4,12.7), null);


(lib.Path_7_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#12BAC7","#76B7D7"],[0,1],-84.5,0,84.5,0).s().p("AtMoUIYtiOIBsS3I4tCOg");
	this.shape.setTransform(84.5,67.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7_1, new cjs.Rectangle(0,0,169,134.9), null);


(lib.Path_7_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#79645E").s().p("Ag2A6IAAhzIBtAAIAABzg");
	this.shape.setTransform(5.475,5.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7_0, new cjs.Rectangle(0,0,11,11.5), null);


(lib.Path_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#D0EAF1","#D0FCF1"],[0.09,1],-10.7,6.2,56.9,-28.3).s().p("AhZAhIAbhBICLAIQADAfAKAag");
	this.shape.setTransform(9,3.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7, new cjs.Rectangle(0,0,18,6.6), null);


(lib.Path_6_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Path_6_5();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_4, new cjs.Rectangle(0,0,7,23), null);


(lib.Path_6_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DDDDDD").s().p("AhICiQgmgCgbgSQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBAAQgngEgrgdQgmgYgKgcIgDgLQAGAPAKAKQANAPAVANQANAIAbANQAAAAABAAQAAAAABAAQAAAAABAAQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBIgUgQQgLgKgGgJQgKgRAIgPQAFgKAUAAIABAAIAVAIQANAFATACQAgADAlgFQAfgEAagLQALgGAQgJIAagSQAUgJAPgBQAVgBAHAQQAIAWgSAcQgKAPgZAYQgBABAAAAQAAAAgBAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAABQAAABAAAAQABABAAAAQAAABABAAQAAABABAAQAAAAABAAQABAAABAAQAcgEAXgVQAYgVAGgcQAHgagTgiQgHgMgNgJIgagPQAPgBAOAFQAOAEAIAKQACACADgBQADgCgBgDQgBgGAAgJIgBgQQADgFgGgBQgOAAgGgKIgFgLIgEgLIgCgCIgDgBQgfAHgUgTQgBgEgEABIgaAKQgPAEgMgBQgfgBgLgOQgDgDgDADIgBABQgWARgcAEQgiAEgIgbQgBgDgEABIgBgBQgMACgJgHIAJABIAMgCIABABQAMAMAQADQAQAEAQgGQAGgCAGgEIALgJQAEgCAHgKQAHAGAKAFQAMAGAIAAIAPACIAOAAQAYgBAUgPQAUAdAxgJIABAAIgBAEQAAAVAOAMQAMAKAKADQgFAWAIAOQAEAIAQAIQAAAAABAAQAAAAABAAQAAAAABAAQABgBAAAAIABAAIAAgBIAAgBQALgWATgGQADgCAEAAQgYAKgGAWQgDAKAOgKIAFgIIAHgGQAKgGANAIQAMAIABALQABALgIAPIgOAXQgCAEADACQADACACgDQAcgXACgdQABgRgNgMIgEgFQALAHAGAOQAIAQgHAUQgGAQgPANQgkAggYgOQgBAJgCAIQgLAdghAYQgfAXglAJQgsAKgjgCQgdAMgeAAIgJgBg");
	this.shape.setTransform(27.394,16.2633);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_3, new cjs.Rectangle(0,0,54.8,32.6), null);


(lib.Path_6_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EACB8B").s().p("AgVA7QgVgBgPgOQgPgPgCgVQgCgbAOgTQATgYAgAEQA2AHAWAfQAUAcgSAcQgOAXg6AAIgQAAg");
	this.shape.setTransform(7.54,5.9418);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_2, new cjs.Rectangle(0,0,15.1,11.9), null);


(lib.Path_6_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#79645E").s().p("Ag2A6IAAhzIBsAAIAABzg");
	this.shape.setTransform(5.45,5.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_1, new cjs.Rectangle(0,0,10.9,11.5), null);


(lib.Path_6_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E3A681").s().p("AgNARQgQgHAGgCQAIgCAfgbIAJAFQgBAhgOAEIgGABQgGAAgLgFg");
	this.shape.setTransform(2.4561,2.22);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_0, new cjs.Rectangle(-0.1,0,5.1,4.5), null);


(lib.Path_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#D0EAF1","#D0FCF1"],[0.09,1],-21.5,9.6,46.1,-24.9).s().p("AgqAgQhVgFhIgcIANgfIC6AMIC8gMIAMAfQhrAihjAAIgkgBg");
	this.shape.setTransform(19.975,3.283);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6, new cjs.Rectangle(0,0,40,6.6), null);


(lib.Path_5_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Path_5_3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_2, new cjs.Rectangle(0,0,9,21), null);


(lib.Path_5_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#2A006F","#A127FF"],[0.322,0.882],0,-1.4,0,0,-1.4,16.4).s().p("AApCKQgkgEg0gUQhtgogOhLIAAgBQAEAPAEAHQAKAYAOALQATAQATAJIAuAUQATAIAbAEQAxAGAmgGQAtgHAKgbQAFgNgFgOQgGgQgPAIQgHADgLAJQgLAJgGADQgWAMgmgBQgsgCgrgbQgZgRgLgLQgFgFgIgQQAJgSAFgaQAFgZgRgOQAKgDANgBIgBgOQANAYgGAiQgBAKgIASQgFAPAKAJQATAUAmgBQAngCAJgaQAEgJgFgOQgEgLgIgKQgJgNgagOQgkgUgHgGQgWgSABgXQAEAYApAVQA1AdA7gDQAbADATgGQAagHgCgXQgBgQgRgQQAIAEAHAFQA0AkgYAZQgVAZgJANIADACQAvAkgDAkQgBAVgLATQgMATgRAMQgdASgnAAIgVgBg");
	this.shape.setTransform(17.1314,13.936);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_1, new cjs.Rectangle(0,0,34.3,27.9), null);


(lib.Path_5_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#79645E").s().p("Ag2A6IAAhzIBtAAIAABzg");
	this.shape.setTransform(5.475,5.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_0, new cjs.Rectangle(0,0,11,11.5), null);


(lib.Path_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFBF","#FFFFFF","#FFFFFF"],[0,0.471,1],0,0,0,0,0,15.6).s().p("Ag5C+QARgdAGgMQAQgfAFhNQAGhjgghDQgRglALgaQAKgYAZADQAZADAVAiQAYAoAEBIQAICAhBBUQggAqgiAQIgCAAQgIAAAMgUg");
	this.shape.setTransform(6.5289,21.0208);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5, new cjs.Rectangle(0,0,13.1,42), null);


(lib.Path_4_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Path_4_2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_1, new cjs.Rectangle(0,0,12,24), null);


(lib.Path_4_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#79645E").s().p("Ag2A6IAAhzIBsAAIAABzg");
	this.shape.setTransform(5.45,5.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_0, new cjs.Rectangle(0,0,10.9,11.5), null);


(lib.Path_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFBF","#FFFFFF","#FFFFFF"],[0,0.471,1],0,0,0,0,0,15.6).s().p("AA8DSQgigQgggqQhBhUAIiAQAEhIAYgoQAVgiAZgDQAZgDAKAYQAMAagSAlQggBDAGBjQAFBNAQAfQAGAMARAdQAMAUgIAAIgCAAg");
	this.shape.setTransform(6.5211,21.0208);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4, new cjs.Rectangle(0,0,13.1,42), null);


(lib.Path_3_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Path_3_9();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_8, new cjs.Rectangle(0,0,16,18), null);


(lib.Path_3_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAF1FF").s().p("AiWArQAQgVAlgYQBLgyBmgUQBygWgqAxQgnAshhAqQhUAmg4ABIgDAAQg3AAAgglg");
	this.shape.setTransform(16.1483,7.9854);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_7, new cjs.Rectangle(-0.1,0,32.6,16), null);


(lib.Path_3_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AltCGQgIgTAlgwQApg1BBgsQBOg3BYgXQCqgsCFAQQBuAOAQAlQAMAag1AGIiNAFQgmABgBAHIAMAQQASAYh5AHQgyAEhEARQiLAghhA8QgjAVgQAAQgKAAgDgHg");
	this.shape.setTransform(36.6888,14.1438);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_6, new cjs.Rectangle(0,0,73.4,28.3), null);


(lib.Path_3_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#44BC1D").s().p("AgEAgQAIgBAHgLQAGgLAAgLIgDACQgCACgDgBQgBAMgHAHQgHAHgHgGQgDgDABgKQABgIADgHQgFAJAAAKQgBALAFAGIgEgGIgDgHQgCgLAGgOQAGgSALgEQAFgCAFAFQAEADACAHQAEANgFAPQgDALgHAGQgFAGgEAAIgCgBg");
	this.shape.setTransform(1.9622,3.2634);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_5, new cjs.Rectangle(0,0,4,6.5), null);


(lib.Path_3_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#44BC1D").s().p("AgMAiQAMACALgLQAKgKACgNIgFACQgDACgDgCQgDAMgLAGQgLAGgIgIQgEgEAEgLQADgIAFgIQgIAJgCALQgDAMAGAIQgEgFgBgDQgCgDAAgGQgBgMAKgOQAMgSAQgCQAHAAAFAGQAFAGABAHQADAPgKAQQgGALgKAFQgFADgGAAIgGgBg");
	this.shape.setTransform(2.8488,3.4929);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_4, new cjs.Rectangle(0,0,5.7,7), null);


(lib.Path_3_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EACB8B").s().p("Ag3AxIAVhRQADgLAJgHQAJgIALgBQARgBASAGQAMAEAGALQAHALgCAMIgLBMQgugEg2gHg");
	this.shape.setTransform(5.6391,5.9859);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_3, new cjs.Rectangle(0,0,11.3,12), null);


(lib.Path_3_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#79645E").s().p("Ag2A6IAAhzIBsAAIAABzg");
	this.shape.setTransform(5.45,5.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_2, new cjs.Rectangle(0,0,10.9,11.5), null);


(lib.Path_3_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRASQgHgHAAgLQAAgJAHgIQAHgHAKAAQAKAAAIAHQAHAIAAAJQAAALgHAHQgIAHgKAAQgKAAgHgHg");
	this.shape.setTransform(2.525,2.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_1, new cjs.Rectangle(0,0,5.1,5.1), null);


(lib.Path_3_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E3A681").s().p("AgogLIAwABQAOABASgEQgVARgYAKQgJgGgagTg");
	this.shape.setTransform(4.05,1.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_0, new cjs.Rectangle(0,0,8.1,2.8), null);


(lib.Path_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E3A681").s().p("AgPAtQgcgCgbgJQgOgFgbgVQgegXgEgCIgEgCQAUgDBHAQQA6AMAdgTQAagQAPgGQAVgIAaAAIAhgBQgDAGgEAEQghABgYAZIgoAoQgSANgfAAIgMAAg");
	this.shape.setTransform(14.975,4.5243);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0,0,30,9.1), null);


(lib.Path_2_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Path_2_11();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_10, new cjs.Rectangle(0,0,13,15), null);


(lib.Path_2_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E3A78B").s().p("AApAlQABgJgBgKQgCgUgUgLQgRgKgRAAIgOAEQgJACgFgDQgGgEAHgFQAJgFANgCQAZgDAVAOQAWAPgBAZQgBAWgEAAIgBAAg");
	this.shape.setTransform(4.6957,3.73);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_9, new cjs.Rectangle(0,0,9.4,7.5), null);


(lib.Path_2_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjfCeQgMgEASgPQAvgoB6gZQB7gagCgPQgCgPhPAJQg9AGAggXQAZgQBGgfQA1gWgrgHQgogGgxANQgoAKgIgZQgFgRAMgtQAJghAqARQATAIA7AoIBjBCQA0AlgsgOQgygQALAUQALASAsARQApARgDALQgDALgoAEQg3AHhIAOQiQAchZAhQgbAKgOAAIgHgBg");
	this.shape.setTransform(22.8072,15.8893);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_8, new cjs.Rectangle(0,0,45.7,31.8), null);


(lib.Path_2_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFB000","#FFB80C","#FFCC2D","#FFE95C","#FFE967","#FFE983","#FFE9B1","#FFE9D9"],[0,0.122,0.345,0.608,0.667,0.769,0.898,1],152.4,-42.5,0,152.4,-42.5,179.7).s().p("AggAUIBKgsQggAXgfAQIgUAKIAAAAIAJgFg");
	this.shape.setTransform(4.2346,2.5269);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_7, new cjs.Rectangle(0,0,8.5,5.1), null);


(lib.Path_2_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Aj+CYQgqgLA4gdQA0gbA6gsQArgiBCg4QAugqBFgfQAjgQAZgIQBCgQALAOQAIAIgSAiQgXAtgEASQgGAlAiATQBKAqghAjQgeAghaADIiIAAQhDAAhFARQg4ANglAAQgTAAgNgDg");
	this.shape.setTransform(27.1377,15.5503);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_6, new cjs.Rectangle(-0.1,0,54.6,31.1), null);


(lib.Path_2_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FF2525","#962200"],[0,1],-5.1,-6.2,0,-5.1,-6.2,15).s().p("AgoAuQgSgHgLgMQAUANAfAAQASAAARgHQAUgHAKgNQAMgNgGgTQgFgRgWgJQgOgFgQgBQAaAAARAIQAYAKAFATQAGAVgLAPQgLAOgUAIQgTAHgSAAIgDABQgRAAgPgGg");
	this.shape.setTransform(7.0279,5.1519);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_5, new cjs.Rectangle(0,0,14.1,10.3), null);


(lib.Path_2_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgFABQgBgLAGgBQABgBADAEQACADAAAFQABAEgCAEQgBADgDABIgBAAQgEAAgBgLg");
	this.shape.setTransform(0.6345,1.2052);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_4, new cjs.Rectangle(0,0,1.3,2.4), null);


(lib.Path_2_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgFAJQgDgEABgFQAAgFADgEQACgEADAAQADABACAEQADAEgBAEQgBAOgHAAQgDgBgCgEg");
	this.shape.setTransform(0.875,1.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_3, new cjs.Rectangle(0.1,0,1.5999999999999999,2.8), null);


(lib.Path_2_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E65E00").s().p("AgZAfQgpgPgYgeQgIgJgCgHIAEgKQACATAPARQANAOAVAKQAHADAMABQAPABgDgIQgCgGgLgKIAOAFQAcAHAcgCQAfgCAXgOQAAAAAAAAQABAAAAAAQABAAABABQAAAAABAAIgBADIgBABQgLASgDALIAAADQgSAGgQACIgUABQgdAAgbgKg");
	this.shape.setTransform(10.125,4.1079);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_2, new cjs.Rectangle(0,0,20.3,8.2), null);


(lib.Path_2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#79645E").s().p("Ag2A6IAAhzIBtAAIAABzg");
	this.shape.setTransform(5.475,5.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_1, new cjs.Rectangle(0,0,11,11.5), null);


(lib.Path_2_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgIAAgGgGg");
	this.shape.setTransform(2.075,2.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_0, new cjs.Rectangle(0,0,4.2,4.2), null);


(lib.Path_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#12BAC7","#76B7D7"],[0,1],-83.1,0,83.2,0).s().p("As/UfMAAAgo9IZ/AAMAAAAo9g");
	this.shape.setTransform(83.15,131.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,166.3,262.2), null);


(lib.Path_1_18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Path_1_19();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_18, new cjs.Rectangle(0,0,14,14), null);


(lib.Path_1_16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Path_1_17();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_16, new cjs.Rectangle(0,0,10,3), null);


(lib.Path_1_14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Path_1_15();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_14, new cjs.Rectangle(0,0,8,8), null);


(lib.Path_1_12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Path_1_13();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_12, new cjs.Rectangle(0,0,18,15), null);


(lib.Path_1_11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E3A78B").s().p("AATAbQgCgCAAgHIAAgKQgCgLgIgJQgIgLgNACQgGABgFADQAVgUARASQALAMACARQAAAJgBAGQgBABAAABQAAAAgBABQAAAAgBAAQAAABgBAAIgCgCg");
	this.shape.setTransform(2.5813,2.7736);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_11, new cjs.Rectangle(0,-0.1,5.2,5.8), null);


(lib.Path_1_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Path_1_10();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_9, new cjs.Rectangle(0,0,9,7), null);


(lib.Path_1_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhCBtQAgghAagzQAYgxAsg+QAWgfARgVQAggbgkBHIhNCNQgtBXhWAMQAfgWAQgPg");
	this.shape.setTransform(11.7279,14.7049);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_7, new cjs.Rectangle(0.4,0.1,22.700000000000003,29.299999999999997), null);


(lib.Path_1_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFB000","#FFB80C","#FFCC2D","#FFE95C","#FFE967","#FFE983","#FFE9B1","#FFE9D9"],[0,0.122,0.345,0.608,0.667,0.769,0.898,1],-2.1,5.9,0,-2.1,5.9,45.7).s().p("AgPANQAjgrgKgPIgGgFQBQgdAWgRIg9BRQgcAkh6BLQA2goAkgrg");
	this.shape.setTransform(10.625,9.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_6, new cjs.Rectangle(0,0,21.3,19.3), null);


(lib.Path_1_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah4AiQARgVBjggQAxgQAugNQAzgSgXAdQgYAdg7AdQg6Adg7AFIgQABQgoAAARgWg");
	this.shape.setTransform(12.5555,5.4528);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_5, new cjs.Rectangle(-0.1,-0.1,25.3,11.1), null);


(lib.Path_1_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F5F9F9","#CBC3B6","#BAAE9B"],[0.553,0.882,1],0,-0.4,0,0,-0.4,4.7).s().p("AgoAjQgSgMAFgVQAFgTAVgKQARgIAVABQAWABAWAJQAAABAAAAQABAAgBAAQAAAAAAAAQAAAAgBAAQgggEgeAIQgTAFgHAKQgGAHgBAMQgCAMAFAHQAAAAAAAAQABABAAAAQAAAAgBAAQAAAAAAAAIgCAAg");
	this.shape.setTransform(5.5413,3.5226);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_4, new cjs.Rectangle(0,0,11.1,7.1), null);


(lib.Path_1_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgrAAQgFgOgBgPQgBgRAHgKQAHgKAMgHQAMgGAJAAQACAAAEAFQAEAEgCAAQgKgCgNAJQgNAIgGALQgLAXASAeQANAWAWATQARANAcAPQAAABABAAQAAAAAAAAQgBABAAAAQAAAAgBAAQhJghgTgvg");
	this.shape.setTransform(5.0469,7.9732);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_3, new cjs.Rectangle(0,0,10.1,16), null);


(lib.Path_1_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BD823E").s().p("AgvASIAMgvQAnATAsgKIgGAyQgqgEgvgIg");
	this.shape.setTransform(4.825,2.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_2, new cjs.Rectangle(0,0,9.7,5.9), null);


(lib.Path_1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#79645E").s().p("Ag2A6IAAhzIBsAAIAABzg");
	this.shape.setTransform(5.45,5.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_1, new cjs.Rectangle(0,0,10.9,11.5), null);


(lib.Path_1_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FDFC03","#FDF503","#FEE002","#FEBF01","#FFAA00"],[0.016,0.204,0.482,0.824,1],-16.8,0,16.9,0).s().p("AgGBZQgdgDgdgJQgPgFgcgYQgfgagFgCQgMgGgIgIQgJgGAHAAQAKACALgFIgSgEQgGgEAJgIIAlghQAmgaA3gIQA2gIAyAbQAOAHAoAgQAMAJAXgJQAIAJgFALQgCAGgFADQgiABgZAbIgrAuQgUAOgjAAIgJAAg");
	this.shape.setTransform(16.8845,8.8987);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_0, new cjs.Rectangle(0,0,33.8,17.8), null);


(lib.Path_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#EAF6F9","#99E6EE","#9CE7EE","#A4E9F0","#B3ECF2","#C8F1F6","#DBF6F9"],[0,0.941,0.961,0.973,0.984,0.992,1],-0.1,-17.3,0,-0.1,-17.3,38.3).s().p("AiKDPIhBgOQgigNglgpQg9hEgRhpQgPhYAshiIKKAHQAoBdgOBWQgRBpg9BEQglAogiAOQgaAHgnAHQhOANg9AAQg8AAhOgNg");
	this.shape.setTransform(35.6751,22.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_0, new cjs.Rectangle(0,0,71.4,44.1), null);


(lib.Path = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Group_12_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9C7561").s().p("AgyiKQAzgmApgWIApCyQgSAfgcAsQg3BWgxA6QgmjXA3h6g");
	this.shape.setTransform(8.3528,19.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_12_0, new cjs.Rectangle(0,0,16.7,39.8), null);


(lib.Group_12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#79645E").s().p("AX6E/IAApSMgvyAAAIAAJSIgbAAIAAp9MAwnAAAIAAJ9g");
	this.shape.setTransform(282.65,31.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#79645E").s().p("AIDE/IAApSIwFAAIAAJSIgaAAIAAp9IQ5AAIAAJ9g");
	this.shape_1.setTransform(54.1,31.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_12, new cjs.Rectangle(0,0,438.2,63.7), null);


(lib.Group_11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FDE3C6","#EEBD8C","#EEB581","#EE9E64","#EE9A5F"],[0.161,0.533,0.635,0.812,0.835],0.6,3.7,0,0.6,3.7,48.4).s().p("AArAZIALAHQgCgFgFgGQgLgNgQgEQgbgFgUgIQgdgLAAgKQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBAAAAQACAJAWAHIBAAVQALAEAGALQADAEAEANg");
	this.shape.setTransform(10.5,3.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FDE3C6","#EEBD8C","#EEB581","#EE9E64","#EE9A5F"],[0.161,0.533,0.635,0.812,0.835],-2.8,-7.9,0,-2.8,-7.9,48.4).s().p("AA6ApQgWgIgOgPQgPgQgRgGQgqgShFABQgFAAgEgDQgDgCAAgEQAHAFANgCQAQgCAiAFQAfAFATAGQANAEALAJIAUAQQAjAbAbgJQAEgCACgPQACgRANgLQAHgHABgHQACgJgGgNQALASAFAPIgQAQQgMAVAYAXQgKACgOAAIgDAAQgaAAgTgHg");
	this.shape_1.setTransform(13.95,15.2266);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FDE3C6","#EEBD8C","#EEB581","#EE9E64","#EE9A5F"],[0.161,0.533,0.635,0.812,0.835],3.3,-2.7,0,3.3,-2.7,48.3).s().p("AA0AOQgdgJgjAAIgGAAIAogBQgggFgJgEQgXACgRgGQgPgFABgIQASANAigEQAIAAANAEQASAGAOACQAWAFANAKQAGAFACAEQgIgFgPgEg");
	this.shape_2.setTransform(7.797,9.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#FDE3C6","#EEBD8C","#EEB581","#EE9E64","#EE9A5F"],[0.161,0.533,0.635,0.812,0.835],3.4,0.4,0,3.4,0.4,48.4).s().p("ABCAVQgRgGgRgKQgOgHgSgBIgZABIggABIAIgCQgagHgBgNQANAOAZAAIA3ABQAIABASAIQAQAIANAKQAHAFgDAAIgKgDg");
	this.shape_3.setTransform(7.715,6.8363);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_11, new cjs.Rectangle(0,0,27.4,20.1), null);


(lib.Group_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0)","rgba(212,149,79,0)","#D4954F","#E0A055","#DB9C53","#CE904D","#B87D42","#986234","#704021","#562915"],[0,0.722,0.722,0.741,0.78,0.824,0.871,0.918,0.969,0.996],10.6,-3.3,0,10.6,-3.3,15.4).s().p("AATAbQgCgDAAgGIABgKQgCgLgJgJQgIgLgMACQgHABgFACQAIgIALgBQAAADAGADQAHADAHAJQAGAIAAAFQAAAGABAEQAAABABABQAAABAAAAQABAAAAAAQAAgBABAAQABgDAAgGIABABQABAJgCAIQgBABAAAAQAAABgBAAQAAABgBAAQAAAAAAAAIgDgBg");
	this.shape.setTransform(2.5917,2.8181);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#E0A055","#D79851","#BF8447","#976236","#60351E","#411A11","#532717","#6C3A20","#7B4525","#804927","#8A522C","#A66C39","#D4954F","rgba(212,149,79,0)","rgba(0,0,0,0)"],[0,0.047,0.125,0.224,0.341,0.4,0.424,0.467,0.506,0.537,0.573,0.639,0.722,0.722,1],10.6,-3.3,0,10.6,-3.3,15.4).s().p("AATAbQgCgDAAgGIABgKQgCgLgJgJQgIgLgMACQgHABgFACQAIgIALgBQAAADAGADQAHADAHAJQAGAIAAAFQAAAGABAEQAAABABABQAAABAAAAQABAAAAAAQAAgBABAAQABgDAAgGIABABQABAJgCAIQgBABAAAAQAAABgBAAQAAABgBAAQAAAAAAAAIgDgBg");
	this.shape_1.setTransform(2.5917,2.8181);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_10, new cjs.Rectangle(0,0,5.2,5.7), null);


(lib.Group_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C07C44").s().p("AjBCbQhjg+gNh1QgFgkAHgmQA3BJBMAiQCNBACghUQAygaAtgyQAhglAshDIACgEQADANAAAIQAOB2hRBpQhQBph/AfQgpALgoAAQhOAAhCgpg");
	this.shape.setTransform(30.7799,19.5695);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_9, new cjs.Rectangle(0,0,61.6,39.2), null);


(lib.Group_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0)","rgba(212,149,79,0)","#D4954F","#E0A055","#DB9C53","#CE904D","#B87D42","#986234","#704021","#562915"],[0,0.722,0.722,0.741,0.78,0.824,0.871,0.918,0.969,0.996],0.5,-18,0,0.5,-18,24.4).s().p("AApASQgDgUgUgLQgQgKgRAAIgOAEQgKACgEgDQgGgEAHgFQAKgFAOgCIABABQgJABgDAEQgDACAGABQAGABAJgCQAJgCANAHQAPAIAJAMQAGAIAFgCQADASgIAQQABgJgBgKg");
	this.shape.setTransform(4.6626,3.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#E0A055","#D79851","#BF8447","#976236","#60351E","#411A11","#532717","#6C3A20","#7B4525","#804927","#8A522C","#A66C39","#D4954F","rgba(212,149,79,0)","rgba(0,0,0,0)"],[0,0.047,0.125,0.224,0.341,0.4,0.424,0.467,0.506,0.537,0.573,0.639,0.722,0.722,1],0.5,-18,0,0.5,-18,24.4).s().p("AApASQgDgUgUgLQgQgKgRAAIgOAEQgKACgEgDQgGgEAHgFQAKgFAOgCIABABQgJABgDAEQgDACAGABQAGABAJgCQAJgCANAHQAPAIAJAMQAGAIAFgCQADASgIAQQABgJgBgKg");
	this.shape_1.setTransform(4.6626,3.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_8, new cjs.Rectangle(0,0,9.4,7.4), null);


(lib.Group_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#AF6A44","#AB6643","#9F5C3F","#8B4A38","#814135"],[0.271,0.451,0.635,0.824,0.894],-0.9,0.7,0,-0.9,0.7,3).s().p("AgDAKQgYgKAQgGQALABAEgHQgEAHgHABQgIABAGAGQAHAIAUABIgDAAIgFABQgJAAgEgDg");
	this.shape.setTransform(1.7639,1.4625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#AF6A44","#AB6643","#9F5C3F","#8B4A38","#814135"],[0.271,0.451,0.635,0.824,0.894],-0.9,0.7,0,-0.9,0.7,3).s().p("AgDAKQgYgKAQgGQALABAEgHQgEAHgHABQgIABAGAGQAHAIAUABIgDAAIgFABQgJAAgEgDg");
	this.shape_1.setTransform(1.7639,1.4625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_7, new cjs.Rectangle(0,0.2,3.6,2.5), null);


(lib.Group_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9C7561").s().p("AlfD8QgSgegJgpIgGgkIB1ipQgVhqAAhVQAEBCAXAxQAYA2ArAYQBKApArAJQA8AMA/geQA7gbAshEQAog/AThSQAJgnACgkQAMBIADBWICTBpQAJA5gRA6QghB0iCgDIhjiWIhvAgIhuAXIg+C9QgyAagnAAQg4AAgig2g");
	this.shape.setTransform(38.4558,30.6457);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_6, new cjs.Rectangle(0,0,76.9,61.3), null);


(lib.Group_5_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FDE3C6","#EEBD8C","#EEB581","#EE9E64","#EE9A5F"],[0.161,0.533,0.635,0.812,0.835],-19.8,-9.5,0,-19.8,-9.5,56).s().p("AgME4Qg1gBg4gTQiOgygfh2QAoB7CMAVQA2AIA0gMQAwgLAWgWQg5gZApgzQAFAUAcAHQAfAHAWgdQAjgvgDg9QgCg0gWgTQghgUgUg0IgNgwIgLAyQgggbgQgjIgJgcIgGANQgEAQAGAPQgagHgagiQgdgoAAgxQgcANgWAQIAFgHQAggdAlgoQgKAaABAhQADBCA7AlQgPgaATgwQAKgYANgTQgMAWgCAgQgCA/A3AzQgDgaAJgkIAJgeIAAAVQACAaAGAXQAVBKA9ATQgNgSAFguIAHgqIAFA2QAKA7AWAYIAEAYQAGAbAOARQgSA/gUAdQARgLAXgZQATgWAaANQAZAOgIAfQgJAmgwASQgyAUgLgvQgYAOgogBQgxgBgSgiQgPAbAaAVQAWARAYAAQgpAQgUAaQgKANgCAJIA2gZIgJAGQgIAIgCAKQgWAPgsAAIgJgBg");
	this.shape.setTransform(29.5205,31.2564);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_5_1, new cjs.Rectangle(0,0,59.1,62.5), null);


(lib.Group_5_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FDE3C6","#EEBD8C","#EEB581","#EE9E64","#EE9A5F"],[0.161,0.533,0.635,0.812,0.835],-8.3,-0.9,0,-8.3,-0.9,12.4).s().p("AgMAkQgigBgLgSQATANAXgIQAWgIgTgKQgKgEgLgIIgOgKQAFgHAMgKIAEACQAzAbAhATQggAXgjAAIgDAAg");
	this.shape.setTransform(5.75,3.602);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_5_0, new cjs.Rectangle(0,0,11.5,7.2), null);


(lib.Group_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E0DCC0").s().p("AkOBTQBWhBAlgYIgDAFQhYBDgRAgQgcA0BpAGQCHAJBRgXQBpgdBPhcQA6hCgLghQgKgghMAGQg5AEg/gDQAmgJBogVQBRgPAfgNQBKgcAfgDQhRBigoBBQgoBAghAkQgzA5hCAbQg5AYjNAEQjwAGgeAEQA7gpBchFg");
	this.shape.setTransform(42.175,19.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_5, new cjs.Rectangle(0,0,84.4,38.6), null);


(lib.Group_4_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#E0A055","#DF9753","#DC7F4D","#DB794C","#D6764A","#C96E45","#B3613B","#934E2E","#6B361E","#562915"],[0,0.09,0.243,0.271,0.388,0.514,0.651,0.788,0.929,0.996],-16.7,-5.6,0,-16.7,-5.6,113).s().p("AAHAbQgLgDgLgIQgWgQAGgaQAKAeA2ARQgLAGgMAAIgDAAg");
	this.shape.setTransform(3.3357,2.6804);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_4_1, new cjs.Rectangle(0,0,6.7,5.4), null);


(lib.Group_4_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E73983").s().p("AgRAEIAHgEIAJgEQAMgEAFAAIAJgBIgZAJIgEACIgEACIgQAGg");
	this.shape.setTransform(8.225,0.9667);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E73983").s().p("AgWgDIAsgBIAhAEIAFAAIgFAAIhMABIgKABIgJABIgTACg");
	this.shape_1.setTransform(6.025,2.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E73983").s().p("AgEANIAAgGIABgHIACgHIAGgMIgBAHIgDAQIgDAQg");
	this.shape_2.setTransform(25.4625,16.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E73983").s().p("AAGAEIgDgCIgRgLIAGABIAGACIALAGIAEAFIACAFg");
	this.shape_3.setTransform(19.475,23);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E73983").s().p("AhVAnIgBgEIgBgFIAAgEIABgEIADgEIAEgDIAJgDIAFgBIAJAAIAFABIAOACIgCABIADAAIgBgBIB9g4Ih9A9IgBAAIgJgCIgJgCIgJAAIgJABIgEABIgBABIgCACIgDACIgCAIIABAFIABAEIACAEg");
	this.shape_4.setTransform(21.8,20.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_4_0, new cjs.Rectangle(0,0,30.6,24.6), null);


(lib.Group_3_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#E0A055","#DF9753","#DC7F4D","#DB794C","#D6764A","#C96E45","#B3613B","#934E2E","#6B361E","#562915"],[0,0.09,0.243,0.271,0.388,0.514,0.651,0.788,0.929,0.996],-44.6,-49.1,0,-44.6,-49.1,113).s().p("AhBFcQgYgaAOghQgNAVABAVQABAMADAFQgQgCgQgLQgegWAGgqQACgJAIgIIAJgGIg2AZQACgKAKgNQAUgZApgRQgYAAgWgQQgagVAPgbQASAiAxABQAoABAYgOQALAvAxgUQAwgSAJgmQAIgfgZgOQgagNgTAVQgXAZgQAMQATgdAShAQgOgQgGgbIgEgXQgVgZgKg8IgFg1IgHAqQgFAuANARQg9gSgVhKQgGgXgCgaIAAgWIgJAfQgJAkADAZQg3gyACg/QACggAMgWQgNATgKAXQgUAxAPAaQg7glgDhDQgBggAKgaQglAoggAcQgGgSACgXQABgXAKgVQgBAaAHANQA0gtAhgOQgIAXgEAdQgJA8APAlQAAgZAqgrQAVgVAVgRQgLAXgGAgQgLBCAcAxQABgwAZgmQAMgUAMgKQgHAbACAjQADBJApAxQgCgqATgsQAJgWAKgNIgCA9QADBEAWAfQABgUAIgkIAKghIACBGQAGBMAWAiQgLgqARgzIAUgsIgKA3QgFBBAcAyIAXggIgEAQQgDARAEALQAHAVgGAbQgJAmglAXQgJAGADAEQAEADAMgEQAhgKApgtQAsgxgMAbQgMAcgZAWQgVASAdgJQAegIAkgeQBvhaAHiUIACgCQgDA8gXBBQgXA7g2A1QgZAZhGA2Qg3AqgRAaQgZAnASAqQg/AMAAhDQgJAZAEAMQAEANAVANQg1AAgZgcg");
	this.shape.setTransform(33.235,37.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_3_0, new cjs.Rectangle(0,0,66.5,75.2), null);


(lib.Group_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFB000","#FFB80C","#FFCC2D","#FFE95C","#FFE967","#FFE983","#FFE9B1","#FFE9D9"],[0,0.122,0.345,0.608,0.667,0.769,0.898,1],-5.3,-12.3,0,-5.3,-12.3,102.3).s().p("AB1G9QhTgChxgJQhYgHgiACQgtACgOgOQgOgNAPgeQgIg0iYiTQh1hwhZhEQgqgggcg+Qgag5gIgEQgmgXAbgJQAagKAlAPQAPgXAOgTIgSAtQgJARgIgKQgNgPgTgBQgTgCAHAOQAEAIAMAEQAJADACAMQACAZAIAPQAOAbAmAYQAnAaAFgbQACgQgLhPQgHgwAcgcIAQgQQAFgHgIgJQgPgNgHgSIAggeQAfAnA0gFQAzgEAagpQAbgpAAgyQBqgbCVAVQFGAoEUCyIhlgvQgggOgGAqQgNBVgFANQgQAqBAgHIA/gKQAqgGAZACQgfAKglAQQhKAfgdAaQgbAYAtgGQBggMAIAAQAVAAgaAHIhVAWQieAqg7AyQhGA8AQAOQAPAPA4goQAvggBzggQBfgaBvgSQBSgNA2gPQAdgHAigNQAXgJgHAPQgHAOgcANQgbAMglA2QgZAig0BZQg8Bkg+AnQhqBEjLgHQhGgBgUAHQgRAHAdAJQBOAYCLgNQDagUBriIQhLBviYAiQhKARh+AAIg/gBgAh4EOQACAVgMAOQgNAQgpAUQgrAUgGAXQgGAXAngLQAlgKAegSQAbgQAdgbQAngjAJgMQAQgTgjACQgTgEgSgBIgGAAQgfAAACAOg");
	this.shape.setTransform(75.1123,44.6264);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_3, new cjs.Rectangle(-0.1,0,150.4,89.3), null);


(lib.Group_2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#E0A055","#DF9753","#DC7F4D","#DB794C","#D6764A","#C96E45","#B3613B","#934E2E","#6B361E","#562915"],[0,0.09,0.243,0.271,0.388,0.514,0.651,0.788,0.929,0.996],-55.9,-12.4,0,-55.9,-12.4,113).s().p("ABIAmQgggiAAAXQAAAggFATQgFAVgGgoQgFgxgxgXQgagMgYgCQARgCAYADQAfAEATANQgcguhIgZQgpgPglgDQBEADA/AXQA6AXAdAfQAMgUACgIIAOALQANAPgFAUQAkAFANAQQAHAIgBAGIglgOIAUAOQAYAUATAaIgEgEQgngqgJAGQgIAEACA2QgGgbgggig");
	this.shape.setTransform(16.775,9.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_2_1, new cjs.Rectangle(0,0,33.6,19.9), null);


(lib.Group_2_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFB000","#FFB80C","#FFCC2D","#FFE95C","#FFE967","#FFE983","#FFE9B1","#FFE9D9"],[0,0.122,0.345,0.608,0.667,0.769,0.898,1],-28.8,37.2,0,-28.8,37.2,44.2).s().p("AgLAKQgEgEABgFQABgFAFgEQAEgEAFgBQAGAAAEADQAEAEAAAGQgBAEgFAFQgEAEgFABIgCAAQgFAAgEgEg");
	this.shape.setTransform(52.1678,1.3747);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFB000","#FFB80C","#FFCC2D","#FFE95C","#FFE967","#FFE983","#FFE9B1","#FFE9D9"],[0,0.122,0.345,0.608,0.667,0.769,0.898,1],4.2,7.7,0,4.2,7.7,44.3).s().p("AgTANQgDgLANgIQAHgGAIAAQAIgBAEAFQAEAEgBAGQgCAGgFAFg");
	this.shape_1.setTransform(19.0903,30.8727);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFB000","#FFB80C","#FFCC2D","#FFE95C","#FFE967","#FFE983","#FFE9B1","#FFE9D9"],[0,0.122,0.345,0.608,0.667,0.769,0.898,1],21.2,11.9,0,21.2,11.9,44.3).s().p("AgRANQgEgEACgIQACgGAHgGQAIgGAHAAQAJAAAEAEQAEAFgCAIQgCAHgIAFQgHAGgHAAIgCAAQgHAAgEgFg");
	this.shape_2.setTransform(2.0724,26.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#FFB000","#FFB80C","#FFCC2D","#FFE95C","#FFE967","#FFE983","#FFE9B1","#FFE9D9"],[0,0.122,0.345,0.608,0.667,0.769,0.898,1],10.1,23.8,0,10.1,23.8,44.3).s().p("AgOALQgDgEACgGQABgFAGgFQAGgEAGgBQAHAAADAEQAEAEgCAGQgCAFgGAFQgGAEgGABIgBAAQgFAAgEgEg");
	this.shape_3.setTransform(13.1611,14.7778);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#FFB000","#FFB80C","#FFCC2D","#FFE95C","#FFE967","#FFE983","#FFE9B1","#FFE9D9"],[0,0.122,0.345,0.608,0.667,0.769,0.898,1],-18.2,14.8,0,-18.2,14.8,44.3).s().p("AgOALQgDgEACgGQABgFAHgFQAGgEAFgBQAHAAADAEQAEAEgCAGQgCAFgFAFQgGAEgHABIgBAAQgFAAgEgEg");
	this.shape_4.setTransform(41.5,23.7278);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#FFB000","#FFB80C","#FFCC2D","#FFE95C","#FFE967","#FFE983","#FFE9B1","#FFE9D9"],[0,0.122,0.345,0.608,0.667,0.769,0.898,1],-3.8,18.5,0,-3.8,18.5,44.3).s().p("AgNALQgEgEABgGQACgFAGgFQAHgEAGgBQAGAAAEAEQADAEgCAGQgBAFgHAFQgFAEgGABIgCAAQgFAAgDgEg");
	this.shape_5.setTransform(27.15,20.0778);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#FFB000","#FFB80C","#FFCC2D","#FFE95C","#FFE967","#FFE983","#FFE9B1","#FFE9D9"],[0,0.122,0.345,0.608,0.667,0.769,0.898,1],-12.6,30.1,0,-12.6,30.1,44.3).s().p("AgKAOQgFgDABgHQAAgFAEgGQAFgFAFgCQAHgCAEADQAFADAAAGQAAAFgFAHQgFAFgGACIgEABQgEAAgCgCg");
	this.shape_6.setTransform(35.9475,8.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#FFB000","#FFB80C","#FFCC2D","#FFE95C","#FFE967","#FFE983","#FFE9B1","#FFE9D9"],[0,0.122,0.345,0.608,0.667,0.769,0.898,1],-25.9,26.9,0,-25.9,26.9,44.3).s().p("AgKAOQgFgDAAgHQAAgFAFgGQAFgFAFgCQAHgCAEADQAFADAAAGQgBAFgEAHQgFAFgGACIgEABQgEAAgCgCg");
	this.shape_7.setTransform(49.225,11.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_2_0, new cjs.Rectangle(0,0,53.7,32.2), null);


(lib.Group_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E0DCC0").s().p("AAoFAQgwgYgKgLQgJgIgFgeQgcifhSifQhpjMidh2IAcAIIC5AuQB5AmBXBFQAlAfAhAtQgSgGgIASQgFAKgJAgQgHAegJARQgbA2hNADQgRABAJAiIATA1QAGATAQAHQAMAGAsAHICdAbQAyAJgFgZQANAyAKAxQAEAQAEAHQgmAGgTACQgPABgrgKQgqgJgugNQgqgNgKACQgHABAAAPQACAQATAGQAdAKBfACQhRADgOABQgYADAXAJQA1AVAVAoQAKASAiAHQAeAGA/ABQBnABA3gMQgcAIgoAFQgrAEgvgBQgnAAhaACQgZgrg1gfg");
	this.shape.setTransform(40.45,39.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(0,0,80.9,78.9), null);


(lib.Group_1_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#E0A055","#DF9753","#DC7F4D","#DB794C","#D6764A","#C96E45","#B3613B","#934E2E","#6B361E","#562915"],[0,0.09,0.243,0.271,0.388,0.514,0.651,0.788,0.929,0.996],-44.7,-48.2,0,-44.7,-48.2,113).s().p("AhCFlQgYgaAPghQgOAVACAVQAAALAEAGQgRgCgPgLQgfgWAGgqQACgJAJgIIAIgGIg2AZQACgKAKgNQAVgZApgRQgYAAgWgRQgbgUAQgbQARAhAyACQAoAAAXgOQAMAvAxgTQAwgTAJglQAIgggagNQgZgNgUAVQgWAZgQAMQASgeASg/QgNgQgHgbIgDgXQgWgagJg7IgGg1IgHAqQgEAtANASQg+gSgUhKQgHgYgBgZIAAgWIgKAfQgJAjAEAaQg4gyADhAQABgfANgWQgNASgKAYQgVAwAPAaQg6glgDhCQgCghALgZQgmAogfAcQgHgVADgZQADgaAMgWQgDASAHAGQAHAHALgNQAMgOAigSIAggPQgSAUgCBBQgBBCAOgiQANgfAtgoQAsgpgUAlQgSAgACA2QABA4AIgXQALgfAdgqQAggwgNA6QgMA8ANA5QAFAWAFAGQAGAHACgPQAFgkAUgmQAVgnAAAuQAAAuALAmQALAlACgWQACgZAHgZQAHgdACAZQADApAHAnQAJAxAFgeQAHgoATgVQATgXgCA2QgCBJADAcQAEAmARgPQANgNASguIAIgUQABgDgCAQQgIAsAFAgQAHAnAZgZQAkgaAXhSIAKgoQADgKABASQAAAIgMBeQgIA6AZgMQAsgcAUhiQAKgyACgsQARBbgnBwQgXA7g1A1QgZAZhHA2Qg3AqgRAaQgZAmATArQhAAMAAhDQgIAZAEAMQAEANAVANQg2AAgZgcg");
	this.shape.setTransform(33.288,38.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1_2, new cjs.Rectangle(0,0,66.6,77), null);


(lib.Group_1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E0A269").s().p("AgaAkIgEgBQgSgJAFgIQADgGAFABQAFAAAFgCQADgCACgEIADgIQACgOAPgMQANgKAPAEQAJACAEAHQAFAGgBAJQgDARgRAOQgRAPgRACIgGAAIgLgBgAABgaQgIAHgDAFQgCAEgBAGQgBAFgCAEQgCAGgFADQgFADgJAAQAAAAAAAAQgBAAAAABQAAAAgBAAQAAABgBAAQgCAFAPAHIADABQAHACAJgBQAQgCAPgNQAPgOACgPQADgQgRgEIgGgBQgKAAgJAGg");
	this.shape.setTransform(4.5559,3.7115);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1_1, new cjs.Rectangle(0.1,0,9,7.5), null);


(lib.Group_1_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFB000").s().p("AANAcIgJgcIgCgGIgVgvIALAPIAPAfIAIAYIADAPIACAWg");
	this.shape.setTransform(10.425,33.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFB000").s().p("AgnAHIBGgeIBAgSIiEA0Ig5Afg");
	this.shape_1.setTransform(63.125,4.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFB000").s().p("AhRASIBMgfIAXgIIAYgGIAqgJIAfgFIAMgBIgMACIgeAHIgqAKIgXAHIguAQIgXAIIgeAMIguAYg");
	this.shape_2.setTransform(53.5,12.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFB000").s().p("AgkASIAGgGIAZgSIAvgYIAFgBIgxAdQgKAFgHAGIgPALIgMAMg");
	this.shape_3.setTransform(4.675,45.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFB000").s().p("AgCAKQgOgDgGgDIgQgGIgKgHIgDgDIAPAIIAkAJIA0AHIgiABg");
	this.shape_4.setTransform(94.7,5.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFB000").s().p("AgPAFIAPgHIAOgEIAHgCIgGAEQgJAEgFACQgIAEgHACIgGABg");
	this.shape_5.setTransform(97.6,11);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFB000").s().p("AgPAFQAGgEAJgCIAQgFIAHgBIgGAEIgQAFQgGADgJACIgIABg");
	this.shape_6.setTransform(8.775,51.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1_0, new cjs.Rectangle(0,0,99.9,52.2), null);


(lib.Group_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFB000","#FFB80C","#FFCC2D","#FFE95C","#FFE967","#FFE983","#FFE9B1","#FFE9D9"],[0,0.122,0.345,0.608,0.667,0.769,0.898,1],29.1,2.2,0,29.1,2.2,57.2).s().p("AgFALQgGgDgDgFQgCgEADgFQACgFAHgBQAFgBAFADQAGADADAFQACAEgDAFQgCAFgGABIgDAAQgEAAgEgCg");
	this.shape.setTransform(1.525,1.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFB000","#FFB80C","#FFCC2D","#FFE95C","#FFE967","#FFE983","#FFE9B1","#FFE9D9"],[0,0.122,0.345,0.608,0.667,0.769,0.898,1],-9.5,-25.3,0,-9.5,-25.3,57.2).s().p("AgFANQgIgFgDgHQgCgGADgGQADgEAHgBQAGgBAHADIAKAdQgEACgFAAQgHAAgHgEg");
	this.shape_1.setTransform(40.1479,28.9245);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFB000","#FFB80C","#FFCC2D","#FFE95C","#FFE967","#FFE983","#FFE9B1","#FFE9D9"],[0,0.122,0.345,0.608,0.667,0.769,0.898,1],-10.1,-41.7,0,-10.1,-41.7,57.2).s().p("AgIANQgIgFgDgHQgDgGAEgGQAEgFAIAAQAHgBAIAFQAIAFADAHQADAHgEAFQgDAFgJAAIgBAAQgHAAgHgEg");
	this.shape_2.setTransform(40.7372,45.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#FFB000","#FFB80C","#FFCC2D","#FFE95C","#FFE967","#FFE983","#FFE9B1","#FFE9D9"],[0,0.122,0.345,0.608,0.667,0.769,0.898,1],-34.1,-50.6,0,-34.1,-50.6,58.6).s().p("AgCAMQgHgCgFgEQgFgFACgEQABgFAGgCQAGgCAHABQAHACAFAEQAEAFgBAEQgBAEgGADQgEACgFAAIgEgBg");
	this.shape_3.setTransform(42.7,62.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#FFB000","#FFB80C","#FFCC2D","#FFE95C","#FFE967","#FFE983","#FFE9B1","#FFE9D9"],[0,0.122,0.345,0.608,0.667,0.769,0.898,1],5.4,-35.5,0,5.4,-35.5,57.2).s().p("AgHAKQgGgEgDgGQgCgEADgFQADgEAHAAQAGAAAGAEQAHAEACAFQADAFgDAFQgEAEgGAAQgGAAgHgEg");
	this.shape_4.setTransform(25.1547,39.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#FFB000","#FFB80C","#FFCC2D","#FFE95C","#FFE967","#FFE983","#FFE9B1","#FFE9D9"],[0,0.122,0.345,0.608,0.667,0.769,0.898,1],4.8,-7.9,0,4.8,-7.9,57.2).s().p("AgGALQgHgEgCgGQgDgGADgDQAEgFAGAAQAGgBAHAFQAGADADAGQACAFgEAFQgDAEgGAAIgBAAQgFAAgGgDg");
	this.shape_5.setTransform(25.85,11.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#FFB000","#FFB80C","#FFCC2D","#FFE95C","#FFE967","#FFE983","#FFE9B1","#FFE9D9"],[0,0.122,0.345,0.608,0.667,0.769,0.898,1],4.2,-21.6,0,4.2,-21.6,57.2).s().p("AgHALQgGgFgCgFQgDgFADgFQADgEAHAAQAGgBAGAEQAHAFACAFQADAFgDAFQgEAEgGAAIgCAAQgFAAgGgDg");
	this.shape_6.setTransform(26.425,25.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#FFB000","#FFB80C","#FFCC2D","#FFE95C","#FFE967","#FFE983","#FFE9B1","#FFE9D9"],[0,0.122,0.345,0.608,0.667,0.769,0.898,1],-33.8,-58.2,0,-33.8,-58.2,57.4).s().p("AgCAMQgIgCgEgEQgEgGABgEQABgEAHgCQAGgDAGACQAIACAEAEQAFAFgCAEQgBAGgGABIgIACIgFgBg");
	this.shape_7.setTransform(58.7338,64.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#FFB000","#FFB80C","#FFCC2D","#FFE95C","#FFE967","#FFE983","#FFE9B1","#FFE9D9"],[0,0.122,0.345,0.608,0.667,0.769,0.898,1],18.8,-17.3,0,18.8,-17.3,57.2).s().p("AgDAMQgIgCgEgGQgEgEACgFQACgFAHgBQAGgCAHACQAHADAEAFQAEAEgCAFQgCAFgGACIgFAAIgIgBg");
	this.shape_8.setTransform(11.775,20.946);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#FFB000","#FFB80C","#FFCC2D","#FFE95C","#FFE967","#FFE983","#FFE9B1","#FFE9D9"],[0,0.122,0.345,0.608,0.667,0.769,0.898,1],19.6,-4.7,0,19.6,-4.7,57.2).s().p("AgDAMQgIgDgEgFQgEgEACgFQACgFAHgBQAGgCAHACQAHADAEAFQAEAEgCAFQgCAFgGABIgGABIgHgBg");
	this.shape_9.setTransform(11.025,8.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,0,60.6,65.6), null);


(lib.Group_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E0DCC0").s().p("AAYFAQgxgYgKgLQgIgIgFgeQgcifhSifQhpjMidh2IAcAIIC4AuQB6AmBWBFQA7AxAuBQQgPgVgOgKQgVgPgGAZQgGAXACAoQgDAggfAPQgaAMADAQQACALAMAeQAEARgCAUQAEAOAwAKQBdASATgEQAhgHgXg8IABgBQASA2AOA9IAOA+QAGAZALAIQAIAFArANQAaAIAYAKQgbgHgigFQg6gJg0AEQg8AEgKAUQgIANARAQQALAMAoAHQAqAHBAAAQBQAABJgQQACAPg4AMQg7ANhNgCQgnAAhaACQgZgrg1gfg");
	this.shape.setTransform(42.0803,39.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_0, new cjs.Rectangle(0,0,84.2,78.9), null);


(lib.CompoundPath_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FDE3C6","#EEBD8C","#EEB581","#EE9E64","#EE9A5F"],[0.161,0.533,0.635,0.812,0.835],11,-7.7,0,11,-7.7,52).s().p("AhvAgQhPgYhHgYQgYgXAMgWQAGgLAKgGQDZAkCAAbIAZgIIA1gXQA1AFAjAlQARASAHARIgZAIQg7AUg3AMQggAGgXACIgDAAQgpAAiXgvgAkBhBQgGAJADARQDyBMA1AMQAnAJAhgDQAdgEAkgOQAtgSAYgQQgFgHgLgKQgWgTgfgGIgrAUIgPAHQAOAKAAAOQg4gbj0gqIhNgOQgEABgEAFg");
	this.shape.setTransform(27.8111,7.879);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_9, new cjs.Rectangle(0,0,55.6,15.8), null);


(lib.CompoundPath_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.CompoundPath_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DDDDDD").s().p("AgoBXQgkgFgSggIgIgTQgFgLgGgFQgHgHgMABQgFABgPAEQAAABAAAAQgBAAAAgBQAAAAAAAAQgBAAAAgBIABgCIACgBQAAAAgBAAQAAAAAAgBQAAAAABAAQAAAAAAgBIAUgMQALgHAKgCIADAAQgEgNACgQQAFgUAOgNQAEgHAJgEQAQgFAMAPQAOARgGAdQARgJATAAQATAAAQAJQASAKAIAQIAHAEQAHADADgBIABAAIACgGQgDgNAFgRIACgHIACgKQAGgRATgKQAZgNANASQANARgEAXQgEAWgSAQIAPACQABAAAAAAQAAAAAAABQABAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgfAHIgBAAIgOAFQgXALgNANQgbAdgkAIQgNAEgOAAIgPgBg");
	this.shape.setTransform(15.4745,8.803);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_7, new cjs.Rectangle(0,0,31,17.6), null);


(lib.CompoundPath_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DDDDDD").s().p("AAAA8QgVAAgTgJQgXgJgLgSQgMgSAEgQQAEgNAMgMQASgUAdgDQApgEAbANQAaALAGAXQAIAYgNASQgMAQgWAJQgTAIgUAAIgDAAg");
	this.shape.setTransform(8.3856,6.0044);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_6, new cjs.Rectangle(0,0,16.8,12), null);


(lib.CompoundPath_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFB000","#FFB80C","#FFCC2D","#FFE95C","#FFE967","#FFE983","#FFE9B1","#FFE9D9"],[0,0.122,0.345,0.608,0.667,0.769,0.898,1],99,-28.4,0,99,-28.4,179.7).s().p("AOlHGICNgJQCKgNgPgVQgRgWhCgOQg6gNhCAAQgUAAhSASQg6ANg6gTQgxgQhdAIQiKALiXgKQjKgOhHAAQgfAAh9AGIiUAHQgwAChHgEQhGgDh9ACQhrAChVAEQhfAFhbgJQh3gMg4giQgegRgOAJQgNAJANAWQAkA8CBACQB8ABBnALICjAUQBSAJBRgCQBKgDBegOQBRgLBwAFQBBAECMAPIBRAHQijgFhiAAQhwAAiCAHQh1AHg3gBQg/gChkgIQhngJgpgBQgbgBhSgKQhAgJhKAFQhYAFhXggQhIgbgpgmQghgfAngaQAjgYCOgwIABgFQAIBFB5AdQAqAKAdgBQAdgCgUgLQgwgagUgcQgUgbAqAQQApARAngHQAmgHgTgRQgVgUgCgRQgDgWAagaQASgRgfgHIB+gQIAmgLQg5AggFAYQgFAVAjAHQAiAHAzgKQA4gMAvgcQBMgtAqgfQAxglgLgIQgLgIhJARQCyg5AWgYQAXghAkgsQhCBTgCArQAAARALABQALAAARgRQAwgyBQguQBqg+B4gaQBcgUBogDQAlAAAKgCQAQgEACgLQAFgdAWgKQAggNBRAKQBXALASgoQATgohHgfQhtgviOADQhaABhUAUQAcgKAagGQBwgbBuAMQBLAIBgAgQBvAjBgAcQCcB2BpDNQBSCfAcCfQAGAdAIAIQAKALAyAYQA0AfAaAsIiqAHQh2AEhfACgAAahzQglAOgzAZQhmAzg+A4QhPBKhOA2QhXA8hBAXQhIAaAUAXQAVAYBqgIQBvgIBHAAICbAGQCJAEA2gHQBcgNgFg0QgDgqALgUQALgTAhgQQAPgHgBgHQAAgFgOgLQgzgogRgWQgMgPgohhQgWg1gbAAQgGAAgGACg");
	this.shape.setTransform(131.6938,45.4522);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_5, new cjs.Rectangle(0.2,0,263.1,90.9), null);


(lib.CompoundPath_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgFAOQgGgFAFgNQAGgNAFAEQADABABAFQACAIgFAIQgEAGgDAAIgEgBg");
	this.shape.setTransform(0.8913,1.4766);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_4, new cjs.Rectangle(0,0,1.9,3), null);


(lib.CompoundPath_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgKAOQgHgHAKgNQAJgNAIAGQADACABAGQAAAJgIAIQgFAEgEAAQgDAAgEgCg");
	this.shape.setTransform(1.3309,1.5985);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_3, new cjs.Rectangle(0,0,2.7,3.3), null);


(lib.CompoundPath_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhnBBQgKgEgCgJQgDgLAJgGIgBgBQAVgLAPAFIgCgFQgIgPANgQQAMgQATACQAEAAAAAEIADAAQACgIAKgGQAJgGAKAAQABgRALgHQATgLAWAOQAKAFAEAJQAWABAHAOQAGALgBAJQANAKAEAOQACAKgEAKQgEAJgIAFQgUANgRgIQgFgCgDgEQgIAHgLADQgLACgJgCQgRgGgBgRQgBgRAKgPQgLAFgKgCQACAKgIAJQgHAJgMADQgNADgKgEIgDABQAEAIgIALQgHAJgKADIgHABQgGAAgGgDg");
	this.shape.setTransform(11.6339,6.8184);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_2, new cjs.Rectangle(0,0.1,23.3,13.5), null);


(lib.CompoundPath_1_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHASQgIgGAHgQQAIgSAHAFQAEACABAGQACAKgGALQgDAFgFACIgCAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape.setTransform(1.1464,1.9238);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_1_2, new cjs.Rectangle(-0.1,0,2.5,3.9), null);


(lib.CompoundPath_1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgNARQgJgIANgRQAMgRAKAIQAEAEAAAGQABAKgKAMQgGAFgFAAIgBABQgFAAgEgEg");
	this.shape.setTransform(1.6628,2.0026);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_1_1, new cjs.Rectangle(-0.1,0,3.5,4.1), null);


(lib.CompoundPath_1_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAWBQQgPgDgKgIQgJAFgMAAQgegBgEgVQgHABgIgBQgMgCgHgGQgKgHAEgLQAGgSASgGQAQgEATADQAIgPAagHIAJgDQgFgPAHgQQAHgOAQgHQAPgHAPAFQAUAGADARQACAPgLASQAgABgGANQgDAGgLACQAHAEADAFQADAEgCAFQgBAFgEACQgIAGgOAAQAWAOgHAPQgIAPgcAFQgGACgGAAIgOgCg");
	this.shape.setTransform(10.0253,8.1458);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_1_0, new cjs.Rectangle(0,0,20.1,16.3), null);


(lib.CompoundPath_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EDFEFA").s().p("AiKEVIhBgOQgigNglgqQg9hEgRhpQgShrBEh3QAig8AmgmIHOAAQAlAmAiA7QBEB4gSBrQgRBpg9BEQglApgiAOQgaAHgnAHQhOANg9AAQg8AAhOgNg");
	this.shape.setTransform(35.6761,29.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_1, new cjs.Rectangle(0,0,71.4,58.1), null);


(lib.CompoundPath_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAIAaQgVgDgOgUQgHgIABgJQABgKALgBQAJgBAHACQAGABAKAEQAZALgCASQgBAJgIAEQgGADgIAAIgDAAg");
	this.shape.setTransform(3.3795,2.6207);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_0, new cjs.Rectangle(0,0,6.8,5.3), null);


(lib.CompoundPath = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF8F82","#F4DC28","#FFFCCE"],[0.196,0.565,0.992],-0.2,6.7,0.2,-10.1).s().p("AhPA6QgngPgWgfQgHgJgDgJQgDgNAKgEIADgBQgCAGAIAFQAJAGATAFIAVAFQANADAKABQA/AEBTgcQAkgLARgXQAGgJgEgKQAPAGgDARQgBANgJAPQgQAYgLANQgQAUgTAKQgkAVguABIgGABQgmAAgggNgAhzAPQgCAEAEAEQAXAYAnAHQAhAGAngGQAggFAegVQAkgZAKgWQACgEgFgCQgEgDgCAFQgJAUgmAaQgaARgkAFQg5AHg/gnIgCAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAABgBAAg");
	this.shape.setTransform(15.1324,7.0536);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath, new cjs.Rectangle(0,0,30.3,14.1), null);


(lib.eyestatic = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhFAdQgcgNgBgQQABgPAcgNIAFgBQAbgLAlAAQAmAAAbALIAFABQAdANAAAPQAAAQgdANQgdAMgpgBQgoABgdgMg");
	this.shape.setTransform(9.85,4.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19.7,8.1);


(lib.eye = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhJACIgegCQAAAAAegBIAFAAIBEAAIBEAAIAGAAQAeABAAAAIgeACIhKAAIhJAAg");
	this.shape.setTransform(9.9,4.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhJADQgegCAAgBQAAgBAegBIAFAAIBEgBIBFABIAFAAQAeABAAABQAAABgeACIhKABIhJgBg");
	this.shape_1.setTransform(9.875,4.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhJAEQgegCAAgCQAAgBAegCIAFAAIBEgBIBEABIAFAAQAeACABABQgBACgeACQgeABgrAAQgqAAgfgBg");
	this.shape_2.setTransform(9.9,4.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhJAFQgegDAAgCQAAgCAegCIAGAAQAcgCAnAAQAnAAAdACIAFAAQAeACABACQgBACgeADQgeACgrAAQgqAAgfgCg");
	this.shape_3.setTransform(9.9,4.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhJAGQgdgDAAgDQAAgCAdgDIAGAAQAdgCAmAAQAnAAAdACIAFAAQAeADAAACQAAADgeADQgeACgrAAQgqAAgfgCg");
	this.shape_4.setTransform(9.9,4.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhJAHQgdgDAAgEQAAgDAdgDIAGAAQAdgDAmAAQAnAAAcADIAGAAQAeADAAADQAAAEgeADQgeADgrAAQgqAAgfgDg");
	this.shape_5.setTransform(9.9,4.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhIAIQgdgEgBgEQABgEAdgDIAFAAQAdgEAmAAQAnAAAcAEIAGAAQAeADAAAEQAAAEgeAEQgeAEgrAAQgqAAgegEg");
	this.shape_6.setTransform(9.9,4.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhIAKQgdgFAAgFQAAgEAdgFIAFAAQAdgDAmAAQAnAAAdADIAEAAQAeAFAAAEQAAAFgeAFQgeADgqAAQgqAAgegDg");
	this.shape_7.setTransform(9.875,4.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhIALQgdgFAAgGQAAgFAdgFIAFAAQAdgEAmAAQAnAAAcAEIAFAAQAeAFAAAFQAAAGgeAFQgeAEgqAAQgqAAgegEg");
	this.shape_8.setTransform(9.875,4.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhIAMQgdgGAAgGQAAgGAdgFIAFAAQAdgFAmABQAmgBAdAFIAFAAQAeAFAAAGQAAAGgeAGQgeAEgqAAQgpAAgfgEg");
	this.shape_9.setTransform(9.9,4.05);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhHANQgegGAAgHQAAgHAegFIAFAAQAcgFAmAAQAnAAAcAFIAFAAQAeAFAAAHQAAAHgeAGQgeAFgqAAQgpAAgegFg");
	this.shape_10.setTransform(9.875,4.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhIAOQgdgGAAgIQAAgHAdgGIAFAAQAdgFAmgBQAmABAdAFIAEAAQAfAGAAAHQAAAIgfAGQgdAGgqAAQgpAAgfgGg");
	this.shape_11.setTransform(9.9,4.05);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhHAPQgdgHAAgIQAAgIAdgGIAFgBQAcgFAmAAQAnAAAcAFIAFABQAdAGAAAIQAAAIgdAHQgeAGgqAAQgpAAgegGg");
	this.shape_12.setTransform(9.875,4.075);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhGAQQgegHAAgJQAAgIAegHIAEgBQAcgGAmAAQAnAAAcAGIAFABQAdAHAAAIQAAAJgdAHQgeAHgqAAQgpAAgdgHg");
	this.shape_13.setTransform(9.85,4.05);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhHARQgdgHAAgKQAAgJAdgHIAFgBQAcgGAmAAQAmAAAcAGIAFABQAeAHAAAJQAAAKgeAHQgdAHgqAAQgpAAgegHg");
	this.shape_14.setTransform(9.875,4.05);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhHATQgdgIAAgLQAAgKAdgIIAFgBQAcgGAmAAQAmAAAcAGIAFABQAeAIAAAKQAAALgeAIQgeAHgpAAQgpAAgegHg");
	this.shape_15.setTransform(9.875,4.05);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhGAUQgdgJAAgLQAAgKAdgJIAEgBQAcgGAmgBQAmABAcAGIAFABQAdAJAAAKQAAALgdAJQgeAHgpABQgpgBgdgHg");
	this.shape_16.setTransform(9.875,4.05);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhGAVQgdgJAAgMQAAgLAdgJIAEgBQAcgHAmgBQAmABAcAHIAFABQAdAJAAALQAAAMgdAJQgeAIgpABQgpgBgdgIg");
	this.shape_17.setTransform(9.875,4.05);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhGAWQgdgJAAgNQAAgLAdgKIAFgBQAbgIAmAAQAmAAAcAIIAEABQAeAKAAALQAAANgeAJQgdAJgpAAQgpAAgdgJg");
	this.shape_18.setTransform(9.875,4.05);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhGAXQgcgKAAgNQAAgNAcgJIAFgBQAbgIAmAAQAmAAAcAIIAFABQAcAJAAANQAAANgcAKQgeAJgpAAQgpAAgdgJg");
	this.shape_19.setTransform(9.85,4.05);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhGAYQgcgKAAgOQAAgNAcgKIAFgBQAbgJAmAAQAmAAAbAJIAGABQAcAKAAANQAAAOgcAKQgeAKgpAAQgpAAgdgKg");
	this.shape_20.setTransform(9.85,4.05);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhGAZQgcgLAAgOQAAgNAcgLIAFgBQAcgJAlAAQAmAAAbAJIAFABQAdALAAANQAAAOgdALQgdALgpgBQgoABgegLg");
	this.shape_21.setTransform(9.875,4.05);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhGAaQgcgLAAgPQAAgOAcgLIAGgCQAbgJAlgBQAmABAbAJIAFACQAdALAAAOQAAAPgdALQgdAMgpAAQgoAAgegMg");
	this.shape_22.setTransform(9.85,4.05);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhFAcQgdgMAAgQQAAgPAdgMIAEgBQAcgKAlAAQAlAAAcAKIAEABQAeAMAAAPQAAAQgeAMQgdALgoAAQgoAAgdgLg");
	this.shape_23.setTransform(9.875,4.05);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhFAdQgcgNgBgQQABgPAcgNIAFgBQAbgLAlAAQAmAAAbALIAFABQAdANAAAPQAAAQgdANQgdAMgpgBQgoABgdgMg");
	this.shape_24.setTransform(9.85,4.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},2).to({state:[]},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,0,20.8,8.1);


(lib.dolllegs = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF239").s().p("AgOBDIgxgIIgFh6IBagDIgKA8IAnANQAhAUgcAbQgPANgkAAIgTAAg");
	this.shape.setTransform(57.7873,62.3838,2.0908,2.0908);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFB18D").s().p("AiNkoIEbgLIhjJhIijAGg");
	this.shape_1.setTransform(55.9,30.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF239").s().p("AgzA7QgfgaAggWIAlgQIgOg7IBagEIAEB6QgVAIgbAEQgSADgNAAQgbAAgMgKg");
	this.shape_2.setTransform(17.2679,63.8481,2.0908,2.0908);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFB18D").s().p("AhJiMICIgFIALEgIhOADg");
	this.shape_3.setTransform(15.4389,32.0739,2.0908,2.0908);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3,p:{rotation:0,x:15.4389,y:32.0739}},{t:this.shape_2,p:{rotation:0,x:17.2679,y:63.8481}},{t:this.shape_1,p:{rotation:0,x:55.9,y:30.775}},{t:this.shape,p:{rotation:0,x:57.7873,y:62.3838,scaleX:2.0908,scaleY:2.0908}}]}).to({state:[{t:this.shape_3,p:{rotation:6.4663,x:16.351,y:32.1049}},{t:this.shape_2,p:{rotation:6.4663,x:14.59,y:63.8829}},{t:this.shape_1,p:{rotation:-20.9478,x:53.4574,y:31.5557}},{t:this.shape,p:{rotation:-20.9475,x:66.5323,y:60.4978,scaleX:2.0908,scaleY:2.0908}}]},2).to({state:[{t:this.shape_3,p:{rotation:12.4661,x:17.174,y:32.2038}},{t:this.shape_2,p:{rotation:12.4661,x:12.1011,y:63.6233}},{t:this.shape_1,p:{rotation:-29.8919,x:52.6489,y:32.0223}},{t:this.shape,p:{rotation:-29.8916,x:70.0594,y:58.6211,scaleX:2.0907,scaleY:2.0907}}]},2).to({state:[{t:this.shape_3,p:{rotation:20.9605,x:18.2756,y:32.4029}},{t:this.shape_2,p:{rotation:20.9605,x:8.6173,y:62.7286}},{t:this.shape_1,p:{rotation:-39.6173,x:58.1826,y:28.462}},{t:this.shape,p:{rotation:-39.6167,x:79.8037,y:51.7806,scaleX:2.0907,scaleY:2.0907}}]},2).to({state:[{t:this.shape_3,p:{rotation:20.9605,x:18.2756,y:32.4029}},{t:this.shape_2,p:{rotation:20.9605,x:8.6173,y:62.7286}},{t:this.shape_1,p:{rotation:-39.6173,x:58.1826,y:28.462}},{t:this.shape,p:{rotation:-39.6167,x:79.8037,y:51.7806,scaleX:2.0907,scaleY:2.0907}}]},1).to({state:[{t:this.shape_3,p:{rotation:12.4661,x:17.174,y:32.2038}},{t:this.shape_2,p:{rotation:12.4661,x:12.1011,y:63.6233}},{t:this.shape_1,p:{rotation:-29.8919,x:52.6489,y:32.0223}},{t:this.shape,p:{rotation:-29.8916,x:70.0594,y:58.6211,scaleX:2.0907,scaleY:2.0907}}]},2).to({state:[{t:this.shape_3,p:{rotation:6.4663,x:16.351,y:32.1049}},{t:this.shape_2,p:{rotation:6.4663,x:14.59,y:63.8829}},{t:this.shape_1,p:{rotation:-20.9478,x:53.4574,y:31.5557}},{t:this.shape,p:{rotation:-20.9475,x:66.5323,y:60.4978,scaleX:2.0908,scaleY:2.0908}}]},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.4,-4.3,103.5,82.7);


(lib.boy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AngUyQgQgFgLgNQgVgYAEgnQADgYARgnQATgtAXgZQAggjAogCQAagBANAPQAHAHACAMIAkAVQAqAZAbgCQAagBANgbQAJgSAIgsIAHggQgygTgMgMQAPh2AnhvQhmAGi7AIQgVgjgSgjQiYgHjPA5IhKAVQgGATgOAJQgIAFgOACQglAHgRgMQgJgHgJgQQgQgjgFg3QgGhMAWgqQALgWAQAAQAHABAHAEIAEADQAUAQATAZQAMAQAUAgIABABIgDgBIAFAJIAZgMQCnhPC5AEQgFgTgCgKQAtgJBMgWQBMgVAugKIgBgBQBWhjBZhTQhMgNgzgRIACgHIgNgFQhHgYhOgkIiOhGQgfgPhEgmQg9gggqgHQgZgFgPAEQgPAFgVAQIg9AvQgWARgOACQgLABgJgGQgKgHAAgKQAAgIACgEQACgDAHgGQAmgnAyghIhfAjQgUAHgRgBQgVgBgBgPQgBgQA3ggQA2ggAvgNQhNAJgWAAQg3ABgEgUQADgVBDgSQA+gPA3ABQgRgmgEgqQgBgWAFgKQAEgIAHgEQAIgEAIACQAKADAGAMQAQAlAPApQAXAxAzAuQAuApA4AbQCuBVDPA5IAEgOQA2AKA5ACQAmABA9gCIAAgnQhzABhrgoQiHgzhrhsQhphqg4iKQgFgNgGgDQgFgDgNABQgfADgggLQgpgNgOgeQgKgVAJgZQAIgZAVgLQAcgQAsANQgohDgFhTQgGhPAZhcQgYgGgYgKQhdglhBhGQhGhKgShbQB7A5CKAAQgxgYgngqQgngogWgzQCsBWDAAEQhEgjgwg+Qgwg+gRhLQCTBfCuAQQA9AFB4gFQB6gFA7AEQBgAIBMAlQBXAqApBIQA5gQAfgFQAxgIAoAHQBPANA7BFQA3A/ATBWQANA9gDBJQgDA5gNBOQAVgOAbAGQAbAGAOAVQAPAWgEAeQgEAdgUATQgUATgcAFQgcAFgbgKQhnFEjJCKQhSA5hoAbIAFA1IAdgFQAxgLA2ggQAhgUA6gsIAHAOQBohPBEg6QBbhNBHhHQAxgxAZgoQAjg1AEg0QABgNgBglQgCgcAFgUQADgOAIgGQAGgEAJABQAJABAFAHQAPASAFAlQAFAegDAcQAtgQBLAGQBJAHABASQAGAVg4ALQgeAHg7AIQAngEA5AMQA/ANAAAQQABAQgSAIQgPAGgVAAIhZgCIA2ASQAgAKAVALIANAHQAEADACAIQAEAJgHAKQgHAIgLADQgOADgagJIhLgZQgagJgPABQgQABgWANQgoAWgrAlQgYAWgxAyIjtDvQgYAagTALIAEAGIhhBQQgQANgGAJQgGAJgGAWQgrCfgOAnQgkBugyBKQgKAQgIAEQgLAFgSgEQgHCtgzClQgDAMgGAGQgHAGgPAAQgUAAgbgEQgDARgQA+QgJAjgHAUQgLAegOAWQgRAagYAQQgaARgbABQgbACgegOQgSgJghgWIhFguQgWAogXAfQgQAXgQAHQgIAEgJAAQgHAAgIgDg");
	this.shape.setTransform(0.0266,133.251);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("An3VVQgRgFgKgNQgVgZAEgmQACgYASgnQAUguAWgYQAigjAmgCQAZgBAOAOQAHAJADALIAOAIQANAJAegUQAkgWALgBQAagBANgbQAJgSAIgtIAHgfQgwgSgOgNQAOhzAohyIkhANQgVgigRgiQiWAXjCBiIhEAjQgCAUgMAMQgIAGgMAFQgjAPgTgJQgLgFgLgPQgXgegPg1QgWhKANgtQAHgYAQgDQAHAAAHADQADAAACABQAXAMAYAVQANAMAbAcIABABIgDAAIAHAIIAsghQCahqC3gaQgIgYgBgQQAtgJBMgWQBMgVAtgKIAAgBQBPhcBfhaQhLgNg0gRIAHgXQgRgHghgUQhDgkhHgxIiAhdQgcgTg8gwQg3gqgogPQgZgIgPABQgOACgZANIhDAkQgZANgOgBQgLgBgIgHQgJgIACgKQABgIADgEIAKgIQAuggA2gXIhkASQgVAEgRgEQgVgFACgPQACgQA7gXQA7gXAxgEQhOgFgVgDQg3gJAAgUQAGgVBGgFQA/gFA2AKQgLgqAEgoQACgVAHgKQAFgHAIgDQAJgCAHADQAKAFADAMIAJArIAJAnQAOA1ArA2QAmAwAyAkQCsB7DdBjQAvAHAzACQAhABA5gCIAAgnQh1AAhpgoQiHgyhrhsQhphqg4iKQgFgNgGgEQgFgCgNABQggACgfgKQgogNgPgeQgKgVAJgZQAIgZAVgLQANgHASgBQAUgCAVAHQgnhDgGhTQgGhQAahbQgagHgXgJQhdglhBhGQhGhKgShbQB9A5CIAAQgxgZgngpQgngpgWgyQCsBWDBAEQhEgjgxg+Qgwg+gRhLQCSBfCvAPQA9AGB4gGQB6gFA7AFQBgAIBMAlQBXAqApBIQA4gQAggFQAygIAnAHQBPANA7BFQA3A/ATBWQANA9gDBJQgCA3gOBPQAVgNAbAGQAbAGAOAVQAPAWgEAeQgEAdgUATQgUATgcAFQgcAEgbgJQhnFFjJCKQhTA5hnAZIAFA1IAegEQAwgLA2ggQAhgUA7gsIAPAiQDghPCEhEQA+gfAlgeQAygoAUgvQAFgMALgjQAHgcALgRQAIgNAIgCQAIgDAIAEQAIAEADAIQAIAWgGAkQgFAfgMAaQAvgCBFAeQBEAdgEASQgCAVg5gHQgegDg9gLQAnAIA0AeQA4AggFAQQgFAPgTACQgQABgTgHIhVgdIAuAhQAbAVARAQIAKALQACAEAAAHQAAAKgJAHQgKAGgKgBQgJAAgLgGIgRgMIg/gvQgWgRgOgDQgPgEgaAFQgsAIg1AXQggANg8AeIkiCVIhLA8QgPANgHAKQgGAIgGAXQgrCegOAoQgkBugyBKQgJAPgJAEQgMAGgRgEQgHCsgzCmQgEANgFAEQgGAGgPAAQgYAAgXgDIgUBPQgKAkgGATQgLAegOAWQgRAZgXAQQgaASgcABQgOAAgqAXQgiARgSgNIhFguQgWAogXAfQgQAXgQAHQgIAEgIAAQgIAAgIgDg");
	this.shape_1.setTransform(0.0295,150.001);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AjaVzQg4gJgggSQgQgKgGgKQgLgRAKgmQAEgNAFgHQAKgOATgEIAbhIQArh4AShbQg8gWgPgPQAOhyAohyIkiANIgfg3QiNA1ipCFIg8AxQADATgKAOQgHAIgKAHQgfAWgVgGQgMgCgOgMQgbgZgbgxQgjhFADguQADgaAPgFQAFgCAJACIAAgBIAFABQAYAHAcAQQAOAIAiAXIABABIgDABIAJAGIAkgpQCJiPC7g9QgNglgDgWQAtgJBMgWQBNgVAsgKIAAAAQBShgBchWQhMgOgygRIAEgRIgDAAQhKgThQgeIiTg6QgfgNhHggQhAgbgqgEQgZgDgQAFQgNAFgUATIg5AzQgVATgOADQgLACgJgGQgLgFgBgKQAAgIACgFQABgDAGgHQAmgsAtghIhcAqQgTAJgSAAQgVAAgCgPQgCgQA0gkQA0gkAtgRQhJAPgZACQg3AFgEgTQAAgWBCgWQA9gVA2gDQgVgngGgnQgDgUAFgMQADgIAHgFQAHgFAIACQALACAGALIAUAnIASAkQAaAwA3AqQAxAlA6AXQC0BHDSAnIACgEQA1AJA5ADQAlABA+gBIABgnQh0AAhqgoQiIgyhrhtQhphqg3iKQgFgMgGgEQgFgDgNABQggADgggLQgogNgPgeQgKgVAJgZQAJgYAUgMQAOgHASgBQATgBAWAGQgohDgGhTQgGhOAahcIgxgRQhcgkhChGQhGhLgRhbQB8A6CJgBQgygZgngoQgngpgWgzQCsBWDBAEQhEgjgwg+Qgwg+gShKQCTBeCvAQQA9AFB4gFQB5gFA7AEQBgAIBNAlQBXAqApBIQA3gQAhgFQAxgHAoAGQBOANA8BFQA3A/ASBWQANA9gDBJQgCA4gNBPQAUgNAbAFQAcAGAOAVQAPAXgEAdQgFAdgUAUQgTASgdAFQgcAFgagKQhoFFjICLQhTA4hnAaIAEA1QARgCANgDQAxgLA1ggQAigUA6grIAZA2QDYgtCQgyQBBgXApgYQA2ghAbgtQAHgLAOgiQAMgaANgQQAIgLAKgCQAIgBAHAFQAHAFACAIQAFAXgLAjQgJAdgPAZQAwAEBAAnQA/AmgHARQgEAVg4gOQgdgHg6gTQAmANAuAkQA0AngIAPQgGAOgUgBQgQgBgSgJIhQgoIApAnQAZAYAOASIAIAMQACAFgBAIQgBAKgLAFQgKAFgKgCQgNgDgVgUIg4g4QgVgUgMgFQgPgFgaACQgtACg3AOQgiAJhAAXIlJB1IggAaQgRANgFAJQgHAJgGAWQgrCfgNAnQglBugxBLQgKAOgJAFQgKAFgTgEQgHCsgxCmQgEANgGAFQgGAGgPAAQgRAAgVgDQgXBxg0BjIAAAAIgbAvIAIAGIAAgDIABABQAeAXAPANQAYAVAOAUIACAFIAAAAQAFAIgBAGQAAAQgXAKQgaALgmAAQgZAAgegFg");
	this.shape_2.setTransform(0.0149,153.823);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgxVdQgSgDgKgIQgRgOgCglQgBgOADgJQAEgQARgKIAChNQAAh/gOhdQg/AAgTgJQgah0ABh1IkNBsQgZgUgWgVQhzBgh0C2IgoBCQAIATgEAPQgEAJgHALQgWAegWADQgNABgQgHQgigNgpgnQg5g0gMgtQgGgZAMgKQAFgEAJgBIAFgCQAZgBAfAGQARADAnALIABgBIgCACIAKADIAUgyIAAAAQAohZA9hMQA9hNBMg6QgZgfgJgTQAngYBBguQBAguAngYQAhgUATgFQAOgEAMAAIgdgcQBWhkBZhSQhNgOgygRIALglIgNgDQhIgUhQggIiSg9QgggOhGgiQg/gcgpgFQgbgDgOAFQgPAFgUASIg6AyQgVASgOADQgLABgJgFQgKgGgBgKQgBgIADgEIAHgKQAkgoAxgkIhdAoQgUAIgRAAQgVAAgCgQQgCgOA1gkQA1gkAugPQhNANgWACQg3AEgEgUQABgWBCgUQA9gUA3gBQgUgmgGgpQgDgVAGgLQADgIAHgFQAIgFAHACQALADAGALQAUArARAhQAYAwA2ArQAwAmA6AZQDVBZEOAwIAGAKQAtADBCgCIAAgnQhzAAhrgoQiHgyhrhtQhphqg4iKQgFgNgGgDQgFgDgNABQggADgfgLQgpgNgOgeQgKgVAJgZQAIgYAVgMQANgHASgBQAUgBAVAGQgohDgFhTQgGhOAZhcQgXgHgZgKQhdgkhBhGQhGhLgShaQB9A5CIgBQgygZgmgoQgngpgWgzQCsBWDAAEQhDgjgxg+Qgwg+gRhKQCSBeCvAQQA9AFB4gFQB6gFA7AEQBfAIBNAlQBXAqApBIQA3gPAhgGQAxgHAoAGQBPANA7BFQA3A/ATBWQANA9gDBJQgDA5gNBOQAVgNAbAFQAbAGAOAVQAPAXgEAdQgEAdgUAUQgUASgdAFQgcAFgagKQhnFFjJCLQhTA4hnAaIAFA1QARgCAMgDQAigIAmgSIAAgCIAJgOIAbgEQAdgSA5gqIAUAqQDhgnCQgrQBDgVApgWQA4gfAcgsQAHgLAQggQAMgaAOgQQAKgLAIgBQAIAAAHAFQAIAFABAIQAEAXgMAjQgKAdgQAYQAvAGA/ApQA9ApgHAQQgGAVg2gQQgdgJg4gUQAkAOAtAlQAxAqgHAOQgHAOgUgCQgQgBgSgKIhOgsIAnApQAYAZANATQAHAJABADQACAFgBAIQgCAKgLAFQgKAFgKgDQgPgEgSgVIg2g6QgUgVgMgFQgPgHgZABQguABg3ANQgiAIhBAUIkqBdIg/AzQgQANgGAJQgGAJgGAWQgrCfgOAnQgkBugyBLQgJAOgJAFIgEABQAbB5AFB4QABANgEAHQgEAHgPAGQgMAEgYAGQAQBwgQBwIgBAAIgJA2IAKADIgBgDIABABIA2ASQAeAMAUAPIAEADQAGAHACAFQAFAPgTARQgiAghMAOQgiAGgZAAQgRAAgOgDg");
	this.shape_3.setTransform(-0.0092,139.603);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AqqVgQglgEgygbQhEglgWgoQgMgWAJgOQAFgGAGgCIAAAAIAFgCQAYgIAggCQAUgCAlABIABAAIgCACIALAAIAHg1IAAgBQAQhfAohaQAohZA7hMQgegVgQgTQAgghAzg8QA0g9AfghQAZgaATgLIAVgKIgPgQQAUgYBIhoQA+hbAjghQhNgOgygQIAKglIgMgEQhJgUhPgfIiTg+QgfgNhGgiQg/gcgqgFQgagDgPAFQgNAEgVASIg6AzQgVASgOADQgLABgJgFQgLgGAAgKQgBgIACgFIAIgKQAngqAughIhdAnQgUAJgRAAQgVAAgCgQQgCgOA1gkQA0gjAugQQhKANgYACQg3AEgEgUQABgVBCgVQA9gUA3gCQgVgngFgoQgDgUAFgMQAEgHAHgFQAIgFAHACQALADAGALIATAnIARAlQAZAwA2ArQAwAmA6AZQCzBKDSAtIABgDQBzAVBeAGIABgiQhzAAhrgoQiIgyhrhtQhphqg3iKQgGgNgFgDQgGgDgMABQggADgggLQgogNgOgeQgLgVAJgZQAJgYAUgMQAdgQAsANQgnhDgHhTQgFhSAZhYQgcgJgVgIQhcglhChGQhGhKgRhbQB8A6CJgBQgygZgngoQgngpgVgzQCrBWDBAEQhEgjgwg+Qgxg+gRhLQCVBgCtAPQA9AFB4gFQB6gFA7AEQBgAIBMAlQBXAqApBIQA4gQAggFQAxgIAoAHQBPANA7BFQA3A/ATBWQANA9gDBJQgDA4gNBPQAVgOAbAGQAaAGAPAVQAPAWgEAeQgEAdgUATQgUATgdAFQgcAFgagKQhoFFjICKQhSA4hoAbIAEAtIAegHQAngJAmgRIAEgGIANgCQAvgYA1gmIAUAqQDegmCTgsQBCgVAqgWQA3gfAdgsQAHgLAQghQAMgZAOgQQAKgLAIgBQAIgBAHAGQAIAFABAIQAEAXgMAjQgLAdgQAXQAwAHA/ApQA9AogHARQgGAVg2gQQgdgJg5gVQAlAPAtAlQAxApgIAPQgHAOgTgCQgQgBgSgKIhOgsIAnApQAYAZANATIAIAMQACAFgBAIQgCAKgLAFQgKAEgKgCQgOgEgTgVIg2g6QgUgUgMgGQgPgHgaABQgtABg4ANQgiAIhAAUIkrBdIg+AzQgPALgHALQgHAJgGAWQgrCfgMAlQgkBsgwBKQAvBkAdBeQAEAOgCAGQgCAIgNAJQgQALgRAIQAsBpAMBwIAAABIAEA2IALAAIgCgDIABABQBMADAkAPQAEABABABQAHAEAEAFQAIAOgNAVQgaAohFAgQgzAXglADQgRABgMgFQgVgJgLgkQgEgMAAgKQABgRANgOIgShLQgeh5gmhYQg8AQgVgEQg1hpgehzIjpCtIg4gcQhYB7hBDMIgXBKQANAQAAAQQgBAJgFAMQgNAjgVAIQgIADgKAAIgLgBg");
	this.shape_4.setTransform(0.036,141.2946);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AKOVeQgUgHgOgkQgFgOgBgIQAAgQANgQIgXhJQhCjOhYh6QgbAPgcANIjpisQgeByg1BqQgVAEg9gQQglBZgeB4IgSBLQAOAPAAAQQAAAGgEAQQgMAkgUAJQgMAGgRgCQglgDgzgXQghgQgUgOQgbgTgPgXQgOgVAJgOQAEgFAHgEIAEgDQAYgJAggEQASgCAngCIABgBIgCADIAKAAIAEg3QANhwArhpQgagOgGgFQgNgIgCgJQgCgIAEgMQAfhkAtheQgwhKgkhtQgOgogqibQgGgWgGgJQgEgHgSgQIg/gyIkqhdQhDgVgggHQg3gNgugBQgaAAgOAGQgMAFgUAVIg2A6QgTAVgOADQgKADgKgFQgLgEgCgKQgBgIACgFQABgDAHgJQANgTAYgZIAngpIhOAsQgSAKgQABQgUABgHgNQgHgPAxgpQAwgoAngOQgZAHhCAZQg2AQgGgVQgHgQA9gpQA/gpAvgHQgQgXgKgdQgMgjAEgXQABgIAIgFQAHgGAIABQAIABAKALQAOAQAMAZQAQAhAHALQAcAsA4AfQApAWBDAVQCOArDjAnIAUgqQA0AmAwAYIANACIAEAGQAkARApAJIAeAHIAEgtQhogbhSg4QjIiKholFQgaAKgcgFQgdgFgUgTQgUgTgEgdQgEgeAPgWQAOgVAbgGQAbgGAVAOQgNhOgDg5QgDhJANg9QAThWA3g/QA7hFBPgNQAogHAxAIQAhAFA3AQQAphIBXgqQBNglBfgIQA7gEB6AFQB4AFA9gGQCvgPCShfQgRBLgwA+QgwA+hEAjQDAgECshWQgWAzgnAoQgnAqgxAYQCKAAB7g5QgSBbhGBKQhBBGhdAlQgYAKgYAGQAZBcgGBPQgFBTgoBDQAVgGAUABQASABANAHQAVALAIAZQAJAZgKAVQgOAegpANQggALgfgDQgNgBgFADQgGADgFANQg4CKhoBqQhrBsiIAzQhpAnh1AAIAAAjQBfgGBzgWIABADQDRgsC0hLQA5gYAxgmQA2grAZgwIARglQAJgVAKgSQAGgMALgCQAHgCAIAFQAHAFADAHQAGAMgDAUQgHArgTAkQA3ACA9ATQBCAVABAWQgEAUg3gEQgTgChQgNQAuAQA1AjQA1AkgCAOQgCAQgVAAQgRAAgUgJIhdgnQAvAiAmApIAIAKQACAFgBAHQAAAKgLAGQgJAGgLgCQgOgCgVgSIg6gzQgWgSgNgEQgQgFgZADQgpAFg/AcQgkAQhCAfIiSA+QhPAfhJAUIgMAEIAKAlQgzARhMANQAjAhA+BbQBHBoAVAYIgQAQQALADALAHQARAJAbAcQAgAhAzA9QAzA8AgAhQgNAPghAZQB5CbAiDDIAEAbQACAOABANIAKAAIgBgDIABABQAlgBAUACQAgACAYAHQACABACACQAJAEADAEQAJANgMAWQgOAZgZAUQgUAQggARQgyAbgkAEIgLABQgKAAgIgDg");
	this.shape_5.setTransform(0.0092,148.6446);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgoVaQhLgNgjggQgSgSAEgPQACgEAHgHIADgEQAVgPAdgMIA3gSIAAgBIAAADIAKgDIgKg1IAAgBQgRhvAQhxQgSgEgSgGQgOgFgFgIQgDgFAAgOQAGh6Abh3IgEgCQgIgEgLgPQgxhKglhuQgNgogrieQgGgWgHgKQgHgKgPgMIg+gzIkrhcQhAgUgigJQg4gNgtAAQgagBgPAHQgMAFgUAVIg2A6QgTAUgOAEQgKADgKgFQgLgFgCgKQgBgHACgFIAIgNQANgSAYgZIAngpIhOArQgSAKgQACQgTABgHgOQgIgOAxgqQAwgnAngPQgZAIhCAYQg2ARgGgVQgHgRA9goQA/gqAwgGQgQgXgLgeQgMgiAEgXQABgIAIgGQAHgFAIABQAIABAKALQAOAPAMAaQAQAhAHALQAdArA4AfQApAXBCAUQCTAsDeAnIAUgqQA5AqAdARIAbAFIAJANIABADQAlASAiAHIAeAFIAEg1QhlgZhVg5QjIiLholEQgaAJgcgEQgdgFgUgTQgUgTgEgdQgEgeAPgWQAPgVAagGQAbgGAVANQgNhPgCg4QgEhJANg8QAThWA3hAQA8hEBOgOQAogGAxAIQAgAFA4AQQAphIBXgrQBNgkBfgIQA7gFB6AFQB4AGA9gGQCtgPCVhfQgRBKgxA+QgwA+hEAkQDBgFCrhWQgVAzgnApQgnApgyAYQCJABB8g5QgRBahGBLQhCBFhcAlQgVAJgcAIQAZBZgFBSQgHBSgnBEQAWgHATABQASABAOAIQAUALAJAZQAJAZgLAUQgOAegoAOQggAKgggDQgMgBgGADQgFADgGANQg3CKhpBqQhrBtiIAyQhrAohzAAIABAnQBBACAtgCIAGgLQCGgYBxgfQB6gjBygvQA6gYAwgmQA2grAZgxIARgkIATgnQAGgMALgCQAHgCAIAFQAHAEAEAIQAFAMgDAUQgFAogVAnQA3ACA9ATQBCAVABAWQgEAUg3gFQgXgBhLgNQAuAPA0AjQA1AkgCAPQgCAPgVABQgRAAgUgJIhdgoQAwAjAlApIAIAKQACAEgBAIQAAAKgLAGQgJAGgLgCQgOgCgVgTIg6gyQgUgSgOgFQgPgFgaADQgqAFg/AdIhlAvIiSA9QhQAghJAUIgMAEIAKAkQgyARhNAOQBeBXBRBfQgQARgNALQARACAJACQASAFAiAVQAnAYBBAuQBBAtAnAYQgKAVgZAdQBNA6A9BNQA8BNAoBYIAVAzIAKgDIgDgCIACAAQAigKAVgEQAfgGAaACQADAAACABQAIABAFAEQANALgHAYQgHAbgUAaQgPAUgaAZQgrAmghAOQgRAGgLgBQgWgCgWgfQgJgLgCgJQgFgQAJgSIgphBQhyi2h1hhQgYAXgXASIkMhsQAAB1gZB0QgTAKhAAAQgOBfABB8IABBNQASALAEAQQACAIgBAOQgCAmgRAOQgJAHgSAEQgOACgSAAQgZAAgigGg");
	this.shape_6.setTransform(0.014,146.928);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("ABkVtQgXgKgBgQQAAgFAEgJIADgEQAOgVAYgVQAOgNAfgWIAAgCIABADIAIgGIgbgvIAAAAQg1hmgWhtQgWACgQAAQgPAAgHgGQgFgEgEgNQgximgHitQgSAFgLgGQgIgEgLgPQgxhLglhtQgPgugpiYQgGgVgHgLQgHgKgPgMIgggaIlJh0QhAgXgigJQg3gPgtgCQgbgBgOAEQgOAGgTATIg4A4QgUAUgOADQgKADgKgGQgLgFgBgKQgBgIACgEIAIgNQAOgSAZgYIApgmIhQAnQgSAKgQAAQgUABgGgOQgIgPA0gmQAxgnAngNQgZAHhDAVQg3APgEgVQgHgRA/gmQBAgnAwgFQgQgYgJgdQgKgjAFgXQABgIAIgFQAHgFAIABQAJABAJAMQANAQAMAaQAOAhAHALQAaAtA3AhQAnAYBDAXQCRAzDWAtIAag2QA7ArAhAUQA1AgAxAKIAeAFIAEg1QhogahSg4QjIiLholEQgaAJgcgEQgdgFgUgTQgUgTgEgdQgEgeAPgWQAPgVAagGQAbgGAVANQgNhPgCg4QgEhJANg8QAThWA3hAQA8hEBOgOQAogGAxAIQAgAFA4AQQAphIBXgrQBMgkBggIQA7gFB6AFQB4AGA9gGQCugPCThfQgRBKgwA+QgwA+hEAkQDAgFCshWQgVAzgnApQgnApgyAYQCIABB9g5QgRBahGBLQhCBFhcAlQgVAJgcAIQAZBZgFBSQgHBTgnBCQAsgMAcAQQAVALAIAZQAJAZgKAUQgOAegoAOQggAKgggDQgMgBgGADQgFADgGANQg3CKhpBqQhrBtiIAyQhrAohzAAIABAnQA+ACAlgCQA5gCA1gKIACAFQDUgoCyhHQA6gXAxglQA3gqAagvIASgkIATgnQAGgLAMgDQAHgCAIAGQAHAEADAIQAFALgDAVQgHAogVAnQA3ADA9AUQBCAWAAAWQgEAUg4gGQgVgChNgOQAuAQA0AlQA0AkgCAPQgDAPgVAAQgRAAgTgJIhcgqQAvAlAjApIAIAKQACAEgBAIQAAAKgLAGQgJAFgLgCQgPgCgUgTIg5g0QgVgTgNgEQgOgFgaACQgqAEhAAbIhmAtIiUA7QhQAehJASIgEABIAFAQQgyARhNAOQBdBWBSBgIgBAAIABAAQAtAKBMAWQBMAVAtAKQgCAUgOAmQBcAeBSA0QBTA0BDBGIAkApIAJgGIgDgBIABAAIAwggQAcgQAYgHIAFAAQAIgCAGACQAPAGACAZQAEAvgkBEQgaAygbAYQgOAMgMADQgWAFgegWQgNgKgEgFQgKgNACgUIg7gxQiqiFiNg0QgPAdgQAZQhlgFi8gIQAnBuAPB2QgPAPg8AWQATBfAqB0IAaBIQAUAEAKAOQADAFAGAQQAKAkgMATQgGAKgPAJQgiATg2AJQgeAEgZAAQglAAgbgLg");
	this.shape_7.setTransform(0.0144,161.148);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AHXVUQgNgGgTgYQgYgigUgkIhFAuQgTAMghgRQgqgWgOgBQgcgBgagRQgXgQgRgaQgXgigShJQgQg+gEgRQgbAEgUAAQgPAAgGgGQgFgEgEgNQgzijgHiwQgTAEgKgFQgIgFgKgOQgyhLglhuQgOgqgqicQgGgWgGgJQgGgJgRgNIhKg9IkiiUQg+gfgegNQg1gWgsgJQgagFgPAEQgNAEgXAQIg/AvQgWARgPACQgLABgJgHQgJgGAAgKQAAgHACgFIAKgLQAQgQAcgUIAugiIhVAeQgTAHgQgCQgUgCgEgPQgFgPA4ghQA2ggApgHQgaADhGANQg4AHgCgWQgEgRBDgeQBFgeAwACQgMgagFgfQgGgkAIgWQADgHAIgEQAIgEAIACQAIADAIAMQAKARAIAcQAKAiAFANQAVAwAxAoQAlAdA+AgQCOBHDXBLIAPgiQA6AsAiAUQA2AgAwALQAOADAQACIAFg1QhogahTg4QjIiLhnlFQgbAKgcgFQgdgFgTgSQgUgUgFgdQgEgdAPgXQAOgVAcgGQAbgFAVANQgOhOgCg5QgDhJANg9QAShWA4g/QA7hFBPgNQAngGAyAHQAgAGA3APQAqhIBXgqQBMglBggIQA7gEB6AFQB3AFA9gFQCvgQCTheQgSBKgwA+QgwA+hEAjQDBgECshWQgWAzgnApQgnAogxAZQCHABB9g5QgRBahGBLQhBBFhdAlQgbAKgWAHQAaBbgGBPQgGBTgoBDQAWgGAUABQASABANAHQAUAMAJAYQAJAZgKAVQgPAegoANQgfALgggDQgOgBgEADQgHADgFANQg3CKhpBqQhrBtiIAyQhqAoh0AAIABAnQA5ABAhgBQAzgBAvgIQDbhhCth8QAzglAmgwQArg2AOg0IAIgoIAKgqQADgNAKgFQAHgDAJADQAIADAFAGQAIALABAUQAEAqgLApQA2gLA/AFQBFAGAHAVQAAAUg3AIQgVAEhOAEQAwAFA7AXQA8AXACAPQACAQgVAFQgRAEgVgEIhkgTQA4AZAsAfIAKAIQADADABAIQACAKgJAIQgIAHgLABQgPABgYgNIhEgkQgYgNgOgBQgQgCgYAJQgoAOg3AqIhYBEIiBBcQhGAxhDAkIgZAOQgPAKgKAEIAGAWQgyARhMAOQBZBSBVBkIAAAAIAAAAQAtAKBMAVQBNAWAsAJQgCATgHAVQC3AaCaBrIArAgIAHgHIgDgBIACAAQAZgbAPgNQAYgWAWgLQAEgCABAAQAIgDAHABQAPACAHAYQAIAbgDAhQgDAZgKAiQgRA4gVAcQgLAOgLAFQgUAJgjgPQgOgGgFgFQgNgLgBgUIhEgkQjChiiWgWQgUAmgSAeIkhgNQAnBuAPB2QgNAMgxAUIAGAfQAIArAJATQAOAbAZACQAMAAAkAXQAeATANgIIAOgIQADgMAHgIQANgPAaABQAoACAfAjQAVAWAWAwQARAlADAaQADAngUAYQgLANgQAFQgIACgHAAQgJAAgJgDg");
	this.shape_8.setTransform(0.0142,157.3337);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AHAUxQgPgGgQgYQgagjgTgjIhFAuQggAVgUAJQgeAOgagBQgcgCgagRQgXgQgRgaQgWgigThJQgOgzgGgcQgbAEgTAAQgQAAgGgGQgFgEgEgNQgzimgHitQgRAFgMgGQgIgFgKgOQgxhLglhuQgNgmgsifQgGgWgGgKQgGgJgRgNIhhhPIAFgHQgRgKgbgaIjsjwQgvgwgagXQgrgmgogWQgXgNgPgBQgMgBgdAJIhKAaQgbAJgOgEQgLgCgGgJQgHgJADgKQACgHAEgEIANgHQAVgKAggLIA3gRIhaABQgVAAgOgGQgSgIAAgQQAAgQBAgNQA9gNApAGQgagGhFgJQg4gMAFgVQABgSBKgGQBKgHAtARQgDgdAFgeQAGglAOgSQAFgGAJgBQAJgCAHAFQAGAFAEAOQAFAUgBAdQgCAkABANQAEA0AjA1QAZAnAxAyQBGBHBcBOQBBA2BrBSIAGgNQA8AsAgAUQA2AgAwAKIAeAFIAFg1QhpgahRg5QjJiKhnlFQgbAKgcgFQgcgEgUgTQgUgTgEgdQgEgeAPgWQAOgVAbgGQAbgGAVANQgOhPgCg4QgDhJANg8QAShWA4hAQA7hEBPgOQAngGAyAHQAgAGA4APQAphIBXgqQBMgkBggIQA7gFB6AFQB4AFA9gFQCugQCTheQgRBKgwA+QgxA+hEAjQDBgECshWQgWAzgnApQgnApgxAYQCIAAB9g4QgSBahGBLQhBBFhdAlQgXAKgaAHQAaBZgGBRQgGBUgnBCQArgMAdAPQAVAMAIAYQAJAZgKAVQgPAegoAOQggAKgfgDQgNgBgFADQgGADgFANQg4CKhoBqQhsBsiHAzQhpAoh1AAIAAAnQA8ACAngCQA5gCA2gKIAEAOQDQg5CthVQA4gbAugoQAzguAWgyIAQglIAQgpQAFgLALgEQAIgCAIAFQAHAEAEAHQAGAMgCAUQgDAogSAoQA3gBA9AQQBEARACAWQgDAUg3gBQgYgBhLgJQAvANA2AhQA3AfgBAQQgBAQgVABQgRABgUgHIhggkQAxAgAoAoIAJAJQACAFAAAHQAAAKgKAHQgJAGgLgBQgOgBgWgSIg9gvQgYgRgMgDQgQgEgZAEQgpAIg9AgQgjARhAAjIiOBGQhOAkhHAZIgNAEIACAHQgyARhNAOQBgBZBOBdIAAAAIAAAAQAtAKBMAWQBNAVAsAKQgBAMgFAQQC5gECnBQIAZAMIAFgJIgDAAIABgBQAVggALgPQATgaAUgQQACgCACAAQAHgFAGAAQAQgBAMAWQAWAqgGBMQgGA6gPAgQgHAPgLAIQgSANgkgIQgPgDgHgEQgOgIgGgUIhKgVQjQg5iXAHQgQAfgXAnIkhgNQAnBuAPB2QgOAOgwASIAGAfQAJAtAJARQANAcAaABQAbABAqgYIAjgVQADgMAHgIQANgOAaABQAmABAiAjQAUAWAWAwQASAoACAYQAEAmgVAYQgLANgQAFQgIACgIAAQgJAAgIgDg");
	this.shape_9.setTransform(-0.0016,140.5886);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_4}]},2).to({state:[{t:this.shape_5}]},2).to({state:[{t:this.shape_6}]},2).to({state:[{t:this.shape_7}]},2).to({state:[{t:this.shape_8}]},2).to({state:[{t:this.shape_9}]},2).to({state:[{t:this.shape_9}]},2).to({state:[{t:this.shape_8}]},2).to({state:[{t:this.shape_7}]},2).to({state:[{t:this.shape_6}]},2).to({state:[{t:this.shape_5}]},2).to({state:[{t:this.shape_4}]},2).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape}]},2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110.7,0,221.4,301.2);


(lib.___Camera___ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// cameraBoundary
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B66800").s().p("AgdAYIAPgiQAQgiAKAGQALAGAEAkQADATAAARg");
	this.shape.setTransform(135.8033,43.4476,2.0908,2.0908);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3C393E").s().p("AgID5Ql1gKlWiIQjyhghshfQg2gwAwg9QAYgfAjgVQDYDeGlBXQDTAsCnAAIBtAAQCJgECFgUQGqhCDjjSIATAPQAXATAOAUQAtBAg5AtQhwBaj3BTQlDBulXAAIg2gBg");
	this.shape_1.setTransform(261.3258,427.7613,2.0904,2.0904);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#634538").s().p("AjBgJIA3iKQBFBABTAnQBXApBeAKQgmBQgZA9g");
	this.shape_2.setTransform(114.8581,403.1255,2.0904,2.0904);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#634538").s().p("Ai0gOQBdgFBXgiQBUghBIg6QALBqAOA4IkxB/g");
	this.shape_3.setTransform(409.0766,412.4799,2.0904,2.0904);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F7494A").s().p("Ag6CoQiSgBg5iEQglhUAFh3QBiAmDRgIQCEgFCVgVQgLCZhHBQQhWBki0AAIgFgBg");
	this.shape_4.setTransform(282.5989,237.4143,2.0904,2.0904);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F7C42B").s().p("AhDDVQjHgCg0jTQgQhCAAhQIAEhCQBgA/ElgRQCUgJCAgVQgIC7hNBiQhhB8jXAAIgFAAg");
	this.shape_5.setTransform(282.6603,242.9011,2.0904,2.0904);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#634538").s().p("AlQBVIE8h8QE+h7ARAIQAMAGAGBGQADAjABAhIqGClg");
	this.shape_6.setTransform(125.1531,131.1183,2.0904,2.0904);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#634538").s().p("Ah1iJQAPgRAvgTQAXgJAUgGICCFbQgZAPglAJIghAGg");
	this.shape_7.setTransform(57.4253,154.9995,2.0904,2.0904);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3C393E").s().p("AAAA0QgWgBgOgPQgQgQABgVQABgVAQgPQAPgOAVAAQAVABAOAPQAPAQAAAUQgBAWgPAOQgPAPgVAAIAAAAg");
	this.shape_8.setTransform(101.5842,107.3915,2.0904,2.0904);

	this.instance = new lib.Path_8_1();
	this.instance.setTransform(126.6,378.45,2.0904,2.0904,0,0,0,25.4,27.1);
	this.instance.alpha = 0.5508;
	this.instance.compositeOperation = "multiply";

	this.instance_1 = new lib.Path_9_1();
	this.instance_1.setTransform(400.5,383.3,2.0904,2.0904,0,0,0,23.2,28.6);
	this.instance_1.alpha = 0.5508;
	this.instance_1.compositeOperation = "multiply";

	this.instance_2 = new lib.Path_10_0();
	this.instance_2.setTransform(17.35,182.45,2.0904,2.0904,0,0,0,8.3,7.2);
	this.instance_2.alpha = 0.5508;
	this.instance_2.compositeOperation = "multiply";

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CE9000").s().p("AJYIrQgohikjgpQhxgPhpABQhmABgjAQQg7Ach+EDQg/CBgzB8IlHieIEzruQAghNhDiQQgVgtgdguIgYgmQiJBdiVAaQi4AfhDhzQg+hrCUhrQBKg1BWghQAdgOAYg4QAahIARgmQBCiTCVgFIBHhcQALgPARAEQASADAGARIAlBsQBfAkAwBbQAmBHAPB2QAJBEAKCBQALBrAdAuQBBBnDegCQBxAADbgmQC0gfCPAoQDKA4gTC6QgdErAXEHQAMCDASBHIkyCAQhoksg8iSg");
	this.shape_9.setTransform(223.2592,233.5783,2.0904,2.0904);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3C393E").s().p("Ah5BIQgKjThahOIAwgZQA8gZA6ABQC3ADBeEGIlgENQANhagEhqg");
	this.shape_10.setTransform(458.5659,267.5092,2.0904,2.0904);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3C393E").s().p("AEuH2QiZgsgxiVQgXhGgIhvQgLiXgDgUQgOhYgogyQgwg9hkgWQhrgXhUBMQgeAbgUAiQgQAcABANQgwhSAGhbQAMi1EKguQESgvB7DRQBPCGgBCuQAABwApDEQAvDdAyAaQgRACgRAAQg0AAg6gQg");
	this.shape_11.setTransform(163.8067,108.1522,2.0904,2.0904);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-0.4,-0.2,505.29999999999995,480.2), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3C393E").s().p("AgFAGQgDgCAAgEQAAgCADgDQADgDACAAQADAAADADQADADgBACQABAEgDACQgDADgDAAQgCAAgDgDg");
	this.shape.setTransform(51.1524,50.148,2.0907,2.0907);

	this.instance = new lib.Path_1_2();
	this.instance.setTransform(44.55,57.4,2.0907,2.0907,0,0,0,5,3);
	this.instance.alpha = 0.3203;
	this.instance.compositeOperation = "multiply";

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F7C42B").s().p("Ag1AwIAVhRQACgKAJgIQAIgHALgBQAQgCARAHQALAEAHALQAGAKgCAMIgKBNQgtgEgzgIg");
	this.shape_1.setTransform(45.0341,52.503,2.0907,2.0907);

	this.instance_1 = new lib.Path_3_3();
	this.instance_1.setTransform(44.95,52.1,2.0907,2.0907,0,0,0,5.7,6);
	this.instance_1.alpha = 0.5;
	this.instance_1.compositeOperation = "multiply";

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EFF5F5").s().p("AgPAtQgQgBgMgLQgLgLgCgQQgCgUALgPQAPgSAYADQAoAFARAYQAPAVgNAVQgLASgsAAIgLAAg");
	this.shape_2.setTransform(76.5255,41.8607,2.0907,2.0907);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F7C42B").s().p("AgVA7QgVgBgPgPQgPgOgCgVQgCgbAOgTQAJgLAOgGQAOgFAOACQA2AGAWAgQAUAcgRAcQgPAXg5AAIgRAAg");
	this.shape_3.setTransform(76.548,41.8448,2.0907,2.0907);

	this.instance_2 = new lib.Path_6_2();
	this.instance_2.setTransform(76.75,42.75,2.0907,2.0907,0,0,0,7.4,6);
	this.instance_2.alpha = 0.5;
	this.instance_2.compositeOperation = "multiply";

	this.instance_3 = new lib.Path_7_2();
	this.instance_3.setTransform(55.75,52,2.0907,2.0907,0,0,0,20.7,6.4);
	this.instance_3.compositeOperation = "multiply";

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2FCAFE").s().p("AgaBcQg9gGg/gMQgMgDgIgHQghgfgEgwIADgrIEyglQAxAIAcAaQAZAYADAgQACAfgTAZQgVAbglAJQghAJgyAAQgiAAgpgEg");
	this.shape_4.setTransform(56.7121,45.5318,2.0907,2.0907);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF239").s().p("AgvABQgHgBABgEIABgDQACgFAHAAIBbAKQADAAACACQAAAAAAAAQABABAAAAQAAABAAABQAAAAgBABIgCAFQgDAEgGAAg");
	this.shape_5.setTransform(11.2485,15.861,2.0907,2.0907);

	this.instance_4 = new lib.Path_10_1();
	this.instance_4.setTransform(8.6,16.2,2.0907,2.0907,0,0,0,2.5,0.8);
	this.instance_4.alpha = 0.6484;
	this.instance_4.compositeOperation = "multiply";

	this.instance_5 = new lib.Path_11_1();
	this.instance_5.setTransform(74.65,62.25,2.0907,2.0907,0,0,0,3.4,3.1);
	this.instance_5.alpha = 0.5;
	this.instance_5.compositeOperation = "multiply";

	this.instance_6 = new lib.Path_12_1();
	this.instance_6.setTransform(32,61,2.0907,2.0907,0,0,0,3.3,2.5);
	this.instance_6.alpha = 0.5;
	this.instance_6.compositeOperation = "multiply";

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFF239").s().p("AguAeIgDgDQgFgFAGgDIBUgwQAHgEAEAFIAEAFQADAEgFADIhVAuQAAAAgBABQgBAAAAAAQgBAAAAAAQgBAAgBAAIgFgBg");
	this.shape_6.setTransform(11.0843,15.5184,2.0907,2.0907);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF239").s().p("ACgAhIlFgqQgFAAgDgEQgDgEABgFQABgFADgDQAEgDAFABIFHAeQAGABADADQADAEgBAGIgDAMQgBAEgEADQgDACgDAAIgCAAg");
	this.shape_7.setTransform(69.8813,11.9597,2.0907,2.0907);

	this.instance_7 = new lib.Path_15_0();
	this.instance_7.setTransform(12.65,17.7,2.0907,2.0907,0,0,0,1.7,1.1);
	this.instance_7.alpha = 0.6484;
	this.instance_7.compositeOperation = "multiply";

	this.instance_8 = new lib.Path_16_0();
	this.instance_8.setTransform(63.6,12.15,2.0907,2.0907,0,0,0,7.3,1.6);
	this.instance_8.alpha = 0.6484;
	this.instance_8.compositeOperation = "multiply";

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFF239").s().p("AiZAzIgFgLQgCgFACgEQACgFAFgBIEphRQAEgBAEACQAEACABAEIAAAAQACAEgCAFQgCAEgFABIkkBcIgEAAQgGAAgDgGg");
	this.shape_8.setTransform(67.5268,11.9656,2.0907,2.0907);

	this.instance_9 = new lib.Path_18_0();
	this.instance_9.setTransform(54.8,89.2,2.0907,2.0907,0,0,0,24.8,3.3);
	this.instance_9.compositeOperation = "multiply";

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2FCAFE").s().p("AicAmQhJAAgOgmQgEgLACgOIADgMQACATDwAAQDxAAACgTIADAMQACAOgEALQgNAmhKAAg");
	this.shape_9.setTransform(55.1841,88.2504,2.0907,2.0907);

	this.instance_10 = new lib.Path_20_0();
	this.instance_10.setTransform(67.85,13.9,2.0907,2.0907,0,0,0,2.8,1.9);
	this.instance_10.alpha = 0.6484;
	this.instance_10.compositeOperation = "multiply";

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#8D48A3","#803399"],[0,1],-4.2,0,4.3,0).s().p("AgqguIAMgGIBJBiIg7AHg");
	this.shape_10.setTransform(18.3289,24.7986,2.0907,2.0907);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#8D48A3","#803399"],[0,1],-5.3,0,5.4,0).s().p("Ag1AtIAmhfIASAAIAzBcQgQAFgWACQgPACgMAAQgYAAgSgGg");
	this.shape_11.setTransform(69.1844,21.0653,2.0907,2.0907);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B37DFD").s().p("AgqguIAMgGIBJBiIg7AHg");
	this.shape_12.setTransform(18.3289,24.7986,2.0907,2.0907);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00C077").s().p("AgyhIIAugGIA3CSIgvALg");
	this.shape_13.setTransform(78.8537,72.6749,2.0907,2.0907);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00C077").s().p("AgyBEIA3iSIAuAGIg2CXg");
	this.shape_14.setTransform(28.0505,72.6749,2.0907,2.0907);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.instance_10},{t:this.shape_9},{t:this.instance_9},{t:this.shape_8},{t:this.instance_8},{t:this.instance_7},{t:this.shape_7},{t:this.shape_6},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.shape_5},{t:this.shape_4},{t:this.instance_3},{t:this.instance_2},{t:this.shape_3},{t:this.shape_2},{t:this.instance_1},{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,106.8,96.2), null);


(lib.Scene_1_start = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// start
	this.instance = new lib.star();
	this.instance.setTransform(787.85,408.65,0.8807,0.8807,0,0,0,24.3,24.8);

	this.instance_1 = new lib.star();
	this.instance_1.setTransform(1267.55,464.65,0.8808,0.8808,0,0,0,24.2,24.8);

	this.instance_2 = new lib.star();
	this.instance_2.setTransform(830,623.35,0.8808,0.8808,0,0,0,24.2,24.8);

	this.instance_3 = new lib.star();
	this.instance_3.setTransform(1039.95,426.45,0.8808,0.8808,0,0,0,24.2,24.7);

	this.instance_4 = new lib.star();
	this.instance_4.setTransform(877.45,480.6,1.4897,1.4897,0,0,0,24.1,24.6);

	this.instance_5 = new lib.star();
	this.instance_5.setTransform(1223.7,627.6,1,1,0,0,0,23.9,24.4);

	this.instance_6 = new lib.Group();
	this.instance_6.setTransform(985.55,573.25,0.3268,0.3267,0,0,0,490.7,75.9);
	this.instance_6.shadow = new cjs.Shadow("rgba(0,0,0,0.749)",7,7,15);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#606060").p("AiEAAQAAA3AnAnQAnAmA2AAQA3AAAmgmQAognAAg3QAAg2gognQgmgmg3AAQg2AAgnAmQgnAnAAA2g");
	this.shape.setTransform(1118.3635,518.5121,0.3268,0.3267);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#606060").p("AiEAAQAAA3AoAmQAnAoA1AAQA3AAAngoQAngmAAg3QAAg2gngnQgngng3AAQg1AAgnAnQgoAoAAA1g");
	this.shape_1.setTransform(1114.3114,495.261,0.3268,0.3267);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#606060").p("AiEAAQAAA3AoAnQAmAmA2AAQA3AAAngmQAngnAAg3QAAg2gngnQgngmg3AAQg2AAgmAmQgoAnAAA2g");
	this.shape_2.setTransform(1106.632,481.3038,0.3268,0.3267);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#606060").p("Ai+AAQAABPA4A4QA4A4BOAAQBPAAA4g4QA4g4AAhPQAAhOg4g4Qg4g4hPAAQhOAAg4A4Qg4A4AABOg");
	this.shape_3.setTransform(1124.6132,505.0613,0.3268,0.3267);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#606060").p("AiWC0QBKA/BhgJQBhgIA+hLQA/hKgJhgQgJhihKg+QhLg/hgAJQhhAJg+BKQg/BLAJBgQAIBhBLA+g");
	this.shape_4.setTransform(1124.1394,483.5415,0.3268,0.3267);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#606060").p("Ai+AAQAABPA4A4QA4A4BOAAQBPAAA4g4QA4g4AAhPQAAhOg4g4Qg4g4hPAAQhOAAg4A4Qg4A4AABOg");
	this.shape_5.setTransform(1104.0586,465.4274,0.3268,0.3267);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AlBRyQlYiDjXkFQhdhxhEiIQgshYgdhaQgihpgUiAQgmj3AtjCQBKk8ErjxQEpjvGihTIAWAAQD7AADmBiQDeBeCsCrQCrCrBeDfQBhDmAAD6QAADshVDZQhSDRiXCoQiXCnjHBoQjMBqjlAZQjRgWjFhLg");
	this.shape_6.setTransform(1099.5279,494.2483,0.3268,0.3267);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CCCCCC").s().p("ABER1QjcheisirQisirhdjfQhijnAAj7QAAj5BgjkQBcjcCoirQCoirDahgQDhhjD5gEQmiBTknDvQksDxhKE8QgtDCAmD3QAUCAAiBpQAdBaAtBYQBDCIBdBxQDXEFFXCDQDFBLDSAWQhIAIhBAAQj8AAjnhig");
	this.shape_7.setTransform(1079.8196,494.379,0.3268,0.3267);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").p("ECO2BQKMkdrAAAMAAAigTMEdrAAAg");
	this.shape_8.setTransform(970.8582,548.2188,0.3268,0.3266);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#11003F").s().p("EiO1BQKMAAAigTMEdrAAAMAAACgTg");
	this.shape_9.setTransform(970.8582,548.2188,0.3268,0.3266);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("AlDA3ICalzIGQAgIBeGHIlXDSg");
	this.shape_10.setTransform(976.85,626.925);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFF99").s().p("AlEA3ICalzIGRAgIBdGHIlWDSg");
	this.shape_11.setTransform(976.85,626.925);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1).p("Am+BMIDUn/IIoAsICBIaInYEhg");
	this.shape_12.setTransform(235.725,600.65);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFF99").s().p("Am+BMIDUn/IIoAsICBIaInYEhg");
	this.shape_13.setTransform(235.725,600.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9,p:{scaleX:0.3268,scaleY:0.3266,x:970.8582,y:548.2188}},{t:this.shape_8,p:{scaleX:0.3268,scaleY:0.3266,x:970.8582,y:548.2188}},{t:this.shape_7,p:{scaleX:0.3268,scaleY:0.3267,x:1079.8196,y:494.379}},{t:this.shape_6,p:{scaleX:0.3268,scaleY:0.3267,x:1099.5279,y:494.2483}},{t:this.shape_5,p:{scaleX:0.3268,scaleY:0.3267,x:1104.0586,y:465.4274}},{t:this.shape_4,p:{scaleX:0.3268,scaleY:0.3267,x:1124.1394,y:483.5415}},{t:this.shape_3,p:{scaleX:0.3268,scaleY:0.3267,x:1124.6132,y:505.0613}},{t:this.shape_2,p:{scaleX:0.3268,scaleY:0.3267,x:1106.632,y:481.3038}},{t:this.shape_1,p:{scaleX:0.3268,scaleY:0.3267,x:1114.3114,y:495.261}},{t:this.shape,p:{scaleX:0.3268,scaleY:0.3267,x:1118.3635,y:518.5121}},{t:this.instance_6,p:{regX:490.7,regY:75.9,scaleX:0.3268,scaleY:0.3267,x:985.55,y:573.25}},{t:this.instance_5,p:{regX:23.9,scaleX:1,scaleY:1,x:1223.7,y:627.6}},{t:this.instance_4,p:{regX:24.1,regY:24.6,scaleX:1.4897,scaleY:1.4897,x:877.45,y:480.6}},{t:this.instance_3,p:{regX:24.2,regY:24.7,scaleX:0.8808,scaleY:0.8808,x:1039.95,y:426.45}},{t:this.instance_2,p:{regX:24.2,regY:24.8,scaleX:0.8808,scaleY:0.8808,x:830,y:623.35}},{t:this.instance_1,p:{regX:24.2,regY:24.8,scaleX:0.8808,scaleY:0.8808,x:1267.55,y:464.65}},{t:this.instance,p:{regX:24.3,regY:24.8,scaleX:0.8807,scaleY:0.8807,x:787.85,y:408.65}}]}).to({state:[]},2).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_9,p:{scaleX:0.4498,scaleY:0.4496,x:227.3946,y:492.0684}},{t:this.shape_8,p:{scaleX:0.4498,scaleY:0.4496,x:227.3946,y:492.0684}},{t:this.shape_7,p:{scaleX:0.4498,scaleY:0.4497,x:377.3957,y:417.9899}},{t:this.shape_6,p:{scaleX:0.4498,scaleY:0.4497,x:404.5251,y:417.81}},{t:this.shape_5,p:{scaleX:0.4498,scaleY:0.4497,x:410.7618,y:378.1359}},{t:this.shape_4,p:{scaleX:0.4498,scaleY:0.4497,x:438.4038,y:403.0713}},{t:this.shape_3,p:{scaleX:0.4498,scaleY:0.4497,x:439.0561,y:432.6948}},{t:this.shape_2,p:{scaleX:0.4498,scaleY:0.4497,x:414.3042,y:399.991}},{t:this.shape_1,p:{scaleX:0.4498,scaleY:0.4497,x:424.8752,y:419.204}},{t:this.shape,p:{scaleX:0.4498,scaleY:0.4497,x:430.4531,y:451.2108}},{t:this.instance_6,p:{regX:491.3,regY:76.3,scaleX:0.4498,scaleY:0.4497,x:247.7,y:526.75}},{t:this.instance_5,p:{regX:24,scaleX:1.3766,scaleY:1.3766,x:575.5,y:601.4}},{t:this.instance_4,p:{regX:24.2,regY:24.7,scaleX:2.0508,scaleY:2.0508,x:98.85,y:399.2}},{t:this.instance_3,p:{regX:24.4,regY:24.9,scaleX:1.2125,scaleY:1.2125,x:322.6,y:324.7}},{t:this.instance_2,p:{regX:24.4,regY:24.9,scaleX:1.2125,scaleY:1.2125,x:33.6,y:595.7}},{t:this.instance_1,p:{regX:24.4,regY:24.9,scaleX:1.2125,scaleY:1.2125,x:636,y:377.2}},{t:this.instance,p:{regX:24.4,regY:24.9,scaleX:1.2124,scaleY:1.2124,x:-24.5,y:300.1}}]},692).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_playbutton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// playbutton
	this.playbutton = new lib.playbutton();
	this.playbutton.name = "playbutton";
	this.playbutton.setTransform(907.75,596.1,0.3551,0.3132,0,0,0,1.7,2.1);
	new cjs.ButtonHelper(this.playbutton, 0, 1, 2);

	this.replaybutton = new lib.replay();
	this.replaybutton.name = "replaybutton";
	this.replaybutton.setTransform(145.4,561.65,0.4569,0.4569);
	new cjs.ButtonHelper(this.replaybutton, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.playbutton}]}).to({state:[]},2).to({state:[{t:this.replaybutton}]},692).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.plane = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(53.4,48.05,1,1,0,0,0,53.4,48.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:59.85},0).wait(1).to({x:66.3},0).wait(1).to({x:72.8},0).wait(1).to({x:79.25},0).wait(1).to({x:85.7},0).wait(1).to({x:92.2},0).wait(1).to({x:98.65},0).wait(1).to({x:105.15},0).wait(1).to({x:100.05},0).wait(1).to({x:95},0).wait(1).to({x:89.95},0).wait(1).to({x:84.9},0).wait(1).to({x:79.85},0).wait(1).to({x:74.75},0).wait(1).to({x:69.7},0).wait(1).to({x:64.65},0).wait(1).to({x:59.6},0).wait(1).to({x:54.55},0).wait(1).to({x:47.65},0).wait(1).to({x:40.75},0).wait(1).to({x:33.85},0).wait(1).to({x:26.95},0).wait(1).to({x:20.05},0).wait(1).to({x:13.15},0).wait(1).to({x:6.25},0).wait(1).to({x:-0.65},0).wait(1).to({x:-7.55},0).wait(1).to({x:-14.45},0).wait(1).to({x:-8.8},0).wait(1).to({x:-3.15},0).wait(1).to({x:2.5},0).wait(1).to({x:8.1},0).wait(1).to({x:13.75},0).wait(1).to({x:19.4},0).wait(1).to({x:25},0).wait(1).to({x:30.65},0).wait(1).to({x:36.3},0).wait(1).to({x:41.9},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.8,-0.1,226.3,96.3);


(lib.picstatic = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol2();
	this.instance.setTransform(82.15,381.1,1,1,74.9998,0,0,82,95.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.6,276.9,227.29999999999998,208.10000000000002);


(lib.pic = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol2();
	this.instance.setTransform(81.95,95.7,1,1,0,0,0,82,95.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(93).to({regX:81.8,regY:95.6,rotation:3.4091,x:81.7,y:108.55},0).wait(1).to({rotation:6.8181,y:121.45},0).wait(1).to({rotation:10.2272,x:81.8,y:134.45},0).wait(1).to({rotation:13.6363,x:81.75,y:147.45},0).wait(1).to({rotation:17.0453,x:81.8,y:160.4},0).wait(1).to({rotation:20.4544,y:173.35},0).wait(1).to({rotation:23.8635,y:186.35},0).wait(1).to({rotation:27.2725,y:199.3},0).wait(1).to({rotation:30.6816,y:212.25},0).wait(1).to({rotation:34.0907,x:81.85,y:225.2},0).wait(1).to({rotation:37.4998,y:238.2},0).wait(1).to({rotation:40.9088,y:251.15},0).wait(1).to({rotation:44.3179,x:81.9,y:264.15},0).wait(1).to({rotation:47.727,y:277.1},0).wait(1).to({rotation:51.136,x:81.95,y:290.1},0).wait(1).to({rotation:54.5451,x:82,y:303.05},0).wait(1).to({rotation:57.9542,x:81.95,y:316},0).wait(1).to({rotation:61.3632,x:82,y:328.95},0).wait(1).to({rotation:64.7723,y:341.95},0).wait(1).to({rotation:68.1814,x:82.05,y:354.95},0).wait(1).to({rotation:71.5904,x:82.1,y:367.9},0).wait(1).to({rotation:74.9995,x:82.05,y:380.85},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.3,0,202.5,444.9);


(lib.horse = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol3();
	this.instance.setTransform(252.4,239.9,1,1,0,0,0,252.6,240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:252.3,regY:239.9,rotation:1.0714,x:252.05,y:239.8},0).wait(1).to({rotation:2.1427,y:239.85},0).wait(1).to({rotation:3.2141,x:252.1,y:239.8},0).wait(1).to({rotation:4.2854,x:252.05},0).wait(1).to({rotation:5.3568,x:252.1},0).wait(1).to({rotation:6.4281},0).wait(1).to({rotation:7.4995},0).wait(1).to({rotation:8.5708,y:239.75},0).wait(1).to({rotation:9.6422},0).wait(1).to({rotation:10.7135},0).wait(1).to({rotation:11.7849,y:239.8},0).wait(1).to({rotation:12.8562,x:252.05},0).wait(1).to({rotation:13.9276,x:252.1},0).wait(1).to({rotation:14.9989},0).wait(1).to({rotation:12.9989,x:252.15,y:239.75},0).wait(1).to({rotation:10.999,x:252.1,y:239.8},0).wait(1).to({rotation:8.999},0).wait(1).to({rotation:6.9991,x:252.05},0).wait(1).to({rotation:4.9991,x:252.1,y:239.85},0).wait(1).to({rotation:2.9991,y:239.8},0).wait(1).to({rotation:0.9992,x:252.05},0).wait(1).to({rotation:-1.0008,x:252.1,y:239.75},0).wait(1).to({rotation:-3.0007},0).wait(1).to({rotation:-5.0007,y:239.8},0).wait(1).to({rotation:-7.0007},0).wait(1).to({rotation:-9.0006,x:252.15,y:239.85},0).wait(1).to({rotation:-11.0006,x:252.1},0).wait(1).to({rotation:-13.0005},0).wait(1).to({rotation:-15.0005,y:239.8},0).wait(1).to({rotation:-12.8576,y:239.85},0).wait(1).to({rotation:-10.7146,y:239.8},0).wait(1).to({rotation:-8.5717},0).wait(1).to({rotation:-6.4288},0).wait(1).to({rotation:-4.2859,x:252.15},0).wait(1).to({rotation:-2.1429,x:252.1},0).wait(1).to({rotation:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.1,-22.9,539.9,514.3);


(lib.girljump = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol6();
	this.instance.setTransform(113.2,128.6,1,1,0,0,0,113.2,128.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:3.3332,x:113.15,y:128.65},0).wait(1).to({rotation:6.6665},0).wait(1).to({rotation:9.9997,x:113.2,y:128.6},0).wait(1).to({rotation:13.333,y:128.65},0).wait(1).to({rotation:16.6662,x:113.15,y:128.6},0).wait(1).to({rotation:19.9995},0).wait(1).to({rotation:23.3327,y:128.65},0).wait(1).to({rotation:26.666,x:113.2,y:128.6},0).wait(1).to({rotation:29.9992},0).wait(1).to({rotation:26.9992,x:113.15,y:128.65},0).wait(1).to({rotation:23.9993},0).wait(1).to({rotation:20.9993,x:113.2,y:128.6},0).wait(1).to({rotation:17.9994,x:113.15,y:128.65},0).wait(1).to({rotation:14.9994,y:128.6},0).wait(1).to({rotation:11.9995,x:113.2,y:128.65},0).wait(1).to({rotation:8.9995,y:128.6},0).wait(1).to({rotation:5.9996,y:128.65},0).wait(1).to({rotation:2.9996,x:113.15,y:128.6},0).wait(1).to({rotation:-0.0003,x:113.2},0).wait(1).to({rotation:-3.0003,x:113.25},0).wait(1).to({rotation:-6.0003,y:128.55},0).wait(1).to({rotation:-9.0002,x:113.2},0).wait(1).to({rotation:-12.0002},0).wait(1).to({rotation:-15.0001,x:113.25},0).wait(1).to({rotation:-18.0001},0).wait(1).to({rotation:-21,y:128.6},0).wait(1).to({rotation:-24,x:113.2},0).wait(1).to({rotation:-26.9999,x:113.25},0).wait(1).to({rotation:-29.9999,y:128.55},0).wait(1).to({rotation:-26.9999,y:128.6},0).wait(1).to({rotation:-23.9999,x:113.2},0).wait(1).to({rotation:-20.9999,x:113.25},0).wait(1).to({rotation:-17.9999,y:128.55},0).wait(1).to({rotation:-14.9999},0).wait(1).to({rotation:-12,x:113.2},0).wait(1).to({rotation:-9},0).wait(1).to({rotation:-6,x:113.25},0).wait(1).to({rotation:-3,y:128.6},0).wait(1).to({rotation:0,x:113.2},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.1,-31.1,302.20000000000005,299.5);


(lib.girl = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#562915").s().p("AAAAIIAAgOIABAAIgBAOg");
	this.shape.setTransform(378.1958,172.792,2.0904,2.0904);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#562915").s().p("AgCAHIACgOIADABIgDAOg");
	this.shape_1.setTransform(378.7185,166.6252,2.0904,2.0904);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#562915").s().p("AgDAGIADgNIAFACIgFANg");
	this.shape_2.setTransform(380.3385,160.6152,2.0904,2.0904);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#562915").s().p("AgFAFIAHgMIAEADIgHAMg");
	this.shape_3.setTransform(383.2129,154.9187,2.0904,2.0904);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#562915").s().p("AgGAEIAKgKIADAEIgKAJg");
	this.shape_4.setTransform(387.3415,150.1107,2.0904,2.0904);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#562915").s().p("AgHACIAMgHIADAEIgMAHg");
	this.shape_5.setTransform(392.5153,146.1389,2.0904,2.0904);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#562915").s().p("AgHABIAOgFIABAEIgOAFg");
	this.shape_6.setTransform(398.4731,143.2645,2.0904,2.0904);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#562915").s().p("AgHAAIAOgDIABADIgOAEg");
	this.shape_7.setTransform(404.8489,141.3309,2.0904,2.0904);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#562915").s().p("AgHAAIAPgBIAAABIgPACg");
	this.shape_8.setTransform(411.4861,140.1811,2.0904,2.0904);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#562915").s().p("AgHAAIAPAAIgPAAg");
	this.shape_9.setTransform(418.1755,139.763,2.0904,2.0904);

	this.instance = new lib.Group_11();
	this.instance.setTransform(465.6,175.45,2.0904,2.0904,0,0,0,13.9,10.6);
	this.instance.alpha = 0.5;
	this.instance.compositeOperation = "multiply";

	this.instance_1 = new lib.CompoundPath_9();
	this.instance_1.setTransform(547.95,199.1,2.0901,2.0901,0,0,0,28.4,8.7);
	this.instance_1.alpha = 0.5;
	this.instance_1.compositeOperation = "multiply";

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CB8149").s().p("AAIAGIgEgDIgZgSIAJADQAJADAHAGIAIAFIAFAGIAFAIg");
	this.shape_10.setTransform(480.4093,165.1298,2.0901,2.0901);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CB8149").s().p("AANAGIgDgBIgDgCIgZgMIAHAAIAHACIAHADIAHAEIAFAEIAEAGg");
	this.shape_11.setTransform(569.8637,198.5184,2.0901,2.0901);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CB8149").s().p("AgagHIASACIATAFIAQAIg");
	this.shape_12.setTransform(462.487,177.9836,2.0901,2.0901);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CB8149").s().p("AANgEIgCgBIgJgDQgGgCgQAAIgrgCIArgCQAQAAAIABIAGACIADABIAuAWIAFADg");
	this.shape_13.setTransform(455.6421,170.9819,2.0901,2.0901);

	this.instance_2 = new lib.Path_56();
	this.instance_2.setTransform(533.75,196.3,2.0901,2.0901,0,0,0,15.9,5.3);

	this.instance_3 = new lib.Path_1_18();
	this.instance_3.setTransform(473.4,174.75,2.0901,2.0901,0,0,0,7.4,8.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.rf(["#FDE3C6","#EEBD8C","#EEB581","#EE9E64","#EE9A5F"],[0.161,0.533,0.635,0.812,0.835],8.5,-7.7,0,8.5,-7.7,42.5).s().p("AgxAgIiWgwQgYgXAMgWIAQgRIB9AVQCMAZBQARIAEgBQAiARATAZQAVAbgbASQggAGgXACIgDAAQgpAAiXgvg");
	this.shape_14.setTransform(535.0548,199.7807,2.0901,2.0901);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.rf(["#FDE3C6","#EEBD8C","#EEB581","#EE9E64","#EE9A5F"],[0.161,0.533,0.635,0.812,0.835],-16.1,-8.9,0,-16.1,-8.9,42.5).s().p("AgnAOQgTgXgigTIAVgGIA1gYQA0AFAjAmQASARAGARIgZAJQg7ATg2AMQAbgSgVgbg");
	this.shape_15.setTransform(586.6364,202.2283,2.0901,2.0901);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.rf(["#FDE3C6","#EEBD8C","#EEB581","#EE9E64","#EE9A5F"],[0.161,0.533,0.635,0.812,0.835],8.5,-7.7,0,8.5,-7.7,42.5).s().p("AgxAgIiWgwQgYgXAMgWIAQgRIB9AVQCMAZBQARIAEgBQAiARATAZQAVAbgbASQggAGgXACIgDAAQgpAAiXgvg");
	this.shape_16.setTransform(535.0548,199.7807,2.0901,2.0901);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.rf(["#FDE3C6","#EEBD8C","#EEB581","#EE9E64","#EE9A5F"],[0.161,0.533,0.635,0.812,0.835],4,-8.7,0,4,-8.7,23.9).s().p("AA8BfQgVgIgPgPQgPgRgPgHQgrgShEACQgQAAADgMQADgMAXgBIBEgCQghgFgJgEQgXACgQgGQgRgFACgIQACgGALgEIALgCQgIgDgHgEQgQgIAEgJQABgEAcgBQAYgBAeACQAVACAdAOQAOAIAKAHQgBgGgGgGQgKgMgQgEQgbgHgVgIQgcgLAAgJQgBgJASABQAMACAeAIQAuAOAfANIAGgIQAHgHAKABQAHABABAKQABAQAFAIIAaAlQATAbAGARIgRARQgLAWAXAXQgJACgOAAIgDAAQgaAAgUgHg");
	this.shape_17.setTransform(465.5176,175.2997,2.0901,2.0901);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.rf(["#FDE3C6","#EEBD8C","#EEB581","#EE9E64","#EE9A5F"],[0.161,0.533,0.635,0.812,0.835],-16.1,-8.9,0,-16.1,-8.9,42.5).s().p("AgnAOQgTgXgigTIAVgGIA1gYQA0AFAjAmQASARAGARIgZAJQg7ATg2AMQAbgSgVgbg");
	this.shape_18.setTransform(586.9784,202.4762,2.0904,2.0904);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.rf(["#EDBFDA","#E57CAF","#E35C8F","#E1487C"],[0,0.663,0.82,0.941],-13.8,-19.1,0,-13.8,-19.1,36.3).s().p("AgfBNQgYgkgqgUQgfgPACgCQAGgIATAFQAVAGAdAXQgFgMgOgQIgNgMIAJgIQARgLAlgQQA6gZA0gPQBAgIguA9QgrA3hBAkQADANgLALQgFAEgEAAQgIAAgGgKg");
	this.shape_19.setTransform(614.6328,187.3087,2.0904,2.0904);

	this.instance_4 = new lib.Path_55();
	this.instance_4.setTransform(584.85,89.1,2.0897,2.0897,0,0,0,8.6,14.6);
	this.instance_4.alpha = 0.3984;
	this.instance_4.compositeOperation = "multiply";

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.rf(["#E0A055","#DF9753","#DC7F4D","#DB794C","#D6764A","#C96E45","#B3613B","#934E2E","#6B361E","#562915"],[0,0.09,0.243,0.271,0.388,0.514,0.651,0.788,0.929,0.996],-14.2,-9.3,0,-14.2,-9.3,25.5).s().p("Ag5BdQgSg0AagsIgLAEQgLAHgFAJQgLgVATgeQAVgiAvgMQgMgBgMgHQgXgPACgdIAiATQApAPAogUIALgFQgsAhgZAiQg4BMAdBwQgEABgEAAQgUAAgOgog");
	this.shape_20.setTransform(584.987,90.3783,2.0901,2.0901);

	this.instance_5 = new lib.Group_1_2();
	this.instance_5.setTransform(686,95.45,2.0904,2.0904,0,0,0,33.5,38.9);
	this.instance_5.alpha = 0.3984;
	this.instance_5.compositeOperation = "multiply";

	this.instance_6 = new lib.Path_53();
	this.instance_6.setTransform(630.6,20.3,2.0904,2.0904,0,0,0,4.8,3.5);
	this.instance_6.compositeOperation = "screen";

	this.instance_7 = new lib.Path_1_16();
	this.instance_7.setTransform(636.6,8.3,2.0904,2.0904,0,0,0,5.1,2.1);
	this.instance_7.compositeOperation = "screen";

	this.instance_8 = new lib.Path_2_10();
	this.instance_8.setTransform(653.65,20.95,2.0904,2.0904,0,0,0,6.9,7.8);
	this.instance_8.compositeOperation = "screen";

	this.instance_9 = new lib.Path_3_8();
	this.instance_9.setTransform(669.75,28.8,2.0904,2.0904,0,0,0,8.3,9.5);
	this.instance_9.compositeOperation = "screen";

	this.instance_10 = new lib.Path_4_1();
	this.instance_10.setTransform(679.15,42.9,2.0904,2.0904,0,0,0,6.2,12.3);
	this.instance_10.compositeOperation = "screen";

	this.instance_11 = new lib.Path_5_2();
	this.instance_11.setTransform(692,48.95,2.0904,2.0904,0,0,0,4.6,11.1);
	this.instance_11.compositeOperation = "screen";

	this.instance_12 = new lib.Path_6_4();
	this.instance_12.setTransform(698.55,58.9,2.0904,2.0904,0,0,0,3.6,11.7);
	this.instance_12.compositeOperation = "screen";

	this.instance_13 = new lib.Path_7_4();
	this.instance_13.setTransform(709.4,69.45,2.0904,2.0904,0,0,0,3.6,12.3);
	this.instance_13.compositeOperation = "screen";

	this.instance_14 = new lib.Path_8_2();
	this.instance_14.setTransform(724.65,71.35,2.0904,2.0904,0,0,0,4.7,19.1);
	this.instance_14.compositeOperation = "screen";

	this.instance_15 = new lib.Path_9_3();
	this.instance_15.setTransform(743.15,74.35,2.0904,2.0904,0,0,0,4.3,18.9);
	this.instance_15.compositeOperation = "screen";

	this.instance_16 = new lib.Group_2_1();
	this.instance_16.setTransform(709.4,20.7,2.0904,2.0904,0,0,0,16.9,10);
	this.instance_16.alpha = 0.5;
	this.instance_16.compositeOperation = "multiply";

	this.instance_17 = new lib.Group_3_0();
	this.instance_17.setTransform(686,97.6,2.0904,2.0904,0,0,0,33.5,38.1);
	this.instance_17.alpha = 0.5;
	this.instance_17.compositeOperation = "multiply";

	this.instance_18 = new lib.Group_4_1();
	this.instance_18.setTransform(627.5,6.6,2.0904,2.0904,0,0,0,3.5,3);
	this.instance_18.alpha = 0.5;
	this.instance_18.compositeOperation = "multiply";

	this.instance_19 = new lib.Path_10_3();
	this.instance_19.setTransform(603.5,115.05,2.0904,2.0904,0,0,0,6.7,4.8);
	this.instance_19.alpha = 0.3984;
	this.instance_19.compositeOperation = "multiply";

	this.instance_20 = new lib.Group_5_1();
	this.instance_20.setTransform(643.55,91.9,2.0904,2.0904,0,0,0,29.7,31.7);
	this.instance_20.alpha = 0.1992;
	this.instance_20.compositeOperation = "multiply";

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CB8149").s().p("AgGAOIgIgCIgGgFQgFgGAAgEQAAgEABgEIABgCIAEAJIADADQAAAAAAABQAAAAABAAQAAAAABAAQAAABABAAQADACAFABIAUgCIALgCQgDAEgGADQgDADgHACIgLACIgCAAg");
	this.shape_21.setTransform(606.7679,70.1619,2.0904,2.0904);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.rf(["#FDE3C6","#EEBD8C","#EEB581","#EE9E64","#EE9A5F"],[0.161,0.533,0.635,0.812,0.835],-1.7,-1.3,0,-1.7,-1.3,10.8).s().p("AgIAYQgPgBgFgMQgEgLANgMQAQgNARADQAUADgGAYQgBAFgFAFQgKAJgSAAIgCAAg");
	this.shape_22.setTransform(607.593,67.3795,2.0904,2.0904);

	this.instance_21 = new lib.Path_13_0();
	this.instance_21.setTransform(607.6,67.8,2.0904,2.0904,0,0,0,3.6,3.1);
	this.instance_21.alpha = 0.3984;
	this.instance_21.compositeOperation = "multiply";

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CB8149").s().p("AADAeIgDAAIgNgEIgGgDIgIgGIgGgGIgDgFIgEgJIgCgRIACgKIACAKIAGAPIACADIADADIACAEIAGAFIAKAHIAFACIAJADIASADIAIAAIAMABIgMADQgDABgEAAIgKABg");
	this.shape_23.setTransform(642.8454,88.5995,2.0904,2.0904);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.rf(["#FDE3C6","#EEBD8C","#EEB581","#EE9E64","#EE9A5F"],[0.161,0.533,0.635,0.812,0.835],-4.6,-7.8,0,-4.6,-7.8,25).s().p("AgmAPQgGgJgCgLIgBgKQAAgLAQgIQATgJAXAKQAbAKAHAbQAHAbgQAHIgUABQglAAgRgYg");
	this.shape_24.setTransform(644.0563,85.8521,2.0904,2.0904);

	this.instance_22 = new lib.Path_16_1();
	this.instance_22.setTransform(643.7,86.2,2.0904,2.0904,0,0,0,5.2,4.9);
	this.instance_22.alpha = 0.3984;
	this.instance_22.compositeOperation = "multiply";

	this.instance_23 = new lib.Path_52();
	this.instance_23.setTransform(603.2,59.65,2.0901,2.0901);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#B36E50").s().p("AgiAWIgDgEIgEgKIAAgGIACgEIAEgFIAEgEIAFgDIAGgCIAGAAIAGABIAFACQAFADADADIAJACIADgBIAFgCIAFgDIAEgEIAKgOQgCAHgCADQgEAHgFADIgCACIgDACIgDABIgCABIgEABIgEAAIgGgCIgBAAIgIgGIgEgCIgGgBIgEAAIgFACIgFACIgEAEIgCAEIgCADIAAAKIACAFIACAFIAHAIg");
	this.shape_25.setTransform(603.9839,83.6698,2.0901,2.0901);

	this.instance_24 = new lib.Path_51();
	this.instance_24.setTransform(600.85,81.75,2.0897,2.0897,0,0,0,1.8,1.4);
	this.instance_24.alpha = 0.3984;
	this.instance_24.compositeOperation = "overlay";

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.rf(["#FDE3C6","#FCE0C2","#F9D8B5","#F3CAA0","#EEBD8C","#EEB581","#EE9E64","#EE9A5F"],[0.161,0.282,0.412,0.549,0.643,0.733,0.89,0.918],0.1,0.2,0,0.1,0.2,4.6).s().p("AgQAPQgQgOAOgQQAOgQAPALQANAKACAMQAAAHgCAFQgEAJgKACIgEABQgKAAgMgLg");
	this.shape_26.setTransform(600.3182,84.9299,2.0897,2.0897);

	this.instance_25 = new lib.Path_50();
	this.instance_25.setTransform(596.7,73.05,2.0901,2.0901,0,0,0,1.2,1.4);
	this.instance_25.alpha = 0.3008;

	this.instance_26 = new lib.Path_1_14();
	this.instance_26.setTransform(595.25,79.3,2.0901,2.0901,0,0,0,4.3,4.6);

	this.instance_27 = new lib.Path_49();
	this.instance_27.setTransform(655.9,102.5,2.0901,2.0901,0,0,0,2.5,1.9);
	this.instance_27.alpha = 0.3008;

	this.instance_28 = new lib.Path_1_12();
	this.instance_28.setTransform(647.25,111.8,2.0901,2.0901,0,0,0,9.6,8);

	this.instance_29 = new lib.Group_10();
	this.instance_29.setTransform(616.9,53.05,2.0901,2.0901,0,0,0,3.1,3.2);
	this.instance_29.alpha = 0.3008;
	this.instance_29.compositeOperation = "multiply";

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.rf(["#E0A055","#DF9753","#DC7F4D","#DB794C","#D6764A","#C96E45","#B3613B","#934E2E","#6B361E","#562915"],[0,0.09,0.243,0.271,0.388,0.514,0.651,0.788,0.929,0.996],4.1,-4.4,0,4.1,-4.4,6.5).s().p("AATAbQgCgDAAgGIABgKQgCgLgJgJQgIgLgMACQgLAEgBgBQgDgDAQgFQAOgFALAMQAMALABARQAAAJgBAHQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAAAIgDgBg");
	this.shape_27.setTransform(616.9567,53.7659,2.0901,2.0901);

	this.instance_30 = new lib.Path_1_11();
	this.instance_30.setTransform(616.65,53.5,2.0901,2.0901,0,0,0,3,3.2);
	this.instance_30.alpha = 0.3984;
	this.instance_30.compositeOperation = "multiply";

	this.instance_31 = new lib.Path_2_9();
	this.instance_31.setTransform(649.7,75.85,2.0901,2.0901,0,0,0,5.1,4);
	this.instance_31.alpha = 0.3984;
	this.instance_31.compositeOperation = "multiply";

	this.instance_32 = new lib.Group_8();
	this.instance_32.setTransform(650.1,75.85,2.0901,2.0901,0,0,0,5.2,4.2);
	this.instance_32.alpha = 0.3008;
	this.instance_32.compositeOperation = "multiply";

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.rf(["#E0A055","#DF9753","#DC7F4D","#DB794C","#D6764A","#C96E45","#B3613B","#934E2E","#6B361E","#562915"],[0,0.09,0.243,0.271,0.388,0.514,0.651,0.788,0.929,0.996],5,-7.9,0,5,-7.9,10.5).s().p("AApAlQABgJgBgKQgDgUgUgLQgQgKgRAAIgOAEQgKACgEgDQgGgEAHgFIAWgHQAZgDAVAOQAWAOgBAZQgBAXgEAAIgBAAg");
	this.shape_28.setTransform(650.2028,76.3618,2.0901,2.0901);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#CB8149").s().p("AhBAHIAIgFIAYgMIAPgEIAIgCIAIAAIAHgBIAIAAIAPACIAaAHIARAIIAGADIgYgIIgagGIgWgBIgOABIgIABIgOAEIgEABIgJAEIgLAFIgJAFIgMAJg");
	this.shape_29.setTransform(645.2103,98.5614,2.0901,2.0901);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#CB8149").s().p("AAIAiIgHgBIgOgEIgKgEIgDgCIgHgDIgIgHIgCgDIgEgFIgGgKIgDgPIgBgHIABgEIAAgCIAAAGIACAHIAFAOIACAFIAEADIAEAFIAEAFIALAHIANAGIANADIAGABIANACIAlAAIgPACIgKABIgMAAIgDAAIgKAAg");
	this.shape_30.setTransform(601.9424,114.4067,2.0897,2.0897);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#CB8149").s().p("AAFARIgDgDIgCgDIgDgEIgFgHIgCgEIgBgIIAAgIIABACIACAGIAIARIAMAQg");
	this.shape_31.setTransform(613.3835,118.1507,2.0897,2.0897);

	this.instance_33 = new lib.Path_47();
	this.instance_33.setTransform(680.35,131.35,2.0901,2.0901);

	this.instance_34 = new lib.Group_7();
	this.instance_34.setTransform(686.9,130.55,2.0897,2.0897,0,0,0,2.5,2.2);
	this.instance_34.alpha = 0.2695;
	this.instance_34.compositeOperation = "multiply";

	this.instance_35 = new lib.Path_46();
	this.instance_35.setTransform(695.15,125.95,2.0897,2.0897,0,0,0,3.6,4.2);
	this.instance_35.alpha = 0.7188;
	this.instance_35.compositeOperation = "multiply";

	this.instance_36 = new lib.Path_1_9();
	this.instance_36.setTransform(692.55,125.95,2.0897,2.0897,0,0,0,5.2,4.2);
	this.instance_36.compositeOperation = "multiply";

	this.instance_37 = new lib.Group_1_1();
	this.instance_37.setTransform(691.85,126,2.0897,2.0897,0,0,0,5.3,4.5);
	this.instance_37.alpha = 0.3906;
	this.instance_37.compositeOperation = "multiply";

	this.instance_38 = new lib.Path_1_8();
	this.instance_38.setTransform(693.1,118.4,2.0901,2.0901);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.rf(["#FDE3C6","#EEBD8C","#EEB581","#EE9E64","#EE9A5F"],[0.161,0.533,0.635,0.812,0.835],-19.3,-9.5,0,-19.3,-9.5,56).s().p("AgHE4Qg1gBg4gTQiOgygfh2QgdhwA5hMQAegpA6gpQATgRANghQAOglAIgKQAggdAlgoIgFARQgFAVABAVQADBCA6AlQgOgaATgwIAXgrIgGAPQgHATgBAUQgCA/A3AzQgDgaAJgkIAJgeIAAAVQACAaAGAXQAVBKA9ATQgNgSAFguIAHgqIAFA2QAKA7AWAYIAEAYQAGAbAOARQgSA/gUAdIAMgJQAOgMAOgPQATgWAaANQAZAOgIAfQgJAmgwASQgyAUgLgvQgYAOgogBQgxgBgSgiQgPAbAaAVQAWARAYAAQgpAQgUAaIgMAWIA2gZIgJAGQgIAIgCAKQgWAPgtAAIgIgBg");
	this.shape_32.setTransform(642.3213,91.9912,2.0901,2.0901);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.rf(["#E0A055","#DF9753","#DC7F4D","#DB794C","#D6764A","#C96E45","#B3613B","#934E2E","#6B361E","#562915"],[0,0.09,0.243,0.271,0.388,0.514,0.651,0.788,0.929,0.996],-44.7,-44.5,0,-44.7,-44.5,113).s().p("AhCGKQgYgaAPghQgOAVACAVQAAALAEAGQgRgCgPgLQgfgWAGgqQACgJAJgIIAIgGIg2AZIAMgXQAVgZApgRQgYAAgWgRQgbgUAQgbQARAhAyACQAoAAAXgOQAMAvAxgTQAwgTAJglQAIgggagNQgZgNgUAVQgOAQgNAMIgLAJQASgeASg/QgNgQgHgbIgDgYQgWgZgJg7IgGg1IgHAqQgEAtANASQg+gSgUhKQgHgYgBgZIAAgWIgKAfQgJAjAEAaQg4gyADhAQABgUAGgSIAHgPIgXAqQgVAwAPAaQg6glgDhCQgBgUAFgVIAFgRQgmAogfAcQgMgkAPgpQAQgsAlgQQgNgDgLgJQgXgRAJgdIAEAHQAHAIANAEQAnAPBPgXQBZgaBnAZQBgAXAqAuQANgUACgIIAOALQANAQgGATQAkAHAOAPQAGAIAAAHIgmgPIAbAVQAgAcAVAlQBEB3g7CpQgXA7g1A1QgZAZhHA2Qg3AqgRAaQgZAmATArQhAAMAAhDQgIAZAEAMQAEANAVANQg2AAgZgcg");
	this.shape_33.setTransform(686.2658,88.1548,2.0904,2.0904);

	this.instance_39 = new lib.Group_4_0();
	this.instance_39.setTransform(586,164.8,2.0907,2.0907,0,0,0,15.5,12.6);
	this.instance_39.compositeOperation = "multiply";

	this.instance_40 = new lib.CompoundPath_8();
	this.instance_40.setTransform(596.8,171,2.0907,2.0907,0,0,0,24.4,19.3);
	this.instance_40.alpha = 0.3008;
	this.instance_40.compositeOperation = "multiply";

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.rf(["#EDBFDA","#E57CAF","#E35C8F","#E1487C"],[0,0.663,0.82,0.941],-5.1,-11.1,0,-5.1,-11.1,36.3).s().p("AAWC1IAZgJQgGgRgSgSQgiglg1gGIg1AYQgJgqgUg7Qgoh0g3hUIAUgFQAagEAfABQBhAEBqA3Qg5AzAtAcQAeASApgKQAbgHAagRQA/AnATAfQAXAnglAfQgnAigvAfQgiAXgFAIQgLASgMAFQgGACgGAAQgQAAgVgLg");
	this.shape_34.setTransform(596.7645,170.6451,2.0907,2.0907);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.rf(["#EDBFDA","#E57CAF","#E35C8F","#E1487C"],[0,0.663,0.82,0.941],-13.7,8.4,0,-13.7,8.4,18.7).s().p("AgzAiQgugcA6gyIALAGQglAgAKATQAJASAjACQAlABAigYIAMAHQgaASgbAGQgPAEgNAAQgXAAgTgLg");
	this.shape_35.setTransform(613.2982,152.2975,2.0907,2.0907);

	this.instance_41 = new lib.Group_5_0();
	this.instance_41.setTransform(613.45,151.45,2.0907,2.0907,0,0,0,5.8,3.8);
	this.instance_41.alpha = 0.5;
	this.instance_41.compositeOperation = "multiply";

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.rf(["#FDE3C6","#EEBD8C","#EEB581","#EE9E64","#EE9A5F"],[0.161,0.533,0.635,0.812,0.835],-8.2,-0.9,0,-8.2,-0.9,12.3).s().p("AgMAkQgjgCgJgSQgKgTAlggIAEACQAzAbAhATQggAXgjAAIgEAAg");
	this.shape_36.setTransform(613.4532,151.6408,2.0907,2.0907);

	this.instance_42 = new lib.Path_45();
	this.instance_42.setTransform(593.25,47.4,2.0904,2.0904,0,0,0,6.2,4.5);
	this.instance_42.alpha = 0.3008;
	this.instance_42.compositeOperation = "screen";

	this.instance_43 = new lib.Path_1_7();
	this.instance_43.setTransform(812.6,168.05,2.0904,2.0904,0,0,0,12,15.3);
	this.instance_43.alpha = 0.3008;
	this.instance_43.compositeOperation = "screen";

	this.instance_44 = new lib.Path_2_8();
	this.instance_44.setTransform(782.95,109.15,2.0904,2.0904,0,0,0,22.8,16.3);
	this.instance_44.alpha = 0.3008;
	this.instance_44.compositeOperation = "screen";

	this.instance_45 = new lib.Path_3_7();
	this.instance_45.setTransform(746.6,164.4,2.0904,2.0904,0,0,0,16.4,8.5);
	this.instance_45.alpha = 0.5;
	this.instance_45.compositeOperation = "screen";

	this.instance_46 = new lib.Group_5();
	this.instance_46.setTransform(746.05,167.1,2.0904,2.0904,0,0,0,42.3,19.8);
	this.instance_46.alpha = 0.5;
	this.instance_46.compositeOperation = "multiply";

	this.instance_47 = new lib.Group_1_0();
	this.instance_47.setTransform(739.6,156.35,2.0904,2.0904,0,0,0,50.3,26.4);
	this.instance_47.compositeOperation = "multiply";

	this.instance_48 = new lib.Group_2_0();
	this.instance_48.setTransform(748.25,171.3,2.0904,2.0904,0,0,0,27.1,16.6);
	this.instance_48.compositeOperation = "multiply";

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FAF1FF").s().p("AjEAcQBrhNBEgbQA9gZB7gXQB8gZAegLQBKgdAfgDQhRBigoBAQgoBBghAkQgzA4hCAcQg5AYjNAFQjwAEgeAFQBZg+CIhng");
	this.shape_37.setTransform(746.6357,167.4614,2.0904,2.0904);

	this.instance_49 = new lib.Group_3();
	this.instance_49.setTransform(690.2,123.5,2.0904,2.0904,0,0,0,75.3,44.9);
	this.instance_49.compositeOperation = "multiply";

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.rf(["#FFB000","#FFB80C","#FFCC2D","#FFE95C","#FFE967","#FFE983","#FFE9B1","#FFE9D9"],[0,0.122,0.345,0.608,0.667,0.769,0.898,1],-8.2,-12.3,0,-8.2,-12.3,102.3).s().p("ABYG9QhTgChygJQhXgHgjACQgtACgOgOQgNgNAPgeQgIg0iYiTQh1hwhZhEQgrgggbg+Qgag5gIgEQgmgXAagJQAagKAmAPQBuitCVg4QB7guCyAaQD7AeDhB0QCjBTCOB8QAhAdAVAJQAKADAyAJQAjAHgDAYQgCAMgIALQgiAfgdAYQgTAPgcAvIhEB4QhHCAifAoQhOAUiGAAIg/gBg");
	this.shape_38.setTransform(696.4494,124.1254,2.0904,2.0904);

	this.instance_50 = new lib.Group_2();
	this.instance_50.setTransform(525.3,160.9,2.0904,2.0904,0,0,0,40.8,39.9);
	this.instance_50.compositeOperation = "multiply";

	this.instance_51 = new lib.Path_44();
	this.instance_51.setTransform(30.85,203.6,2.0901,2.0901,0,0,0,12.4,6.2);
	this.instance_51.alpha = 0.5;
	this.instance_51.compositeOperation = "multiply";

	this.instance_52 = new lib.Path_1_6();
	this.instance_52.setTransform(194.25,155.1,2.0901,2.0901,0,0,0,11.3,10.3);
	this.instance_52.alpha = 0.5;
	this.instance_52.compositeOperation = "multiply";

	this.instance_53 = new lib.Path_2_7();
	this.instance_53.setTransform(163.15,180.25,2.0901,2.0901,0,0,0,4.8,3.5);
	this.instance_53.alpha = 0.8008;
	this.instance_53.compositeOperation = "multiply";

	this.instance_54 = new lib.Path_43();
	this.instance_54.setTransform(68.2,190.7,2.0901,2.0901,0,0,0,10,8.6);
	this.instance_54.alpha = 0.3008;
	this.instance_54.compositeOperation = "screen";

	this.instance_55 = new lib.Path_1_5();
	this.instance_55.setTransform(152.8,163.95,2.0901,2.0901,0,0,0,13.1,6.2);
	this.instance_55.alpha = 0.3008;
	this.instance_55.compositeOperation = "screen";

	this.instance_56 = new lib.Path_2_6();
	this.instance_56.setTransform(235.35,176.1,2.0901,2.0901,0,0,0,27.4,16.2);
	this.instance_56.alpha = 0.3008;
	this.instance_56.compositeOperation = "screen";

	this.instance_57 = new lib.Path_3_6();
	this.instance_57.setTransform(313.95,92.1,2.0901,2.0901,0,0,0,36.9,14.7);
	this.instance_57.alpha = 0.3008;
	this.instance_57.compositeOperation = "screen";

	this.instance_58 = new lib.Group_1();
	this.instance_58.setTransform(536.1,166.85,2.0901,2.0901,0,0,0,30.7,33.5);
	this.instance_58.compositeOperation = "multiply";

	this.instance_59 = new lib.CompoundPath_5();
	this.instance_59.setTransform(274.55,151.2,2.0901,2.0901,0,0,0,131.9,46.1);
	this.instance_59.alpha = 0.8008;
	this.instance_59.compositeOperation = "multiply";

	this.instance_60 = new lib.Path_42();
	this.instance_60.setTransform(522.65,219.3,2.0897,2.0897,0,0,0,20.7,1.6);
	this.instance_60.compositeOperation = "multiply";

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFB000").s().p("AhQACIgWAAIgUgBIgbgCIErgBIgNABIgiABIidADIgHAAIgTgBg");
	this.shape_39.setTransform(372.3881,224.1685,2.0897,2.0897);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFB000").s().p("AhjACIgTgDIgPgCIgLgCIBCAFIBOACQAcAAAagCIBbgFIhbAJIg2ACg");
	this.shape_40.setTransform(249.3566,220.5986,2.0897,2.0897);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFB000").s().p("AgNAHIgNgBIgWgFIgVgIIAWAGIA7AFIA6gEIgGABIgmAHg");
	this.shape_41.setTransform(97.9574,204.6123,2.0897,2.0897);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFB000").s().p("ABZAQIgNgCIgPgBIgPAAIhPgEIgfgEIg2gOIgwgUIBKAZIAcAEIAfAEIBeAFIA3AHIAWAFIAdAJg");
	this.shape_42.setTransform(125.3326,215.8968,2.0897,2.0897);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFB000").s().p("ABOBJIgJAAIgdgDIhigVIgTgGQgUgGgSgIIgRgIIgQgIIgPgKIgEgFIgEgIQgEgLAAgPIABgUIAFgRIgEARIAAAUQAAAPAFAKIADAHIAFAEIAeARIARAIQARAHAUAHIB1AbIAcADIAJABIBiABIgOACIgWABg");
	this.shape_43.setTransform(76.6424,207.9559,2.0897,2.0897);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFB000").s().p("AgoAuIgCgLIADgQIAFgKQACgGAFgEIAJgKIAKgKIAKgIIAUgMIAPgIIAGgCIgmAZIgTASQgLAJgFAJIgHAQIgCANIAAANg");
	this.shape_44.setTransform(112.0107,179.1179,2.0897,2.0897);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFB000").s().p("AhDBKIASgNIAKgHIAKgIIAVgRIAmglIBOhZQgJAPgRAWIhEBKIgTASIgVARIgnAcIgqAVg");
	this.shape_45.setTransform(194.3974,154.8251,2.0897,2.0897);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFB000").s().p("AmvDqIAmgIIAPgFQAYgGAIgEIBagpIBfg/IAmgdIAmggQAkgeAmgmIAjgjIAngfQAsghAngWQBMgqBYgaQA8gQBBgIIAhgCIghADQg7AHhBATQhVAZhNAsQgvAagjAcQgTAOgUASIgjAjQgiAggoAkIgmAgIgnAdIgnAbIgmAYIhCAiIgsARIggAKIg2AMQgaADgKAAIAkgEg");
	this.shape_46.setTransform(220.1791,159.4747,2.0897,2.0897);

	this.instance_61 = new lib.Group_0();
	this.instance_61.setTransform(527.55,160.55,2.0897,2.0897,0,0,0,42.4,40.3);
	this.instance_61.alpha = 0.5;
	this.instance_61.compositeOperation = "multiply";

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.rf(["#FFE9D9","#FFE9B1","#FFE983","#FFE967","#FFE95C","#FFCC2D","#FFB80C","#FFB000"],[0,0.102,0.231,0.333,0.392,0.655,0.878,1],-15.8,-65.6,0,-15.8,-65.6,213.7).s().p("AFbHBQkzgJhTAAQhwAAiCAHQh1AHg3gBQg/gChkgIQhngJgpgBQgbgBhSgKQhAgJhKAFQhYAFhXggQhIgbgpgmQghgfAngaQAjgYCOgwQANgtBYgaQBPgWDEgWIEJhSQCyg5AXgYQBciFB9hgQB+hhB8gdQBwgbBuAMQBLAIBgAgQBvAjBgAcQCcB2BpDNQBSCfAcCfQAGAdAIAIQAKALAyAYQA0AfAaAsIjdAIQiaAGiGABIg5ABQifAAj0gHg");
	this.shape_47.setTransform(274.5245,151.3542,2.0897,2.0897);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FAF1FF").s().p("AAYFAQgxgYgKgLQgIgIgGgeQgcifhSifQhpjMich2IAcAIIC4AuQB6AmBWBFQBpBXBCC6QAOAoAnCeQAGAZAMAIQAHAFArANQAlALArAUQAoAUAHAJQAMAQg6AOQg8AOhTgCQgnAAhZACQgagrg0gfg");
	this.shape_48.setTransform(528.1295,160.8852,2.0897,2.0897);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.rf(["#EDBFDA","#E57CAF","#E35C8F","#E1487C"],[0,0.663,0.82,0.941],-8.7,-23.5,0,-8.7,-23.5,75.8).s().p("ABDF3IA1gSQgOgkglgmQhIhOhvgLIh9A0QgRhXgth5QhajxiGitIAwgLQA+gLBGAAQDhACDeB0Qh3BrBfA6QA/AmBUgWQA5gNA3glQCDBTAnBCQAxBQhNBCQhRBGhjBCQhIAvgKASQgXAlgZALQgMAEgNAAQggAAgtgYg");
	this.shape_49.setTransform(594.7659,170.9885);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_48,p:{scaleX:2.0897,scaleY:2.0897,x:528.1295,y:160.8852}},{t:this.shape_47,p:{scaleX:2.0897,scaleY:2.0897,x:274.5245,y:151.3542}},{t:this.instance_61,p:{regY:40.3,scaleX:2.0897,scaleY:2.0897,x:527.55,y:160.55,regX:42.4}},{t:this.shape_46,p:{scaleX:2.0897,scaleY:2.0897,x:220.1791,y:159.4747}},{t:this.shape_45,p:{scaleX:2.0897,scaleY:2.0897,x:194.3974,y:154.8251}},{t:this.shape_44,p:{scaleX:2.0897,scaleY:2.0897,x:112.0107,y:179.1179}},{t:this.shape_43,p:{scaleX:2.0897,scaleY:2.0897,x:76.6424,y:207.9559}},{t:this.shape_42,p:{scaleX:2.0897,scaleY:2.0897,x:125.3326,y:215.8968}},{t:this.shape_41,p:{scaleX:2.0897,scaleY:2.0897,x:97.9574,y:204.6123}},{t:this.shape_40,p:{scaleX:2.0897,scaleY:2.0897,x:249.3566,y:220.5986}},{t:this.shape_39,p:{scaleX:2.0897,scaleY:2.0897,x:372.3881,y:224.1685}},{t:this.instance_60,p:{regY:1.6,scaleX:2.0897,scaleY:2.0897,x:522.65,y:219.3,regX:20.7}},{t:this.instance_59,p:{regX:131.9,regY:46.1,scaleY:2.0901,x:274.55,y:151.2,scaleX:2.0901}},{t:this.instance_58,p:{regX:30.7,regY:33.5,scaleY:2.0901,x:536.1,y:166.85,scaleX:2.0901}},{t:this.instance_57,p:{regX:36.9,regY:14.7,scaleY:2.0901,x:313.95,y:92.1,scaleX:2.0901}},{t:this.instance_56,p:{regX:27.4,regY:16.2,scaleY:2.0901,x:235.35,y:176.1,scaleX:2.0901}},{t:this.instance_55,p:{regY:6.2,scaleY:2.0901,x:152.8,y:163.95,regX:13.1,scaleX:2.0901}},{t:this.instance_54,p:{regX:10,regY:8.6,scaleY:2.0901,x:68.2,y:190.7,scaleX:2.0901}},{t:this.instance_53,p:{regX:4.8,regY:3.5,scaleY:2.0901,x:163.15,y:180.25,scaleX:2.0901}},{t:this.instance_52,p:{regX:11.3,regY:10.3,scaleY:2.0901,x:194.25,y:155.1,scaleX:2.0901}},{t:this.instance_51,p:{regX:12.4,regY:6.2,scaleY:2.0901,x:30.85,y:203.6,scaleX:2.0901}},{t:this.instance_50,p:{regY:39.9,scaleX:2.0904,scaleY:2.0904,x:525.3,y:160.9,regX:40.8}},{t:this.shape_38,p:{scaleX:2.0904,scaleY:2.0904,x:696.4494,y:124.1254}},{t:this.instance_49,p:{regX:75.3,regY:44.9,scaleX:2.0904,scaleY:2.0904,x:690.2,y:123.5}},{t:this.shape_37,p:{scaleX:2.0904,scaleY:2.0904,x:746.6357,y:167.4614}},{t:this.instance_48,p:{scaleX:2.0904,scaleY:2.0904,x:748.25,y:171.3,regX:27.1,regY:16.6}},{t:this.instance_47,p:{regX:50.3,regY:26.4,scaleX:2.0904,scaleY:2.0904,y:156.35,x:739.6}},{t:this.instance_46,p:{regX:42.3,regY:19.8,scaleX:2.0904,scaleY:2.0904,x:746.05,y:167.1}},{t:this.instance_45,p:{regX:16.4,regY:8.5,scaleX:2.0904,scaleY:2.0904,x:746.6,y:164.4}},{t:this.instance_44,p:{regY:16.3,scaleX:2.0904,scaleY:2.0904,x:782.95,y:109.15,regX:22.8}},{t:this.instance_43,p:{regX:12,regY:15.3,scaleX:2.0904,scaleY:2.0904,x:812.6,y:168.05}},{t:this.instance_42,p:{scaleX:2.0904,scaleY:2.0904,x:593.25,y:47.4}},{t:this.shape_36,p:{scaleX:2.0907,scaleY:2.0907,x:613.4532,y:151.6408}},{t:this.instance_41,p:{regX:5.8,regY:3.8,scaleX:2.0907,scaleY:2.0907,x:613.45,y:151.45}},{t:this.shape_35,p:{scaleX:2.0907,scaleY:2.0907,x:613.2982,y:152.2975}},{t:this.shape_34,p:{x:596.7645,y:170.6451}},{t:this.instance_40,p:{regX:24.4,regY:19.3,scaleX:2.0907,scaleY:2.0907,x:596.8,y:171}},{t:this.instance_39,p:{regX:15.5,regY:12.6,scaleX:2.0907,scaleY:2.0907,x:586,y:164.8}},{t:this.shape_33,p:{scaleX:2.0904,scaleY:2.0904,x:686.2658,y:88.1548}},{t:this.shape_32,p:{x:642.3213,y:91.9912,scaleX:2.0901,scaleY:2.0901}},{t:this.instance_38,p:{x:693.1,y:118.4,scaleX:2.0901,scaleY:2.0901}},{t:this.instance_37,p:{regX:5.3,regY:4.5,scaleX:2.0897,scaleY:2.0897,x:691.85,y:126}},{t:this.instance_36,p:{scaleX:2.0897,scaleY:2.0897,x:692.55,y:125.95,regX:5.2,regY:4.2}},{t:this.instance_35,p:{regX:3.6,regY:4.2,scaleX:2.0897,scaleY:2.0897,x:695.15,y:125.95}},{t:this.instance_34,p:{regY:2.2,scaleX:2.0897,scaleY:2.0897,x:686.9,y:130.55,regX:2.5}},{t:this.instance_33,p:{x:680.35,y:131.35,scaleX:2.0901,scaleY:2.0901}},{t:this.shape_31,p:{scaleX:2.0897,scaleY:2.0897,x:613.3835,y:118.1507}},{t:this.shape_30,p:{scaleX:2.0897,scaleY:2.0897,x:601.9424,y:114.4067}},{t:this.shape_29,p:{x:645.2103,y:98.5614,scaleX:2.0901,scaleY:2.0901}},{t:this.shape_28,p:{x:650.2028,y:76.3618,scaleX:2.0901,scaleY:2.0901}},{t:this.instance_32,p:{regX:5.2,regY:4.2,x:650.1,y:75.85,scaleX:2.0901,scaleY:2.0901}},{t:this.instance_31,p:{regX:5.1,x:649.7,y:75.85,regY:4,scaleX:2.0901,scaleY:2.0901}},{t:this.instance_30,p:{regX:3,regY:3.2,x:616.65,y:53.5,scaleX:2.0901,scaleY:2.0901}},{t:this.shape_27,p:{x:616.9567,y:53.7659,scaleX:2.0901,scaleY:2.0901}},{t:this.instance_29,p:{regX:3.1,regY:3.2,x:616.9,y:53.05,scaleX:2.0901,scaleY:2.0901}},{t:this.instance_28,p:{regX:9.6,regY:8,x:647.25,y:111.8,scaleX:2.0901,scaleY:2.0901}},{t:this.instance_27,p:{regX:2.5,x:655.9,y:102.5,regY:1.9,scaleX:2.0901,scaleY:2.0901}},{t:this.instance_26,p:{regX:4.3,regY:4.6,x:595.25,y:79.3,scaleX:2.0901,scaleY:2.0901}},{t:this.instance_25,p:{regX:1.2,x:596.7,y:73.05,regY:1.4,scaleX:2.0901,scaleY:2.0901}},{t:this.shape_26,p:{scaleX:2.0897,scaleY:2.0897,x:600.3182,y:84.9299}},{t:this.instance_24,p:{scaleX:2.0897,scaleY:2.0897,x:600.85,regX:1.8,regY:1.4,y:81.75}},{t:this.shape_25,p:{x:603.9839,y:83.6698,scaleX:2.0901,scaleY:2.0901}},{t:this.instance_23,p:{x:603.2,y:59.65,scaleX:2.0901,scaleY:2.0901}},{t:this.instance_22,p:{regX:5.2,regY:4.9,scaleX:2.0904,scaleY:2.0904,x:643.7,y:86.2}},{t:this.shape_24,p:{scaleX:2.0904,scaleY:2.0904,x:644.0563,y:85.8521}},{t:this.shape_23,p:{scaleX:2.0904,scaleY:2.0904,x:642.8454,y:88.5995}},{t:this.instance_21,p:{regX:3.6,regY:3.1,scaleX:2.0904,scaleY:2.0904,x:607.6,y:67.8}},{t:this.shape_22,p:{scaleX:2.0904,scaleY:2.0904,x:607.593,y:67.3795}},{t:this.shape_21,p:{scaleX:2.0904,scaleY:2.0904,x:606.7679,y:70.1619}},{t:this.instance_20,p:{regX:29.7,regY:31.7,scaleX:2.0904,scaleY:2.0904,x:643.55,y:91.9}},{t:this.instance_19,p:{regY:4.8,scaleX:2.0904,scaleY:2.0904,x:603.5,y:115.05,regX:6.7}},{t:this.instance_18,p:{regX:3.5,regY:3,scaleX:2.0904,scaleY:2.0904,x:627.5,y:6.6}},{t:this.instance_17,p:{scaleX:2.0904,scaleY:2.0904,x:686,y:97.6,regX:33.5,regY:38.1}},{t:this.instance_16,p:{regX:16.9,scaleX:2.0904,scaleY:2.0904,x:709.4,y:20.7}},{t:this.instance_15,p:{regX:4.3,scaleX:2.0904,scaleY:2.0904,x:743.15,y:74.35,regY:18.9}},{t:this.instance_14,p:{regX:4.7,regY:19.1,scaleX:2.0904,scaleY:2.0904,x:724.65,y:71.35}},{t:this.instance_13,p:{regX:3.6,scaleX:2.0904,scaleY:2.0904,x:709.4,y:69.45}},{t:this.instance_12,p:{scaleX:2.0904,scaleY:2.0904,x:698.55,y:58.9,regX:3.6}},{t:this.instance_11,p:{regX:4.6,regY:11.1,scaleX:2.0904,scaleY:2.0904,y:48.95,x:692}},{t:this.instance_10,p:{regX:6.2,regY:12.3,scaleX:2.0904,scaleY:2.0904,x:679.15,y:42.9}},{t:this.instance_9,p:{regY:9.5,scaleX:2.0904,scaleY:2.0904,x:669.75,y:28.8,regX:8.3}},{t:this.instance_8,p:{regX:6.9,regY:7.8,scaleX:2.0904,scaleY:2.0904,x:653.65,y:20.95}},{t:this.instance_7,p:{regX:5.1,regY:2.1,scaleX:2.0904,scaleY:2.0904,x:636.6,y:8.3}},{t:this.instance_6,p:{regX:4.8,regY:3.5,scaleX:2.0904,scaleY:2.0904,x:630.6,y:20.3}},{t:this.instance_5,p:{regY:38.9,scaleX:2.0904,scaleY:2.0904,x:686,y:95.45,regX:33.5}},{t:this.shape_20,p:{x:584.987,y:90.3783,scaleX:2.0901,scaleY:2.0901}},{t:this.instance_4,p:{regX:8.6,scaleX:2.0897,scaleY:2.0897,x:584.85,y:89.1,regY:14.6}},{t:this.shape_19,p:{scaleX:2.0904,scaleY:2.0904,x:614.6328,y:187.3087}},{t:this.shape_18,p:{scaleX:2.0904,scaleY:2.0904,x:586.9784,y:202.4762}},{t:this.shape_17,p:{x:465.5176,y:175.2997,scaleX:2.0901,scaleY:2.0901}},{t:this.shape_16,p:{x:535.0548,y:199.7807,scaleX:2.0901,scaleY:2.0901}},{t:this.shape_15,p:{x:586.6364,y:202.2283,scaleX:2.0901,scaleY:2.0901}},{t:this.shape_14,p:{x:535.0548,y:199.7807,scaleX:2.0901,scaleY:2.0901}},{t:this.instance_3,p:{regX:7.4,regY:8.1,x:473.4,y:174.75,scaleX:2.0901,scaleY:2.0901}},{t:this.instance_2,p:{regX:15.9,x:533.75,y:196.3,regY:5.3,scaleX:2.0901,scaleY:2.0901}},{t:this.shape_13,p:{x:455.6421,y:170.9819,scaleX:2.0901,scaleY:2.0901}},{t:this.shape_12,p:{x:462.487,y:177.9836,scaleX:2.0901,scaleY:2.0901}},{t:this.shape_11,p:{x:569.8637,y:198.5184,scaleX:2.0901,scaleY:2.0901}},{t:this.shape_10,p:{x:480.4093,y:165.1298,scaleX:2.0901,scaleY:2.0901}},{t:this.instance_1,p:{regY:8.7,x:547.95,y:199.1,scaleX:2.0901,scaleY:2.0901}},{t:this.instance,p:{regX:13.9,regY:10.6,scaleX:2.0904,scaleY:2.0904,x:465.6,y:175.45}},{t:this.shape_9,p:{scaleX:2.0904,scaleY:2.0904,x:418.1755,y:139.763}},{t:this.shape_8,p:{scaleX:2.0904,scaleY:2.0904,x:411.4861,y:140.1811}},{t:this.shape_7,p:{scaleX:2.0904,scaleY:2.0904,x:404.8489,y:141.3309}},{t:this.shape_6,p:{scaleX:2.0904,scaleY:2.0904,x:398.4731,y:143.2645}},{t:this.shape_5,p:{scaleX:2.0904,scaleY:2.0904,x:392.5153,y:146.1389}},{t:this.shape_4,p:{scaleX:2.0904,scaleY:2.0904,x:387.3415,y:150.1107}},{t:this.shape_3,p:{scaleX:2.0904,scaleY:2.0904,x:383.2129,y:154.9187}},{t:this.shape_2,p:{scaleX:2.0904,scaleY:2.0904,x:380.3385,y:160.6152}},{t:this.shape_1,p:{scaleX:2.0904,scaleY:2.0904,x:378.7185,y:166.6252}},{t:this.shape,p:{scaleX:2.0904,scaleY:2.0904,x:378.1958,y:172.792}}]}).to({state:[{t:this.shape_48,p:{scaleX:2.0898,scaleY:1.9694,x:528.2355,y:165.7901}},{t:this.shape_47,p:{scaleX:2.0898,scaleY:1.9694,x:274.6158,y:156.808}},{t:this.instance_61,p:{regY:40.2,scaleX:2.0898,scaleY:1.9694,x:527.85,y:165.7,regX:42.4}},{t:this.shape_46,p:{scaleX:2.0898,scaleY:1.9694,x:220.2672,y:164.4608}},{t:this.shape_45,p:{scaleX:2.0898,scaleY:1.9694,x:194.4839,y:160.079}},{t:this.shape_44,p:{scaleX:2.0898,scaleY:1.9694,x:112.0924,y:182.9728}},{t:this.shape_43,p:{scaleX:2.0898,scaleY:1.9694,x:76.7221,y:210.15}},{t:this.shape_42,p:{scaleX:2.0898,scaleY:1.9694,x:125.4151,y:217.6335}},{t:this.shape_41,p:{scaleX:2.0898,scaleY:1.9694,x:98.0383,y:206.999}},{t:this.shape_40,p:{scaleX:2.0898,scaleY:1.9694,x:249.4464,y:222.0646}},{t:this.shape_39,p:{scaleX:2.0898,scaleY:1.9694,x:372.4851,y:225.4289}},{t:this.instance_60,p:{regY:1.4,scaleX:2.0898,scaleY:1.9694,x:523.05,y:220.85,regX:20.7}},{t:this.instance_59,p:{regX:131.7,regY:46,scaleY:1.9697,x:274.45,y:156.65,scaleX:2.0901}},{t:this.instance_58,p:{regX:30.6,regY:33.3,scaleY:1.9697,x:536.35,y:171.25,scaleX:2.0901}},{t:this.instance_57,p:{regX:36.8,regY:14.5,scaleY:1.9697,x:314.15,y:100.9,scaleX:2.0901}},{t:this.instance_56,p:{regX:27.3,regY:16,scaleY:1.9697,x:235.55,y:180.05,scaleX:2.0901}},{t:this.instance_55,p:{regY:6,scaleY:1.9697,x:153.15,y:168.8,regX:13.1,scaleX:2.0901}},{t:this.instance_54,p:{regX:9.7,regY:8.4,scaleY:1.9697,x:68,y:193.95,scaleX:2.0901}},{t:this.instance_53,p:{regX:4.7,regY:3.3,scaleY:1.9697,x:163.35,y:184.2,scaleX:2.0901}},{t:this.instance_52,p:{regX:11.2,regY:10.2,scaleY:1.9697,x:194.5,y:160.55,scaleX:2.0901}},{t:this.instance_51,p:{regX:12.3,regY:5.9,scaleY:1.9697,x:31.1,y:205.95,scaleX:2.0901}},{t:this.instance_50,p:{regY:39.6,scaleX:2.0905,scaleY:1.97,x:525.6,y:165.65,regX:40.8}},{t:this.shape_38,p:{scaleX:2.0905,scaleY:2.0905,x:696.5363,y:124.1814}},{t:this.instance_49,p:{regX:75.1,regY:44.8,scaleX:2.0905,scaleY:2.0905,x:690.1,y:123.4}},{t:this.shape_37,p:{scaleX:2.0905,scaleY:2.0905,x:746.7248,y:167.5193}},{t:this.instance_48,p:{scaleX:2.0905,scaleY:2.0905,x:748.45,y:171.4,regX:27.1,regY:16.6}},{t:this.instance_47,p:{regX:50.1,regY:26.3,scaleX:2.0905,scaleY:2.0905,y:156.3,x:739.6}},{t:this.instance_46,p:{regX:42.1,regY:19.6,scaleX:2.0905,scaleY:2.0905,x:746.15,y:166.8}},{t:this.instance_45,p:{regX:16.3,regY:8.4,scaleX:2.0905,scaleY:2.0905,x:746.7,y:164.3}},{t:this.instance_44,p:{regY:16.1,scaleX:2.0905,scaleY:2.0905,x:783.15,y:108.9,regX:22.8}},{t:this.instance_43,p:{regX:11.9,regY:15.1,scaleX:2.0905,scaleY:2.0905,x:812.8,y:167.75}},{t:this.instance_42,p:{scaleX:2.0905,scaleY:2.0905,x:593.55,y:47.55}},{t:this.shape_36,p:{scaleX:2.0908,scaleY:2.0908,x:613.5364,y:151.6981}},{t:this.instance_41,p:{regX:5.7,regY:3.6,scaleX:2.0908,scaleY:2.0908,x:613.55,y:151.4}},{t:this.shape_35,p:{scaleX:2.0908,scaleY:2.0908,x:613.3815,y:152.3548}},{t:this.shape_49},{t:this.instance_40,p:{regX:24.2,regY:19.2,scaleX:2.0908,scaleY:2.0908,x:596.75,y:171.05}},{t:this.instance_39,p:{regX:15.4,regY:12.4,scaleX:2.0908,scaleY:2.0908,x:586.1,y:164.7}},{t:this.shape_33,p:{scaleX:2.0905,scaleY:2.0905,x:686.3522,y:88.2093}},{t:this.shape_32,p:{x:642.4058,y:92.0459,scaleX:2.0901,scaleY:2.0901}},{t:this.instance_38,p:{x:693.6,y:118.55,scaleX:2.0901,scaleY:2.0901}},{t:this.instance_37,p:{regX:5.2,regY:4.3,scaleX:2.0898,scaleY:2.0898,x:692.1,y:125.95}},{t:this.instance_36,p:{scaleX:2.0898,scaleY:2.0898,x:692.95,y:126.05,regX:5.2,regY:4.2}},{t:this.instance_35,p:{regX:3.5,regY:4.1,scaleX:2.0898,scaleY:2.0898,x:695.45,y:125.8}},{t:this.instance_34,p:{regY:2.1,scaleX:2.0898,scaleY:2.0898,x:687.3,y:130.45,regX:2.5}},{t:this.instance_33,p:{x:680.85,y:131.6,scaleX:2.0901,scaleY:2.0901}},{t:this.shape_31,p:{scaleX:2.0898,scaleY:2.0898,x:613.4945,y:118.2252}},{t:this.shape_30,p:{scaleX:2.0898,scaleY:2.0898,x:602.0527,y:114.4809}},{t:this.shape_29,p:{x:645.2949,y:98.6164,scaleX:2.0901,scaleY:2.0901}},{t:this.shape_28,p:{x:650.2877,y:76.4158,scaleX:2.0901,scaleY:2.0901}},{t:this.instance_32,p:{regX:5.1,regY:4.1,x:650.4,y:75.75,scaleX:2.0901,scaleY:2.0901}},{t:this.instance_31,p:{regX:5,x:650,y:76.05,regY:4,scaleX:2.0901,scaleY:2.0901}},{t:this.instance_30,p:{regX:2.9,regY:3.1,x:616.95,y:53.5,scaleX:2.0901,scaleY:2.0901}},{t:this.shape_27,p:{x:617.0401,y:53.8189,scaleX:2.0901,scaleY:2.0901}},{t:this.instance_29,p:{regX:3,regY:3.1,x:617.15,y:53,scaleX:2.0901,scaleY:2.0901}},{t:this.instance_28,p:{regX:9.5,regY:7.9,x:647.45,y:111.8,scaleX:2.0901,scaleY:2.0901}},{t:this.instance_27,p:{regX:2.4,x:656.15,y:102.7,regY:1.9,scaleX:2.0901,scaleY:2.0901}},{t:this.instance_26,p:{regX:4.1,regY:4.5,x:595.4,y:79.2,scaleX:2.0901,scaleY:2.0901}},{t:this.instance_25,p:{regX:1.1,x:597,y:73.2,regY:1.4,scaleX:2.0901,scaleY:2.0901}},{t:this.shape_26,p:{scaleX:2.0898,scaleY:2.0898,x:600.4285,y:85.0024}},{t:this.instance_24,p:{scaleX:2.0898,scaleY:2.0898,x:601.05,regX:1.8,regY:1.4,y:81.75}},{t:this.shape_25,p:{x:604.0667,y:83.7241,scaleX:2.0901,scaleY:2.0901}},{t:this.instance_23,p:{x:603.7,y:59.75,scaleX:2.0901,scaleY:2.0901}},{t:this.instance_22,p:{regX:5,regY:4.8,scaleX:2.0905,scaleY:2.0905,x:643.6,y:86.15}},{t:this.shape_24,p:{scaleX:2.0905,scaleY:2.0905,x:644.1409,y:85.9065}},{t:this.shape_23,p:{scaleX:2.0905,scaleY:2.0905,x:642.9299,y:88.6541}},{t:this.instance_21,p:{regX:3.4,regY:3,scaleX:2.0905,scaleY:2.0905,x:607.65,y:67.7}},{t:this.shape_22,p:{scaleX:2.0905,scaleY:2.0905,x:607.676,y:67.433}},{t:this.shape_21,p:{scaleX:2.0905,scaleY:2.0905,x:606.8509,y:70.2156}},{t:this.instance_20,p:{regX:29.6,regY:31.6,scaleX:2.0905,scaleY:2.0905,x:643.65,y:91.85}},{t:this.instance_19,p:{regY:4.6,scaleX:2.0905,scaleY:2.0905,x:603.8,y:114.75,regX:6.7}},{t:this.instance_18,p:{regX:3.4,regY:2.9,scaleX:2.0905,scaleY:2.0905,x:627.6,y:6.55}},{t:this.instance_17,p:{scaleX:2.0905,scaleY:2.0905,x:686.3,y:97.7,regX:33.5,regY:38.1}},{t:this.instance_16,p:{regX:16.8,scaleX:2.0905,scaleY:2.0905,x:709.45,y:20.5}},{t:this.instance_15,p:{regX:4.1,scaleX:2.0905,scaleY:2.0905,x:743,y:74.5,regY:18.9}},{t:this.instance_14,p:{regX:4.6,regY:18.9,scaleX:2.0905,scaleY:2.0905,x:724.7,y:71.05}},{t:this.instance_13,p:{regX:3.5,scaleX:2.0905,scaleY:2.0905,x:709.35,y:69.6}},{t:this.instance_12,p:{scaleX:2.0905,scaleY:2.0905,x:698.95,y:59.05,regX:3.6}},{t:this.instance_11,p:{regX:4.5,regY:10.8,scaleX:2.0905,scaleY:2.0905,y:48.5,x:692}},{t:this.instance_10,p:{regX:6.1,regY:12.2,scaleX:2.0905,scaleY:2.0905,x:679.25,y:42.85}},{t:this.instance_9,p:{regY:9.3,scaleX:2.0905,scaleY:2.0905,x:670.05,y:28.5,regX:8.3}},{t:this.instance_8,p:{regX:6.8,regY:7.7,scaleX:2.0905,scaleY:2.0905,x:653.95,y:20.9}},{t:this.instance_7,p:{regX:5,regY:1.9,scaleX:2.0905,scaleY:2.0905,x:636.7,y:8}},{t:this.instance_6,p:{regX:4.7,regY:3.4,scaleX:2.0905,scaleY:2.0905,x:630.7,y:20.25}},{t:this.instance_5,p:{regY:38.8,scaleX:2.0905,scaleY:2.0905,x:686.3,y:95.4,regX:33.5}},{t:this.shape_20,p:{x:585.069,y:90.4329,scaleX:2.0901,scaleY:2.0901}},{t:this.instance_4,p:{regX:8.4,scaleX:2.0898,scaleY:2.0898,x:584.75,y:89.25,regY:14.6}},{t:this.shape_19,p:{scaleX:2.0905,scaleY:2.0905,x:614.7161,y:187.3676}},{t:this.shape_18,p:{scaleX:2.0905,scaleY:2.0905,x:587.0605,y:202.5357}},{t:this.shape_17,p:{x:465.5944,y:175.358,scaleX:2.0901,scaleY:2.0901}},{t:this.shape_16,p:{x:535.1346,y:199.8401,scaleX:2.0901,scaleY:2.0901}},{t:this.shape_15,p:{x:586.7185,y:202.2878,scaleX:2.0901,scaleY:2.0901}},{t:this.shape_14,p:{x:535.1346,y:199.8401,scaleX:2.0901,scaleY:2.0901}},{t:this.instance_3,p:{regX:7.3,regY:8,x:473.6,y:174.75,scaleX:2.0901,scaleY:2.0901}},{t:this.instance_2,p:{regX:15.8,x:533.9,y:196.45,regY:5.3,scaleX:2.0901,scaleY:2.0901}},{t:this.shape_13,p:{x:455.7184,y:171.0401,scaleX:2.0901,scaleY:2.0901}},{t:this.shape_12,p:{x:462.5637,y:178.0421,scaleX:2.0901,scaleY:2.0901}},{t:this.shape_11,p:{x:569.9451,y:198.5778,scaleX:2.0901,scaleY:2.0901}},{t:this.shape_10,p:{x:480.4867,y:165.1876,scaleX:2.0901,scaleY:2.0901}},{t:this.instance_1,p:{regY:8.6,x:548.25,y:199.05,scaleX:2.0901,scaleY:2.0901}},{t:this.instance,p:{regX:14,regY:10.5,scaleX:2.0905,scaleY:2.0905,x:466,y:175.4}},{t:this.shape_9,p:{scaleX:2.0905,scaleY:2.0905,x:418.2502,y:139.8198}},{t:this.shape_8,p:{scaleX:2.0905,scaleY:2.0905,x:411.5605,y:140.2379}},{t:this.shape_7,p:{scaleX:2.0905,scaleY:2.0905,x:404.923,y:141.3877}},{t:this.shape_6,p:{scaleX:2.0905,scaleY:2.0905,x:398.5469,y:143.3214}},{t:this.shape_5,p:{scaleX:2.0905,scaleY:2.0905,x:392.5889,y:146.1959}},{t:this.shape_4,p:{scaleX:2.0905,scaleY:2.0905,x:387.4148,y:150.1679}},{t:this.shape_3,p:{scaleX:2.0905,scaleY:2.0905,x:383.286,y:154.9761}},{t:this.shape_2,p:{scaleX:2.0905,scaleY:2.0905,x:380.4116,y:160.6728}},{t:this.shape_1,p:{scaleX:2.0905,scaleY:2.0905,x:378.7914,y:166.6831}},{t:this.shape,p:{scaleX:2.0905,scaleY:2.0905,x:378.2688,y:172.8502}}]},5).to({state:[{t:this.shape_48,p:{scaleX:2.0897,scaleY:1.9692,x:528.0897,y:165.6747}},{t:this.shape_47,p:{scaleX:2.0897,scaleY:1.9692,x:274.4903,y:156.6934}},{t:this.instance_61,p:{regY:40.3,scaleX:2.0897,scaleY:1.9692,x:527.5,y:165.6,regX:42.5}},{t:this.shape_46,p:{scaleX:2.0897,scaleY:1.9692,x:220.1461,y:164.3455}},{t:this.shape_45,p:{scaleX:2.0897,scaleY:1.9692,x:194.3649,y:159.9641}},{t:this.shape_44,p:{scaleX:2.0897,scaleY:1.9692,x:111.98,y:182.8558}},{t:this.shape_43,p:{scaleX:2.0897,scaleY:1.9692,x:76.6125,y:210.0304}},{t:this.shape_42,p:{scaleX:2.0897,scaleY:1.9692,x:125.3016,y:217.5133}},{t:this.shape_41,p:{scaleX:2.0897,scaleY:1.9692,x:97.9271,y:206.8798}},{t:this.shape_40,p:{scaleX:2.0897,scaleY:1.9692,x:249.323,y:221.944}},{t:this.shape_39,p:{scaleX:2.0897,scaleY:1.9692,x:372.3518,y:225.308}},{t:this.instance_60,p:{regY:1.4,scaleX:2.0897,scaleY:1.9692,x:522.75,y:220.65,regX:20.8}},{t:this.instance_59,p:{regX:131.8,regY:46.1,scaleY:1.9695,x:274.5,y:156.65,scaleX:2.0901}},{t:this.instance_58,p:{regX:30.6,regY:33.4,scaleY:1.9695,x:536.1,y:171.3,scaleX:2.0901}},{t:this.instance_57,p:{regX:36.9,regY:14.5,scaleY:1.9695,x:314.05,y:100.75,scaleX:2.0901}},{t:this.instance_56,p:{regX:27.3,regY:16.1,scaleY:1.9695,x:235.35,y:180.15,scaleX:2.0901}},{t:this.instance_55,p:{regY:6,scaleY:1.9695,x:153.1,y:168.6,regX:13.2,scaleX:2.0901}},{t:this.instance_54,p:{regX:9.8,regY:8.5,scaleY:1.9695,x:67.95,y:193.95,scaleX:2.0901}},{t:this.instance_53,p:{regX:4.8,regY:3.3,scaleY:1.9695,x:163.35,y:184.1,scaleX:2.0901}},{t:this.instance_52,p:{regX:11.3,regY:10.3,scaleY:1.9695,x:194.4,y:160.55,scaleX:2.0901}},{t:this.instance_51,p:{regX:12.3,regY:5.9,scaleY:1.9695,x:30.9,y:205.85,scaleX:2.0901}},{t:this.instance_50,p:{regY:39.6,scaleX:2.0905,scaleY:1.97,x:525.5,y:165.55,regX:40.8}},{t:this.shape_38,p:{scaleX:2.0905,scaleY:2.0905,x:696.5073,y:124.1627}},{t:this.instance_49,p:{regX:75.2,regY:44.8,scaleX:2.0905,scaleY:2.0905,x:690.2,y:123.2}},{t:this.shape_37,p:{scaleX:2.0905,scaleY:2.0905,x:746.6951,y:167.5}},{t:this.instance_48,p:{scaleX:2.0905,scaleY:2.0905,x:748.35,y:171.2,regX:27.1,regY:16.6}},{t:this.instance_47,p:{regX:50.2,regY:26.3,scaleX:2.0905,scaleY:2.0905,y:156.15,x:739.7}},{t:this.instance_46,p:{regX:42.1,regY:19.7,scaleX:2.0905,scaleY:2.0905,x:746.05,y:166.85}},{t:this.instance_45,p:{regX:16.3,regY:8.4,scaleX:2.0905,scaleY:2.0905,x:746.6,y:164.1}},{t:this.instance_44,p:{regY:16.2,scaleX:2.0905,scaleY:2.0905,x:783.05,y:108.9,regX:22.8}},{t:this.instance_43,p:{regX:12,regY:15.1,scaleX:2.0905,scaleY:2.0905,x:812.85,y:167.55}},{t:this.instance_42,p:{scaleX:2.0905,scaleY:2.0905,x:593.4,y:47.35}},{t:this.shape_36,p:{scaleX:2.0908,scaleY:2.0908,x:613.5364,y:151.6981}},{t:this.instance_41,p:{regX:5.7,regY:3.6,scaleX:2.0908,scaleY:2.0908,x:613.55,y:151.4}},{t:this.shape_35,p:{scaleX:2.0908,scaleY:2.0908,x:613.3815,y:152.3548}},{t:this.shape_49},{t:this.instance_40,p:{regX:24.2,regY:19.2,scaleX:2.0908,scaleY:2.0908,x:596.75,y:171.05}},{t:this.instance_39,p:{regX:15.4,regY:12.4,scaleX:2.0908,scaleY:2.0908,x:586.1,y:164.7}},{t:this.shape_33,p:{scaleX:2.0905,scaleY:2.0905,x:686.3234,y:88.1911}},{t:this.shape_32,p:{x:642.3494,y:92.0094,scaleX:2.0901,scaleY:2.0901}},{t:this.instance_38,p:{x:693.4,y:118.3,scaleX:2.0901,scaleY:2.0901}},{t:this.instance_37,p:{regX:5.3,regY:4.3,scaleX:2.0897,scaleY:2.0897,x:691.95,y:125.65}},{t:this.instance_36,p:{scaleX:2.0897,scaleY:2.0897,x:692.65,y:125.65,regX:5.3,regY:4.2}},{t:this.instance_35,p:{regX:3.6,regY:4.2,scaleX:2.0897,scaleY:2.0897,x:695.25,y:125.65}},{t:this.instance_34,p:{regY:2.2,scaleX:2.0897,scaleY:2.0897,x:687,y:130.25,regX:2.6}},{t:this.instance_33,p:{x:680.6,y:131.4,scaleX:2.0901,scaleY:2.0901}},{t:this.shape_31,p:{scaleX:2.0897,scaleY:2.0897,x:613.3419,y:118.1228}},{t:this.shape_30,p:{scaleX:2.0897,scaleY:2.0897,x:601.901,y:114.3788}},{t:this.shape_29,p:{x:645.2385,y:98.5798,scaleX:2.0901,scaleY:2.0901}},{t:this.shape_28,p:{x:650.2311,y:76.3798,scaleX:2.0901,scaleY:2.0901}},{t:this.instance_32,p:{regX:5.2,regY:4.2,x:650.4,y:75.7,scaleX:2.0901,scaleY:2.0901}},{t:this.instance_31,p:{regX:5,x:649.8,y:75.95,regY:4.1,scaleX:2.0901,scaleY:2.0901}},{t:this.instance_30,p:{regX:2.9,regY:3.3,x:616.75,y:53.6,scaleX:2.0901,scaleY:2.0901}},{t:this.shape_27,p:{x:616.9845,y:53.7835,scaleX:2.0901,scaleY:2.0901}},{t:this.instance_29,p:{regX:3,regY:3.2,x:616.95,y:52.9,scaleX:2.0901,scaleY:2.0901}},{t:this.instance_28,p:{regX:9.5,regY:8,x:647.25,y:111.7,scaleX:2.0901,scaleY:2.0901}},{t:this.instance_27,p:{regX:2.4,x:655.95,y:102.4,regY:1.9,scaleX:2.0901,scaleY:2.0901}},{t:this.instance_26,p:{regX:4.1,regY:4.6,x:595.2,y:79.1,scaleX:2.0901,scaleY:2.0901}},{t:this.instance_25,p:{regX:1.1,x:596.8,y:72.95,regY:1.4,scaleX:2.0901,scaleY:2.0901}},{t:this.shape_26,p:{scaleX:2.0897,scaleY:2.0897,x:600.2769,y:84.9027}},{t:this.instance_24,p:{scaleX:2.0897,scaleY:2.0897,x:600.85,regX:1.9,regY:1.6,y:81.75}},{t:this.shape_25,p:{x:604.0115,y:83.6879,scaleX:2.0901,scaleY:2.0901}},{t:this.instance_23,p:{x:603.45,y:59.45,scaleX:2.0901,scaleY:2.0901}},{t:this.instance_22,p:{regX:5,regY:4.9,scaleX:2.0905,scaleY:2.0905,x:643.5,y:86.1}},{t:this.shape_24,p:{scaleX:2.0905,scaleY:2.0905,x:644.1127,y:85.8884}},{t:this.shape_23,p:{scaleX:2.0905,scaleY:2.0905,x:642.9017,y:88.6359}},{t:this.instance_21,p:{regX:3.5,regY:3,scaleX:2.0905,scaleY:2.0905,x:607.75,y:67.5}},{t:this.shape_22,p:{scaleX:2.0905,scaleY:2.0905,x:607.6483,y:67.4152}},{t:this.shape_21,p:{scaleX:2.0905,scaleY:2.0905,x:606.8232,y:70.1977}},{t:this.instance_20,p:{regX:29.7,regY:31.6,scaleX:2.0905,scaleY:2.0905,x:643.7,y:91.65}},{t:this.instance_19,p:{regY:4.7,scaleX:2.0905,scaleY:2.0905,x:603.85,y:114.8,regX:6.8}},{t:this.instance_18,p:{regX:3.4,regY:2.9,scaleX:2.0905,scaleY:2.0905,x:627.5,y:6.35}},{t:this.instance_17,p:{scaleX:2.0905,scaleY:2.0905,x:686.15,y:97.5,regX:33.5,regY:38.1}},{t:this.instance_16,p:{regX:16.8,scaleX:2.0905,scaleY:2.0905,x:709.35,y:20.4}},{t:this.instance_15,p:{regX:4.1,scaleX:2.0905,scaleY:2.0905,x:742.9,y:74.3,regY:18.9}},{t:this.instance_14,p:{regX:4.6,regY:18.9,scaleX:2.0905,scaleY:2.0905,x:724.6,y:70.85}},{t:this.instance_13,p:{regX:3.5,scaleX:2.0905,scaleY:2.0905,x:709.25,y:69.35}},{t:this.instance_12,p:{scaleX:2.0905,scaleY:2.0905,x:698.85,y:58.8,regX:3.6}},{t:this.instance_11,p:{regX:4.5,regY:10.8,scaleX:2.0905,scaleY:2.0905,y:48.3,x:691.9}},{t:this.instance_10,p:{regX:6.2,regY:12.3,scaleX:2.0905,scaleY:2.0905,x:679.35,y:42.8}},{t:this.instance_9,p:{regY:9.4,scaleX:2.0905,scaleY:2.0905,x:669.95,y:28.5,regX:8.3}},{t:this.instance_8,p:{regX:6.8,regY:7.8,scaleX:2.0905,scaleY:2.0905,x:653.85,y:20.9}},{t:this.instance_7,p:{regX:5,regY:1.9,scaleX:2.0905,scaleY:2.0905,x:636.6,y:7.8}},{t:this.instance_6,p:{regX:4.8,regY:3.5,scaleX:2.0905,scaleY:2.0905,x:630.75,y:20.25}},{t:this.instance_5,p:{regY:38.8,scaleX:2.0905,scaleY:2.0905,x:686.15,y:95.2,regX:33.5}},{t:this.shape_20,p:{x:585.0144,y:90.3965,scaleX:2.0901,scaleY:2.0901}},{t:this.instance_4,p:{regX:8.6,scaleX:2.0897,scaleY:2.0897,x:584.75,y:88.9,regY:14.6}},{t:this.shape_19,p:{scaleX:2.0905,scaleY:2.0905,x:614.6884,y:187.3479}},{t:this.shape_18,p:{scaleX:2.0905,scaleY:2.0905,x:587.0331,y:202.5159}},{t:this.shape_17,p:{x:465.5432,y:175.3191,scaleX:2.0901,scaleY:2.0901}},{t:this.shape_16,p:{x:535.0814,y:199.8005,scaleX:2.0901,scaleY:2.0901}},{t:this.shape_15,p:{x:586.6638,y:202.2481,scaleX:2.0901,scaleY:2.0901}},{t:this.shape_14,p:{x:535.0814,y:199.8005,scaleX:2.0901,scaleY:2.0901}},{t:this.instance_3,p:{regX:7.3,regY:8,x:473.4,y:174.45,scaleX:2.0901,scaleY:2.0901}},{t:this.instance_2,p:{regX:15.8,x:533.7,y:196.2,regY:5.3,scaleX:2.0901,scaleY:2.0901}},{t:this.shape_13,p:{x:455.6675,y:171.0013,scaleX:2.0901,scaleY:2.0901}},{t:this.shape_12,p:{x:462.5126,y:178.0031,scaleX:2.0901,scaleY:2.0901}},{t:this.shape_11,p:{x:569.8908,y:198.5382,scaleX:2.0901,scaleY:2.0901}},{t:this.shape_10,p:{x:480.4351,y:165.1491,scaleX:2.0901,scaleY:2.0901}},{t:this.instance_1,p:{regY:8.6,x:548.05,y:198.7,scaleX:2.0901,scaleY:2.0901}},{t:this.instance,p:{regX:14,regY:10.5,scaleX:2.0905,scaleY:2.0905,x:465.9,y:175.2}},{t:this.shape_9,p:{scaleX:2.0905,scaleY:2.0905,x:418.2253,y:139.8009}},{t:this.shape_8,p:{scaleX:2.0905,scaleY:2.0905,x:411.5357,y:140.219}},{t:this.shape_7,p:{scaleX:2.0905,scaleY:2.0905,x:404.8983,y:141.3687}},{t:this.shape_6,p:{scaleX:2.0905,scaleY:2.0905,x:398.5223,y:143.3025}},{t:this.shape_5,p:{scaleX:2.0905,scaleY:2.0905,x:392.5644,y:146.1769}},{t:this.shape_4,p:{scaleX:2.0905,scaleY:2.0905,x:387.3904,y:150.1488}},{t:this.shape_3,p:{scaleX:2.0905,scaleY:2.0905,x:383.2617,y:154.957}},{t:this.shape_2,p:{scaleX:2.0905,scaleY:2.0905,x:380.3872,y:160.6536}},{t:this.shape_1,p:{scaleX:2.0905,scaleY:2.0905,x:378.7671,y:166.6638}},{t:this.shape,p:{scaleX:2.0905,scaleY:2.0905,x:378.2445,y:172.8308}}]},5).to({state:[{t:this.shape_48,p:{scaleX:2.0895,scaleY:2.0895,x:527.9704,y:160.7698}},{t:this.shape_47,p:{scaleX:2.0895,scaleY:2.0895,x:274.3877,y:151.2396}},{t:this.instance_61,p:{regY:40.4,scaleX:2.0895,scaleY:2.0895,x:527.5,y:160.15,regX:42.6}},{t:this.shape_46,p:{scaleX:2.0895,scaleY:2.0895,x:220.047,y:159.3594}},{t:this.shape_45,p:{scaleX:2.0895,scaleY:2.0895,x:194.2676,y:154.7102}},{t:this.shape_44,p:{scaleX:2.0895,scaleY:2.0895,x:111.8881,y:179.0009}},{t:this.shape_43,p:{scaleX:2.0895,scaleY:2.0895,x:76.5229,y:207.8363}},{t:this.shape_42,p:{scaleX:2.0895,scaleY:2.0895,x:125.2088,y:215.7765}},{t:this.shape_41,p:{scaleX:2.0895,scaleY:2.0895,x:97.8361,y:204.4931}},{t:this.shape_40,p:{scaleX:2.0895,scaleY:2.0895,x:249.222,y:220.478}},{t:this.shape_39,p:{scaleX:2.0895,scaleY:2.0895,x:372.2427,y:224.0476}},{t:this.instance_60,p:{regY:1.7,scaleX:2.0895,scaleY:2.0895,x:522.45,y:218.95,regX:20.8}},{t:this.instance_59,p:{regX:131.9,regY:46.3,scaleY:2.0899,x:274.3,y:151.15,scaleX:2.0899}},{t:this.instance_58,p:{regX:30.9,regY:33.5,scaleY:2.0899,x:536.15,y:166.45,scaleX:2.0899}},{t:this.instance_57,p:{regX:36.9,regY:14.8,scaleY:2.0899,x:313.75,y:91.95,scaleX:2.0899}},{t:this.instance_56,p:{regX:27.4,regY:16.4,scaleY:2.0899,x:235.05,y:176.05,scaleX:2.0899}},{t:this.instance_55,p:{regY:6.4,scaleY:2.0899,x:152.7,y:163.9,regX:13.2,scaleX:2.0899}},{t:this.instance_54,p:{regX:10.1,regY:8.7,scaleY:2.0899,x:68.1,y:190.55,scaleX:2.0899}},{t:this.instance_53,p:{regX:4.9,regY:3.6,scaleY:2.0899,x:163.05,y:179.95,scaleX:2.0899}},{t:this.instance_52,p:{regX:11.4,regY:10.3,scaleY:2.0899,x:194.1,y:154.7,scaleX:2.0899}},{t:this.instance_51,p:{regX:12.5,regY:6.3,scaleY:2.0899,x:30.65,y:203.35,scaleX:2.0899}},{t:this.instance_50,p:{regY:40,scaleX:2.0903,scaleY:2.0903,x:525.25,y:160.9,regX:40.9}},{t:this.shape_38,p:{scaleX:2.0903,scaleY:2.0903,x:696.3625,y:124.0693}},{t:this.instance_49,p:{regX:75.4,regY:44.9,scaleX:2.0903,scaleY:2.0903,x:690.1,y:123.3}},{t:this.shape_37,p:{scaleX:2.0903,scaleY:2.0903,x:746.5466,y:167.4034}},{t:this.instance_48,p:{scaleX:2.0903,scaleY:2.0903,x:748.15,y:171.3,regX:27.2,regY:16.7}},{t:this.instance_47,p:{regX:50.4,regY:26.4,scaleX:2.0903,scaleY:2.0903,y:156.15,x:739.6}},{t:this.instance_46,p:{regX:42.4,regY:19.9,scaleX:2.0903,scaleY:2.0903,x:746.1,y:167.1}},{t:this.instance_45,p:{regX:16.5,regY:8.7,scaleX:2.0903,scaleY:2.0903,x:746.5,y:164.6}},{t:this.instance_44,p:{regY:16.4,scaleX:2.0903,scaleY:2.0903,x:782.85,y:109.2,regX:22.9}},{t:this.instance_43,p:{regX:12.1,regY:15.3,scaleX:2.0903,scaleY:2.0903,x:812.6,y:167.85}},{t:this.instance_42,p:{scaleX:2.0903,scaleY:2.0903,x:593,y:47.2}},{t:this.shape_36,p:{scaleX:2.0907,scaleY:2.0907,x:613.4255,y:151.6217}},{t:this.instance_41,p:{regX:5.8,regY:3.9,scaleX:2.0907,scaleY:2.0907,x:613.35,y:151.55}},{t:this.shape_35,p:{scaleX:2.0907,scaleY:2.0907,x:613.2705,y:152.2784}},{t:this.shape_34,p:{x:596.737,y:170.6257}},{t:this.instance_40,p:{regX:24.4,regY:19.3,scaleX:2.0907,scaleY:2.0907,x:596.7,y:170.9}},{t:this.instance_39,p:{regX:15.5,regY:12.6,scaleX:2.0907,scaleY:2.0907,x:585.9,y:164.7}},{t:this.shape_33,p:{scaleX:2.0903,scaleY:2.0903,x:686.1794,y:88.1003}},{t:this.shape_32,p:{x:642.2086,y:91.9183,scaleX:2.0899,scaleY:2.0899}},{t:this.instance_38,p:{x:692.75,y:118,scaleX:2.0899,scaleY:2.0899}},{t:this.instance_37,p:{regX:5.4,regY:4.6,scaleX:2.0895,scaleY:2.0895,x:691.55,y:125.6}},{t:this.instance_36,p:{scaleX:2.0895,scaleY:2.0895,x:692.3,y:125.8,regX:5.3,regY:4.4}},{t:this.instance_35,p:{regX:3.7,regY:4.3,scaleX:2.0895,scaleY:2.0895,x:694.9,y:125.6}},{t:this.instance_34,p:{regY:2.4,scaleX:2.0895,scaleY:2.0895,x:686.7,y:130.3,regX:2.6}},{t:this.instance_33,p:{x:680,y:130.95,scaleX:2.0899,scaleY:2.0899}},{t:this.shape_31,p:{scaleX:2.0895,scaleY:2.0895,x:613.217,y:118.0391}},{t:this.shape_30,p:{scaleX:2.0895,scaleY:2.0895,x:601.7768,y:114.2954}},{t:this.shape_29,p:{x:645.0974,y:98.4882,scaleX:2.0899,scaleY:2.0899}},{t:this.shape_28,p:{x:650.0897,y:76.2898,scaleX:2.0899,scaleY:2.0899}},{t:this.instance_32,p:{regX:5.4,regY:4.4,x:650.15,y:75.75,scaleX:2.0899,scaleY:2.0899}},{t:this.instance_31,p:{regX:5.3,x:649.7,y:75.85,regY:4.2,scaleX:2.0899,scaleY:2.0899}},{t:this.instance_30,p:{regX:3.2,regY:3.4,x:616.65,y:53.45,scaleX:2.0899,scaleY:2.0899}},{t:this.shape_27,p:{x:616.8455,y:53.6952,scaleX:2.0899,scaleY:2.0899}},{t:this.instance_29,p:{regX:3.3,regY:3.3,x:616.85,y:52.85,scaleX:2.0899,scaleY:2.0899}},{t:this.instance_28,p:{regX:9.7,regY:8.1,x:647.05,y:111.6,scaleX:2.0899,scaleY:2.0899}},{t:this.instance_27,p:{regX:2.7,x:655.85,y:102.3,regY:2,scaleX:2.0899,scaleY:2.0899}},{t:this.instance_26,p:{regX:4.5,regY:4.8,x:595.2,y:79.3,scaleX:2.0899,scaleY:2.0899}},{t:this.instance_25,p:{regX:1.4,x:596.7,y:72.85,regY:1.5,scaleX:2.0899,scaleY:2.0899}},{t:this.shape_26,p:{scaleX:2.0895,scaleY:2.0895,x:600.1529,y:84.8212}},{t:this.instance_24,p:{scaleX:2.0895,scaleY:2.0895,x:600.55,regX:1.9,regY:1.6,y:81.6}},{t:this.shape_25,p:{x:603.8735,y:83.5974,scaleX:2.0899,scaleY:2.0899}},{t:this.instance_23,p:{x:602.75,y:59.25,scaleX:2.0899,scaleY:2.0899}},{t:this.instance_22,p:{regX:5.3,regY:5,scaleX:2.0903,scaleY:2.0903,x:643.65,y:86.2}},{t:this.shape_24,p:{scaleX:2.0903,scaleY:2.0903,x:643.9717,y:85.7977}},{t:this.shape_23,p:{scaleX:2.0903,scaleY:2.0903,x:642.7609,y:88.545}},{t:this.instance_21,p:{regX:3.6,regY:3.2,scaleX:2.0903,scaleY:2.0903,x:607.4,y:67.8}},{t:this.shape_22,p:{scaleX:2.0903,scaleY:2.0903,x:607.51,y:67.3259}},{t:this.shape_21,p:{scaleX:2.0903,scaleY:2.0903,x:606.685,y:70.1082}},{t:this.instance_20,p:{regX:29.8,regY:31.8,scaleX:2.0903,scaleY:2.0903,x:643.5,y:91.9}},{t:this.instance_19,p:{regY:4.9,scaleX:2.0903,scaleY:2.0903,x:603.45,y:115.05,regX:6.8}},{t:this.instance_18,p:{regX:3.6,regY:3.1,scaleX:2.0903,scaleY:2.0903,x:627.45,y:6.65}},{t:this.instance_17,p:{scaleX:2.0903,scaleY:2.0903,x:685.95,y:97.55,regX:33.6,regY:38.2}},{t:this.instance_16,p:{regX:16.9,scaleX:2.0903,scaleY:2.0903,x:709.1,y:20.6}},{t:this.instance_15,p:{regX:4.4,scaleX:2.0903,scaleY:2.0903,x:743.05,y:74.35,regY:19}},{t:this.instance_14,p:{regX:4.7,regY:19.1,scaleX:2.0903,scaleY:2.0903,x:724.4,y:71.15}},{t:this.instance_13,p:{regX:3.6,scaleX:2.0903,scaleY:2.0903,x:709.1,y:69.25}},{t:this.instance_12,p:{scaleX:2.0903,scaleY:2.0903,x:698.55,y:58.7,regX:3.7}},{t:this.instance_11,p:{regX:4.7,regY:11.1,scaleX:2.0903,scaleY:2.0903,y:48.75,x:691.9}},{t:this.instance_10,p:{regX:6.3,regY:12.3,scaleX:2.0903,scaleY:2.0903,x:679.05,y:42.7}},{t:this.instance_9,p:{regY:9.6,scaleX:2.0903,scaleY:2.0903,x:669.65,y:28.8,regX:8.4}},{t:this.instance_8,p:{regX:7,regY:7.8,scaleX:2.0903,scaleY:2.0903,x:653.7,y:20.75}},{t:this.instance_7,p:{regX:5.2,regY:2.1,scaleX:2.0903,scaleY:2.0903,x:636.5,y:8.1}},{t:this.instance_6,p:{regX:4.9,regY:3.6,scaleX:2.0903,scaleY:2.0903,x:630.55,y:20.35}},{t:this.instance_5,p:{regY:38.9,scaleX:2.0903,scaleY:2.0903,x:685.95,y:95.25,regX:33.6}},{t:this.shape_20,p:{x:584.8777,y:90.3055,scaleX:2.0899,scaleY:2.0899}},{t:this.instance_4,p:{regX:8.7,scaleX:2.0895,scaleY:2.0895,x:584.7,y:88.85,regY:14.8}},{t:this.shape_19,p:{scaleX:2.0903,scaleY:2.0903,x:614.5496,y:187.2499}},{t:this.shape_18,p:{scaleX:2.0903,scaleY:2.0903,x:586.8963,y:202.4167}},{t:this.shape_17,p:{x:465.4152,y:175.2219,scaleX:2.0899,scaleY:2.0899}},{t:this.shape_16,p:{x:534.9483,y:199.7016,scaleX:2.0899,scaleY:2.0899}},{t:this.shape_15,p:{x:586.527,y:202.149,scaleX:2.0899,scaleY:2.0899}},{t:this.shape_14,p:{x:534.9483,y:199.7016,scaleX:2.0899,scaleY:2.0899}},{t:this.instance_3,p:{regX:7.5,regY:8.1,x:473.2,y:174.35,scaleX:2.0899,scaleY:2.0899}},{t:this.instance_2,p:{regX:16.1,x:533.75,y:196.1,regY:5.4,scaleX:2.0899,scaleY:2.0899}},{t:this.shape_13,p:{x:455.5403,y:170.9044,scaleX:2.0899,scaleY:2.0899}},{t:this.shape_12,p:{x:462.3848,y:177.9057,scaleX:2.0899,scaleY:2.0899}},{t:this.shape_11,p:{x:569.7553,y:198.4393,scaleX:2.0899,scaleY:2.0899}},{t:this.shape_10,p:{x:480.306,y:165.0526,scaleX:2.0899,scaleY:2.0899}},{t:this.instance_1,p:{regY:8.9,x:547.65,y:199,scaleX:2.0899,scaleY:2.0899}},{t:this.instance,p:{regX:14,regY:10.7,scaleX:2.0903,scaleY:2.0903,x:465.55,y:175.35}},{t:this.shape_9,p:{scaleX:2.0903,scaleY:2.0903,x:418.1008,y:139.7063}},{t:this.shape_8,p:{scaleX:2.0903,scaleY:2.0903,x:411.4117,y:140.1244}},{t:this.shape_7,p:{scaleX:2.0903,scaleY:2.0903,x:404.7748,y:141.274}},{t:this.shape_6,p:{scaleX:2.0903,scaleY:2.0903,x:398.3993,y:143.2076}},{t:this.shape_5,p:{scaleX:2.0903,scaleY:2.0903,x:392.4418,y:146.0818}},{t:this.shape_4,p:{scaleX:2.0903,scaleY:2.0903,x:387.2682,y:150.0535}},{t:this.shape_3,p:{scaleX:2.0903,scaleY:2.0903,x:383.1397,y:154.8613}},{t:this.shape_2,p:{scaleX:2.0903,scaleY:2.0903,x:380.2655,y:160.5575}},{t:this.shape_1,p:{scaleX:2.0903,scaleY:2.0903,x:378.6455,y:166.5672}},{t:this.shape,p:{scaleX:2.0903,scaleY:2.0903,x:378.1229,y:172.7338}}]},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-0.5,860.9,247.1);


(lib.Group_16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Path_11();
	this.instance.setTransform(258,5.8,1,1,0,0,0,5.5,5.8);
	this.instance.alpha = 0.3203;
	this.instance.compositeOperation = "multiply";

	this.instance_1 = new lib.Path_1_1();
	this.instance_1.setTransform(221.95,5.8,1,1,0,0,0,5.5,5.8);
	this.instance_1.alpha = 0.3203;
	this.instance_1.compositeOperation = "multiply";

	this.instance_2 = new lib.Path_2_1();
	this.instance_2.setTransform(185.85,5.8,1,1,0,0,0,5.5,5.8);
	this.instance_2.alpha = 0.3203;
	this.instance_2.compositeOperation = "multiply";

	this.instance_3 = new lib.Path_3_2();
	this.instance_3.setTransform(149.8,5.8,1,1,0,0,0,5.5,5.8);
	this.instance_3.alpha = 0.3203;
	this.instance_3.compositeOperation = "multiply";

	this.instance_4 = new lib.Path_4_0();
	this.instance_4.setTransform(113.75,5.8,1,1,0,0,0,5.5,5.8);
	this.instance_4.alpha = 0.3203;
	this.instance_4.compositeOperation = "multiply";

	this.instance_5 = new lib.Path_5_0();
	this.instance_5.setTransform(77.65,5.8,1,1,0,0,0,5.5,5.8);
	this.instance_5.alpha = 0.3203;
	this.instance_5.compositeOperation = "multiply";

	this.instance_6 = new lib.Path_6_1();
	this.instance_6.setTransform(41.6,5.8,1,1,0,0,0,5.5,5.8);
	this.instance_6.alpha = 0.3203;
	this.instance_6.compositeOperation = "multiply";

	this.instance_7 = new lib.Path_7_0();
	this.instance_7.setTransform(5.5,5.8,1,1,0,0,0,5.5,5.8);
	this.instance_7.alpha = 0.3203;
	this.instance_7.compositeOperation = "multiply";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_16, new cjs.Rectangle(0,0,263.5,11.5), null);


(lib.Group_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Path_34();
	this.instance.setTransform(35.1,16.8,1,1,0,0,0,35.1,16.8);
	this.instance.alpha = 0.6992;
	this.instance.compositeOperation = "multiply";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_4, new cjs.Rectangle(0.1,0,70.10000000000001,33.6), null);


(lib.Group_13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Path_0();
	this.instance.setTransform(35.6,22.1,1,1,0,0,0,35.6,22.1);
	this.instance.compositeOperation = "screen";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_13, new cjs.Rectangle(0,0,71.4,44.1), null);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgGBZQgdgDgdgJQgPgFgcgYQgfgagFgCQgMgGgIgIQgJgGAHAAQAKACALgFIgSgEQgGgEAJgIIAlghQAmgaA3gIQA2gIAyAbQAOAHAoAgQAMAJAXgJQAIAJgFALQgCAGgFADQgiABgZAbIgrAuQgUAOgjAAIgJAAg");
	mask.setTransform(16.8845,11.1487);

	// Layer_3
	this.instance = new lib.Path_3();
	this.instance.setTransform(17.9,14.85,1,1,0,0,0,15,4.5);
	this.instance.alpha = 0.75;
	this.instance.compositeOperation = "multiply";

	this.instance_1 = new lib.Path_1_0();
	this.instance_1.setTransform(16.9,11.15,1,1,0,0,0,16.9,8.9);
	this.instance_1.compositeOperation = "multiply";

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FDFC03","#FDE922","#FEC066","#FEB081"],[0.016,0.235,0.757,1],-1.5,0,1.6,0).s().p("AgHANQgFgHgCgFQgCgDAKgJIAJgIQAEAAACAEIAFAJQADAEgCAFQgCAFgCACQgHAHgEADIgBAAQgCAAgEgHg");
	this.shape.setTransform(13.6923,18.0017);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FDFC03","#FDE922","#FEC066","#FEB081"],[0.016,0.235,0.757,1],-1.5,0,1.6,0).s().p("AgHANQgFgHgCgFQgCgDAKgJIAJgIQAEAAACAEIAFAJQADAEgCAFQgCAFgCACQgEAGgHAEIgBAAQgCAAgEgHg");
	this.shape_1.setTransform(13.6923,14.6559);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FDFC03","#FDE922","#FEC066","#FEB081"],[0.016,0.235,0.757,1],-1.5,0,1.6,0).s().p("AgHAOQgFgHgCgGQgCgDAKgJIAJgIQAEAAACAEIAFAJQAFAGgIALQgGAGgFADIgBAAQgCAAgEgGg");
	this.shape_2.setTransform(13.6983,11.3063);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FDFC03","#FDE922","#FEC066","#FEB081"],[0.016,0.235,0.757,1],-1.5,0,1.6,0).s().p("AgHANQgFgGgCgGQgCgDAKgJIAJgIQAEAAACAEIAFAJQADAEgCAFQgCAFgCACQgDAFgIAFIAAAAQgDAAgEgHg");
	this.shape_3.setTransform(15.5423,19.2059);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FDFC03","#FDE922","#FEC066","#FEB081"],[0.016,0.235,0.757,1],-1.5,0,1.6,0).s().p("AgHAOIgHgNQgCgDAKgJIAJgIQAEAAACAEIAFAJQADAEgCAGQgCAEgCACQgCAEgJAGIAAAAQgDAAgEgGg");
	this.shape_4.setTransform(15.5423,15.8563);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FDFC03","#FDE922","#FEC066","#FEB081"],[0.016,0.235,0.757,1],-1.5,0,1.6,0).s().p("AgHAOIgHgNQgCgDAKgJIAJgIQAEABACAEIAFAIQADAEgCAGQgCAEgCADIgFAEIgGAFIAAAAQgDAAgEgGg");
	this.shape_5.setTransform(15.5423,12.5063);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FDFC03","#FDE922","#FEC066","#FEB081"],[0.016,0.235,0.757,1],-1.5,0,1.6,0).s().p("AgOAGQgCgEAKgIIAJgIQAEAAACAEIAFAJQAEAFgGAKIgVABg");
	this.shape_6.setTransform(17.3952,19.925);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#FDFC03","#FDE922","#FEC066","#FEB081"],[0.016,0.235,0.757,1],-1.5,0,1.6,0).s().p("AgHAOIgIgNQgBgDAKgJIAJgIQADAAACAEIAGAJQAFAGgJALQgCADgIAGIgBAAQgCAAgEgGg");
	this.shape_7.setTransform(17.4078,17.0563);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#FDFC03","#FDE922","#FEC066","#FEB081"],[0.016,0.235,0.757,1],-1.5,0,1.6,0).s().p("AgHANIgHgMQgCgDAKgJIAJgIQAEAAACAEIAFAJQADAEgCAFQgCAFgCACQgDAFgIAFIAAAAQgCAAgFgHg");
	this.shape_8.setTransform(17.397,13.7517);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#FDFC03","#FDE922","#FEC066","#FEB081"],[0.016,0.235,0.757,1],-1.5,0,1.6,0).s().p("AgEgCIAHgGQADAAACAFIAGAIIABABIgdADQACgFAIgGg");
	this.shape_9.setTransform(19.25,20.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#FDFC03","#FDE922","#FEC066","#FEB081"],[0.016,0.235,0.757,1],-1.5,0,1.6,0).s().p("AgHAOQgFgHgCgGQgCgDAKgJIAJgIQADABACAEIAGAIQAEAGgHALQgHAHgEACIgBAAQgCAAgEgGg");
	this.shape_10.setTransform(19.2677,18.2813);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#FDFC03","#FDE922","#FEC066","#FEB081"],[0.016,0.235,0.757,1],-1.5,0,1.6,0).s().p("AgHANQgFgGgCgGQgCgDAKgJIAJgIQADAAACAEIAGAJQAEAGgHAKIgLAKIgBAAQgCAAgEgHg");
	this.shape_11.setTransform(19.2677,14.9559);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#FDFC03","#FDE922","#FEC066","#FEB081"],[0.016,0.235,0.757,1],-1.5,0,1.6,0).s().p("AgOADQgCgDAKgJIAJgIQADAAACAEIAGAJQADAEgCAFQgCAFgCACIgGAFIgBAAIgJABQgGgHgDgIg");
	this.shape_12.setTransform(21.1233,19.325);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#FDFC03","#FDE922","#FEC066","#FEB081"],[0.016,0.235,0.757,1],-1.5,0,1.6,0).s().p("AgHAOQgFgHgCgGQgCgDAKgJIAJgIQADAAACAEIAGAJQADAEgCAGQgCAEgCACQgEAGgHAEIgBAAQgCAAgEgGg");
	this.shape_13.setTransform(21.1233,16.1563);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#FDFC03","#FDE922","#FEC066","#FEB081"],[0.016,0.235,0.757,1],-1.5,0,1.6,0).s().p("AgOAJQgCgEAKgIIAJgIQADABADAEQADAGACACQACACAAADIgdAFg");
	this.shape_14.setTransform(22.9902,19.875);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#FDFC03","#FDE922","#FEC066","#FEB081"],[0.016,0.235,0.757,1],-1.5,0,1.6,0).s().p("AgHAOQgFgHgCgGQgCgDAKgJIAJgIQADAAADAEQADAHACACQAFAGgIALQgGAGgFADIgBAAQgCAAgEgGg");
	this.shape_15.setTransform(22.9864,17.3563);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#FDFC03","#FDE922","#FEC066","#FEB081"],[0.016,0.235,0.757,1],-1.5,0,1.6,0).s().p("AgBAUQgCgBgFgGIgGgMQgCgDAKgJIAJgIQAEABACAEIAFAIQADAEgCAGQgCAEgCADIgLAJg");
	this.shape_16.setTransform(24.8423,18.575);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#FDFC03","#FDE922","#FEC066","#FEB081"],[0.016,0.235,0.757,1],-1.5,0,1.6,0).s().p("AgOAIQgCgEAKgIIAJgIQAEAAACAFIAFAHQACACAAADQgOAFgOADg");
	this.shape_17.setTransform(26.6902,19.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#FDFC03","#FDE922","#FEC066","#FEB081"],[0.016,0.235,0.757,1],-1.5,0,1.6,0).s().p("AgHAOQgFgHgCgGQgCgDAKgJIAJgIQADAAADAEIAFAJQAFAGgIALQgGAGgFADIgBAAQgCAAgEgGg");
	this.shape_18.setTransform(13.9983,8.6563);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#FDFC03","#FDE922","#FEC066","#FEB081"],[0.016,0.235,0.757,1],-1.5,0,1.6,0).s().p("AgHAOQgFgHgCgGQgCgDAKgJIAJgIQAEABACAEIAFAIQADAEgCAGQgCAEgCADQgIAHgDACIgBAAQgCAAgEgGg");
	this.shape_19.setTransform(13.9923,5.3313);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#FDFC03","#FDE922","#FEC066","#FEB081"],[0.016,0.235,0.757,1],-1.5,0,1.6,0).s().p("AgHAJQgFgHgCgEQgBgDACgDIAYgHIADAFQADAEgCAGQgCAEgCACQgHAHgEADIgBAAQgCAAgEgHg");
	this.shape_20.setTransform(13.9878,2.4309);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#FDFC03","#FDE922","#FEC066","#FEB081"],[0.016,0.235,0.757,1],-1.5,0,1.6,0).s().p("AgHAOQgFgHgCgGQgCgDAKgJIAJgIQAEAAACAEIAFAJQADAEgCAGQgCAEgCADQgGAGgFADIgBAAQgCAAgEgGg");
	this.shape_21.setTransform(15.8423,9.8563);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#FDFC03","#FDE922","#FEC066","#FEB081"],[0.016,0.235,0.757,1],-1.5,0,1.6,0).s().p("AgHANQgFgHgCgFQgCgDAKgJIAJgIQAEAAACAEIAFAJQADAEgCAFQgCAFgCACQgHAHgEADIgBAAQgCAAgEgHg");
	this.shape_22.setTransform(15.8423,6.5517);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#FDFC03","#FDE922","#FEC066","#FEB081"],[0.016,0.235,0.757,1],-1.5,0,1.6,0).s().p("AgHANQgFgHgCgFQgCgDAKgJIAJgIQAEAAACAEIAFAJQADAEgCAGQgCAEgCACQgEAGgHAEIgBAAQgCAAgEgHg");
	this.shape_23.setTransform(15.8423,3.2059);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#FDFC03","#FDE922","#FEC066","#FEB081"],[0.016,0.235,0.757,1],-1.5,0,1.6,0).s().p("AgHANIgHgMQgCgDAKgJIAJgIQAEAAACAEIAFAJQADAEgCAFQgCAFgCACQgDAFgIAFIAAAAQgCAAgFgHg");
	this.shape_24.setTransform(17.6923,11.1017);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#FDFC03","#FDE922","#FEC066","#FEB081"],[0.016,0.235,0.757,1],-1.5,0,1.6,0).s().p("AgHANQgFgGgCgGQgCgDAKgJIAJgIQAEAAACAEIAFAJQADAEgCAFQgCAFgCACQgCAEgJAGIAAAAQgDAAgEgHg");
	this.shape_25.setTransform(17.6923,7.7559);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#FDFC03","#FDE922","#FEC066","#FEB081"],[0.016,0.235,0.757,1],-1.5,0,1.6,0).s().p("AgHAOIgHgNQgCgDAKgJIAJgIQAEAAACAEIAFAJQAFAGgIALQgDADgIAGIgBAAQgCAAgEgGg");
	this.shape_26.setTransform(17.6983,4.4063);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#FDFC03","#FDE922","#FEC066","#FEB081"],[0.016,0.235,0.757,1],-1.5,0,1.6,0).s().p("AgHAJIgHgMQgBgDADgEIAYgEIACADQADAEgCAHQgCADgCADQgDAEgIAFIAAAAQgCAAgFgGg");
	this.shape_27.setTransform(17.6985,1.5767);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#FDFC03","#FDE922","#FEC066","#FEB081"],[0.016,0.235,0.757,1],-1.5,0,1.6,0).s().p("AgHANQgFgGgCgGQgCgDAKgJIAJgIQAEAAACAEIAFAJQAFAGgIAKIgLAKIgBAAQgCAAgEgHg");
	this.shape_28.setTransform(19.5496,12.3059);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#FDFC03","#FDE922","#FEC066","#FEB081"],[0.016,0.235,0.757,1],-1.5,0,1.6,0).s().p("AgHAOIgHgNQgCgDAKgJIAJgIQAEAAACAEIAFAJQAFAGgIAKQgDAEgIAGIgBAAQgCAAgEgGg");
	this.shape_29.setTransform(19.5496,8.9563);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#FDFC03","#FDE922","#FEC066","#FEB081"],[0.016,0.235,0.757,1],-1.5,0,1.6,0).s().p("AgHAOIgHgNQgCgDAKgJIAJgIQAEABACAEIAFAIQAFAGgIALQgHAHgEACIgBAAQgCAAgEgGg");
	this.shape_30.setTransform(19.5496,5.6063);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#FDFC03","#FDE922","#FEC066","#FEB081"],[0.016,0.235,0.757,1],-1.5,0,1.6,0).s().p("AgHANQgFgGgCgGQgCgDAKgJIAJgIQAEAAACAEIAFAJQAFAGgIAKIgLAKIgBAAQgCAAgEgHg");
	this.shape_31.setTransform(19.5496,2.3059);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#FDFC03","#FDE922","#FEC066","#FEB081"],[0.016,0.235,0.757,1],-1.5,0,1.6,0).s().p("AgHANQgFgGgCgGQgCgDAKgJIAJgIQADAAACAEIAGAJQAEAGgHAKQgDAEgIAGIgBAAQgCAAgEgHg");
	this.shape_32.setTransform(21.4177,13.5059);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#FDFC03","#FDE922","#FEC066","#FEB081"],[0.016,0.235,0.757,1],-1.5,0,1.6,0).s().p("AgHAOQgFgHgCgGQgCgDAKgJIAJgIQADAAACAEIAGAJQADAEgCAGIgEAHIgLAJIgBAAQgCAAgEgGg");
	this.shape_33.setTransform(21.4233,10.1563);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#FDFC03","#FDE922","#FEC066","#FEB081"],[0.016,0.235,0.757,1],-1.5,0,1.6,0).s().p("AgHANQgFgHgCgFQgCgDAKgJIAJgIQADAAACAEIAGAJQAEAGgHAKIgLAKIAAAAQgDAAgEgHg");
	this.shape_34.setTransform(21.4177,6.8517);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#FDFC03","#FDE922","#FEC066","#FEB081"],[0.016,0.235,0.757,1],-1.5,0,1.6,0).s().p("AgHANQgFgGgCgGQgCgDAKgJIAJgIQADAAACAEIAGAJQAEAGgHAKQgDAEgIAGIgBAAQgCAAgEgHg");
	this.shape_35.setTransform(21.4177,3.5059);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#FDFC03","#FDE922","#FEC066","#FEB081"],[0.016,0.235,0.757,1],-1.5,0,1.6,0).s().p("AgHAFQgFgGgCgGIAAgDQANAAAQAEIgEAIIgLAJIgBAAQgCAAgEgGg");
	this.shape_36.setTransform(21.4125,1.0788);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#FDFC03","#FDE922","#FEC066","#FEB081"],[0.016,0.235,0.757,1],-1.5,0,1.6,0).s().p("AgHAOQgFgHgCgGQgCgDAKgJIAJgIQADAAACAEIAGAJQAFAGgIALQgGAGgFADIgBAAQgCAAgEgGg");
	this.shape_37.setTransform(23.2795,14.7063);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#FDFC03","#FDE922","#FEC066","#FEB081"],[0.016,0.235,0.757,1],-1.5,0,1.6,0).s().p("AgHAOQgFgHgCgGQgCgDAKgJIAJgIQADABACAEIAGAIQADAEgCAGQgCAEgCADQgIAHgDACIgBAAQgCAAgEgGg");
	this.shape_38.setTransform(23.2733,11.3813);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#FDFC03","#FDE922","#FEC066","#FEB081"],[0.016,0.235,0.757,1],-1.5,0,1.6,0).s().p("AgHANQgFgGgCgGQgCgDAKgJIAJgIQADAAACAEIAGAJQADAEgCAFQgCAFgCACQgHAHgEADIgBAAQgCAAgEgHg");
	this.shape_39.setTransform(23.2733,8.0559);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#FDFC03","#FDE922","#FEC066","#FEB081"],[0.016,0.235,0.757,1],-1.5,0,1.6,0).s().p("AgHAOQgFgHgCgGQgCgDAKgJIAJgIQADAAACAEIAGAJQAFAGgIALQgGAGgFADIgBAAQgCAAgEgGg");
	this.shape_40.setTransform(23.2795,4.7063);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["#FDFC03","#FDE922","#FEC066","#FEB081"],[0.016,0.235,0.757,1],-1.5,0,1.6,0).s().p("AgHAJQgFgHgCgEQgCgEAJgJQAKADAMAFQACAGgGAHQgIAIgDABIgBABQgCAAgEgHg");
	this.shape_41.setTransform(23.2718,1.8063);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#FDFC03","#FDE922","#FEC066","#FEB081"],[0.016,0.235,0.757,1],-1.5,0,1.6,0).s().p("AgHAOQgFgHgCgGQgCgDAKgJIAJgIQADAAADAEQADAHACACQADAEgCAGQgCAEgCADQgIAHgDACIgBAAQgCAAgEgGg");
	this.shape_42.setTransform(25.1302,15.9063);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["#FDFC03","#FDE922","#FEC066","#FEB081"],[0.016,0.235,0.757,1],-1.5,0,1.6,0).s().p("AgHANQgFgGgCgGQgCgDAKgJIAJgIQADAAADAEIAFAJQADAEgCAFQgCAFgCACQgHAHgEADIgBAAQgCAAgEgHg");
	this.shape_43.setTransform(25.1302,12.6059);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#FDFC03","#FDE922","#FEC066","#FEB081"],[0.016,0.235,0.757,1],-1.5,0,1.6,0).s().p("AgHAOQgFgHgCgGQgCgDAKgJIAJgIQADAAADAEQADAHACACQADAEgCAGQgCAEgCACQgEAGgHAEIgBAAQgCAAgEgGg");
	this.shape_44.setTransform(25.1302,9.2563);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#FDFC03","#FDE922","#FEC066","#FEB081"],[0.016,0.235,0.757,1],-1.5,0,1.6,0).s().p("AgHAOQgFgHgCgGQgCgDAKgJIAJgIQADAAADAEQADAHACACQADAEgCAGQgCAEgCADQgIAHgDACIgBAAQgCAAgEgGg");
	this.shape_45.setTransform(25.1302,5.9063);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["#FDFC03","#FDE922","#FEC066","#FEB081"],[0.016,0.235,0.757,1],-1.5,0,1.6,0).s().p("AgHALQgFgGgCgFQgDgFAPgMQAFADALAHQADAEgCAFIgEAGQgHAHgEADIgBAAQgCAAgEgHg");
	this.shape_46.setTransform(25.1261,2.8309);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["#FDFC03","#FDE922","#FEC066","#FEB081"],[0.016,0.235,0.757,1],-1.5,0,1.6,0).s().p("AgHANQgFgHgCgFQgCgDAKgJIAJgIQAEAAACAEIAFAJQADAEgCAFQgCAFgCACQgHAHgEADIgBAAQgCAAgEgHg");
	this.shape_47.setTransform(26.9923,17.1517);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["#FDFC03","#FDE922","#FEC066","#FEB081"],[0.016,0.235,0.757,1],-1.5,0,1.6,0).s().p("AgHANQgFgHgCgFQgCgDAKgJIAJgIQADAAADAEIAFAJQADAEgCAGQgCAEgCACQgEAGgHAEIgBAAQgCAAgEgHg");
	this.shape_48.setTransform(26.9923,13.8059);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["#FDFC03","#FDE922","#FEC066","#FEB081"],[0.016,0.235,0.757,1],-1.5,0,1.6,0).s().p("AgHAOQgFgHgCgGQgCgDAKgJIAJgIQADAAADAEIAFAJQAFAGgIALQgGAGgFADIgBAAQgCAAgEgGg");
	this.shape_49.setTransform(26.9983,10.4563);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["#FDFC03","#FDE922","#FEC066","#FEB081"],[0.016,0.235,0.757,1],-1.5,0,1.6,0).s().p("AgHANQgFgHgCgFQgCgDAKgJIAJgIQAEAAACAEIAFAJQADAEgCAFQgCAFgCACQgHAHgEADIgBAAQgCAAgEgHg");
	this.shape_50.setTransform(26.9923,7.1517);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["#FDFC03","#FDE922","#FEC066","#FEB081"],[0.016,0.235,0.757,1],-1.5,0,1.6,0).s().p("AgHAMQgFgHgCgFQgCgEAPgNIAQANQACAGgGAHQgEAFgHAEIgBAAQgCAAgEgGg");
	this.shape_51.setTransform(26.9871,3.9809);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["#FDFC03","#FDE922","#FEC066","#FEB081"],[0.016,0.235,0.757,1],-1.5,0,1.6,0).s().p("AgOAEQgCgEAKgIIAJgIQAEABACAEIAFAJQADADgDAHQgIAEgNAFg");
	this.shape_52.setTransform(28.8344,18.025);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["#FDFC03","#FDE922","#FEC066","#FEB081"],[0.016,0.235,0.757,1],-1.5,0,1.6,0).s().p("AgHAOQgFgHgCgGQgCgDAKgJIAJgIQAEAAACAEIAFAJQAFAGgIALQgGAGgFADIgBAAQgCAAgEgGg");
	this.shape_53.setTransform(28.8483,15.0063);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["#FDFC03","#FDE922","#FEC066","#FEB081"],[0.016,0.235,0.757,1],-1.5,0,1.6,0).s().p("AgHAOQgFgHgCgGQgCgDAKgJIAJgIQAEABACAEIAFAIQADAEgCAGQgCAEgCADQgIAHgDACIgBAAQgCAAgEgGg");
	this.shape_54.setTransform(28.8423,11.6813);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["#FDFC03","#FDE922","#FEC066","#FEB081"],[0.016,0.235,0.757,1],-1.5,0,1.6,0).s().p("AgHANQgFgHgCgFQgCgDAKgJIAJgIQAEAAACAEIAFAJQADAEgCAFQgCAFgCACQgHAHgEADIgBAAQgCAAgEgHg");
	this.shape_55.setTransform(28.8423,8.3559);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["#FDFC03","#FDE922","#FEC066","#FEB081"],[0.016,0.235,0.757,1],-1.5,0,1.6,0).s().p("AgHALQgFgHgCgEQgCgGAOgLIASAPQgBADgEAHQgGAGgFADIgBABQgCAAgEgHg");
	this.shape_56.setTransform(28.8379,5.2563);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["#FDFC03","#FDE922","#FEC066","#FEB081"],[0.016,0.235,0.757,1],-1.5,0,1.6,0).s().p("AgHAOQgFgHgCgGQgCgDAKgJIAJgIQAEAAACAEIAFAJQADAEgCAGQgCAEgCADQgIAHgDACIgBAAQgCAAgEgGg");
	this.shape_57.setTransform(30.6923,16.2063);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["#FDFC03","#FDE922","#FEC066","#FEB081"],[0.016,0.235,0.757,1],-1.5,0,1.6,0).s().p("AgHANQgFgHgCgFQgCgDAKgJIAJgIQAEAAACAEIAFAJQADAEgCAFQgCAFgCACQgHAHgEADIgBAAQgCAAgEgHg");
	this.shape_58.setTransform(30.6923,12.9059);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["#FDFC03","#FDE922","#FEC066","#FEB081"],[0.016,0.235,0.757,1],-1.5,0,1.6,0).s().p("AgHANQgFgHgCgFQgCgDAKgJIAJgIQAEAAACAEIAFAJQADAEgCAGQgCAEgCACQgEAGgHAEIgBAAQgCAAgEgHg");
	this.shape_59.setTransform(30.6923,9.5559);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.lf(["#FDFC03","#FDE922","#FEC066","#FEB081"],[0.016,0.235,0.757,1],-1.5,0,1.6,0).s().p("AgHALQgFgHgCgFQgCgFAMgKQAKAJAKAFQgBAFgEAFQgIAHgDACIgBAAQgCAAgEgGg");
	this.shape_60.setTransform(30.6862,6.5313);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.lf(["#FDFC03","#FDF503","#FEE002","#FEBF01","#FFAA00"],[0.016,0.204,0.482,0.824,1],-16.8,0,16.9,0).s().p("AgGBZQgdgDgdgJQgPgFgcgYQgfgagFgCQgMgGgIgIQgJgGAHAAQAKACALgFIgSgEQgGgEAJgIIAlghQAmgaA3gIQA2gIAyAbQAOAHAoAgQAMAJAXgJQAIAJgFALQgCAGgFADQgiABgZAbIgrAuQgUAOgjAAIgJAAg");
	this.shape_61.setTransform(16.8845,11.1487);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,2.3,33.8,17.8), null);


(lib.dollstatic = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF1010").s().p("AgjAlQgQgPABgWQgBgUAQgPQAPgQAUABQAWgBAPAQQAOAPAAAUQAAAWgOAPQgPAOgWAAQgUAAgPgOg");
	this.shape.setTransform(81.95,100.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF1010").s().p("AgjAlQgQgPABgWQgBgUAQgPQAPgQAUABQAWgBAPAQQAOAPAAAUQAAAWgOAPQgPAOgWAAQgUAAgPgOg");
	this.shape_1.setTransform(107.2,86.05);

	this.instance = new lib.Path_30();
	this.instance.setTransform(139.65,250.55,2.0908,2.0908,0,0,0,25.5,25.3);
	this.instance.alpha = 0.3203;
	this.instance.compositeOperation = "multiply";

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#8D48A3","#803399"],[0,1],-26.2,13.7,13.7,-21.4).s().p("AkJgvQgDhgAphFQAugKAfgMQAwgSAngdQCpAHChDTIgpA9Qg0BHg8A2IgBABIAAAAQhEA8hfA3QgxAcgiAPQiAivgEiag");
	this.shape_2.setTransform(140.2685,248.8342,2.0908,2.0908);

	this.instance_1 = new lib.dolllegs();
	this.instance_1.setTransform(140.2,305.15,1,1,0,0,0,36.1,39.1);

	this.instance_2 = new lib.Path_26();
	this.instance_2.setTransform(102.95,172.7,2.0906,2.0906,0,0,0,33.5,15.8);
	this.instance_2.alpha = 0.3203;
	this.instance_2.compositeOperation = "multiply";

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF239").s().p("AgGCoIgqgIIgBgCIhOidIhPBqIiBhVIB7h9QAbgVAhgEIBXgNQAZAYAjgKQAYgHAMgVIBagOQAggEAgALICXBaIhgBxIhqhOIgdC/QgLABgXAHQgXAHgOABIgLABQgOAAgPgDg");
	this.shape_3.setTransform(103.3118,170.0023,2.0906,2.0906);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFB18D").s().p("AAWCJQgFgEABgMIACgKQgNAdgHgJQgFgFAGgNIAHgMQgFAEgGADQgMAFgGgIQgDgGAMgIIAMgHIhDi9IA/ghIAlDUIAWASQAUATgLAGQgGABgJgJQANAfgNgFQgIgEgEgKIgDgKQgBAcgHAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_4.setTransform(170.1252,189.6491,2.0908,2.0908);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFB18D").s().p("AhFDpQgFAlgZAMQgSAHAHgdIAJgfQgSASgMgCQgXgLAqgoQAUgUAZgSIBLm+ICFBEIiLGPQA4AZgLARQgLASgbgLIgWgOQAgAsgPASQgQATgbg9QANAqgQANQgFAEgEAAQgPAAgDg6g");
	this.shape_5.setTransform(43.3931,199.7305);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E92425").s().p("AhAg3ICBAYIgxBXg");
	this.shape_6.setTransform(112.7962,53.6618,2.0908,2.0908);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E92425").s().p("AhDANIBUhOIAzCDg");
	this.shape_7.setTransform(89.8695,32.6283,2.0908,2.0908);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6D270C").s().p("AhOA6QgigVgbglIgUghQCihVBfA6QAvAdAPAtQhSBHhIAAQgsAAgogbg");
	this.shape_8.setTransform(103.7537,57.2036,2.0908,2.0908);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E92425").s().p("AgxA5IAlh1IA+B5g");
	this.shape_9.setTransform(50.4916,83.9256,2.0908,2.0908);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E92425").s().p("Ag3goIBvghIghCTg");
	this.shape_10.setTransform(43.5921,57.6343,2.0908,2.0908);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6D270C").s().p("AhgA6QgBhvCchgIASAjQASAqACAoQAEB/ikA3QggglgBg3g");
	this.shape_11.setTransform(59.1278,80.7372,2.0908,2.0908);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF1010").s().p("Ag5ATIAXAKQAcAHAVgMQAWgNAKgcIAEgaQAPAcgTAcQgKAPgNAIQgOAHgQABIgFAAQgfAAgPgZg");
	this.shape_12.setTransform(100.0449,104.2726,2.0908,2.0908);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFB18D").s().p("AieGjQi2gghTiSQhTiTBCisQBCivCwhjQCvhjC2AhQC2AgBTCTQBTCShCCtQhCCtiwBkQiEBKiHAAQgtAAgtgIg");
	this.shape_13.setTransform(92.3,89.1281);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#6D270C").s().p("ABDCuQgwgBgChFIgBg+QgEglgNgVQghgzg3AOQg2AOgXA3QgBgwATgwQAnhgBnADQA1ACAhAgQA/A+gfBNQgLAbgCAZQgBAaAIAKQARATAsggQABAagMAZQgXAwg/AAIgDAAg");
	this.shape_14.setTransform(135.4409,45.761,2.0908,2.0908);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6D270C").s().p("AAwC5QgRgBgSgIIgNgIQAxgVgIgYQgEgMgXgMQgWgMgdgFQhSgNgVhVQgKgsAagwQAyhaBlAQQA0AJApAaQg8gJgnAnQgoAoAaA2QAMAXAdAWIA1AhQAdATAIAOQAMAUgPAZQgdA1gxAAIgJgBg");
	this.shape_15.setTransform(30.009,105.8718,2.0908,2.0908);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F08B6F").s().p("Ah1h6IC0gtIA3EiIizAtg");
	this.shape_16.setTransform(98.275,130.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.instance_2},{t:this.instance_1},{t:this.shape_2},{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,9.4,196,335);


(lib.doll = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Path_30();
	this.instance.setTransform(139.65,250.55,2.0908,2.0908,0,0,0,25.5,25.3);
	this.instance.alpha = 0.3203;
	this.instance.compositeOperation = "multiply";

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#8D48A3","#803399"],[0,1],-26.2,13.8,13.7,-21.3).s().p("AkJguQgDhgAphFQBhgVBEgyQBDADBFAmQBiA3BfB9IgpA9Qg0BHg8A2IgBAAIAAAAQhEA8hfA4QgxAbgiAPQiAivgEiag");
	this.shape.setTransform(140.2685,248.5729,2.0908,2.0908);

	this.instance_1 = new lib.dolllegs();
	this.instance_1.setTransform(140.2,305.15,1,1,0,0,0,36.1,39.1);

	this.instance_2 = new lib.Path_26();
	this.instance_2.setTransform(102.8,172.7,2.0899,2.0899,0,0,0,34,16.4);
	this.instance_2.alpha = 0.3203;
	this.instance_2.compositeOperation = "multiply";

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF239").s().p("AgGCoIgqgIIgBgCIhOidIhPBqIiBhVIB7h9QAbgVAhgEIBXgNQAZAYAjgKQAYgHAMgVIBagOQAggEAgALICXBaIhgBxIhqhOIgdC/QgLABgXAHQgXAHgOABIgLABQgOAAgPgDg");
	this.shape_1.setTransform(102.9759,169.6408,2.0898,2.0898);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFB18D").s().p("AAWCJQgFgEABgMIACgKQgNAdgHgJQgFgFAGgNIAHgMQgFAEgGADQgMAFgGgIQgDgGAMgIIAMgHIhDi9IA/ghIAlDUIAWASQAUATgLAGQgGABgJgJQANAfgNgFQgIgEgEgKIgDgKQgBAcgHAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_2.setTransform(170.1252,189.6491,2.0908,2.0908);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFB18D").s().p("AgzBlQgBAVgJAEQgNAFAJgiQgIARgNABQgJABAHgNIAJgMQgLAFgFgDQgJgIAZgMQANgGAOgEIBli+IAyAzIh7CfQAWAUgIAGQgIAGgKgJIgJgKQAJAZgKAGIgDABQgIAAgCgbg");
	this.shape_3.setTransform(35.3172,199.2777,2.0908,2.0908);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E92425").s().p("AhAg3ICBAYIgxBXg");
	this.shape_4.setTransform(112.7962,53.6618,2.0908,2.0908);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E92425").s().p("AhDANIBUhOIAzCDg");
	this.shape_5.setTransform(89.8695,32.6283,2.0908,2.0908);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6D270C").s().p("AhOA6QgigVgbglIgUghQCihVBfA6QAvAdAPAtQhSBHhIAAQgsAAgogbg");
	this.shape_6.setTransform(103.7537,57.2036,2.0908,2.0908);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E92425").s().p("AgxA5IAlh1IA+B5g");
	this.shape_7.setTransform(50.4916,83.9256,2.0908,2.0908);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E92425").s().p("Ag3goIBvghIghCTg");
	this.shape_8.setTransform(43.5921,57.6343,2.0908,2.0908);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6D270C").s().p("AhgA6QgBhvCchgIASAjQASAqACAoQAEB/ikA3QggglgBg3g");
	this.shape_9.setTransform(59.1278,80.7372,2.0908,2.0908);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF1010").s().p("Ag5ATIAaANQAfAKAVgMQAWgNAHgfIABgdQAPAcgTAcQgKAPgNAIQgOAHgQABIgFAAQgfAAgPgZg");
	this.shape_10.setTransform(100.0449,104.2726,2.0908,2.0908);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFB18D").s().p("AhLDJQhXgQgohGQgnhGAfhSQAghTBUgwQBUgvBWAQQBXAPAoBGQAnBGgfBSQggBThUAwQg/AjhAAAQgVAAgWgDg");
	this.shape_11.setTransform(92.3068,89.1297,2.0908,2.0908);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6D270C").s().p("ABDCuQgwgBgChFIgBg+QgEglgNgVQghgzg3AOQg2AOgXA3QgBgwATgwQAnhgBnADQA1ACAhAgQA/A+gfBNQgLAbgCAZQgBAaAIAKQARATAsggQABAagMAZQgXAwg/AAIgDAAg");
	this.shape_12.setTransform(135.4409,45.761,2.0908,2.0908);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#6D270C").s().p("AAwC5QgRgBgSgIIgNgIQAxgVgIgYQgEgMgXgMQgWgMgdgFQhSgNgVhVQgKgsAagwQAyhaBlAQQA0AJApAaQg8gJgnAnQgoAoAaA2QAMAXAdAWIA1AhQAdATAIAOQAMAUgPAZQgdA1gxAAIgJgBg");
	this.shape_13.setTransform(30.009,105.8718,2.0908,2.0908);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F08B6F").s().p("Ah1h6IC0gtIA3EiIizAtg");
	this.shape_14.setTransform(98.275,130.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF1010").s().p("AgGAaQgLgDgFgKQgFgJACgKQADgKAKgGQAJgFAKADQAKADAGAJQAFAKgDAJQgDALgJAFQgHADgGAAIgGAAg");
	this.shape_15.setTransform(107.6138,86.2147,2.0907,0.3155,0,135,-44.9991);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF1010").s().p("AgGAaQgKgDgGgKQgFgKADgJQADgKAJgGQAKgFAJADQALADAFAJQAFAKgDAJQgDALgJAFQgHADgGAAIgGAAg");
	this.shape_16.setTransform(82.1373,100.8748,2.0907,0.3156,-29.9992);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFB18D").s().p("AhFDpQgFAlgZAMQgSAHAHgdIAJgfQgSASgMgCQgXgLAqgoQAUgUAZgSIBLm+ICFBEIiLGPQA4AZgLARQgLASgbgLIgWgOQAgAsgPASQgQATgbg9QANAqgQANQgFAEgEAAQgPAAgDg6g");
	this.shape_17.setTransform(43.3931,199.7305);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF1010").s().p("AgiAiQgPgCABgLQABgMAOgNQAPgOATgJQAVgIANACQAPACgBAMQgBALgOANQgPAPgTAJQgPAGgMAAIgHgBg");
	this.shape_18.setTransform(107.525,86.1357);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF1010").s().p("AgiAiQgPgCABgLQABgMAOgNQAPgOATgJQAVgIANACQAPACgBAMQgBALgOANQgPAPgTAJQgPAGgMAAIgHgBg");
	this.shape_19.setTransform(82.175,100.8357);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF1010").s().p("AgjAlQgQgPABgWQgBgUAQgPQAPgQAUABQAWgBAPAQQAOAPAAAUQAAAWgOAPQgPAOgWAAQgUAAgPgOg");
	this.shape_20.setTransform(81.95,100.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF1010").s().p("AgjAlQgQgPABgWQgBgUAQgPQAPgQAUABQAWgBAPAQQAOAPAAAUQAAAWgOAPQgPAOgWAAQgUAAgPgOg");
	this.shape_21.setTransform(107.2,86.05);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#8D48A3","#803399"],[0,1],-26.2,13.9,13.7,-21.2).s().p("AkJgtQgDhfAphFQBfgWBJg0QBBACBFAoQBhA4BfB9IgpA8Qg0BIg8A2IgBAAIAAAAQhEA9hfA3QgxAbgiAPQiAivgEiag");
	this.shape_22.setTransform(140.2685,248.3115,2.0908,2.0908);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFB18D").s().p("AieGjQi2gghTiSQhTiTBCisQBCivCwhjQCvhjC2AhQC2AgBTCTQBTCShCCtQhCCtiwBkQiEBKiHAAQgtAAgtgIg");
	this.shape_23.setTransform(92.3,89.1281);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#8D48A3","#803399"],[0,1],-26.2,13.7,13.7,-21.4).s().p("AkJgvQgDhgAphFQAugKAfgMQAwgSAngdQCpAHChDTIgpA9Qg0BHg8A2IgBABIAAAAQhEA8hfA3QgxAcgiAPQiAivgEiag");
	this.shape_24.setTransform(140.2685,248.8342,2.0908,2.0908);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF1010").s().p("Ag5ATIAXAKQAcAHAVgMQAWgNAKgcIAEgaQAPAcgTAcQgKAPgNAIQgOAHgQABIgFAAQgfAAgPgZg");
	this.shape_25.setTransform(100.0448,104.2726,2.0908,2.0908);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#8D48A3","#803399"],[0,1],-54.9,28.6,28.4,-44.8).s().p("AoshiQgGjIBWiQQBbgWBGgbQBhgmBUg9QCPAGCQBPQDPByDFEEIhUB/QhtCWh/BxIgBABIgBAAQiOB/jIBzQhlA5hIAfQkMlugIlCg");
	this.shape_26.setTransform(140.2555,248.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF1010").s().p("Ag5ATIAWAFQAbADAVgNQAWgNALgWIAFgWQAPAcgTAcQgKAPgNAIQgOAHgQABIgFAAQgfAAgPgZg");
	this.shape_27.setTransform(100.0448,104.2726,2.0908,2.0908);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#8D48A3","#803399"],[0,1],-26.2,13.7,13.7,-21.4).s().p("AkJgvQgDhfAphFQBggWBDgxQBEADBFAmQBjA3BfB8IgpA9Qg0BHg8A2IgBAAIAAAAQhEA9hfA3QgxAcgiAPQiAivgEibg");
	this.shape_28.setTransform(140.2685,248.6774,2.0908,2.0908);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF1010").s().p("Ag5ATIAUABQAZgBAVgMQAWgMANgUQAGgKABgIQAPAcgTAcQgKAPgNAIQgOAHgQABIgFAAQgfAAgPgZg");
	this.shape_29.setTransform(100.0448,104.2726,2.0908,2.0908);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#8D48A3","#803399"],[0,1],-26.2,13.7,13.7,-21.4).s().p("AkJgvQgDhfAphFQBegVBEgyQBEADBGAmQBjA3BfB8IgpA9Qg0BHg8A2IgBAAIAAAAQhEA9hfA3QgxAcgiAPQiAivgEibg");
	this.shape_30.setTransform(140.2685,248.6774,2.0908,2.0908);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF1010").s().p("Ag5ATQAcAAAigTQAXgNAOgQQAHgIACgGQAPAcgTAcQgKAPgNAIQgOAHgQABIgFAAQgfAAgPgZg");
	this.shape_31.setTransform(100.0448,104.2726,2.0908,2.0908);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF1010").s().p("AgbAiQgSgGgEgPQgDgNALgOQAMgOAVgGQAUgFARAGQARAGAEAOQAEAOgMAOQgMAOgUAGQgKACgJAAQgJAAgJgDg");
	this.shape_32.setTransform(107.2102,86.102,1,1,-14.9992);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#8D48A3","#803399"],[0,1],-26.2,13.9,13.7,-21.2).s().p("AkJgtQgDhfAphFQBdgVBJg1QBCACBFAoQBiA4BfB9IgpA8Qg0BIg8A2IgBAAIAAAAQhEA9hfA3QgxAbgiAPQiAivgEiag");
	this.shape_33.setTransform(140.2685,248.3115,2.0908,2.0908);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF1010").s().p("Ag5ATQAWgIAjgTQAkgUAPgPQAPAcgTAcQgKAPgNAIQgOAHgQABIgFAAQgfAAgPgZg");
	this.shape_34.setTransform(100.0448,104.2726,2.0908,2.0908);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF1010").s().p("AgSApQgSgCgIgNQgHgNAHgQQAIgRASgLQASgKASACQATABAHANQAIAOgIAPQgHARgTALQgQAJgOAAIgGAAg");
	this.shape_35.setTransform(82.1056,100.4739,1,0.6988,-12.2954);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF1010").s().p("AgSApQgSgCgIgNQgHgOAIgPQAHgQAUgLQARgLASACQASABAHANQAIAMgIARQgHAQgTALQgQAKgPAAIgFAAg");
	this.shape_36.setTransform(107.3172,86.2214,1,0.6049,-9.3005);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#8D48A3","#803399"],[0,1],-26.2,13.7,13.7,-21.4).s().p("AkJgvQgDhfAphFQAtgKAhgNQAwgTAogdQCmAGCiDWIgpA9Qg0BHg8A2IgBAAIAAAAQhEA9hfA3QgxAcgiAPQiAivgEibg");
	this.shape_37.setTransform(140.2685,248.6774,2.0908,2.0908);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF1010").s().p("Ag5ATQAVgPAkgTQAjgUAQgIQAPAcgTAcQgKAPgNAIQgOAHgQABIgFAAQgfAAgPgZg");
	this.shape_38.setTransform(100.0448,104.2726,2.0908,2.0908);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#8D48A3","#803399"],[0,1],-54.9,28.8,28.4,-44.6).s().p("AoshhQgGjIBWiQQBcgVBJgcQBlgoBUg9QCMAFCPBRQDKBzDGEEIhUCAQhtCVh/BxIgBABIgBAAQiOB/jIBzQhlA5hIAgQkMlugIlDg");
	this.shape_39.setTransform(140.2555,248.575);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF1010").s().p("Ag5ATQALAAAjgTQAjgUAbgXQAPAcgTAcQgKAPgNAIQgOAHgQABIgFAAQgfAAgPgZg");
	this.shape_40.setTransform(100.0448,104.2726,2.0908,2.0908);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FF1010").s().p("Ag5ATIAGgIQAKgLAWgLQAjgVAjgLQAPAcgTAcQgKAPgNAIQgOAHgQABIgFAAQgfAAgPgZg");
	this.shape_41.setTransform(100.0448,104.2726,2.0908,2.0908);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FF1010").s().p("Ag5ATQAAgHAFgIQAKgRAWgNQAVgNAcgDQANgCAJABQAPAcgTAcQgKAPgNAIQgOAHgQABIgFAAQgfAAgPgZg");
	this.shape_42.setTransform(100.0448,104.2378,2.0908,2.0908);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF1010").s().p("Ag5AVQAAgJAEgLQAIgVAWgNQAXgNAcACQAOAAAKADQAPAcgUAcQgJAPgNAIQgOAHgRABIgFAAQgfAAgPgZg");
	this.shape_43.setTransform(100.039,103.8905,2.0908,2.0908);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{x:100.0449,y:104.2726}},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3,p:{rotation:0,x:35.3172,y:199.2777}},{t:this.shape_2,p:{scaleX:2.0908,scaleY:2.0908,rotation:0,x:170.1252,y:189.6491}},{t:this.shape_1,p:{scaleX:2.0898,scaleY:2.0898,x:102.9759,y:169.6408}},{t:this.instance_2,p:{regX:34,regY:16.4,scaleX:2.0899,scaleY:2.0899,x:102.8,y:172.7}},{t:this.instance_1},{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{x:100.0448,y:104.2726}},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3,p:{rotation:0,x:35.3172,y:199.2777}},{t:this.shape_2,p:{scaleX:2.0908,scaleY:2.0908,rotation:0,x:170.1252,y:189.6491}},{t:this.shape_1,p:{scaleX:2.0898,scaleY:2.0898,x:102.9759,y:169.6408}},{t:this.instance_2,p:{regX:34,regY:16.4,scaleX:2.0899,scaleY:2.0899,x:102.8,y:172.7}},{t:this.instance_1},{t:this.shape},{t:this.instance}]},25).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{x:100.0448,y:104.2726}},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3,p:{rotation:-14.9991,x:40.3043,y:199.3185}},{t:this.shape_2,p:{scaleX:2.0908,scaleY:2.0908,rotation:0,x:170.1252,y:189.6491}},{t:this.shape_1,p:{scaleX:2.0898,scaleY:2.0898,x:102.9759,y:169.6408}},{t:this.instance_2,p:{regX:34,regY:16.4,scaleX:2.0899,scaleY:2.0899,x:102.8,y:172.7}},{t:this.instance_1},{t:this.shape},{t:this.instance},{t:this.shape_16,p:{scaleY:0.3156,rotation:-29.9992,x:82.1373,y:100.8748}},{t:this.shape_15,p:{scaleY:0.3155,x:107.6138,y:86.2147}}]},1).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{x:100.0448,y:104.2726}},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_17,p:{rotation:0,x:43.3931,y:199.7305,scaleX:1,scaleY:1}},{t:this.shape_2,p:{scaleX:2.0908,scaleY:2.0908,rotation:0,x:170.1252,y:189.6491}},{t:this.shape_1,p:{scaleX:2.0898,scaleY:2.0898,x:102.9759,y:169.6408}},{t:this.instance_2,p:{regX:34,regY:16.4,scaleX:2.0899,scaleY:2.0899,x:102.8,y:172.7}},{t:this.instance_1},{t:this.shape},{t:this.instance},{t:this.shape_16,p:{scaleY:0.5894,rotation:-29.9991,x:82.1489,y:100.8595}},{t:this.shape_15,p:{scaleY:0.5142,x:107.6104,y:86.1614}}]},1).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{x:100.0448,y:104.2726}},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_17,p:{rotation:0,x:43.3931,y:199.7305,scaleX:1,scaleY:1}},{t:this.shape_2,p:{scaleX:2.0908,scaleY:2.0908,rotation:0,x:170.1252,y:189.6491}},{t:this.shape_1,p:{scaleX:2.0898,scaleY:2.0898,x:102.9759,y:169.6408}},{t:this.instance_2,p:{regX:34,regY:16.4,scaleX:2.0899,scaleY:2.0899,x:102.8,y:172.7}},{t:this.instance_1},{t:this.shape},{t:this.instance},{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_23},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_17,p:{rotation:0,x:43.3931,y:199.7305,scaleX:1,scaleY:1}},{t:this.shape_2,p:{scaleX:2.0908,scaleY:2.0908,rotation:0,x:170.1252,y:189.6491}},{t:this.shape_1,p:{scaleX:2.0898,scaleY:2.0898,x:102.9759,y:169.6408}},{t:this.instance_2,p:{regX:34,regY:16.4,scaleX:2.0899,scaleY:2.0899,x:102.8,y:172.7}},{t:this.instance_1},{t:this.shape_22},{t:this.instance},{t:this.shape_21},{t:this.shape_20,p:{scaleY:1,rotation:0,x:81.95,y:100.3}},{t:this.shape_10,p:{x:100.0448,y:104.3226}}]},1).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_23},{t:this.shape_25},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_17,p:{rotation:0,x:43.3931,y:199.7305,scaleX:1,scaleY:1}},{t:this.shape_2,p:{scaleX:2.0908,scaleY:2.0908,rotation:0,x:170.1252,y:189.6491}},{t:this.shape_1,p:{scaleX:2.0906,scaleY:2.0906,x:103.3118,y:170.0023}},{t:this.instance_2,p:{regX:33.5,regY:15.8,scaleX:2.0906,scaleY:2.0906,x:102.95,y:172.7}},{t:this.instance_1},{t:this.shape_24},{t:this.instance},{t:this.shape_21},{t:this.shape_20,p:{scaleY:1,rotation:0,x:81.95,y:100.3}}]},1).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_23},{t:this.shape_27},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_17,p:{rotation:-7.9507,x:45.8529,y:199.7584,scaleX:1,scaleY:1}},{t:this.shape_2,p:{scaleX:2.0907,scaleY:2.0907,rotation:-4.4541,x:172.242,y:188.66}},{t:this.shape_1,p:{scaleX:2.0898,scaleY:2.0898,x:102.9759,y:169.6408}},{t:this.instance_2,p:{regX:34,regY:16.4,scaleX:2.0899,scaleY:2.0899,x:102.8,y:172.7}},{t:this.instance_1},{t:this.shape_26},{t:this.instance},{t:this.shape_21},{t:this.shape_20,p:{scaleY:1,rotation:0,x:81.95,y:100.3}}]},2).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_23},{t:this.shape_29},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_17,p:{rotation:-13.6756,x:47.9324,y:199.756,scaleX:1,scaleY:1}},{t:this.shape_2,p:{scaleX:2.0908,scaleY:2.0908,rotation:0.5114,x:169.7187,y:188.7522}},{t:this.shape_1,p:{scaleX:2.0906,scaleY:2.0906,x:103.3118,y:170.0023}},{t:this.instance_2,p:{regX:33.5,regY:15.8,scaleX:2.0906,scaleY:2.0906,x:102.95,y:172.7}},{t:this.instance_1},{t:this.shape_28},{t:this.instance},{t:this.shape_21},{t:this.shape_20,p:{scaleY:1,rotation:0,x:81.95,y:100.3}}]},2).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_23},{t:this.shape_31},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_17,p:{rotation:-21.1432,x:50.0607,y:199.7769,scaleX:1,scaleY:1}},{t:this.shape_2,p:{scaleX:2.0907,scaleY:2.0907,rotation:-5.283,x:170.8336,y:183.2504}},{t:this.shape_1,p:{scaleX:2.0898,scaleY:2.0898,x:102.9759,y:169.6408}},{t:this.instance_2,p:{regX:34,regY:16.4,scaleX:2.0899,scaleY:2.0899,x:102.8,y:172.7}},{t:this.instance_1},{t:this.shape_30},{t:this.instance},{t:this.shape_21},{t:this.shape_20,p:{scaleY:1,rotation:0,x:81.95,y:100.3}}]},2).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_23},{t:this.shape_34},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_17,p:{rotation:-21.1432,x:50.0607,y:199.7769,scaleX:1,scaleY:1}},{t:this.shape_2,p:{scaleX:2.0907,scaleY:2.0907,rotation:-5.283,x:170.8336,y:183.2504}},{t:this.shape_1,p:{scaleX:2.0898,scaleY:2.0898,x:102.9759,y:169.6408}},{t:this.instance_2,p:{regX:34,regY:16.4,scaleX:2.0899,scaleY:2.0899,x:102.8,y:172.7}},{t:this.instance_1},{t:this.shape_33},{t:this.instance},{t:this.shape_32},{t:this.shape_20,p:{scaleY:0.7087,rotation:-29.999,x:82.0304,y:100.3678}}]},2).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_23},{t:this.shape_38},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_17,p:{rotation:-9.9266,x:45.3208,y:199.7516,scaleX:1,scaleY:1}},{t:this.shape_2,p:{scaleX:2.0907,scaleY:2.0907,rotation:-13.0025,x:172.6851,y:180.3198}},{t:this.shape_1,p:{scaleX:2.0898,scaleY:2.0898,x:102.9759,y:169.6408}},{t:this.instance_2,p:{regX:34,regY:16.4,scaleX:2.0899,scaleY:2.0899,x:102.8,y:172.7}},{t:this.instance_1},{t:this.shape_37},{t:this.instance},{t:this.shape_36,p:{scaleY:0.6049,rotation:-9.3005,x:107.3172,y:86.2214}},{t:this.shape_35,p:{scaleY:0.6988,rotation:-12.2954,x:82.1056,y:100.4739,skewX:0,skewY:0}}]},2).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_23},{t:this.shape_40},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_17,p:{rotation:5.0724,x:40.4629,y:199.7745,scaleX:1,scaleY:1}},{t:this.shape_2,p:{scaleX:2.0907,scaleY:2.0907,rotation:-28.0018,x:175.1154,y:176.1527}},{t:this.shape_1,p:{scaleX:2.0898,scaleY:2.0898,x:102.9759,y:169.6408}},{t:this.instance_2,p:{regX:34,regY:16.4,scaleX:2.0899,scaleY:2.0899,x:102.8,y:172.7}},{t:this.instance_1},{t:this.shape_39},{t:this.instance},{t:this.shape_36,p:{scaleY:0.3246,rotation:-9.3011,x:107.3133,y:86.2012}},{t:this.shape_35,p:{scaleY:0.3704,rotation:-27.2987,x:82.116,y:100.4703,skewX:0,skewY:0}}]},3).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_23},{t:this.shape_41},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_17,p:{rotation:20.0714,x:38.6636,y:198.4299,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_2,p:{scaleX:2.0907,scaleY:2.0907,rotation:-43.0013,x:179.3695,y:174.7472}},{t:this.shape_1,p:{scaleX:2.0898,scaleY:2.0898,x:102.9759,y:169.6408}},{t:this.instance_2,p:{regX:34,regY:16.4,scaleX:2.0899,scaleY:2.0899,x:102.8,y:172.7}},{t:this.instance_1},{t:this.shape_39},{t:this.instance},{t:this.shape_36,p:{scaleY:0.0852,rotation:-16.0102,x:107.3198,y:86.1802}},{t:this.shape_35,p:{scaleY:0.0378,rotation:0,x:82.1536,y:100.393,skewX:-42.056,skewY:-27.2962}}]},3).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_23},{t:this.shape_42},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_17,p:{rotation:20.0714,x:36.2136,y:199.8299,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_2,p:{scaleX:2.0907,scaleY:2.0907,rotation:-43.0013,x:181.8195,y:176.4972}},{t:this.shape_1,p:{scaleX:2.0898,scaleY:2.0898,x:102.9759,y:169.6408}},{t:this.instance_2,p:{regX:34,regY:16.4,scaleX:2.0899,scaleY:2.0899,x:102.8,y:172.7}},{t:this.instance_1},{t:this.shape_39},{t:this.instance},{t:this.shape_36,p:{scaleY:0.0852,rotation:-16.0102,x:107.3198,y:86.1802}},{t:this.shape_35,p:{scaleY:0.0378,rotation:0,x:82.1536,y:100.393,skewX:-42.056,skewY:-27.2962}}]},3).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_23},{t:this.shape_43},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_17,p:{rotation:20.0714,x:36.2136,y:199.8299,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_2,p:{scaleX:2.0907,scaleY:2.0907,rotation:-43.0013,x:181.8195,y:176.4972}},{t:this.shape_1,p:{scaleX:2.0898,scaleY:2.0898,x:102.9759,y:169.6408}},{t:this.instance_2,p:{regX:34,regY:16.4,scaleX:2.0899,scaleY:2.0899,x:102.8,y:172.7}},{t:this.instance_1},{t:this.shape_39},{t:this.instance},{t:this.shape_36,p:{scaleY:0.0852,rotation:-16.0102,x:107.3198,y:86.1802}},{t:this.shape_35,p:{scaleY:0.0378,rotation:0,x:82.1536,y:100.393,skewX:-42.056,skewY:-27.2962}}]},3).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_23},{t:this.shape_43},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_17,p:{rotation:20.0714,x:36.2136,y:199.8299,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_2,p:{scaleX:2.0907,scaleY:2.0907,rotation:-43.0013,x:181.8195,y:176.4972}},{t:this.shape_1,p:{scaleX:2.0897,scaleY:2.0897,x:102.9506,y:169.6135}},{t:this.instance_2,p:{regX:34,regY:16.4,scaleX:2.0898,scaleY:2.0898,x:102.7,y:172.6}},{t:this.instance_1},{t:this.shape_39},{t:this.instance},{t:this.shape_36,p:{scaleY:0.0852,rotation:-16.0102,x:107.3198,y:86.1802}},{t:this.shape_35,p:{scaleY:0.0378,rotation:0,x:82.1536,y:100.393,skewX:-42.056,skewY:-27.2962}}]},1).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_23},{t:this.shape_42},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_17,p:{rotation:20.0714,x:36.2136,y:199.8299,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_2,p:{scaleX:2.0907,scaleY:2.0907,rotation:-43.0013,x:181.8195,y:176.4972}},{t:this.shape_1,p:{scaleX:2.0897,scaleY:2.0897,x:102.9506,y:169.6135}},{t:this.instance_2,p:{regX:34,regY:16.4,scaleX:2.0898,scaleY:2.0898,x:102.7,y:172.6}},{t:this.instance_1},{t:this.shape_39},{t:this.instance},{t:this.shape_36,p:{scaleY:0.0852,rotation:-16.0102,x:107.3198,y:86.1802}},{t:this.shape_35,p:{scaleY:0.0378,rotation:0,x:82.1536,y:100.393,skewX:-42.056,skewY:-27.2962}}]},1).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_23},{t:this.shape_41},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_17,p:{rotation:20.0714,x:38.6636,y:198.4299,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_2,p:{scaleX:2.0907,scaleY:2.0907,rotation:-43.0013,x:179.3695,y:174.7472}},{t:this.shape_1,p:{scaleX:2.0897,scaleY:2.0897,x:102.9506,y:169.6135}},{t:this.instance_2,p:{regX:34,regY:16.4,scaleX:2.0898,scaleY:2.0898,x:102.7,y:172.6}},{t:this.instance_1},{t:this.shape_39},{t:this.instance},{t:this.shape_36,p:{scaleY:0.0852,rotation:-16.0102,x:107.3198,y:86.1802}},{t:this.shape_35,p:{scaleY:0.0378,rotation:0,x:82.1536,y:100.393,skewX:-42.056,skewY:-27.2962}}]},2).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_23},{t:this.shape_40},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_17,p:{rotation:5.0724,x:40.4629,y:199.7745,scaleX:1,scaleY:1}},{t:this.shape_2,p:{scaleX:2.0907,scaleY:2.0907,rotation:-28.0018,x:175.1154,y:176.1527}},{t:this.shape_1,p:{scaleX:2.0897,scaleY:2.0897,x:102.9506,y:169.6135}},{t:this.instance_2,p:{regX:34,regY:16.4,scaleX:2.0898,scaleY:2.0898,x:102.7,y:172.6}},{t:this.instance_1},{t:this.shape_39},{t:this.instance},{t:this.shape_36,p:{scaleY:0.3246,rotation:-9.3011,x:107.3133,y:86.2012}},{t:this.shape_35,p:{scaleY:0.3704,rotation:-27.2987,x:82.116,y:100.4703,skewX:0,skewY:0}}]},2).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_23},{t:this.shape_38},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_17,p:{rotation:-9.9266,x:45.3208,y:199.7516,scaleX:1,scaleY:1}},{t:this.shape_2,p:{scaleX:2.0907,scaleY:2.0907,rotation:-13.0025,x:172.6851,y:180.3198}},{t:this.shape_1,p:{scaleX:2.0897,scaleY:2.0897,x:102.9506,y:169.6135}},{t:this.instance_2,p:{regX:34,regY:16.4,scaleX:2.0898,scaleY:2.0898,x:102.7,y:172.6}},{t:this.instance_1},{t:this.shape_37},{t:this.instance},{t:this.shape_36,p:{scaleY:0.6049,rotation:-9.3005,x:107.3172,y:86.2214}},{t:this.shape_35,p:{scaleY:0.6988,rotation:-12.2954,x:82.1056,y:100.4739,skewX:0,skewY:0}}]},2).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_23},{t:this.shape_34},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_17,p:{rotation:-21.1432,x:50.0607,y:199.7769,scaleX:1,scaleY:1}},{t:this.shape_2,p:{scaleX:2.0907,scaleY:2.0907,rotation:-5.283,x:170.8336,y:183.2504}},{t:this.shape_1,p:{scaleX:2.0897,scaleY:2.0897,x:102.9506,y:169.6135}},{t:this.instance_2,p:{regX:34,regY:16.4,scaleX:2.0898,scaleY:2.0898,x:102.7,y:172.6}},{t:this.instance_1},{t:this.shape_33},{t:this.instance},{t:this.shape_32},{t:this.shape_20,p:{scaleY:0.7087,rotation:-29.999,x:82.0304,y:100.3678}}]},2).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_23},{t:this.shape_31},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_17,p:{rotation:-21.1432,x:50.0607,y:199.7769,scaleX:1,scaleY:1}},{t:this.shape_2,p:{scaleX:2.0907,scaleY:2.0907,rotation:-5.283,x:170.8336,y:183.2504}},{t:this.shape_1,p:{scaleX:2.0897,scaleY:2.0897,x:102.9506,y:169.6135}},{t:this.instance_2,p:{regX:34,regY:16.4,scaleX:2.0898,scaleY:2.0898,x:102.7,y:172.6}},{t:this.instance_1},{t:this.shape_30},{t:this.instance},{t:this.shape_21},{t:this.shape_20,p:{scaleY:1,rotation:0,x:81.95,y:100.3}}]},2).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_23},{t:this.shape_29},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_17,p:{rotation:-13.6756,x:47.9324,y:199.756,scaleX:1,scaleY:1}},{t:this.shape_2,p:{scaleX:2.0908,scaleY:2.0908,rotation:0.5114,x:169.7187,y:188.7522}},{t:this.shape_1,p:{scaleX:2.0906,scaleY:2.0906,x:103.3118,y:170.0023}},{t:this.instance_2,p:{regX:33.5,regY:15.8,scaleX:2.0906,scaleY:2.0906,x:102.95,y:172.7}},{t:this.instance_1},{t:this.shape_28},{t:this.instance},{t:this.shape_21},{t:this.shape_20,p:{scaleY:1,rotation:0,x:81.95,y:100.3}}]},2).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_23},{t:this.shape_27},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_17,p:{rotation:-7.9507,x:45.8529,y:199.7584,scaleX:1,scaleY:1}},{t:this.shape_2,p:{scaleX:2.0907,scaleY:2.0907,rotation:-4.4541,x:172.242,y:188.66}},{t:this.shape_1,p:{scaleX:2.0897,scaleY:2.0897,x:102.9506,y:169.6135}},{t:this.instance_2,p:{regX:34,regY:16.4,scaleX:2.0898,scaleY:2.0898,x:102.7,y:172.6}},{t:this.instance_1},{t:this.shape_26},{t:this.instance},{t:this.shape_21},{t:this.shape_20,p:{scaleY:1,rotation:0,x:81.95,y:100.3}}]},2).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_23},{t:this.shape_25},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_17,p:{rotation:0,x:43.3931,y:199.7305,scaleX:1,scaleY:1}},{t:this.shape_2,p:{scaleX:2.0908,scaleY:2.0908,rotation:0,x:170.1252,y:189.6491}},{t:this.shape_1,p:{scaleX:2.0906,scaleY:2.0906,x:103.3118,y:170.0023}},{t:this.instance_2,p:{regX:33.5,regY:15.8,scaleX:2.0906,scaleY:2.0906,x:102.95,y:172.7}},{t:this.instance_1},{t:this.shape_24},{t:this.instance},{t:this.shape_21},{t:this.shape_20,p:{scaleY:1,rotation:0,x:81.95,y:100.3}}]},2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,9.4,209.4,335);


(lib.boyrun = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.kidshaddow2();
	this.instance.setTransform(-520.15,96.75,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-474.4522},0).wait(1).to({x:-428.7543},0).wait(1).to({x:-383.0565},0).wait(1).to({x:-337.3587},0).wait(1).to({x:-291.6609},0).wait(1).to({x:-245.963},0).wait(1).to({x:-200.2652},0).wait(1).to({x:-154.5674},0).wait(1).to({x:-108.8696},0).wait(1).to({x:-63.1717},0).wait(1).to({x:-17.4739},0).wait(1).to({x:28.2239},0).wait(1).to({x:73.9217},0).wait(1).to({x:119.6196},0).wait(1).to({x:165.3174},0).wait(1).to({x:211.0152},0).wait(1).to({x:256.713},0).wait(1).to({x:302.4109},0).wait(1).to({x:348.1087},0).wait(1).to({x:393.8065},0).wait(1).to({x:439.5044},0).wait(1).to({x:485.2022},0).wait(1).to({x:530.9},0).wait(1).to({skewY:0},0).wait(1).to({x:485.2044,y:96.7},0).wait(1).to({x:439.5087,y:96.65},0).wait(1).to({x:393.813,y:96.6},0).wait(1).to({x:348.1174,y:96.55},0).wait(1).to({x:302.4217,y:96.5},0).wait(1).to({x:256.7261,y:96.45},0).wait(1).to({x:211.0304,y:96.4},0).wait(1).to({x:165.3348,y:96.35},0).wait(1).to({x:119.6391,y:96.3},0).wait(1).to({x:73.9435,y:96.25},0).wait(1).to({x:28.2478,y:96.2},0).wait(1).to({x:-17.4478,y:96.15},0).wait(1).to({x:-63.1435,y:96.1},0).wait(1).to({x:-108.8391,y:96.05},0).wait(1).to({x:-154.5348,y:96},0).wait(1).to({x:-200.2304,y:95.95},0).wait(1).to({x:-245.9261,y:95.9},0).wait(1).to({x:-291.6217,y:95.85},0).wait(1).to({x:-337.3174,y:95.8},0).wait(1).to({x:-383.013,y:95.75},0).wait(1).to({x:-428.7087,y:95.7},0).wait(1).to({x:-474.4043,y:95.65},0).wait(1).to({x:-520.1,y:95.6},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-615.3,-48.2,1241.4,288.8);


(lib.bearstatic = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E92425").ss(0.3).p("ABchcQhQCVg/AjQggASgQgMQAMhBBahEg");
	this.shape.setTransform(97.3007,183.5737,2.0908,2.0908);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhfBdQAMhBBahEIBZg5QhQCVg/AjQgTALgNAAQgJAAgHgFg");
	this.shape_1.setTransform(96.4728,184.5669,2.0908,2.0908);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A85C3A").s().p("AgGgLIAAgEIAAgFIAEAJQAIAPABARQgMgOgBgSg");
	this.shape_2.setTransform(147.9055,16.0389,2.0908,2.0908);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A85C3A").s().p("AgBAAIAAgEIADAIIgDABg");
	this.shape_3.setTransform(146.8601,12.6414,2.0908,2.0908);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#60220A").s().p("AgiAFQAAgNAiAGQARACASAFg");
	this.shape_4.setTransform(42.1131,109.7475,2.0908,2.0908);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#60220A").s().p("AABgHQARACARAFIhFAIQADgSAgADg");
	this.shape_5.setTransform(38.3497,103.5456,2.0908,2.0908);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#60220A").s().p("AgCgFQATgEAUgCIhJAWQgFgKAngGg");
	this.shape_6.setTransform(34.5899,94.0242,2.0908,2.0908);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#60220A").s().p("AgOAAIgQhGIA9CNQgZgCgUhFg");
	this.shape_7.setTransform(39.186,100.6623,2.0908,2.0908);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#962300").s().p("AhCACIA1AVIgXhSIBnBjIhQg6IAVBOg");
	this.shape_8.setTransform(64.5887,243.8271,2.0908,2.0908);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4F4840").s().p("Ag0gIQABgOA0ASQAaAHAaAMg");
	this.shape_9.setTransform(105.5153,64.4526,2.0908,2.0908);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4F4840").s().p("AgHg1IAMAaQAJAjgVAug");
	this.shape_10.setTransform(105.0876,65.6421,2.0908,2.0908);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4F4840").s().p("Ag6BCQgcgOgEgeQgDgcAZgbQAYgcAlgJQAlgKAcAPQAdAOAEAeQADAcgZAbQgYAbglAKQgOAEgNAAQgVAAgSgJg");
	this.shape_11.setTransform(88.3748,85.2741,2.0893,2.0893);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4F4840").s().p("AgUAmQgMgLgCgTQgBgRAIgPQAJgQAOgEQAOgDALAKQAMALACASQACASgJAPQgIAQgPADIgGABQgKAAgJgHg");
	this.shape_12.setTransform(73.0184,69.2909,2.0893,2.0893);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFCC99").s().p("AhwCOQg6ghgHhBQgHhBAvg6QAug7BKgTQBJgSA5AiQA6AhAHBBQAHBAgvA7QgvA7hJASQgZAHgZAAQgrAAglgWg");
	this.shape_13.setTransform(91.1251,106.7022,2.09,2.09);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#A85C3A").s().p("AhUBoQgagkAGg4QAHg3AjgrQAjgrArgFQArgFAaAkQAbAlgHA3QgHA4gjAqQgjArgrAFIgKABQglAAgWggg");
	this.shape_14.setTransform(176.7673,256.0032,2.09,2.09);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#A85C3A").s().p("AgoBxQgqgYgTgyQgSgxAQguQARgvAqgQQAqgQAqAXQArAYATAyQASAxgRAvQgQAugqAQQgRAHgSAAQgYAAgagOg");
	this.shape_15.setTransform(42.7662,288.9731,2.09,2.09);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C58240").s().p("Ah1CQQgkgyAJhOQAJhMAxg8QAxg7A7gHQA8gHAkAyQAkAygJBOQgJBMgxA8QgxA7g7AHIgOABQgyAAgggsg");
	this.shape_16.setTransform(176.3323,251.916,2.09,2.09);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C58240").s().p("Ag3CcQg7ghgahFQgahEAYhBQAXhAA6gWQA6gXA7AhQA7AhAaBFQAaBEgXBAQgXBBg7AWQgYAJgYAAQgiAAgjgTg");
	this.shape_17.setTransform(42.3103,284.8976,2.09,2.09);

	this.instance = new lib.Group_6();
	this.instance.setTransform(107.3,235.7,2.0908,2.0908,0,0,0,38.6,30.7);
	this.instance.alpha = 0.3203;
	this.instance.compositeOperation = "multiply";

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C07C44").s().p("AleF0QgSgdgKgqIgFgjIB1irQhBlBB/h5QAngmA2gNQAbgHATABIAtgQQA1gOAuARQCSA2AJFQICUBoIACAlQAAArgKAlQgiBziBgDIhkiWIhuAhIhvAWIg9C+QgyAagnAAQg5AAghg3g");
	this.shape_18.setTransform(107.188,210.5253,2.0908,2.0908);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#C07C44").s().p("AleF0QgSgdgKgqIgFgjIB1irQhBlBB/h5QAngmA2gNQAbgHATABIAtgQQA1gOAuARQCSA2AJFQICUBoIACAlQAAArgKAlQgiBziBgDIhkiWIhuAhIhvAWIg9C+QgyAagnAAQg5AAghg3g");
	this.shape_19.setTransform(107.0484,210.1733,2.09,2.09);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#A85C3A").s().p("AiHB5QgggcgFgyQgGgxAYgqQAXgqAngKQAZgGAXAKQAWAKAQAXQAJgdATgUQAUgVAYgGQAngKAfAdQAgAcAFAyQAGAxgYAqQgXAqgnAKQgYAGgYgKQgWgKgQgXQgIAdgTAUQgUAVgZAGQgKADgJAAQgcAAgXgWg");
	this.shape_20.setTransform(86.8798,68.9994,2.09,2.09);

	this.instance_1 = new lib.Group_9();
	this.instance_1.setTransform(88.15,101.25,2.0908,2.0908,0,0,0,30.9,19.7);
	this.instance_1.alpha = 0.3203;
	this.instance_1.compositeOperation = "multiply";

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#C07C44").s().p("AjBD/Qhjg+gNh2QgOh1BRhpQBQhqB/gfQB+gfBjA9QBjA+ANB2QAOB1hRBqQhQBph/AfQgpALgoAAQhOAAhCgpg");
	this.shape_21.setTransform(88.1338,79.972,2.09,2.09);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C07C44").s().p("ABGCuQhEgUhmhKIhYhGIgBi7IBpANQB1AXBFA1QAzAoAWAwQAbA7gYBAQgMAcgbAQQgUALgWAAQgNAAgOgEg");
	this.shape_22.setTransform(246.724,230.018,2.0887,2.0887,149.9919);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E8DFDA").s().p("AhJBkQAAgIAQgOIAQgNIgRgcQgPgYAAgGQAAgJAWgXQAQgRgFgBQgOgFgDgXQgEgdAQgDQAIgBAIAEIBnBkIhmBXQgdARgKAAQgFAAgBgEg");
	this.shape_23.setTransform(283.4663,227.1247,2.0895,2.0895,149.9922);

	this.instance_2 = new lib.Group_12_0();
	this.instance_2.setTransform(55.45,176.3,2.0908,2.0908,0,0,0,8.3,20.2);
	this.instance_2.alpha = 0.3203;
	this.instance_2.compositeOperation = "multiply";

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#C07C44").s().p("AhkDyQgdgCgRgWQgmgwANhGQALg4Ang9QA1hTBqhPIBgg+IApCyIhEBsQhRB3g7A0QgfAagfAAIgFAAg");
	this.shape_24.setTransform(36.5266,184.9568,2.09,2.09);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#A85C3A").s().p("AgyBKQgXgZgBgoQgBgnAWgfQAVgfAfgEQAegDAWAZQAXAaABAoQABAngWAfQgVAfgfADIgHABQgaAAgTgXg");
	this.shape_25.setTransform(32.644,49.3127,2.09,2.09);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#A85C3A").s().p("AglBNQgUgOgKgbQgKgbAEgcQADgTAHgOQAJgVARgPQALAGANAAQALAAAKgFQAQAcAfAAIAEAAIAAgFIAAgFIAFAJQAIAQACARQAFAhgOAhQgHAQgOAOQgSARgWADIgGAAQgSAAgRgMg");
	this.shape_26.setTransform(133.9437,25.9848,2.09,2.09);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#C07C44").s().p("AhOByQgigngCg+QgBg8AggvQAhgwAvgFQAvgGAjAnQAiAoACA9QABA9ggAvQghAwgvAFIgLABQgoAAgfgjg");
	this.shape_27.setTransform(32.644,49.3409,2.09,2.09);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#C07C44").s().p("Ag6BzQgggXgPgrQgOgqAHgtQADgYAKgXQANgcAUgTQAFAZAXALQAMAGAMAAQAMAAAKgFQAQAcAfAAIAEAAIgBgFIABgFIAEAJQAIAQACARQAQAQAXAAIADAAQAAAngQAjQgMAcgUATQgbAagiAEIgJABQgdAAgagSg");
	this.shape_28.setTransform(133.9804,27.5783,2.09,2.09);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E8DFDA").s().p("AAJBpIgkgVIgljIIA5AGQA2ALgEAXQgFAWAIAPIAOAbQAFAPAAAdQAAAcgFAMQgEAHABANQAAANgEAJQgCADgGAAQgLAAgZgMg");
	this.shape_29.setTransform(145.7625,152.538,2.0908,2.0908);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.instance_2},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.instance_1},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.instance},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,-0.2,303.90000000000003,321.8);


(lib.bear = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E92425").ss(0.3).p("ABchcQhQCVg/AjQggASgQgMQAMhBBahEg");
	this.shape.setTransform(97.2535,183.4549,2.0905,2.0905);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhfBdQAMhBBahEIBZg5QhQCVg/AjQgTALgNAAQgJAAgHgFg");
	this.shape_1.setTransform(96.4257,184.448,2.0905,2.0905);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A85C3A").s().p("AgGgLIAAgEIAAgFIAEAJQAIAPABARQgMgOgBgSg");
	this.shape_2.setTransform(147.852,15.9409,2.0905,2.0905);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A85C3A").s().p("AgBAAIAAgEIADAIIgDABg");
	this.shape_3.setTransform(146.8068,12.5438,2.0905,2.0905);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#60220A").s().p("AgiAFQAAgNAiAGQARACASAFg");
	this.shape_4.setTransform(42.0727,109.6379,2.0905,2.0905);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#60220A").s().p("AABgHQARACARAFIhFAIQADgSAgADg");
	this.shape_5.setTransform(38.3098,103.4368,2.0905,2.0905);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#60220A").s().p("AgCgFQATgEAUgCIhJAWQgFgKAngGg");
	this.shape_6.setTransform(34.5505,93.9165,2.0905,2.0905);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#60220A").s().p("AgOAAIgQhGIA9CNQgZgCgUhFg");
	this.shape_7.setTransform(39.146,100.5538,2.0905,2.0905);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#962300").s().p("AhCACIA1AVIgXhSIBnBjIhQg6IAVBOg");
	this.shape_8.setTransform(64.5456,243.7008,2.0905,2.0905);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4F4840").s().p("Ag0gIQABgOA0ASQAaAHAaAMg");
	this.shape_9.setTransform(105.4671,64.3486,2.0905,2.0905);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4F4840").s().p("AgHg1IAMAaQAJAjgVAug");
	this.shape_10.setTransform(105.0395,65.538,2.0905,2.0905);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4F4840").s().p("Ag6BCQgcgOgEgeQgDgcAZgbQAYgcAlgJQAlgKAcAPQAdAOAEAeQADAcgZAbQgYAbglAKQgOAEgNAAQgVAAgSgJg");
	this.shape_11.setTransform(88.3368,85.1863,2.0891,2.0891);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4F4840").s().p("AgUAmQgMgLgCgTQgBgRAIgPQAJgQAOgEQAOgDALAKQAMALACASQACASgJAPQgIAQgPADIgGABQgKAAgJgHg");
	this.shape_12.setTransform(72.982,69.2047,2.0891,2.0891);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFCC99").s().p("AhwCOQg6ghgHhBQgHhBAvg6QAug7BKgTQBJgSA5AiQA6AhAHBBQAHBAgvA7QgvA7hJASQgZAHgZAAQgrAAglgWg");
	this.shape_13.setTransform(91.1005,106.6444,2.0899,2.0899);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#A85C3A").s().p("AhUBoQgagkAGg4QAHg3AjgrQAjgrArgFQArgFAaAkQAbAlgHA3QgHA4gjAqQgjArgrAFIgKABQglAAgWggg");
	this.shape_14.setTransform(176.7371,255.9355,2.0899,2.0899);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#A85C3A").s().p("AgoBxQgqgYgTgyQgSgxAQguQARgvAqgQQAqgQAqAXQArAYATAyQASAxgRAvQgQAugqAQQgRAHgSAAQgYAAgagOg");
	this.shape_15.setTransform(42.7448,288.9033,2.0899,2.0899);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C58240").s().p("Ah1CQQgkgyAJhOQAJhMAxg8QAxg7A7gHQA8gHAkAyQAkAygJBOQgJBMgxA8QgxA7g7AHIgOABQgyAAgggsg");
	this.shape_16.setTransform(176.3021,251.8486,2.0899,2.0899);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C58240").s().p("Ag3CcQg7ghgahFQgahEAYhBQAXhAA6gWQA6gXA7AhQA7AhAaBFQAaBEgXBAQgXBBg7AWQgYAJgYAAQgiAAgjgTg");
	this.shape_17.setTransform(42.2889,284.8281,2.0899,2.0899);

	this.instance = new lib.Group_6();
	this.instance.setTransform(106.35,235.05,2.0905,2.0905,0,0,0,38.9,31.2);
	this.instance.alpha = 0.3203;
	this.instance.compositeOperation = "multiply";

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C07C44").s().p("AleF0QgSgdgKgqIgFgjIB1irQhBlBB/h5QAngmA2gNQAbgHATABIAtgQQA1gOAuARQCSA2AJFQICUBoIACAlQAAArgKAlQgiBziBgDIhkiWIhuAhIhvAWIg9C+QgyAagnAAQg5AAghg3g");
	this.shape_18.setTransform(107.1395,210.4032,2.0905,2.0905);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#C07C44").s().p("AleF0QgSgdgKgqIgFgjIB1irQhBlBB/h5QAngmA2gNQAbgHATABIAtgQQA1gOAuARQCSA2AJFQICUBoIACAlQAAArgKAlQgiBziBgDIhkiWIhuAhIhvAWIg9C+QgyAagnAAQg5AAghg3g");
	this.shape_19.setTransform(107.0228,210.1087,2.0899,2.0899);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#A85C3A").s().p("AiHB5QgggcgFgyQgGgxAYgqQAXgqAngKQAZgGAXAKQAWAKAQAXQAJgdATgUQAUgVAYgGQAngKAfAdQAgAcAFAyQAGAxgYAqQgXAqgnAKQgYAGgYgKQgWgKgQgXQgIAdgTAUQgUAVgZAGQgKADgJAAQgcAAgXgWg");
	this.shape_20.setTransform(86.8555,68.944,2.0899,2.0899);

	this.instance_1 = new lib.Group_9();
	this.instance_1.setTransform(87.15,100.4,2.0905,2.0905,0,0,0,31.2,20.1);
	this.instance_1.alpha = 0.3203;
	this.instance_1.compositeOperation = "multiply";

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#C07C44").s().p("AjBD/Qhjg+gNh2QgOh1BRhpQBQhqB/gfQB+gfBjA9QBjA+ANB2QAOB1hRBqQhQBph/AfQgpALgoAAQhOAAhCgpg");
	this.shape_21.setTransform(88.1094,79.9159,2.0899,2.0899);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C07C44").s().p("ABGCuQhEgUhmhKIhYhGIgBi7IBpANQB1AXBFA1QAzAoAWAwQAbA7gYBAQgMAcgbAQQgUALgWAAQgNAAgOgEg");
	this.shape_22.setTransform(172.1141,163.3887,2.0891,2.0891);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E8DFDA").s().p("AhJBkQAAgIAQgOIAQgNIgRgcQgPgYAAgGQAAgJAWgXQAQgRgFgBQgOgFgDgXQgEgdAQgDQAIgBAIAEIBnBkIhmBXQgdARgKAAQgFAAgBgEg");
	this.shape_23.setTransform(138.8411,147.5015,2.0899,2.0899);

	this.instance_2 = new lib.Group_12_0();
	this.instance_2.setTransform(54.55,175.5,2.0905,2.0905,0,0,0,8.6,20.6);
	this.instance_2.alpha = 0.3203;
	this.instance_2.compositeOperation = "multiply";

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#C07C44").s().p("AhkDyQgdgCgRgWQgmgwANhGQALg4Ang9QA1hTBqhPIBgg+IApCyIhEBsQhRB3g7A0QgfAagfAAIgFAAg");
	this.shape_24.setTransform(36.5056,184.8938,2.0899,2.0899);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#A85C3A").s().p("AgyBKQgXgZgBgoQgBgnAWgfQAVgfAfgEQAegDAWAZQAXAaABAoQABAngWAfQgVAfgfADIgHABQgaAAgTgXg");
	this.shape_25.setTransform(32.6233,49.2586,2.0899,2.0899);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#A85C3A").s().p("AglBNQgUgOgKgbQgKgbAEgcQADgTAHgOQAJgVARgPQALAGANAAQALAAAKgFQAQAcAfAAIAEAAIAAgFIAAgFIAFAJQAIAQACARQAFAhgOAhQgHAQgOAOQgSARgWADIgGAAQgSAAgRgMg");
	this.shape_26.setTransform(133.9163,25.9322,2.0899,2.0899);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#C07C44").s().p("AhOByQgigngCg+QgBg8AggvQAhgwAvgFQAvgGAjAnQAiAoACA9QABA9ggAvQghAwgvAFIgLABQgoAAgfgjg");
	this.shape_27.setTransform(32.6233,49.2868,2.0899,2.0899);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#C07C44").s().p("Ag6BzQgggXgPgrQgOgqAHgtQADgYAKgXQANgcAUgTQAFAZAXALQAMAGAMAAQAMAAAKgFQAQAcAfAAIAEAAIgBgFIABgFIAEAJQAIAQACARQAQAQAXAAIADAAQAAAngQAjQgMAcgUATQgbAagiAEIgJABQgdAAgagSg");
	this.shape_28.setTransform(133.953,27.5256,2.0899,2.0899);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E8DFDA").s().p("AAJBpIgkgVIgljIIA5AGQA2ALgEAXQgFAWAIAPIAOAbQAFAPAAAdQAAAcgFAMQgEAHABANQAAANgEAJQgCADgGAAQgLAAgZgMg");
	this.shape_29.setTransform(145.7093,152.423,2.0905,2.0905);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29,p:{scaleX:2.0905,scaleY:2.0905,x:145.7093,y:152.423}},{t:this.shape_28,p:{scaleX:2.0899,scaleY:2.0899,x:133.953,y:27.5256}},{t:this.shape_27,p:{scaleX:2.0899,scaleY:2.0899,x:32.6233,y:49.2868}},{t:this.shape_26,p:{scaleX:2.0899,scaleY:2.0899,x:133.9163,y:25.9322}},{t:this.shape_25,p:{scaleX:2.0899,scaleY:2.0899,x:32.6233,y:49.2586}},{t:this.shape_24,p:{scaleX:2.0899,scaleY:2.0899,x:36.5056,y:184.8938}},{t:this.instance_2,p:{regX:8.6,regY:20.6,scaleX:2.0905,scaleY:2.0905,x:54.55,y:175.5}},{t:this.shape_23,p:{scaleX:2.0899,scaleY:2.0899,rotation:0,x:138.8411,y:147.5015}},{t:this.shape_22,p:{rotation:0,x:172.1141,y:163.3887,scaleX:2.0891,scaleY:2.0891}},{t:this.shape_21,p:{scaleX:2.0899,scaleY:2.0899,x:88.1094,y:79.9159}},{t:this.instance_1,p:{regX:31.2,regY:20.1,scaleX:2.0905,scaleY:2.0905,x:87.15,y:100.4}},{t:this.shape_20,p:{scaleX:2.0899,scaleY:2.0899,x:86.8555,y:68.944}},{t:this.shape_19,p:{scaleX:2.0899,scaleY:2.0899,x:107.0228,y:210.1087}},{t:this.shape_18,p:{scaleX:2.0905,scaleY:2.0905,x:107.1395,y:210.4032}},{t:this.instance,p:{regX:38.9,regY:31.2,scaleX:2.0905,scaleY:2.0905,x:106.35,y:235.05}},{t:this.shape_17,p:{scaleX:2.0899,scaleY:2.0899,x:42.2889,y:284.8281}},{t:this.shape_16,p:{scaleX:2.0899,scaleY:2.0899,x:176.3021,y:251.8486}},{t:this.shape_15,p:{scaleX:2.0899,scaleY:2.0899,x:42.7448,y:288.9033}},{t:this.shape_14,p:{scaleX:2.0899,scaleY:2.0899,x:176.7371,y:255.9355}},{t:this.shape_13,p:{scaleX:2.0899,scaleY:2.0899,x:91.1005,y:106.6444}},{t:this.shape_12,p:{scaleX:2.0891,scaleY:2.0891,x:72.982,y:69.2047}},{t:this.shape_11,p:{scaleX:2.0891,scaleY:2.0891,x:88.3368,y:85.1863}},{t:this.shape_10,p:{scaleX:2.0905,scaleY:2.0905,x:105.0395,y:65.538}},{t:this.shape_9,p:{scaleX:2.0905,scaleY:2.0905,x:105.4671,y:64.3486}},{t:this.shape_8,p:{scaleX:2.0905,scaleY:2.0905,x:64.5456,y:243.7008}},{t:this.shape_7,p:{scaleX:2.0905,scaleY:2.0905,x:39.146,y:100.5538}},{t:this.shape_6,p:{scaleX:2.0905,scaleY:2.0905,x:34.5505,y:93.9165}},{t:this.shape_5,p:{scaleX:2.0905,scaleY:2.0905,x:38.3098,y:103.4368}},{t:this.shape_4,p:{scaleX:2.0905,scaleY:2.0905,x:42.0727,y:109.6379}},{t:this.shape_3,p:{scaleX:2.0905,scaleY:2.0905,x:146.8068,y:12.5438}},{t:this.shape_2,p:{scaleX:2.0905,scaleY:2.0905,x:147.852,y:15.9409}},{t:this.shape_1,p:{scaleX:2.0905,scaleY:2.0905,x:96.4257,y:184.448}},{t:this.shape,p:{scaleX:2.0905,scaleY:2.0905,x:97.2535,y:183.4549}}]}).to({state:[{t:this.shape_29,p:{scaleX:2.0905,scaleY:2.0905,x:145.7093,y:152.423}},{t:this.shape_28,p:{scaleX:2.0899,scaleY:2.0899,x:133.953,y:27.5256}},{t:this.shape_27,p:{scaleX:2.0899,scaleY:2.0899,x:32.6233,y:49.2868}},{t:this.shape_26,p:{scaleX:2.0899,scaleY:2.0899,x:133.9163,y:25.9322}},{t:this.shape_25,p:{scaleX:2.0899,scaleY:2.0899,x:32.6233,y:49.2586}},{t:this.shape_24,p:{scaleX:2.0899,scaleY:2.0899,x:36.5056,y:184.8938}},{t:this.instance_2,p:{regX:8.6,regY:20.6,scaleX:2.0905,scaleY:2.0905,x:54.55,y:175.5}},{t:this.shape_23,p:{scaleX:2.0899,scaleY:2.0899,rotation:0,x:138.8411,y:147.5015}},{t:this.shape_22,p:{rotation:0,x:172.1141,y:163.3887,scaleX:2.0891,scaleY:2.0891}},{t:this.shape_21,p:{scaleX:2.0899,scaleY:2.0899,x:88.1094,y:79.9159}},{t:this.instance_1,p:{regX:31.2,regY:20.1,scaleX:2.0905,scaleY:2.0905,x:87.15,y:100.4}},{t:this.shape_20,p:{scaleX:2.0899,scaleY:2.0899,x:86.8555,y:68.944}},{t:this.shape_19,p:{scaleX:2.0899,scaleY:2.0899,x:107.0228,y:210.1087}},{t:this.shape_18,p:{scaleX:2.0905,scaleY:2.0905,x:107.1395,y:210.4032}},{t:this.instance,p:{regX:38.9,regY:31.2,scaleX:2.0905,scaleY:2.0905,x:106.35,y:235.05}},{t:this.shape_17,p:{scaleX:2.0899,scaleY:2.0899,x:42.2889,y:284.8281}},{t:this.shape_16,p:{scaleX:2.0899,scaleY:2.0899,x:176.3021,y:251.8486}},{t:this.shape_15,p:{scaleX:2.0899,scaleY:2.0899,x:42.7448,y:288.9033}},{t:this.shape_14,p:{scaleX:2.0899,scaleY:2.0899,x:176.7371,y:255.9355}},{t:this.shape_13,p:{scaleX:2.0899,scaleY:2.0899,x:91.1005,y:106.6444}},{t:this.shape_12,p:{scaleX:2.0891,scaleY:2.0891,x:72.982,y:69.2047}},{t:this.shape_11,p:{scaleX:2.0891,scaleY:2.0891,x:88.3368,y:85.1863}},{t:this.shape_10,p:{scaleX:2.0905,scaleY:2.0905,x:105.0395,y:65.538}},{t:this.shape_9,p:{scaleX:2.0905,scaleY:2.0905,x:105.4671,y:64.3486}},{t:this.shape_8,p:{scaleX:2.0905,scaleY:2.0905,x:64.5456,y:243.7008}},{t:this.shape_7,p:{scaleX:2.0905,scaleY:2.0905,x:39.146,y:100.5538}},{t:this.shape_6,p:{scaleX:2.0905,scaleY:2.0905,x:34.5505,y:93.9165}},{t:this.shape_5,p:{scaleX:2.0905,scaleY:2.0905,x:38.3098,y:103.4368}},{t:this.shape_4,p:{scaleX:2.0905,scaleY:2.0905,x:42.0727,y:109.6379}},{t:this.shape_3,p:{scaleX:2.0905,scaleY:2.0905,x:146.8068,y:12.5438}},{t:this.shape_2,p:{scaleX:2.0905,scaleY:2.0905,x:147.852,y:15.9409}},{t:this.shape_1,p:{scaleX:2.0905,scaleY:2.0905,x:96.4257,y:184.448}},{t:this.shape,p:{scaleX:2.0905,scaleY:2.0905,x:97.2535,y:183.4549}}]},30).to({state:[{t:this.shape_29,p:{scaleX:2.0908,scaleY:2.0908,x:145.7625,y:152.538}},{t:this.shape_28,p:{scaleX:2.0901,scaleY:2.0901,x:133.9956,y:27.6075}},{t:this.shape_27,p:{scaleX:2.0901,scaleY:2.0901,x:32.6555,y:49.3709}},{t:this.shape_26,p:{scaleX:2.0901,scaleY:2.0901,x:133.9589,y:26.014}},{t:this.shape_25,p:{scaleX:2.0901,scaleY:2.0901,x:32.6555,y:49.3427}},{t:this.shape_24,p:{scaleX:2.0901,scaleY:2.0901,x:36.5382,y:184.9918}},{t:this.instance_2,p:{regX:8.3,regY:20.2,scaleX:2.0908,scaleY:2.0908,x:55.45,y:176.3}},{t:this.shape_23,p:{scaleX:2.0898,scaleY:2.0898,rotation:14.999,x:144.067,y:140.6063}},{t:this.shape_22,p:{rotation:14.9989,x:172.1032,y:164.6026,scaleX:2.0891,scaleY:2.0891}},{t:this.shape_21,p:{scaleX:2.0901,scaleY:2.0901,x:88.1474,y:80.0032}},{t:this.instance_1,p:{regX:30.9,regY:19.7,scaleX:2.0908,scaleY:2.0908,x:88.15,y:101.25}},{t:this.shape_20,p:{scaleX:2.0901,scaleY:2.0901,x:86.8933,y:69.0302}},{t:this.shape_19,p:{scaleX:2.0901,scaleY:2.0901,x:107.0627,y:210.2092}},{t:this.shape_18,p:{scaleX:2.0908,scaleY:2.0908,x:107.188,y:210.5253}},{t:this.instance,p:{regX:38.6,regY:30.7,scaleX:2.0908,scaleY:2.0908,x:107.3,y:235.7}},{t:this.shape_17,p:{scaleX:2.0901,scaleY:2.0901,x:42.3222,y:284.9363}},{t:this.shape_16,p:{scaleX:2.0901,scaleY:2.0901,x:176.3491,y:251.9534}},{t:this.shape_15,p:{scaleX:2.0901,scaleY:2.0901,x:42.7781,y:289.0119}},{t:this.shape_14,p:{scaleX:2.0901,scaleY:2.0901,x:176.7841,y:256.0408}},{t:this.shape_13,p:{scaleX:2.0901,scaleY:2.0901,x:91.1388,y:106.7344}},{t:this.shape_12,p:{scaleX:2.0894,scaleY:2.0894,x:73.0418,y:69.3463}},{t:this.shape_11,p:{scaleX:2.0894,scaleY:2.0894,x:88.3992,y:85.3306}},{t:this.shape_10,p:{scaleX:2.0908,scaleY:2.0908,x:105.0876,y:65.6421}},{t:this.shape_9,p:{scaleX:2.0908,scaleY:2.0908,x:105.5153,y:64.4526}},{t:this.shape_8,p:{scaleX:2.0908,scaleY:2.0908,x:64.5887,y:243.8271}},{t:this.shape_7,p:{scaleX:2.0908,scaleY:2.0908,x:39.186,y:100.6623}},{t:this.shape_6,p:{scaleX:2.0908,scaleY:2.0908,x:34.5899,y:94.0242}},{t:this.shape_5,p:{scaleX:2.0908,scaleY:2.0908,x:38.3497,y:103.5456}},{t:this.shape_4,p:{scaleX:2.0908,scaleY:2.0908,x:42.1131,y:109.7475}},{t:this.shape_3,p:{scaleX:2.0908,scaleY:2.0908,x:146.8601,y:12.6414}},{t:this.shape_2,p:{scaleX:2.0908,scaleY:2.0908,x:147.9055,y:16.0389}},{t:this.shape_1,p:{scaleX:2.0908,scaleY:2.0908,x:96.4728,y:184.5669}},{t:this.shape,p:{scaleX:2.0908,scaleY:2.0908,x:97.3007,y:183.5737}}]},3).to({state:[{t:this.shape_29,p:{scaleX:2.0908,scaleY:2.0908,x:145.7625,y:152.538}},{t:this.shape_28,p:{scaleX:2.0901,scaleY:2.0901,x:133.9956,y:27.6075}},{t:this.shape_27,p:{scaleX:2.0901,scaleY:2.0901,x:32.6555,y:49.3709}},{t:this.shape_26,p:{scaleX:2.0901,scaleY:2.0901,x:133.9589,y:26.014}},{t:this.shape_25,p:{scaleX:2.0901,scaleY:2.0901,x:32.6555,y:49.3427}},{t:this.shape_24,p:{scaleX:2.0901,scaleY:2.0901,x:36.5382,y:184.9918}},{t:this.instance_2,p:{regX:8.3,regY:20.2,scaleX:2.0908,scaleY:2.0908,x:55.45,y:176.3}},{t:this.shape_23,p:{scaleX:2.0901,scaleY:2.0901,rotation:29.9977,x:157.2756,y:135.8805}},{t:this.shape_22,p:{rotation:29.9979,x:178.1524,y:166.2378,scaleX:2.0893,scaleY:2.0893}},{t:this.shape_21,p:{scaleX:2.0901,scaleY:2.0901,x:88.1474,y:80.0032}},{t:this.instance_1,p:{regX:30.9,regY:19.7,scaleX:2.0908,scaleY:2.0908,x:88.15,y:101.25}},{t:this.shape_20,p:{scaleX:2.0901,scaleY:2.0901,x:86.8933,y:69.0302}},{t:this.shape_19,p:{scaleX:2.0901,scaleY:2.0901,x:107.0627,y:210.2092}},{t:this.shape_18,p:{scaleX:2.0908,scaleY:2.0908,x:107.188,y:210.5253}},{t:this.instance,p:{regX:38.6,regY:30.7,scaleX:2.0908,scaleY:2.0908,x:107.3,y:235.7}},{t:this.shape_17,p:{scaleX:2.0901,scaleY:2.0901,x:42.3222,y:284.9363}},{t:this.shape_16,p:{scaleX:2.0901,scaleY:2.0901,x:176.3491,y:251.9534}},{t:this.shape_15,p:{scaleX:2.0901,scaleY:2.0901,x:42.7781,y:289.0119}},{t:this.shape_14,p:{scaleX:2.0901,scaleY:2.0901,x:176.7841,y:256.0408}},{t:this.shape_13,p:{scaleX:2.0901,scaleY:2.0901,x:91.1388,y:106.7344}},{t:this.shape_12,p:{scaleX:2.0894,scaleY:2.0894,x:73.0418,y:69.3463}},{t:this.shape_11,p:{scaleX:2.0894,scaleY:2.0894,x:88.3992,y:85.3306}},{t:this.shape_10,p:{scaleX:2.0908,scaleY:2.0908,x:105.0876,y:65.6421}},{t:this.shape_9,p:{scaleX:2.0908,scaleY:2.0908,x:105.5153,y:64.4526}},{t:this.shape_8,p:{scaleX:2.0908,scaleY:2.0908,x:64.5887,y:243.8271}},{t:this.shape_7,p:{scaleX:2.0908,scaleY:2.0908,x:39.186,y:100.6623}},{t:this.shape_6,p:{scaleX:2.0908,scaleY:2.0908,x:34.5899,y:94.0242}},{t:this.shape_5,p:{scaleX:2.0908,scaleY:2.0908,x:38.3497,y:103.5456}},{t:this.shape_4,p:{scaleX:2.0908,scaleY:2.0908,x:42.1131,y:109.7475}},{t:this.shape_3,p:{scaleX:2.0908,scaleY:2.0908,x:146.8601,y:12.6414}},{t:this.shape_2,p:{scaleX:2.0908,scaleY:2.0908,x:147.9055,y:16.0389}},{t:this.shape_1,p:{scaleX:2.0908,scaleY:2.0908,x:96.4728,y:184.5669}},{t:this.shape,p:{scaleX:2.0908,scaleY:2.0908,x:97.3007,y:183.5737}}]},3).to({state:[{t:this.shape_29,p:{scaleX:2.0908,scaleY:2.0908,x:145.7625,y:152.538}},{t:this.shape_28,p:{scaleX:2.0901,scaleY:2.0901,x:133.9956,y:27.6075}},{t:this.shape_27,p:{scaleX:2.0901,scaleY:2.0901,x:32.6555,y:49.3709}},{t:this.shape_26,p:{scaleX:2.0901,scaleY:2.0901,x:133.9589,y:26.014}},{t:this.shape_25,p:{scaleX:2.0901,scaleY:2.0901,x:32.6555,y:49.3427}},{t:this.shape_24,p:{scaleX:2.0901,scaleY:2.0901,x:36.5382,y:184.9918}},{t:this.instance_2,p:{regX:8.3,regY:20.2,scaleX:2.0908,scaleY:2.0908,x:55.45,y:176.3}},{t:this.shape_23,p:{scaleX:2.09,scaleY:2.09,rotation:44.997,x:176.0191,y:133.0101}},{t:this.shape_22,p:{rotation:44.997,x:188.308,y:167.7942,scaleX:2.0893,scaleY:2.0893}},{t:this.shape_21,p:{scaleX:2.0901,scaleY:2.0901,x:88.1474,y:80.0032}},{t:this.instance_1,p:{regX:30.9,regY:19.7,scaleX:2.0908,scaleY:2.0908,x:88.15,y:101.25}},{t:this.shape_20,p:{scaleX:2.0901,scaleY:2.0901,x:86.8933,y:69.0302}},{t:this.shape_19,p:{scaleX:2.0901,scaleY:2.0901,x:107.0627,y:210.2092}},{t:this.shape_18,p:{scaleX:2.0908,scaleY:2.0908,x:107.188,y:210.5253}},{t:this.instance,p:{regX:38.6,regY:30.7,scaleX:2.0908,scaleY:2.0908,x:107.3,y:235.7}},{t:this.shape_17,p:{scaleX:2.0901,scaleY:2.0901,x:42.3222,y:284.9363}},{t:this.shape_16,p:{scaleX:2.0901,scaleY:2.0901,x:176.3491,y:251.9534}},{t:this.shape_15,p:{scaleX:2.0901,scaleY:2.0901,x:42.7781,y:289.0119}},{t:this.shape_14,p:{scaleX:2.0901,scaleY:2.0901,x:176.7841,y:256.0408}},{t:this.shape_13,p:{scaleX:2.0901,scaleY:2.0901,x:91.1388,y:106.7344}},{t:this.shape_12,p:{scaleX:2.0894,scaleY:2.0894,x:73.0418,y:69.3463}},{t:this.shape_11,p:{scaleX:2.0894,scaleY:2.0894,x:88.3992,y:85.3306}},{t:this.shape_10,p:{scaleX:2.0908,scaleY:2.0908,x:105.0876,y:65.6421}},{t:this.shape_9,p:{scaleX:2.0908,scaleY:2.0908,x:105.5153,y:64.4526}},{t:this.shape_8,p:{scaleX:2.0908,scaleY:2.0908,x:64.5887,y:243.8271}},{t:this.shape_7,p:{scaleX:2.0908,scaleY:2.0908,x:39.186,y:100.6623}},{t:this.shape_6,p:{scaleX:2.0908,scaleY:2.0908,x:34.5899,y:94.0242}},{t:this.shape_5,p:{scaleX:2.0908,scaleY:2.0908,x:38.3497,y:103.5456}},{t:this.shape_4,p:{scaleX:2.0908,scaleY:2.0908,x:42.1131,y:109.7475}},{t:this.shape_3,p:{scaleX:2.0908,scaleY:2.0908,x:146.8601,y:12.6414}},{t:this.shape_2,p:{scaleX:2.0908,scaleY:2.0908,x:147.9055,y:16.0389}},{t:this.shape_1,p:{scaleX:2.0908,scaleY:2.0908,x:96.4728,y:184.5669}},{t:this.shape,p:{scaleX:2.0908,scaleY:2.0908,x:97.3007,y:183.5737}}]},3).to({state:[{t:this.shape_29,p:{scaleX:2.0908,scaleY:2.0908,x:145.7625,y:152.538}},{t:this.shape_28,p:{scaleX:2.0901,scaleY:2.0901,x:133.9956,y:27.6075}},{t:this.shape_27,p:{scaleX:2.0901,scaleY:2.0901,x:32.6555,y:49.3709}},{t:this.shape_26,p:{scaleX:2.0901,scaleY:2.0901,x:133.9589,y:26.014}},{t:this.shape_25,p:{scaleX:2.0901,scaleY:2.0901,x:32.6555,y:49.3427}},{t:this.shape_24,p:{scaleX:2.0901,scaleY:2.0901,x:36.5382,y:184.9918}},{t:this.instance_2,p:{regX:8.3,regY:20.2,scaleX:2.0908,scaleY:2.0908,x:55.45,y:176.3}},{t:this.shape_23,p:{scaleX:2.0895,scaleY:2.0895,rotation:59.9956,x:192.0555,y:131.9747}},{t:this.shape_22,p:{rotation:59.9959,x:194.9571,y:168.6878,scaleX:2.0887,scaleY:2.0887}},{t:this.shape_21,p:{scaleX:2.0901,scaleY:2.0901,x:88.1474,y:80.0032}},{t:this.instance_1,p:{regX:30.9,regY:19.7,scaleX:2.0908,scaleY:2.0908,x:88.15,y:101.25}},{t:this.shape_20,p:{scaleX:2.0901,scaleY:2.0901,x:86.8933,y:69.0302}},{t:this.shape_19,p:{scaleX:2.0901,scaleY:2.0901,x:107.0627,y:210.2092}},{t:this.shape_18,p:{scaleX:2.0908,scaleY:2.0908,x:107.188,y:210.5253}},{t:this.instance,p:{regX:38.6,regY:30.7,scaleX:2.0908,scaleY:2.0908,x:107.3,y:235.7}},{t:this.shape_17,p:{scaleX:2.0901,scaleY:2.0901,x:42.3222,y:284.9363}},{t:this.shape_16,p:{scaleX:2.0901,scaleY:2.0901,x:176.3491,y:251.9534}},{t:this.shape_15,p:{scaleX:2.0901,scaleY:2.0901,x:42.7781,y:289.0119}},{t:this.shape_14,p:{scaleX:2.0901,scaleY:2.0901,x:176.7841,y:256.0408}},{t:this.shape_13,p:{scaleX:2.0901,scaleY:2.0901,x:91.1388,y:106.7344}},{t:this.shape_12,p:{scaleX:2.0894,scaleY:2.0894,x:73.0418,y:69.3463}},{t:this.shape_11,p:{scaleX:2.0894,scaleY:2.0894,x:88.3992,y:85.3306}},{t:this.shape_10,p:{scaleX:2.0908,scaleY:2.0908,x:105.0876,y:65.6421}},{t:this.shape_9,p:{scaleX:2.0908,scaleY:2.0908,x:105.5153,y:64.4526}},{t:this.shape_8,p:{scaleX:2.0908,scaleY:2.0908,x:64.5887,y:243.8271}},{t:this.shape_7,p:{scaleX:2.0908,scaleY:2.0908,x:39.186,y:100.6623}},{t:this.shape_6,p:{scaleX:2.0908,scaleY:2.0908,x:34.5899,y:94.0242}},{t:this.shape_5,p:{scaleX:2.0908,scaleY:2.0908,x:38.3497,y:103.5456}},{t:this.shape_4,p:{scaleX:2.0908,scaleY:2.0908,x:42.1131,y:109.7475}},{t:this.shape_3,p:{scaleX:2.0908,scaleY:2.0908,x:146.8601,y:12.6414}},{t:this.shape_2,p:{scaleX:2.0908,scaleY:2.0908,x:147.9055,y:16.0389}},{t:this.shape_1,p:{scaleX:2.0908,scaleY:2.0908,x:96.4728,y:184.5669}},{t:this.shape,p:{scaleX:2.0908,scaleY:2.0908,x:97.3007,y:183.5737}}]},3).to({state:[{t:this.shape_29,p:{scaleX:2.0908,scaleY:2.0908,x:145.7625,y:152.538}},{t:this.shape_28,p:{scaleX:2.0901,scaleY:2.0901,x:133.9956,y:27.6075}},{t:this.shape_27,p:{scaleX:2.0901,scaleY:2.0901,x:32.6555,y:49.3709}},{t:this.shape_26,p:{scaleX:2.0901,scaleY:2.0901,x:133.9589,y:26.014}},{t:this.shape_25,p:{scaleX:2.0901,scaleY:2.0901,x:32.6555,y:49.3427}},{t:this.shape_24,p:{scaleX:2.0901,scaleY:2.0901,x:36.5382,y:184.9918}},{t:this.instance_2,p:{regX:8.3,regY:20.2,scaleX:2.0908,scaleY:2.0908,x:55.45,y:176.3}},{t:this.shape_23,p:{scaleX:2.0898,scaleY:2.0898,rotation:74.9958,x:207.0649,y:136.1507}},{t:this.shape_22,p:{rotation:74.996,x:200.2931,y:172.289,scaleX:2.089,scaleY:2.089}},{t:this.shape_21,p:{scaleX:2.0901,scaleY:2.0901,x:88.1474,y:80.0032}},{t:this.instance_1,p:{regX:30.9,regY:19.7,scaleX:2.0908,scaleY:2.0908,x:88.15,y:101.25}},{t:this.shape_20,p:{scaleX:2.0901,scaleY:2.0901,x:86.8933,y:69.0302}},{t:this.shape_19,p:{scaleX:2.0901,scaleY:2.0901,x:107.0627,y:210.2092}},{t:this.shape_18,p:{scaleX:2.0908,scaleY:2.0908,x:107.188,y:210.5253}},{t:this.instance,p:{regX:38.6,regY:30.7,scaleX:2.0908,scaleY:2.0908,x:107.3,y:235.7}},{t:this.shape_17,p:{scaleX:2.0901,scaleY:2.0901,x:42.3222,y:284.9363}},{t:this.shape_16,p:{scaleX:2.0901,scaleY:2.0901,x:176.3491,y:251.9534}},{t:this.shape_15,p:{scaleX:2.0901,scaleY:2.0901,x:42.7781,y:289.0119}},{t:this.shape_14,p:{scaleX:2.0901,scaleY:2.0901,x:176.7841,y:256.0408}},{t:this.shape_13,p:{scaleX:2.0901,scaleY:2.0901,x:91.1388,y:106.7344}},{t:this.shape_12,p:{scaleX:2.0894,scaleY:2.0894,x:73.0418,y:69.3463}},{t:this.shape_11,p:{scaleX:2.0894,scaleY:2.0894,x:88.3992,y:85.3306}},{t:this.shape_10,p:{scaleX:2.0908,scaleY:2.0908,x:105.0876,y:65.6421}},{t:this.shape_9,p:{scaleX:2.0908,scaleY:2.0908,x:105.5153,y:64.4526}},{t:this.shape_8,p:{scaleX:2.0908,scaleY:2.0908,x:64.5887,y:243.8271}},{t:this.shape_7,p:{scaleX:2.0908,scaleY:2.0908,x:39.186,y:100.6623}},{t:this.shape_6,p:{scaleX:2.0908,scaleY:2.0908,x:34.5899,y:94.0242}},{t:this.shape_5,p:{scaleX:2.0908,scaleY:2.0908,x:38.3497,y:103.5456}},{t:this.shape_4,p:{scaleX:2.0908,scaleY:2.0908,x:42.1131,y:109.7475}},{t:this.shape_3,p:{scaleX:2.0908,scaleY:2.0908,x:146.8601,y:12.6414}},{t:this.shape_2,p:{scaleX:2.0908,scaleY:2.0908,x:147.9055,y:16.0389}},{t:this.shape_1,p:{scaleX:2.0908,scaleY:2.0908,x:96.4728,y:184.5669}},{t:this.shape,p:{scaleX:2.0908,scaleY:2.0908,x:97.3007,y:183.5737}}]},3).to({state:[{t:this.shape_29,p:{scaleX:2.0908,scaleY:2.0908,x:145.7625,y:152.538}},{t:this.shape_28,p:{scaleX:2.0901,scaleY:2.0901,x:133.9956,y:27.6075}},{t:this.shape_27,p:{scaleX:2.0901,scaleY:2.0901,x:32.6555,y:49.3709}},{t:this.shape_26,p:{scaleX:2.0901,scaleY:2.0901,x:133.9589,y:26.014}},{t:this.shape_25,p:{scaleX:2.0901,scaleY:2.0901,x:32.6555,y:49.3427}},{t:this.shape_24,p:{scaleX:2.0901,scaleY:2.0901,x:36.5382,y:184.9918}},{t:this.instance_2,p:{regX:8.3,regY:20.2,scaleX:2.0908,scaleY:2.0908,x:55.45,y:176.3}},{t:this.shape_23,p:{scaleX:2.0898,scaleY:2.0898,rotation:89.9874,x:227.5745,y:144.1775}},{t:this.shape_22,p:{rotation:89.9858,x:211.6606,y:177.3035,scaleX:2.0891,scaleY:2.0891}},{t:this.shape_21,p:{scaleX:2.0901,scaleY:2.0901,x:88.1474,y:80.0032}},{t:this.instance_1,p:{regX:30.9,regY:19.7,scaleX:2.0908,scaleY:2.0908,x:88.15,y:101.25}},{t:this.shape_20,p:{scaleX:2.0901,scaleY:2.0901,x:86.8933,y:69.0302}},{t:this.shape_19,p:{scaleX:2.0901,scaleY:2.0901,x:107.0627,y:210.2092}},{t:this.shape_18,p:{scaleX:2.0908,scaleY:2.0908,x:107.188,y:210.5253}},{t:this.instance,p:{regX:38.6,regY:30.7,scaleX:2.0908,scaleY:2.0908,x:107.3,y:235.7}},{t:this.shape_17,p:{scaleX:2.0901,scaleY:2.0901,x:42.3222,y:284.9363}},{t:this.shape_16,p:{scaleX:2.0901,scaleY:2.0901,x:176.3491,y:251.9534}},{t:this.shape_15,p:{scaleX:2.0901,scaleY:2.0901,x:42.7781,y:289.0119}},{t:this.shape_14,p:{scaleX:2.0901,scaleY:2.0901,x:176.7841,y:256.0408}},{t:this.shape_13,p:{scaleX:2.0901,scaleY:2.0901,x:91.1388,y:106.7344}},{t:this.shape_12,p:{scaleX:2.0894,scaleY:2.0894,x:73.0418,y:69.3463}},{t:this.shape_11,p:{scaleX:2.0894,scaleY:2.0894,x:88.3992,y:85.3306}},{t:this.shape_10,p:{scaleX:2.0908,scaleY:2.0908,x:105.0876,y:65.6421}},{t:this.shape_9,p:{scaleX:2.0908,scaleY:2.0908,x:105.5153,y:64.4526}},{t:this.shape_8,p:{scaleX:2.0908,scaleY:2.0908,x:64.5887,y:243.8271}},{t:this.shape_7,p:{scaleX:2.0908,scaleY:2.0908,x:39.186,y:100.6623}},{t:this.shape_6,p:{scaleX:2.0908,scaleY:2.0908,x:34.5899,y:94.0242}},{t:this.shape_5,p:{scaleX:2.0908,scaleY:2.0908,x:38.3497,y:103.5456}},{t:this.shape_4,p:{scaleX:2.0908,scaleY:2.0908,x:42.1131,y:109.7475}},{t:this.shape_3,p:{scaleX:2.0908,scaleY:2.0908,x:146.8601,y:12.6414}},{t:this.shape_2,p:{scaleX:2.0908,scaleY:2.0908,x:147.9055,y:16.0389}},{t:this.shape_1,p:{scaleX:2.0908,scaleY:2.0908,x:96.4728,y:184.5669}},{t:this.shape,p:{scaleX:2.0908,scaleY:2.0908,x:97.3007,y:183.5737}}]},3).to({state:[{t:this.shape_29,p:{scaleX:2.0908,scaleY:2.0908,x:145.7625,y:152.538}},{t:this.shape_28,p:{scaleX:2.0901,scaleY:2.0901,x:133.9956,y:27.6075}},{t:this.shape_27,p:{scaleX:2.0901,scaleY:2.0901,x:32.6555,y:49.3709}},{t:this.shape_26,p:{scaleX:2.0901,scaleY:2.0901,x:133.9589,y:26.014}},{t:this.shape_25,p:{scaleX:2.0901,scaleY:2.0901,x:32.6555,y:49.3427}},{t:this.shape_24,p:{scaleX:2.0901,scaleY:2.0901,x:36.5382,y:184.9918}},{t:this.instance_2,p:{regX:8.3,regY:20.2,scaleX:2.0908,scaleY:2.0908,x:55.45,y:176.3}},{t:this.shape_23,p:{scaleX:2.0901,scaleY:2.0901,rotation:104.9972,x:243.1061,y:154.3718}},{t:this.shape_22,p:{rotation:104.9982,x:219.2063,y:182.3731,scaleX:2.0892,scaleY:2.0892}},{t:this.shape_21,p:{scaleX:2.0901,scaleY:2.0901,x:88.1474,y:80.0032}},{t:this.instance_1,p:{regX:30.9,regY:19.7,scaleX:2.0908,scaleY:2.0908,x:88.15,y:101.25}},{t:this.shape_20,p:{scaleX:2.0901,scaleY:2.0901,x:86.8933,y:69.0302}},{t:this.shape_19,p:{scaleX:2.0901,scaleY:2.0901,x:107.0627,y:210.2092}},{t:this.shape_18,p:{scaleX:2.0908,scaleY:2.0908,x:107.188,y:210.5253}},{t:this.instance,p:{regX:38.6,regY:30.7,scaleX:2.0908,scaleY:2.0908,x:107.3,y:235.7}},{t:this.shape_17,p:{scaleX:2.0901,scaleY:2.0901,x:42.3222,y:284.9363}},{t:this.shape_16,p:{scaleX:2.0901,scaleY:2.0901,x:176.3491,y:251.9534}},{t:this.shape_15,p:{scaleX:2.0901,scaleY:2.0901,x:42.7781,y:289.0119}},{t:this.shape_14,p:{scaleX:2.0901,scaleY:2.0901,x:176.7841,y:256.0408}},{t:this.shape_13,p:{scaleX:2.0901,scaleY:2.0901,x:91.1388,y:106.7344}},{t:this.shape_12,p:{scaleX:2.0894,scaleY:2.0894,x:73.0418,y:69.3463}},{t:this.shape_11,p:{scaleX:2.0894,scaleY:2.0894,x:88.3992,y:85.3306}},{t:this.shape_10,p:{scaleX:2.0908,scaleY:2.0908,x:105.0876,y:65.6421}},{t:this.shape_9,p:{scaleX:2.0908,scaleY:2.0908,x:105.5153,y:64.4526}},{t:this.shape_8,p:{scaleX:2.0908,scaleY:2.0908,x:64.5887,y:243.8271}},{t:this.shape_7,p:{scaleX:2.0908,scaleY:2.0908,x:39.186,y:100.6623}},{t:this.shape_6,p:{scaleX:2.0908,scaleY:2.0908,x:34.5899,y:94.0242}},{t:this.shape_5,p:{scaleX:2.0908,scaleY:2.0908,x:38.3497,y:103.5456}},{t:this.shape_4,p:{scaleX:2.0908,scaleY:2.0908,x:42.1131,y:109.7475}},{t:this.shape_3,p:{scaleX:2.0908,scaleY:2.0908,x:146.8601,y:12.6414}},{t:this.shape_2,p:{scaleX:2.0908,scaleY:2.0908,x:147.9055,y:16.0389}},{t:this.shape_1,p:{scaleX:2.0908,scaleY:2.0908,x:96.4728,y:184.5669}},{t:this.shape,p:{scaleX:2.0908,scaleY:2.0908,x:97.3007,y:183.5737}}]},3).to({state:[{t:this.shape_29,p:{scaleX:2.0908,scaleY:2.0908,x:145.7625,y:152.538}},{t:this.shape_28,p:{scaleX:2.0901,scaleY:2.0901,x:133.9956,y:27.6075}},{t:this.shape_27,p:{scaleX:2.0901,scaleY:2.0901,x:32.6555,y:49.3709}},{t:this.shape_26,p:{scaleX:2.0901,scaleY:2.0901,x:133.9589,y:26.014}},{t:this.shape_25,p:{scaleX:2.0901,scaleY:2.0901,x:32.6555,y:49.3427}},{t:this.shape_24,p:{scaleX:2.0901,scaleY:2.0901,x:36.5382,y:184.9918}},{t:this.instance_2,p:{regX:8.3,regY:20.2,scaleX:2.0908,scaleY:2.0908,x:55.45,y:176.3}},{t:this.shape_23,p:{scaleX:2.0896,scaleY:2.0896,rotation:119.9954,x:256.3189,y:167.6404}},{t:this.shape_22,p:{rotation:119.9944,x:225.9189,y:188.5297,scaleX:2.0889,scaleY:2.0889}},{t:this.shape_21,p:{scaleX:2.0901,scaleY:2.0901,x:88.1474,y:80.0032}},{t:this.instance_1,p:{regX:30.9,regY:19.7,scaleX:2.0908,scaleY:2.0908,x:88.15,y:101.25}},{t:this.shape_20,p:{scaleX:2.0901,scaleY:2.0901,x:86.8933,y:69.0302}},{t:this.shape_19,p:{scaleX:2.0901,scaleY:2.0901,x:107.0627,y:210.2092}},{t:this.shape_18,p:{scaleX:2.0908,scaleY:2.0908,x:107.188,y:210.5253}},{t:this.instance,p:{regX:38.6,regY:30.7,scaleX:2.0908,scaleY:2.0908,x:107.3,y:235.7}},{t:this.shape_17,p:{scaleX:2.0901,scaleY:2.0901,x:42.3222,y:284.9363}},{t:this.shape_16,p:{scaleX:2.0901,scaleY:2.0901,x:176.3491,y:251.9534}},{t:this.shape_15,p:{scaleX:2.0901,scaleY:2.0901,x:42.7781,y:289.0119}},{t:this.shape_14,p:{scaleX:2.0901,scaleY:2.0901,x:176.7841,y:256.0408}},{t:this.shape_13,p:{scaleX:2.0901,scaleY:2.0901,x:91.1388,y:106.7344}},{t:this.shape_12,p:{scaleX:2.0894,scaleY:2.0894,x:73.0418,y:69.3463}},{t:this.shape_11,p:{scaleX:2.0894,scaleY:2.0894,x:88.3992,y:85.3306}},{t:this.shape_10,p:{scaleX:2.0908,scaleY:2.0908,x:105.0876,y:65.6421}},{t:this.shape_9,p:{scaleX:2.0908,scaleY:2.0908,x:105.5153,y:64.4526}},{t:this.shape_8,p:{scaleX:2.0908,scaleY:2.0908,x:64.5887,y:243.8271}},{t:this.shape_7,p:{scaleX:2.0908,scaleY:2.0908,x:39.186,y:100.6623}},{t:this.shape_6,p:{scaleX:2.0908,scaleY:2.0908,x:34.5899,y:94.0242}},{t:this.shape_5,p:{scaleX:2.0908,scaleY:2.0908,x:38.3497,y:103.5456}},{t:this.shape_4,p:{scaleX:2.0908,scaleY:2.0908,x:42.1131,y:109.7475}},{t:this.shape_3,p:{scaleX:2.0908,scaleY:2.0908,x:146.8601,y:12.6414}},{t:this.shape_2,p:{scaleX:2.0908,scaleY:2.0908,x:147.9055,y:16.0389}},{t:this.shape_1,p:{scaleX:2.0908,scaleY:2.0908,x:96.4728,y:184.5669}},{t:this.shape,p:{scaleX:2.0908,scaleY:2.0908,x:97.3007,y:183.5737}}]},3).to({state:[{t:this.shape_29,p:{scaleX:2.0908,scaleY:2.0908,x:145.7625,y:152.538}},{t:this.shape_28,p:{scaleX:2.0901,scaleY:2.0901,x:133.9956,y:27.6075}},{t:this.shape_27,p:{scaleX:2.0901,scaleY:2.0901,x:32.6555,y:49.3709}},{t:this.shape_26,p:{scaleX:2.0901,scaleY:2.0901,x:133.9589,y:26.014}},{t:this.shape_25,p:{scaleX:2.0901,scaleY:2.0901,x:32.6555,y:49.3427}},{t:this.shape_24,p:{scaleX:2.0901,scaleY:2.0901,x:36.5382,y:184.9918}},{t:this.instance_2,p:{regX:8.3,regY:20.2,scaleX:2.0908,scaleY:2.0908,x:55.45,y:176.3}},{t:this.shape_23,p:{scaleX:2.0898,scaleY:2.0898,rotation:134.9938,x:264.8728,y:185.2613}},{t:this.shape_22,p:{rotation:134.9938,x:230.2043,y:197.472,scaleX:2.0889,scaleY:2.0889}},{t:this.shape_21,p:{scaleX:2.0901,scaleY:2.0901,x:88.1474,y:80.0032}},{t:this.instance_1,p:{regX:30.9,regY:19.7,scaleX:2.0908,scaleY:2.0908,x:88.15,y:101.25}},{t:this.shape_20,p:{scaleX:2.0901,scaleY:2.0901,x:86.8933,y:69.0302}},{t:this.shape_19,p:{scaleX:2.0901,scaleY:2.0901,x:107.0627,y:210.2092}},{t:this.shape_18,p:{scaleX:2.0908,scaleY:2.0908,x:107.188,y:210.5253}},{t:this.instance,p:{regX:38.6,regY:30.7,scaleX:2.0908,scaleY:2.0908,x:107.3,y:235.7}},{t:this.shape_17,p:{scaleX:2.0901,scaleY:2.0901,x:42.3222,y:284.9363}},{t:this.shape_16,p:{scaleX:2.0901,scaleY:2.0901,x:176.3491,y:251.9534}},{t:this.shape_15,p:{scaleX:2.0901,scaleY:2.0901,x:42.7781,y:289.0119}},{t:this.shape_14,p:{scaleX:2.0901,scaleY:2.0901,x:176.7841,y:256.0408}},{t:this.shape_13,p:{scaleX:2.0901,scaleY:2.0901,x:91.1388,y:106.7344}},{t:this.shape_12,p:{scaleX:2.0894,scaleY:2.0894,x:73.0418,y:69.3463}},{t:this.shape_11,p:{scaleX:2.0894,scaleY:2.0894,x:88.3992,y:85.3306}},{t:this.shape_10,p:{scaleX:2.0908,scaleY:2.0908,x:105.0876,y:65.6421}},{t:this.shape_9,p:{scaleX:2.0908,scaleY:2.0908,x:105.5153,y:64.4526}},{t:this.shape_8,p:{scaleX:2.0908,scaleY:2.0908,x:64.5887,y:243.8271}},{t:this.shape_7,p:{scaleX:2.0908,scaleY:2.0908,x:39.186,y:100.6623}},{t:this.shape_6,p:{scaleX:2.0908,scaleY:2.0908,x:34.5899,y:94.0242}},{t:this.shape_5,p:{scaleX:2.0908,scaleY:2.0908,x:38.3497,y:103.5456}},{t:this.shape_4,p:{scaleX:2.0908,scaleY:2.0908,x:42.1131,y:109.7475}},{t:this.shape_3,p:{scaleX:2.0908,scaleY:2.0908,x:146.8601,y:12.6414}},{t:this.shape_2,p:{scaleX:2.0908,scaleY:2.0908,x:147.9055,y:16.0389}},{t:this.shape_1,p:{scaleX:2.0908,scaleY:2.0908,x:96.4728,y:184.5669}},{t:this.shape,p:{scaleX:2.0908,scaleY:2.0908,x:97.3007,y:183.5737}}]},3).to({state:[{t:this.shape_29,p:{scaleX:2.0908,scaleY:2.0908,x:145.7625,y:152.538}},{t:this.shape_28,p:{scaleX:2.0901,scaleY:2.0901,x:133.9956,y:27.6075}},{t:this.shape_27,p:{scaleX:2.0901,scaleY:2.0901,x:32.6555,y:49.3709}},{t:this.shape_26,p:{scaleX:2.0901,scaleY:2.0901,x:133.9589,y:26.014}},{t:this.shape_25,p:{scaleX:2.0901,scaleY:2.0901,x:32.6555,y:49.3427}},{t:this.shape_24,p:{scaleX:2.0901,scaleY:2.0901,x:36.5382,y:184.9918}},{t:this.instance_2,p:{regX:8.3,regY:20.2,scaleX:2.0908,scaleY:2.0908,x:55.45,y:176.3}},{t:this.shape_23,p:{scaleX:2.0898,scaleY:2.0898,rotation:149.9872,x:271.4608,y:202.4227}},{t:this.shape_22,p:{rotation:149.9872,x:234.7107,y:205.3127,scaleX:2.089,scaleY:2.089}},{t:this.shape_21,p:{scaleX:2.0901,scaleY:2.0901,x:88.1474,y:80.0032}},{t:this.instance_1,p:{regX:30.9,regY:19.7,scaleX:2.0908,scaleY:2.0908,x:88.15,y:101.25}},{t:this.shape_20,p:{scaleX:2.0901,scaleY:2.0901,x:86.8933,y:69.0302}},{t:this.shape_19,p:{scaleX:2.0901,scaleY:2.0901,x:107.0627,y:210.2092}},{t:this.shape_18,p:{scaleX:2.0908,scaleY:2.0908,x:107.188,y:210.5253}},{t:this.instance,p:{regX:38.6,regY:30.7,scaleX:2.0908,scaleY:2.0908,x:107.3,y:235.7}},{t:this.shape_17,p:{scaleX:2.0901,scaleY:2.0901,x:42.3222,y:284.9363}},{t:this.shape_16,p:{scaleX:2.0901,scaleY:2.0901,x:176.3491,y:251.9534}},{t:this.shape_15,p:{scaleX:2.0901,scaleY:2.0901,x:42.7781,y:289.0119}},{t:this.shape_14,p:{scaleX:2.0901,scaleY:2.0901,x:176.7841,y:256.0408}},{t:this.shape_13,p:{scaleX:2.0901,scaleY:2.0901,x:91.1388,y:106.7344}},{t:this.shape_12,p:{scaleX:2.0894,scaleY:2.0894,x:73.0418,y:69.3463}},{t:this.shape_11,p:{scaleX:2.0894,scaleY:2.0894,x:88.3992,y:85.3306}},{t:this.shape_10,p:{scaleX:2.0908,scaleY:2.0908,x:105.0876,y:65.6421}},{t:this.shape_9,p:{scaleX:2.0908,scaleY:2.0908,x:105.5153,y:64.4526}},{t:this.shape_8,p:{scaleX:2.0908,scaleY:2.0908,x:64.5887,y:243.8271}},{t:this.shape_7,p:{scaleX:2.0908,scaleY:2.0908,x:39.186,y:100.6623}},{t:this.shape_6,p:{scaleX:2.0908,scaleY:2.0908,x:34.5899,y:94.0242}},{t:this.shape_5,p:{scaleX:2.0908,scaleY:2.0908,x:38.3497,y:103.5456}},{t:this.shape_4,p:{scaleX:2.0908,scaleY:2.0908,x:42.1131,y:109.7475}},{t:this.shape_3,p:{scaleX:2.0908,scaleY:2.0908,x:146.8601,y:12.6414}},{t:this.shape_2,p:{scaleX:2.0908,scaleY:2.0908,x:147.9055,y:16.0389}},{t:this.shape_1,p:{scaleX:2.0908,scaleY:2.0908,x:96.4728,y:184.5669}},{t:this.shape,p:{scaleX:2.0908,scaleY:2.0908,x:97.3007,y:183.5737}}]},3).to({state:[{t:this.shape_29,p:{scaleX:2.0908,scaleY:2.0908,x:145.7625,y:152.538}},{t:this.shape_28,p:{scaleX:2.0901,scaleY:2.0901,x:133.9956,y:27.6075}},{t:this.shape_27,p:{scaleX:2.0901,scaleY:2.0901,x:32.6555,y:49.3709}},{t:this.shape_26,p:{scaleX:2.0901,scaleY:2.0901,x:133.9589,y:26.014}},{t:this.shape_25,p:{scaleX:2.0901,scaleY:2.0901,x:32.6555,y:49.3427}},{t:this.shape_24,p:{scaleX:2.0901,scaleY:2.0901,x:36.5382,y:184.9918}},{t:this.instance_2,p:{regX:8.3,regY:20.2,scaleX:2.0908,scaleY:2.0908,x:55.45,y:176.3}},{t:this.shape_23,p:{scaleX:2.0899,scaleY:2.0899,rotation:164.9912,x:275.4434,y:218.5146}},{t:this.shape_22,p:{rotation:164.9913,x:239.1853,y:211.778,scaleX:2.0891,scaleY:2.0891}},{t:this.shape_21,p:{scaleX:2.0901,scaleY:2.0901,x:88.1474,y:80.0032}},{t:this.instance_1,p:{regX:30.9,regY:19.7,scaleX:2.0908,scaleY:2.0908,x:88.15,y:101.25}},{t:this.shape_20,p:{scaleX:2.0901,scaleY:2.0901,x:86.8933,y:69.0302}},{t:this.shape_19,p:{scaleX:2.0901,scaleY:2.0901,x:107.0627,y:210.2092}},{t:this.shape_18,p:{scaleX:2.0908,scaleY:2.0908,x:107.188,y:210.5253}},{t:this.instance,p:{regX:38.6,regY:30.7,scaleX:2.0908,scaleY:2.0908,x:107.3,y:235.7}},{t:this.shape_17,p:{scaleX:2.0901,scaleY:2.0901,x:42.3222,y:284.9363}},{t:this.shape_16,p:{scaleX:2.0901,scaleY:2.0901,x:176.3491,y:251.9534}},{t:this.shape_15,p:{scaleX:2.0901,scaleY:2.0901,x:42.7781,y:289.0119}},{t:this.shape_14,p:{scaleX:2.0901,scaleY:2.0901,x:176.7841,y:256.0408}},{t:this.shape_13,p:{scaleX:2.0901,scaleY:2.0901,x:91.1388,y:106.7344}},{t:this.shape_12,p:{scaleX:2.0894,scaleY:2.0894,x:73.0418,y:69.3463}},{t:this.shape_11,p:{scaleX:2.0894,scaleY:2.0894,x:88.3992,y:85.3306}},{t:this.shape_10,p:{scaleX:2.0908,scaleY:2.0908,x:105.0876,y:65.6421}},{t:this.shape_9,p:{scaleX:2.0908,scaleY:2.0908,x:105.5153,y:64.4526}},{t:this.shape_8,p:{scaleX:2.0908,scaleY:2.0908,x:64.5887,y:243.8271}},{t:this.shape_7,p:{scaleX:2.0908,scaleY:2.0908,x:39.186,y:100.6623}},{t:this.shape_6,p:{scaleX:2.0908,scaleY:2.0908,x:34.5899,y:94.0242}},{t:this.shape_5,p:{scaleX:2.0908,scaleY:2.0908,x:38.3497,y:103.5456}},{t:this.shape_4,p:{scaleX:2.0908,scaleY:2.0908,x:42.1131,y:109.7475}},{t:this.shape_3,p:{scaleX:2.0908,scaleY:2.0908,x:146.8601,y:12.6414}},{t:this.shape_2,p:{scaleX:2.0908,scaleY:2.0908,x:147.9055,y:16.0389}},{t:this.shape_1,p:{scaleX:2.0908,scaleY:2.0908,x:96.4728,y:184.5669}},{t:this.shape,p:{scaleX:2.0908,scaleY:2.0908,x:97.3007,y:183.5737}}]},3).to({state:[{t:this.shape_29,p:{scaleX:2.0908,scaleY:2.0908,x:145.7625,y:152.538}},{t:this.shape_28,p:{scaleX:2.0901,scaleY:2.0901,x:133.9956,y:27.6075}},{t:this.shape_27,p:{scaleX:2.0901,scaleY:2.0901,x:32.6555,y:49.3709}},{t:this.shape_26,p:{scaleX:2.0901,scaleY:2.0901,x:133.9589,y:26.014}},{t:this.shape_25,p:{scaleX:2.0901,scaleY:2.0901,x:32.6555,y:49.3427}},{t:this.shape_24,p:{scaleX:2.0901,scaleY:2.0901,x:36.5382,y:184.9918}},{t:this.instance_2,p:{regX:8.3,regY:20.2,scaleX:2.0908,scaleY:2.0908,x:55.45,y:176.3}},{t:this.shape_23,p:{scaleX:2.0899,scaleY:2.0899,rotation:179.9912,x:272.2676,y:233.2631}},{t:this.shape_22,p:{rotation:179.9912,x:238.9921,y:217.3811,scaleX:2.0891,scaleY:2.0891}},{t:this.shape_21,p:{scaleX:2.0901,scaleY:2.0901,x:88.1474,y:80.0032}},{t:this.instance_1,p:{regX:30.9,regY:19.7,scaleX:2.0908,scaleY:2.0908,x:88.15,y:101.25}},{t:this.shape_20,p:{scaleX:2.0901,scaleY:2.0901,x:86.8933,y:69.0302}},{t:this.shape_19,p:{scaleX:2.0901,scaleY:2.0901,x:107.0627,y:210.2092}},{t:this.shape_18,p:{scaleX:2.0908,scaleY:2.0908,x:107.188,y:210.5253}},{t:this.instance,p:{regX:38.6,regY:30.7,scaleX:2.0908,scaleY:2.0908,x:107.3,y:235.7}},{t:this.shape_17,p:{scaleX:2.0901,scaleY:2.0901,x:42.3222,y:284.9363}},{t:this.shape_16,p:{scaleX:2.0901,scaleY:2.0901,x:176.3491,y:251.9534}},{t:this.shape_15,p:{scaleX:2.0901,scaleY:2.0901,x:42.7781,y:289.0119}},{t:this.shape_14,p:{scaleX:2.0901,scaleY:2.0901,x:176.7841,y:256.0408}},{t:this.shape_13,p:{scaleX:2.0901,scaleY:2.0901,x:91.1388,y:106.7344}},{t:this.shape_12,p:{scaleX:2.0894,scaleY:2.0894,x:73.0418,y:69.3463}},{t:this.shape_11,p:{scaleX:2.0894,scaleY:2.0894,x:88.3992,y:85.3306}},{t:this.shape_10,p:{scaleX:2.0908,scaleY:2.0908,x:105.0876,y:65.6421}},{t:this.shape_9,p:{scaleX:2.0908,scaleY:2.0908,x:105.5153,y:64.4526}},{t:this.shape_8,p:{scaleX:2.0908,scaleY:2.0908,x:64.5887,y:243.8271}},{t:this.shape_7,p:{scaleX:2.0908,scaleY:2.0908,x:39.186,y:100.6623}},{t:this.shape_6,p:{scaleX:2.0908,scaleY:2.0908,x:34.5899,y:94.0242}},{t:this.shape_5,p:{scaleX:2.0908,scaleY:2.0908,x:38.3497,y:103.5456}},{t:this.shape_4,p:{scaleX:2.0908,scaleY:2.0908,x:42.1131,y:109.7475}},{t:this.shape_3,p:{scaleX:2.0908,scaleY:2.0908,x:146.8601,y:12.6414}},{t:this.shape_2,p:{scaleX:2.0908,scaleY:2.0908,x:147.9055,y:16.0389}},{t:this.shape_1,p:{scaleX:2.0908,scaleY:2.0908,x:96.4728,y:184.5669}},{t:this.shape,p:{scaleX:2.0908,scaleY:2.0908,x:97.3007,y:183.5737}}]},3).to({state:[{t:this.shape_29,p:{scaleX:2.0908,scaleY:2.0908,x:145.7625,y:152.538}},{t:this.shape_28,p:{scaleX:2.0901,scaleY:2.0901,x:133.9956,y:27.6075}},{t:this.shape_27,p:{scaleX:2.0901,scaleY:2.0901,x:32.6555,y:49.3709}},{t:this.shape_26,p:{scaleX:2.0901,scaleY:2.0901,x:133.9589,y:26.014}},{t:this.shape_25,p:{scaleX:2.0901,scaleY:2.0901,x:32.6555,y:49.3427}},{t:this.shape_24,p:{scaleX:2.0901,scaleY:2.0901,x:36.5382,y:184.9918}},{t:this.instance_2,p:{regX:8.3,regY:20.2,scaleX:2.0908,scaleY:2.0908,x:55.45,y:176.3}},{t:this.shape_23,p:{scaleX:2.0899,scaleY:2.0899,rotation:179.9912,x:272.2676,y:233.2631}},{t:this.shape_22,p:{rotation:179.9912,x:238.9921,y:217.3811,scaleX:2.0891,scaleY:2.0891}},{t:this.shape_21,p:{scaleX:2.0901,scaleY:2.0901,x:88.1474,y:80.0032}},{t:this.instance_1,p:{regX:30.9,regY:19.7,scaleX:2.0908,scaleY:2.0908,x:88.15,y:101.25}},{t:this.shape_20,p:{scaleX:2.0901,scaleY:2.0901,x:86.8933,y:69.0302}},{t:this.shape_19,p:{scaleX:2.0901,scaleY:2.0901,x:107.0627,y:210.2092}},{t:this.shape_18,p:{scaleX:2.0908,scaleY:2.0908,x:107.188,y:210.5253}},{t:this.instance,p:{regX:38.6,regY:30.7,scaleX:2.0908,scaleY:2.0908,x:107.3,y:235.7}},{t:this.shape_17,p:{scaleX:2.0901,scaleY:2.0901,x:42.3222,y:284.9363}},{t:this.shape_16,p:{scaleX:2.0901,scaleY:2.0901,x:176.3491,y:251.9534}},{t:this.shape_15,p:{scaleX:2.0901,scaleY:2.0901,x:42.7781,y:289.0119}},{t:this.shape_14,p:{scaleX:2.0901,scaleY:2.0901,x:176.7841,y:256.0408}},{t:this.shape_13,p:{scaleX:2.0901,scaleY:2.0901,x:91.1388,y:106.7344}},{t:this.shape_12,p:{scaleX:2.0894,scaleY:2.0894,x:73.0418,y:69.3463}},{t:this.shape_11,p:{scaleX:2.0894,scaleY:2.0894,x:88.3992,y:85.3306}},{t:this.shape_10,p:{scaleX:2.0908,scaleY:2.0908,x:105.0876,y:65.6421}},{t:this.shape_9,p:{scaleX:2.0908,scaleY:2.0908,x:105.5153,y:64.4526}},{t:this.shape_8,p:{scaleX:2.0908,scaleY:2.0908,x:64.5887,y:243.8271}},{t:this.shape_7,p:{scaleX:2.0908,scaleY:2.0908,x:39.186,y:100.6623}},{t:this.shape_6,p:{scaleX:2.0908,scaleY:2.0908,x:34.5899,y:94.0242}},{t:this.shape_5,p:{scaleX:2.0908,scaleY:2.0908,x:38.3497,y:103.5456}},{t:this.shape_4,p:{scaleX:2.0908,scaleY:2.0908,x:42.1131,y:109.7475}},{t:this.shape_3,p:{scaleX:2.0908,scaleY:2.0908,x:146.8601,y:12.6414}},{t:this.shape_2,p:{scaleX:2.0908,scaleY:2.0908,x:147.9055,y:16.0389}},{t:this.shape_1,p:{scaleX:2.0908,scaleY:2.0908,x:96.4728,y:184.5669}},{t:this.shape,p:{scaleX:2.0908,scaleY:2.0908,x:97.3007,y:183.5737}}]},2).to({state:[]},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,-0.3,303.8,321.90000000000003);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOAQQgIgEgCgHQgBgGAGgHQAHgGAJgDQAJgCAJAEQAIAEABAHQACAGgGAHQgGAGgKACIgGABQgGAAgGgCg");
	this.shape.setTransform(42.0464,92.7395,2.09,2.09);

	this.instance = new lib.Path_1_4();
	this.instance.setTransform(44.8,93.7,2.09,2.09,0,0,0,5.9,4);
	this.instance.alpha = 0.5;
	this.instance.compositeOperation = "screen";

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#751803").s().p("AglAtQgUgIgKgPQgLgPAEgOQADgMAMgKQASgSAYgCQAmgEAYAKQAYAKAFAUQAGAUgLAQQgLAOgUAIQgTAHgTAAIgCAAQgSAAgRgHgAgUguQgbAEgTAYIAAABIgDAFQgHASAPARQANAPAVAGQAVAGAVgDQAXgEARgNQAUgQgFgWQgGgagegIQgTgFgQAAIgTABg");
	this.shape_1.setTransform(48.1026,96.6784,2.09,2.09);

	this.instance_1 = new lib.Path_2_5();
	this.instance_1.setTransform(48.65,95.75,2.09,2.09,0,0,0,7.4,5.8);
	this.instance_1.alpha = 0.3984;
	this.instance_1.compositeOperation = "multiply";

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E20000").s().p("AglAtQgUgIgKgPQgLgPAEgOQADgMAMgKQASgSAYgCQAmgEAYAKQAYAKAFAUQAGAUgLAQQgLAOgUAIQgTAHgTAAIgCAAQgSAAgRgHg");
	this.shape_2.setTransform(48.1026,96.6784,2.09,2.09);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#706557").s().p("AgSAmQgKgIgBgNQgDgXAMgRQAJgOAKgDQAPgEAJAMQAJALgBAQQgDAlgWAIQgGACgEAAQgHAAgHgEgAgHgiQgOAJgFAUQgDAOADAMQAFAOALAEQAIACAHgDQAIgDAFgHQAIgNACgPQABgRgGgLQgFgGgIgEIgGgBQgFAAgGAFg");
	this.shape_3.setTransform(36.5608,84.146,2.09,2.09);

	this.instance_2 = new lib.Path_41();
	this.instance_2.setTransform(36.25,83.1,2.09,2.09,0,0,0,3.3,4.7);
	this.instance_2.compositeOperation = "multiply";

	this.instance_3 = new lib.Path_40();
	this.instance_3.setTransform(35.9,84.5,2.0894,2.0894,0,0,0,2.3,2);
	this.instance_3.compositeOperation = "screen";

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgEABQgBgJAFAAQAEgBABAJQABAIgFABIgBABQgDAAgBgJg");
	this.shape_4.setTransform(38.3814,79.101,2.0894,2.0894);

	this.instance_4 = new lib.Path_2_4();
	this.instance_4.setTransform(37.5,78.1,2.0894,2.0894,0,0,0,1.4,1.9);
	this.instance_4.alpha = 0.3984;

	this.instance_5 = new lib.CompoundPath_4();
	this.instance_5.setTransform(34.65,79.55,2.0894,2.0894,0,0,0,1.7,2.4);
	this.instance_5.alpha = 0.5;
	this.instance_5.compositeOperation = "multiply";

	this.instance_6 = new lib.CompoundPath_1_2();
	this.instance_6.setTransform(34.75,80,2.0894,2.0894,0,0,0,1.8,2.8);
	this.instance_6.alpha = 0.5;
	this.instance_6.compositeOperation = "multiply";

	this.instance_7 = new lib.Path_3_5();
	this.instance_7.setTransform(35.7,81.65,2.0894,2.0894,0,0,0,2.8,4.1);
	this.instance_7.compositeOperation = "multiply";

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#44BC1D").s().p("AgIAfQgIgEgDgLQgCgLAGgOQAGgSALgEQAFgCAFAFQAEADACAHQAEALgDANQgEAOgIAHQgFAFgEAAIgGgBg");
	this.shape_5.setTransform(36.4838,82.4458,2.0894,2.0894);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgSAmQgKgIgBgNQgDgXAMgRQAJgOAKgDQAPgEAJAMQAJALgBAQQgDAlgWAIQgGACgEAAQgHAAgHgEg");
	this.shape_6.setTransform(36.5608,84.146,2.09,2.09);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#706557").s().p("AgJAuQgQgCgIgOQgHgOAEgPQAHgaATgNQAOgJAMACQASAFAEASQAEARgIAPQgRAkgWAAIgEAAgAAIgqQgSACgNATQgKAOgBANQgCASALALQAHAHAJABQAJACAHgGQAOgJAIgQQAJgQgCgPQgCgLgHgHQgIgIgIAAIgDABg");
	this.shape_7.setTransform(77.0473,85.6971,2.09,2.09);

	this.instance_8 = new lib.Path_39();
	this.instance_8.setTransform(76.15,84.8,2.09,2.09,0,0,0,4.1,5.1);
	this.instance_8.compositeOperation = "multiply";

	this.instance_9 = new lib.Path_38();
	this.instance_9.setTransform(74.15,87.25,2.0894,2.0894,0,0,0,3,2.1);
	this.instance_9.compositeOperation = "screen";

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAAAKQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBgBAAgBQgCgDABgEQAAgEACgDQACgDACAAQAGAAAAAKQgBALgGAAIAAgBg");
	this.shape_8.setTransform(78.5384,80.9837,2.0894,2.0894);

	this.instance_10 = new lib.Path_2_3();
	this.instance_10.setTransform(77.85,79.9,2.0894,2.0894,0,0,0,1.7,2);
	this.instance_10.alpha = 0.3984;

	this.instance_11 = new lib.CompoundPath_3();
	this.instance_11.setTransform(73,81.05,2.0894,2.0894,0,0,0,1.9,2.7);
	this.instance_11.alpha = 0.5;
	this.instance_11.compositeOperation = "multiply";

	this.instance_12 = new lib.CompoundPath_1_1();
	this.instance_12.setTransform(73.95,81.15,2.0894,2.0894,0,0,0,2.5,2.8);
	this.instance_12.alpha = 0.5;
	this.instance_12.compositeOperation = "multiply";

	this.instance_13 = new lib.Path_3_4();
	this.instance_13.setTransform(74.15,83.35,2.0894,2.0894,0,0,0,3.6,4.4);
	this.instance_13.compositeOperation = "multiply";

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#44BC1D").s().p("AgRAfQgKgGgBgNQAAgMAKgOQALgTARgBQAGgBAGAHQAFAFABAIQACAMgHAOQgHAPgMAGQgEADgGAAQgGAAgFgEg");
	this.shape_9.setTransform(75.3243,84.2299,2.0894,2.0894);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgJAuQgQgCgIgOQgHgOAEgPQAHgaATgNQAOgJAMACQASAFAEASQAEARgIAPQgRAkgWAAIgEAAg");
	this.shape_10.setTransform(77.0473,85.6971,2.09,2.09);

	this.instance_14 = new lib.Path_36();
	this.instance_14.setTransform(71.45,24.5,2.0906,2.0906,0,0,0,1.1,4.7);
	this.instance_14.compositeOperation = "overlay";

	this.instance_15 = new lib.Path_1_3();
	this.instance_15.setTransform(65.6,36.4,2.0906,2.0906,0,0,0,5,8.3);
	this.instance_15.compositeOperation = "overlay";

	this.instance_16 = new lib.CompoundPath_0();
	this.instance_16.setTransform(70.35,60.75,2.0906,2.0906,0,0,0,3.6,2.8);
	this.instance_16.alpha = 0.3984;
	this.instance_16.compositeOperation = "overlay";

	this.instance_17 = new lib.CompoundPath_1_0();
	this.instance_17.setTransform(124.35,66.5,2.0906,2.0906,0,0,0,10.2,8.3);
	this.instance_17.alpha = 0.3984;
	this.instance_17.compositeOperation = "overlay";

	this.instance_18 = new lib.CompoundPath_2();
	this.instance_18.setTransform(30.65,46.95,2.0906,2.0906,0,0,0,11.7,6.8);
	this.instance_18.alpha = 0.3984;
	this.instance_18.compositeOperation = "overlay";

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhxASIAAgBIA8AIQAiACAYgHQAfgHAXgMQARgHAfgUIAIgFQgWAUgfAQQghASgcAFQgSAEgUAAQgmAAgmgOg");
	this.shape_11.setTransform(57.913,111.5195,2.09,2.09);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CE4D00").s().p("Ag+AcIgkgHIgUgJIgCgBIAWAIIARAEQATACAWAAIAYgBQAMgBALgDQAMgBALgDQAMgCALgEIAegKIAJgFIAOgJIAPgNIgFAGIgJAJIgOAKIgIAEIgKAEIgVAIIgWAHIgZAFQgLACgMAAg");
	this.shape_12.setTransform(58.2962,115.0779,2.09,2.09);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CE4D00").s().p("AgWAcIgSgCIgRgFIgLgGIgJgHIgFgFIAFAEIAKAHIALAFIALADIALACIAMAAIAMAAIAVgDIAXgIIAKgFIASgNIAHgIIACgCIgBAAIgzAPIg0AEIgVAAIgfgEIAqACIAqgDIAxgLIAmgPIgVAaIgJAHIgVAMIgXAHIgWADg");
	this.shape_13.setTransform(58.4905,119.8969,2.0894,2.0894);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.rf(["#BE2E1A","#3B0006"],[0.51,0.996],-14.3,-8.6,0,-14.3,-8.6,21.5).s().p("AhRgCQAmAHAvgGQAsgHAigPQgIALgMAMQgbAXgtABIgFAAQguAAgUgag");
	this.shape_14.setTransform(57.7069,120.3226,2.0894,2.0894);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CE4D00").s().p("AgSBKQg6gBgngeQgvgkAKgaQADgGAJgBQAIAAAHACIAdAJQARAFANABQAjACAjgIQAngIAbgSQAUgRALgGQASgMASAEIAAAAQAjAOgjAzQgeArgbAPQgrAXgzAAIgEAAgAiSAAQAJATASAOQAiAcAxAHQAuAGArgQQArgQAcgpQARgYAEgLQAKgagUgHIAAgBQgRgDgVAOIgiAaQgcAPgwAJQgxAHgngLIgRgGIgNgDQgWAGAHAOg");
	this.shape_15.setTransform(56.8978,116.7677,2.0889,2.0889);

	this.instance_19 = new lib.CompoundPath();
	this.instance_19.setTransform(55.95,115.85,2.0894,2.0894,0,0,0,15.8,7.8);
	this.instance_19.compositeOperation = "multiply";

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FC6929").s().p("AhPA8QgngQgWgfQgHgJgDgJQgDgNAKgDQAJgFAWAJQAtARA9gKQAygKAcgTIAegWQATgNAQAFQARAFgCASQgCANgKAQQgPAYgLANQgQATgTALQgkAUgvACIgFAAQgmAAgggMg");
	this.shape_16.setTransform(56.923,116.8863,2.0894,2.0894);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#FF8F82","#F4DC28","#FFFCCE"],[0.196,0.565,0.992],-0.2,6.9,0.3,-9.9).s().p("AhPA8QgngQgWgfQgHgJgDgJQgDgNAKgDQAJgFAWAJQAtARA9gKQAygKAcgTIAegWQATgNAQAFQARAFgCASQgCANgKAQQgPAYgLANQgQATgTALQgkAUgvACIgFAAQgmAAgggMg");
	this.shape_17.setTransform(57.094,117.1348,2.09,2.09);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00541F").s().p("Ah6AOIABgDQAmAVBAgGQA6gEArgVQAWgKARgUIACABQgSAWgWAJQgtAWg5AEIgXABQgyAAgegQg");
	this.shape_18.setTransform(58.5574,114.7644,2.09,2.09);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#033344").s().p("AAqCZQgkgEg0gUQhtgogOhMQgIgqAXgUQAZgVAlgCQgBgVgDgKQgDgPAAgFQABgKAJgHQALgKAWgCQAkgEAlAIQAaAFAoAOQAeALAOAKQA0AkgYAZIgeAmIADACQAvAkgDAkQgBAVgLATQgMATgRAMQgdASgnAAIgVgBgAh7g7QgSAGgKAKQgNANgBAUQgBARAHATQAaBGBiAgQAuAQAgADQAvAFAfgTQATgLANgTQANgVgBgVQgCgTgNgSQgJgNgUgOIgFAIIgRAjQgKAVgJANIgBgBQAXg2ANgYQAFgJAJgLIARgUIgBgCQgiAKgwgBQgzgBgigQQg0gXgOgaIACALQACATgBATQgBAqgRAcQgDACACgDQAOgmgCgoIAAgFIgfAKgAgxiQQgdADgLAPQgBARAfAXQAjAYAXAGQAkAMAnABQArABAigMQAHgLgHgKIgOgPQgRgRgWgIQg+gYghgDQgXgCgPAAIgOAAg");
	this.shape_19.setTransform(90.0648,32.2076,2.0906,2.0906);

	this.instance_20 = new lib.Path_2_2();
	this.instance_20.setTransform(88.35,40.4,2.0906,2.0906,0,0,0,10.2,4.4);
	this.instance_20.alpha = 0.5;
	this.instance_20.compositeOperation = "multiply";

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CE4D00").s().p("AgZAvQgpgQgYgeQgIgJgCgGIAGgUIADgNIADgIQAGABAAACQAAAFADAHIAFALQAGAOAHAIQATAUAdAIQAcAIAcgCQAfgDAXgOQAAgBAAAAQABAAAAAAQABABABAAQAAAAABABIgBADIgBAAIgHAPQgFAJgCAGIAAADQgSAHgQABIgUABQgdAAgbgJgAhYgdIgDAOQAAAGAFAGQAWAiAoANQApAOAngJQARgDAIgFQADgBADgGIADgJIACgFQgaAMgggBQgeAAgagKQgggMgPgSQgLgOgGgMg");
	this.shape_20.setTransform(89.199,37.7296,2.0906,2.0906);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFBE1D").s().p("AhMAPQgSgRgEgPQACgEAEgOIAEgTQAAAEADAJIAGANQAOAeAiAPQAdANAlgBQAngBAagQQgDABgEANIgIARQgbALgXAAIgIABQg8AAgrgog");
	this.shape_21.setTransform(89.4603,37.6756,2.0906,2.0906);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#897668").s().p("AgOAgQgLgIACgIQABgFAEgEIAIgIQABgCgCgGQgDgHABgDQADgIAGgDQARgIALAKIAAABQgGgEgJACQgJABgEAFQgDAFACAFIADAKQABADgHAFIgIAJQgEAIAIAEQAIAFAFgDQAGgCAEgEIAJgJQABAAgBAAQgOAVgLAAQgFAAgEgCg");
	this.shape_22.setTransform(114.6731,100.1013,2.0906,2.0906);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B8004D").s().p("ADHBqQgVgDgKgTQgKgSAKgTQgTgCgLgOQgLgPAGgRQgVAGgUgFQgXgFgHgSQgQATgkACQgRABgOgEQgTgFgHgMQgNAYgjAGQglAGgKgZQgQAFgPgJQgOgIgIgQQgJgSAGgTQAGgUASgJIAAAAQgPAMgEASQgEASAJARQARAdAmgJQABAAAAAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAABIgHADQAQAVAdgIQAZgFATgWIAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABABIAAAAIACgDIABAAIABABIgCAEQAXAVAkgDQAngDAQgaQAAgBAAAAQAAAAAAAAQAAABABAAQAAAAAAABQgBAEgFAIQASAYAmgEQAmgFAAghQAAgBAAAAQAAAAABAAQAAAAAAAAQAAAAABABQAFAZgZANQgDAXAKALQAHAGAKADQAHACANACQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgLABQgFAYAHAKQAEAHAIAFIAOAJQABAAAAAAQAAABAAAAQAAAAAAAAQAAABAAAAIgBABIgBAAg");
	this.shape_23.setTransform(67.1669,73.8932,2.0906,2.0906);

	this.instance_21 = new lib.CompoundPath_6();
	this.instance_21.setTransform(48.35,97.25,2.0906,2.0906,0,0,0,8.3,6.2);
	this.instance_21.compositeOperation = "multiply";

	this.instance_22 = new lib.CompoundPath_7();
	this.instance_22.setTransform(52.8,92.2,2.0906,2.0906,0,0,0,15.7,9);
	this.instance_22.compositeOperation = "multiply";

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#897668").s().p("AhHChQgngCgbgSQAAABAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQglgDgugfQgmgagKgbQgHgTADgUQAEgSAMgRQAGgJAKgIQgJgIgBgNQgBgMAHgKQATgYARACIAEgLQANgeAYgVIABAAQAAABAAAAQABAAAAAAQAAABgBAAQAAAAAAAAQgZAZgKAoIgBAAIgEAVQAAAAAAABQABAAAAAAQAAABgBAAQAAABAAAAIgFAXQAGAAAFACIABABIgCABQgHgBgGACIgCACIgDAAQgIAEgLAKQgQAQgGAPQgNAjAUAcQAQAZAhASQAVAMANAFIAdAIIgKgJIAAgCIABAAQAnAaApACQAzAEA0gbIgRAMIgBAAQApgDANgDQAlgIAYgRQAkgYAOgbQAMgYgHgWIgNggQAAgBAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIANAYQAGAOABALIABABQAMAKAUgJQAPgIANgOQAcgfgPgbQgJgPgNgFQgPgGgOAJQgWAPgFAZIgBABIgBgBQABgQAJgOQAKgOAPgFQAQgFAPAIQANAHAIARQAIARgHATQgGARgQANQgkAhgXgOQgBAJgDAIQgKAdgiAZQgfAYgkAIQgsALgkgCQgdAMgeAAIgJgBgAjlhVQgIAFgEAJQgJAPALATQAIgFAJgDIAAgBQADgEACgIIABgOQgGgCgFAHQgGAIABAJQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAQgEgEACgIQACgGAEgEQAGgIAIABIADgOQgJABgIAGg");
	this.shape_24.setTransform(68.5406,104.0385,2.0906,2.0906);

	this.instance_23 = new lib.Path_5_1();
	this.instance_23.setTransform(89.75,34.4,2.0906,2.0906,0,0,0,17.4,14);
	this.instance_23.alpha = 0.3984;
	this.instance_23.compositeOperation = "multiply";

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#3360D1").s().p("AAqCZQgkgEg0gUQhtgogOhMQgIgqAXgUQAZgVAlgCQgBgVgDgKQgDgPAAgFQABgKAJgHQALgKAWgCQAkgEAlAIQAaAFAoAOQAeALAOAKQA0AkgYAZIgeAmIADACQAvAkgDAkQgBAVgLATQgMATgRAMQgdASgnAAIgVgBg");
	this.shape_25.setTransform(90.0648,32.2076,2.0906,2.0906);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FC6929").s().p("AghBDIgBgDQgCgFgBgIIgBgOQgGgWgNgHQAAAAAAgBQgBAAAAgBQABAAAAAAQAAgBABAAIABgBQAVgSAJgMIAJgLIAIgNIABgFIABAAIABgBQgBgEABgDIABAAIgBgDIAAgBIABAAQADACAAAEQABADAEAIQAHAMAGAIQAMANAGAFQAMAKALgCIAAAAIgFADIgBAAIgMAFIgNAGQgSALgHAHIgSATIgQAVIgBABIAAgCg");
	this.shape_26.setTransform(38.3835,84.243,2.0906,2.0906);

	this.instance_24 = new lib.Path_6_3();
	this.instance_24.setTransform(68.7,102.7,2.0906,2.0906,0,0,0,27.7,16.6);
	this.instance_24.compositeOperation = "multiply";

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FC6929").s().p("AgoAXQgMgZgXgJQASABAbgSIAfgVQAQgNAFgGIAEgEQAAAIAGAMIASAoQANAaANAMQgRAAgbAKQgTAHgNAHIgMAKIgQANQgBgbgLgXg");
	this.shape_27.setTransform(76.9691,85.6919,2.0906,2.0906);

	this.instance_25 = new lib.Path_7_3();
	this.instance_25.setTransform(21.8,87,2.0906,2.0906,0,0,0,1.9,3.5);
	this.instance_25.alpha = 0.5;
	this.instance_25.compositeOperation = "multiply";

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AhHCiQgmgCgbgSQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBAAQgngEgrgdQgmgYgKgcQgHgTADgTQADgTAMgPQAKgMAHgFQgJgIgBgMQgBgNAHgKQASgXASACIAEgLQALgbAUgSQAGACAHAAIAMgCIABABQAMAMAQADQAQAEAQgGQAGgCAGgEIALgJQADgBADgEIAFgHQAHAGAKAFQAMAGAIAAIAPACIAOAAQAYgBAUgPQAUAdAxgJIABAAIgBAEQAAAVAOAMQAMAKAKADQgFAWAIAOQAEAIAQAIQAAAAABAAQAAAAABAAQAAAAABAAQABgBAAAAIABAAIAAgBIAAgBQALgWATgGQARgGAOAIQANAHAIARQAIAQgHAUQgGAQgPANQgkAggYgOQgBAJgCAIQgLAdghAYQgfAXglAJQgsAKgjgCQgdAMgeAAIgJgBg");
	this.shape_28.setTransform(68.5474,103.0193,2.0906,2.0906);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B8004D").s().p("AgQEGQhIgBg/gVQhAgVgegUQgwgfgCgjQgUAIgRgEQgTgFgHgTQgEgOADgOQAEgQAMgGQgUgFgEgcQgEgcARgLQgKgHgEgOQgEgOAEgNQAFgTAPgNQAQgOASAEQgFgWATgSQATgTAUALQAHgQAOgDQACgMAMgKQANgKAMAAQgEgHACgJQAGgUAZgOQAbgQAUADQAZACAOAQQAMgUAcACQAcABANARQAJgKARgCQAQgDAOAFQAUAGAKAQIABAAQAagGAXASQAXASgDAYQAWgEATAIQAWAJAEAUQAPgFAQAIQARAJgCAPQAZgFATAXQASAXgMAWQAXgBASAOQAJAHAEAKQAEAMgHAHQAFAHAAADQACAJgCAIQgCALgHADQAHAJABASQAAAOgEANQgJAbgcAIQAHANgJAOQgIAOgPAFQAGATgSAUQgPAQgVAHQgNAEgNgBQgPgBgJgGQgLAZgiAFQghAEgSgVQgKAIgSAEIgeAFQgaAEgcAAIgNgBgAkcCAIgHADQARAsArAYQAfASA4ARQA+AUA/ACQBDACA5gUIgEgJIABgBIABAAIAGAJIABgBQAAAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAIAAACQASARAdgFQAcgFANgVQgHgHgCgJQAAAAAAAAQAAAAAAAAQAAgBAAAAQABAAAAAAIABAAQAFAIAGAFIACABQAHAGAJABQAPADASgHQAUgHALgNQAGgHADgJIADgRQgMACgJgGQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQAUAFAOgMQAOgMgEgUQgJADgMgDQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAQAWgCANgHQAQgIAFgUQAIgkgVgTQgDgCAEAAQAFABAFADQAKgMgEgMIgEgJIAAgBIgDgDIgLgGIgBAAQAIgHAIAJQAEgKgEgGQgFgIgKgGQgUgLgWAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABgBIAIgCQAGgZgOgRQgOgPgZgEQgBAEgCAEIgBABIgBgBQADgSgOgKQgMgIgSADIgCACQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAIgFABIAAgBIAEgCQgHgTgSgHQgOgGgXABQgCAJgHAJQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAAAQABgBAAAAQAEgIACgJIAAgCQAEgVgPgPQgUgTgdADQADAHABAKQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQgJgfgegHQgXgFgZAOQAHAOgIAQQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAgBQAEgQgHgMQgHgLgRgEQgbgFgVATIAFAKQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAABgBgBQAAAAAAAAQAAAAgBAAQgVgcgbAAQgSAAgUAMQgVAMgHAOQgEALAIAJIAAABIAIAHIgBABQgHgBgFgFQgVAFgLANQgMAPAJATQgLgHABgLQgOAJgEANQgEAMAFAJIgBAAQgIgIAEgRQgZgBgLANQgLANACAUIAAAAIAAABIAAAAIABAIQAAABAAAAQAAAAAAABQAAAAgBAAQAAgBgBAAQgDgEgBgFQgRACgNAJQgOAKgEARQgGAVAJAOQAIANAVAEQAAAAABAAQAAAAAAAAQAAAAAAABQAAAAAAAAIgBABQgLACgKgFQgLATACASQABAWAUAJIADgBIABABIgBABQAAAAAAAAQAAABgBAAQAAAAAAAAQAAAAAAAAIgBAAQgWAXAIAWQAGASAOAEQAKADANgCIAXgGQABAAAAABQAAAAABABQAAAAgBAAQAAABAAAAg");
	this.shape_29.setTransform(78.4325,72.3995,2.0906,2.0906);

	this.instance_26 = new lib.Group_4();
	this.instance_26.setTransform(74,91.8,2.0906,2.0906,0,0,0,35.4,17.1);
	this.instance_26.alpha = 0.5;
	this.instance_26.compositeOperation = "multiply";

	this.instance_27 = new lib.Path_9_2();
	this.instance_27.setTransform(78,88.05,2.0906,2.0906,0,0,0,37.3,18.2);
	this.instance_27.alpha = 0.6992;
	this.instance_27.compositeOperation = "multiply";

	this.instance_28 = new lib.Path_10_2();
	this.instance_28.setTransform(85.85,40.9,2.0906,2.0906,0,0,0,21.1,11.6);
	this.instance_28.alpha = 0.6992;
	this.instance_28.compositeOperation = "multiply";

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#ED4C8A").s().p("AgQEGQhIgBg/gVQhAgVgfgUQgvgfgCgjQgUAIgRgEQgTgFgHgTQgEgOADgOQAEgQAMgGQgUgFgEgcQgEgcARgLQgKgHgEgOQgFgOAEgNQAGgTAPgNQAQgOASAEQgGgVATgTQAUgTATALQAIgQAOgDQACgMAMgKQANgKAMAAQgFgIADgIQAGgTAYgPQAbgQAVADQAaACANAQQAMgUAcACQAcABANARQAJgKARgCQAPgDAOAFQAUAGALAQIABAAQAagGAXASQAXARgDAZQAVgEAUAIQAWAJAEAUQAPgFAQAIQARAJgCAPQAZgFATAXQASAXgMAWQAKAAAMADQAMAEAHAGQAJAHADAKQAEAMgHAHQAEAFACAFQACAJgCAIQgCALgHADQAHAJABASQAAAOgEANQgJAbgcAIQAHANgJAOQgIAOgPAFQAGATgSAUQgPAQgVAHQgNAEgNgBQgPgBgJgGQgLAZgiAFQgiAEgSgVQgJAIgSAEIgeAFQgaAEgcAAIgNgBg");
	this.shape_30.setTransform(78.079,72.3995,2.0906,2.0906);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.shape_29},{t:this.shape_28},{t:this.instance_25},{t:this.shape_27},{t:this.instance_24},{t:this.shape_26},{t:this.shape_25},{t:this.instance_23},{t:this.shape_24},{t:this.instance_22},{t:this.instance_21},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.instance_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.instance_19},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.shape_10},{t:this.shape_9},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.shape_8},{t:this.instance_9},{t:this.instance_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.shape_4},{t:this.instance_3},{t:this.instance_2},{t:this.shape_3},{t:this.shape_2},{t:this.instance_1},{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-0.1,0,156.2,137.9), null);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol5();
	this.instance.setTransform(52.5,69.7,1.0357,1.0365,0,-30.2212,-30.322,76.5,67.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:78,regY:68.9,scaleX:1.0358,scaleY:1.0366,skewX:-26.9627,skewY:-27.0633,x:55.85,y:70.05},0).wait(1).to({skewX:-23.702,skewY:-23.8026,x:57.1,y:70.1},0).wait(1).to({skewX:-20.4413,skewY:-20.5418,x:58.4,y:70.15},0).wait(1).to({skewX:-17.1806,skewY:-17.2811,x:59.7,y:70.25},0).wait(1).to({skewX:-13.9198,skewY:-14.0204,x:61,y:70.35},0).wait(1).to({scaleY:1.0365,skewX:-10.6591,skewY:-10.7597,x:62.2,y:70.4},0).wait(1).to({scaleY:1.0366,skewX:-7.3984,skewY:-7.4989,x:63.55,y:70.45},0).wait(1).to({skewX:-4.1377,skewY:-4.2382,x:64.75,y:70.55},0).wait(1).to({scaleY:1.0365,skewX:-0.877,skewY:-0.9775,x:66.05},0).wait(1).to({scaleY:1.0366,skewX:2.3838,skewY:2.2832,x:67.35,y:70.65},0).wait(1).to({skewX:5.6445,skewY:5.5439,x:68.55,y:70.7},0).wait(1).to({skewX:8.9052,skewY:8.8047,x:69.75,y:70.75},0).wait(1).to({skewX:12.1659,skewY:12.0654,x:71,y:70.8},0).wait(1).to({skewX:15.4266,skewY:15.3261,x:72.2,y:70.85},0).wait(1).to({skewX:18.6874,skewY:18.5868,x:73.45,y:70.9},0).wait(1).to({skewX:21.9481,skewY:21.8476,x:74.7},0).wait(1).to({skewX:25.2088,skewY:25.1083,x:75.9,y:70.95},0).wait(1).to({skewX:28.4695,skewY:28.369,x:77.15,y:71},0).wait(1).to({skewX:31.7303,skewY:31.6297,x:78.35,y:70.95},0).wait(1).to({skewX:34.991,skewY:34.8904,x:79.55},0).wait(1).to({skewX:38.2517,skewY:38.1512,x:80.8},0).wait(1).to({skewX:41.5124,skewY:41.4119,x:82,y:71},0).wait(1).to({skewX:44.7731,skewY:44.6726,x:83.2,y:70.95},0).wait(1).to({skewX:41.5592,skewY:41.4587,x:82.05},0).wait(1).to({skewX:38.3453,skewY:38.2447,x:80.9,y:70.85},0).wait(1).to({skewX:35.1313,skewY:35.0308,x:79.7,y:70.8},0).wait(1).to({skewX:31.9174,skewY:31.8168,x:78.55},0).wait(1).to({skewX:28.7034,skewY:28.6029,x:77.35,y:70.75},0).wait(1).to({skewX:25.4895,skewY:25.3889,x:76.15,y:70.7},0).wait(1).to({skewX:22.2755,skewY:22.175,x:75,y:70.65},0).wait(1).to({skewX:19.0616,skewY:18.961,x:73.8,y:70.55},0).wait(1).to({skewX:15.8476,skewY:15.7471,x:72.6,y:70.5},0).wait(1).to({skewX:12.6337,skewY:12.5331,x:71.45,y:70.45},0).wait(1).to({skewX:9.4197,skewY:9.3192,x:70.2,y:70.35},0).wait(1).to({skewX:6.2058,skewY:6.1053,x:69.1,y:70.25},0).wait(1).to({skewX:2.9918,skewY:2.8913,x:67.85,y:70.1},0).wait(1).to({skewX:-0.2221,skewY:-0.3226,x:66.7,y:70.05},0).wait(1).to({skewX:-3.436,skewY:-3.5366,x:65.5,y:69.9},0).wait(1).to({skewX:-6.65,skewY:-6.7505,x:64.2,y:69.8},0).wait(1).to({skewX:-9.8639,skewY:-9.9645,x:63,y:69.65},0).wait(1).to({skewX:-13.0779,skewY:-13.1784,x:61.75,y:69.6},0).wait(1).to({skewX:-16.2918,skewY:-16.3924,x:60.55,y:69.45},0).wait(1).to({skewX:-19.5058,skewY:-19.6063,x:59.3,y:69.35},0).wait(1).to({skewX:-22.7197,skewY:-22.8203,x:58.05,y:69.25},0).wait(1).to({skewX:-25.9337,skewY:-26.0342,x:56.8,y:69.15},0).wait(1).to({skewX:-29.1476,skewY:-29.2482,x:55.55,y:69},0).wait(1).to({skewX:-32.3616,skewY:-32.4621,x:54.25,y:68.9},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.6,-16.8,197.2,183.8);


(lib.Scene_1_shaddows = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// shaddows
	this.instance = new lib.boyrun();
	this.instance.setTransform(-123.5,646.9,0.7796,0.5539,0,22.1953,0,-520,97.2);

	this.instance_1 = new lib.kidjump();
	this.instance_1.setTransform(444.1,652.75,0.7008,0.6504,0,27.4728,0,1.2,141.3);

	this.instance_2 = new lib.girlshaddow();
	this.instance_2.setTransform(220.45,650.55,0.6189,0.532,0,26.3519,0,120.8,158.1);

	this.instance_3 = new lib.girljump();
	this.instance_3.setTransform(54.45,651.65,0.629,0.6553,0,28.3195,0,113,129.3);

	this.instance_4 = new lib.boy();
	this.instance_4.setTransform(-248.5,647.85,0.6405,0.6757,0,33.3746,0,-0.4,133.7);

	this.instance_5 = new lib.kidsshadow("synched",0);
	this.instance_5.setTransform(445.3,495.5,0.9989,0.7976,0,0,180,481.4,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},366).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},203).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_5}]},50).wait(76));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.clown = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.Symbol4();
	this.instance.setTransform(69.95,74.1,1,1,0,0,0,58.6,69);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(48));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D4D4D").s().p("AgnALQgSgEABgHQgBgFASgFQARgEAWAAQAYAAARAEQAQAFAAAFQAAAHgQAEQgRAFgYgBQgWABgRgFg");
	this.shape.setTransform(69.0909,218.8785,2.0906,2.0906);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4D4D4D").s().p("AAaAeQgOAAgMgGQgQgFgLgJQgTgOABgSQAAgIACABQACABAAAGQACAGAKAJQAMAJARAHQARAGANgBQAKgBACgFQAAgGADABQACABAAAIQgBAQgPACg");
	this.shape_1.setTransform(67.9995,212.5433,2.0891,2.0891);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4D4D4D").s().p("AAZAIQgCgEgIgBQgKgCgOAEIgUgHIAMgFQASgHANACQAPACABAPQAAAHgCABIgBAAQgCAAAAgFg");
	this.shape_2.setTransform(71.5,212.96,2.0891,2.0891);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4D4D4D").s().p("AgMAKQADgKAKgJQAHAGAFACQgLAGgDAFg");
	this.shape_3.setTransform(61.2114,216.942,2.0891,2.0891);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4D4D4D").s().p("AAAAYQgPgFgMgJQgTgOABgSQAAgIACABQACABAAAGQACAGAKAJQAMAJARAHQARAGANgBQAKgBACgFQAAgGADABQACABAAAIQgBAQgPABIgFABQgMAAgOgGg");
	this.shape_4.setTransform(67.9995,199.4867,2.0891,2.0891);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4D4D4D").s().p("AgMALQAAgOAOgOIALAIQgRAKgDALQAAAFgCABQgDAAAAgHg");
	this.shape_5.setTransform(61.0008,205.661,2.0891,2.0891);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4D4D4D").s().p("AAZAIQgCgEgIgBQgKgCgOAEIgUgHIAMgFQARgHAOACQAPABABAPQAAAIgCABIgBAAQgCAAAAgFg");
	this.shape_6.setTransform(71.5,199.9016,2.0891,2.0891);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4D4D4D").s().p("AAAAYQgPgFgMgJQgTgOABgSQAAgIACABQACAAAAAHQACAGAKAJQAMAJARAGQARAHANgCQAKgBACgEQAAgGADABQACABAAAHQgBAQgPACIgFABQgMAAgOgGg");
	this.shape_7.setTransform(67.9995,186.43,2.0891,2.0891);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4D4D4D").s().p("AAZAIQgCgEgIgBQgKgCgOAEIgUgHIAMgFQASgHANACQAPACABAPQAAAIgCABQgDAAAAgGg");
	this.shape_8.setTransform(71.5,186.7795,2.0891,2.0891);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4D4D4D").s().p("AgMAMQAAgQAOgOIALAJQgRAKgDALQAAAFgCACQgDgBAAgGg");
	this.shape_9.setTransform(61.0008,192.5521,2.0891,2.0891);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4D4D4D").s().p("AAaAeQgOAAgMgGQgQgFgLgJQgTgOABgSQAAgIACABQACABAAAGQACAGAKAJQAMAJARAHQARAGANgBQAKgBACgFQAAgGADABQACABAAAIQgBAQgPACg");
	this.shape_10.setTransform(67.9995,173.2689,2.0891,2.0891);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4D4D4D").s().p("AAZAIQgCgEgIgBQgKgCgOAEIgUgHIAMgFQATgHAMACQAPACABAPQAAAHgCABIgBAAQgCAAAAgFg");
	this.shape_11.setTransform(71.5,173.6838,2.0891,2.0891);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4D4D4D").s().p("AgMALQAAgPAOgOIALAJQgRALgDAJQAAAHgCAAQgDABAAgIg");
	this.shape_12.setTransform(61.0008,179.4955,2.0891,2.0891);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4D4D4D").s().p("AAAAYQgPgFgMgJQgTgOABgSQAAgIACABQACABAAAGQACAGAKAJQAMAJARAGQARAHANgBQAKgBACgFQAAgGADABQACABAAAIQgBAQgPABIgFABQgMAAgOgGg");
	this.shape_13.setTransform(67.9995,160.2122,2.0891,2.0891);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4D4D4D").s().p("AAZAIQgCgEgIgBQgKgCgOAEIgHgCIgNgFIAMgFQARgHAOACQAPABABAPQAAAIgCABIgBAAQgCAAAAgFg");
	this.shape_14.setTransform(71.5,160.6262,2.0891,2.0891);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#4D4D4D").s().p("AgMALQgBgOAPgOIALAIQgRAKgEAKQAAAGgCABQgCAAAAgHg");
	this.shape_15.setTransform(61.0531,166.3866,2.0891,2.0891);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#4D4D4D").s().p("AAAAZQgPgGgMgJQgTgOABgSQAAgIACABQACABAAAGQACAGAKAJQAMAJARAHQARAGANgBQAKgBACgFQAAgGADABQACABAAAIQgBAQgPACIgFAAQgMAAgOgFg");
	this.shape_16.setTransform(67.9995,147.1033,2.0891,2.0891);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#4D4D4D").s().p("AAZAIQgCgEgIgBQgKgCgOAEIgUgHIAMgFQASgHANACQAPACABAPQAAAHgCABIgBAAQgCAAAAgFg");
	this.shape_17.setTransform(71.5,147.4678,2.0891,2.0891);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#4D4D4D").s().p("AgMAMQgBgPAPgOQAGAFAFACQgRALgEALQAAAFgCACQgCgBAAgGg");
	this.shape_18.setTransform(61.0531,153.2777,2.0891,2.0891);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#4D4D4D").s().p("AAAAYQgPgFgMgJQgTgOABgSQAAgIACABQACABAAAGQACAGAKAJQAMAJARAHQARAGANgBQAKgBACgFQAAgGADABQACABAAAIQgBAQgPABIgFABQgMAAgOgGg");
	this.shape_19.setTransform(67.9995,132.741,2.0891,2.0891);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#4D4D4D").s().p("AAXAIQgFgHgRACQgLgCgJgDIgHgCIAGgDQASgHANACQAPACABAPQAAAHgCABIgBAAQgCAAABgFg");
	this.shape_20.setTransform(72.0745,134.4094,2.0891,2.0891);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#4D4D4D").s().p("AgPANQgBgSATgOQAIAFAFADQgLAGgIAHQgGAHgCAEQAAAHgCAAIAAAAQgCAAAAgHg");
	this.shape_21.setTransform(61.6801,139.8554,2.0891,2.0891);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#4D4D4D").s().p("AgtAWQgBgRATgOQAMgJAPgGQARgGAOABQAPACABAQQAAAIgCABQgDABAAgGQgCgFgKgBQgNgBgRAGQgRAHgMAJQgKAIgCAHQAAAGgCAAIAAABQgCAAAAgIg");
	this.shape_22.setTransform(67.9995,123.6358,2.0891,2.0891);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B8B3B1").s().p("AhYAXQgwgLAAgMQAAgLAwgLQAsgKAsAAQAtAAAsAKQAwALAAALQAAAMgwALQgsAKgtgBQgsABgsgKg");
	this.shape_23.setTransform(68.2648,220.0041,2.0901,2.0901);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2B2B2B").s().p("Ah3BEQgygQAAgXQAAgFADgGIAhhlIEMAAIAfBlQAEAFAAAGQAAAXgyAQQgyAQhGAAQhFAAgygQg");
	this.shape_24.setTransform(68.3171,236.6728,2.0901,2.0901);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(48));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.2,-11.7,196.39999999999998,266);


(lib.Scene_1_animation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// animation
	this.instance = new lib.tree();
	this.instance.setTransform(1016.05,390.1,0.3419,0.2398,0,0,180,204.2,122.8);

	this.instance_1 = new lib.tree();
	this.instance_1.setTransform(1054.4,281.35,0.5327,0.5327,0,0,180,204.6,122.6);

	this.instance_2 = new lib.tree();
	this.instance_2.setTransform(1086.65,223,0.5327,0.5327,0,0,0,204.6,122.6);

	this.instance_3 = new lib.tree();
	this.instance_3.setTransform(1086,354.85,0.5327,0.5327,0,0,0,204.6,122.6);

	this.doll = new lib.doll();
	this.doll.name = "doll";
	this.doll.setTransform(-97.05,263.3,0.4346,0.4346);

	this.instance_4 = new lib.clown();
	this.instance_4.setTransform(-129.5,326.65,0.4919,0.4919,0,0,0,77.9,127.2);

	this.instance_5 = new lib.horse();
	this.instance_5.setTransform(964.25,563.45,0.5149,0.5149,0,0,0,252.5,240.2);

	this.instance_6 = new lib.pic();
	this.instance_6.setTransform(752,364.65,1,1,0,0,0,82,95.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F1DBB8","#F4E3C7","#F7EBD6"],[0,0.545,1],-63,0,63,0).s().p("Ap1BEIAAiHITrAAIAACHg");
	this.shape.setTransform(139.5081,457.6057,0.8438,0.8614);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#F1DBB8","#F4E3C7","#F7EBD6"],[0,0.545,1],-63,0,63,0).s().p("Ap1BEIAAiHITrAAIAACHg");
	this.shape_1.setTransform(139.5081,420.3937,0.8438,0.8614);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#F1DBB8","#F4E3C7","#F7EBD6"],[0,0.545,1],-63,0,63,0).s().p("Ap1BEIAAiHITrAAIAACHg");
	this.shape_2.setTransform(139.5081,383.1602,0.8438,0.8614);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#F1DBB8","#F4E3C7","#F7EBD6"],[0,0.545,1],-63,0,63,0).s().p("Ap1BEIAAiHITrAAIAACHg");
	this.shape_3.setTransform(139.5081,345.9266,0.8438,0.8614);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#F7EBD6","#F4E3C7","#F1DBB8"],[0,0.455,1],0,-134.5,0,135.9).s().p("Ag+V0MAAAgrnIB9AAMAAAArng");
	this.shape_4.setTransform(193.3405,406.1417,1.194,1.194);

	this.instance_7 = new lib.girl();
	this.instance_7.setTransform(294.45,414.65,0.404,0.4124,0,0,0,430.4,123.7);

	this.instance_8 = new lib.plane();
	this.instance_8.setTransform(-327.1,363.4,0.404,0.4124,0,0,0,53.1,48.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(0,0,0,0.298)","#3AB9CD"],[0,1],0,-16.6,0,11.5).s().p("A83CjIAAlFMA5vAAAIAAFFg");
	this.shape_5.setTransform(-175.3105,405.3527,0.8448,0.8624);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFF2BB").s().p("AglC8IAAl3IBLAAIAAF3g");
	this.shape_6.setTransform(-334.6106,397.9399,0.8448,0.8624);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF2BB").s().p("AgrCxIAAlhIBXAAIAAFhg");
	this.shape_7.setTransform(-15.5247,397.6238,0.8448,0.8624);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFF2BB").s().p("EgjyAA2IAAhsMBHlAAAIAABsg");
	this.shape_8.setTransform(-173.3464,386.5747,0.8448,0.8624);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#091A51","#0B1953","#11175A","#1B1464"],[0,0.627,0.855,1],-147.8,0,147.9,0).s().p("A3GYnMAAAgxNMAuNAAAMAAAAxNg");
	this.shape_9.setTransform(1070.5372,283.7314,0.8448,0.8624);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFF2BB").s().p("A6gc6MAAAg5zMA1BAAAMAAAA5zg");
	this.shape_10.setTransform(1068.3831,283.0415,0.8448,0.8624);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#DEC9BB","#EFE6E0","#E9DCD4","#DBC3B3","#DAC2B2"],[0,0.518,0.686,0.992,1],0,18.9,0,-18.2).s().p("AgbC9IAAl5IA3AAIAAF5g");
	this.shape_11.setTransform(-581.1201,364.2533,0.8417,0.8595);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#7E7372").s().p("AglDRIAAmhIBLAAIAAGhg");
	this.shape_12.setTransform(-581.1201,364.2533,0.8417,0.8595);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#F7EBD6","#F4E3C7","#F1DBB8"],[0,0.455,1],0,197.7,0,-222.1).s().p("EgJXAjNMAAAhGaISvAAMAAABGag");
	this.shape_13.setTransform(-624.3176,356.7514,0.8408,0.8583);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#7E7372").s().p("EgJkAjsMAAAhHXITJAAMAAABHXg");
	this.shape_14.setTransform(-625.4106,356.7514,0.8408,0.8583);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#F1DBB8","#F4E3C7","#F7EBD6"],[0,0.545,1],121.7,0,-68.4,0).s().p("EgKsAmJMAAAhMRIVZAAMAAABMRg");
	this.shape_15.setTransform(-631.7468,360.8585,0.8417,0.8595);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#DEC9BB","#EFE6E0","#E9DCD4","#DBC3B3","#DAC2B2"],[0,0.518,0.686,0.992,1],0,-18.2,0,18.8).s().p("AgbC9IAAl5IA3AAIAAF5g");
	this.shape_16.setTransform(-567.0641,364.4682,0.8417,0.8595);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#7E7372").s().p("AglDQIAAmgIBLAAIAAGgg");
	this.shape_17.setTransform(-567.0641,364.4682,0.8417,0.8595);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#F7EBD6","#F4E3C7","#F1DBB8"],[0,0.455,1],0,-222,0,197.8).s().p("EgJWAjOMAAAhGbISuAAMAAABGbg");
	this.shape_18.setTransform(-523.5051,356.9445,0.8408,0.8583);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#7E7372").s().p("EgJkAjsMAAAhHXITJAAMAAABHXg");
	this.shape_19.setTransform(-522.391,356.923,0.8408,0.8583);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#F1DBB8","#F4E3C7","#F7EBD6"],[0,0.545,1],-121.6,0,68.5,0).s().p("EgKsAmIMAAAhMPIVZAAMAAABMPg");
	this.shape_20.setTransform(-516.4374,361.0518,0.8417,0.8595);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D2D5D5").s().p("AgcAjQgOgMgCgTQgCgSAMgOQANgOASgCQARgCAPAMQAOAMACATQACASgMAOQgNAOgSACIgEAAQgQAAgMgKg");
	this.shape_21.setTransform(-347.6908,256.5382,0.8408,0.8583);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#3C393E").s().p("Ag6BIQgegZgEgnQgDglAZgeQAZgdAmgEQAlgDAeAZQAdAYAEAnQADAlgYAeQgZAdgnAEIgIAAQghAAgZgVg");
	this.shape_22.setTransform(-347.7115,256.5385,0.8408,0.8583);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D2D5D5").s().p("AgcAjQgOgMgCgTQgCgSANgOQALgOATgCQASgCAOAMQAOANACASQABASgLAOQgMAOgTACIgEAAQgPAAgNgKg");
	this.shape_23.setTransform(-379.9356,259.4779,0.8408,0.8583);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#3C393E").s().p("Ag6BIQgegZgEgnQgDglAZgdQAYgeAngEQAlgDAeAZQAdAYAEAnQAEAlgZAeQgZAdgnAEIgIAAQghAAgZgVg");
	this.shape_24.setTransform(-379.9515,259.4567,0.8408,0.8583);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F7C42B").s().p("AgggQIA+gFIADAnIg0AEQgJgWgEgQg");
	this.shape_25.setTransform(-397.9653,259.249,0.8417,0.8595);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F7494A").s().p("AgpA3QgBhLBSgkQAIBSgaAUQgPALgYAAQgLAAgNgCg");
	this.shape_26.setTransform(-397.6551,249.8937,0.8417,0.8595);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F7C42B").s().p("AgNAwQgkgMgChUQAaADAXALQAmASAQA3QgpAKgPAAIgJgBg");
	this.shape_27.setTransform(-333.3878,243.9912,0.8417,0.8595);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#3C393E").s().p("AgmgIIBLgHIACAYIhLAHg");
	this.shape_28.setTransform(-352.0309,244.1012,0.8417,0.8595);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#3C393E").s().p("AgmgIIBLgHIACAYIhLAHg");
	this.shape_29.setTransform(-370.8423,245.7986,0.8417,0.8595);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F0F1F1").s().p("AAIguQANAFANAJIgjBMIggADg");
	this.shape_30.setTransform(-357.2549,235.3809,0.8408,0.8583);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F0F1F1").s().p("AARg0IAOACIgvBmIgOABg");
	this.shape_31.setTransform(-361.1226,235.1878,0.8408,0.8583);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#D2D5D5").s().p("AAAglQAdAXAIAuIhJAHg");
	this.shape_32.setTransform(-354.2701,235.8744,0.8408,0.8583);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#D2D5D5").s().p("AANgzQAIACAPAFIgqBdIgdADg");
	this.shape_33.setTransform(-359.5671,235.2307,0.8408,0.8583);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#D2D5D5").s().p("AgegvIASgEQAWgDAVACIgvBpIgFABg");
	this.shape_34.setTransform(-362.2998,235.1749,0.8408,0.8583);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F0F1F1").s().p("AARg1IAPgBIgyBsIgNABg");
	this.shape_35.setTransform(-374.1341,236.2178,0.8408,0.8583);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F0F1F1").s().p("AAPgxIARgEIgxBqIgOACg");
	this.shape_36.setTransform(-377.7706,236.604,0.8408,0.8583);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#D2D5D5").s().p("AAPg2IAMABIAJBlIhHAGg");
	this.shape_37.setTransform(-372.6417,236.1748,0.8408,0.8583);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#D2D5D5").s().p("AALgzQARgDALgBIgwBsIgdADg");
	this.shape_38.setTransform(-376.0049,236.368,0.8408,0.8583);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#D2D5D5").s().p("AAkg0IguBnIgZACQgBhPBIgag");
	this.shape_39.setTransform(-379.5368,236.9044,0.8408,0.8583);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F7C42B").s().p("Aheg3IAagFQAggEAcAFQBZAOAOBbIiyAQg");
	this.shape_40.setTransform(-357.2282,235.5117,0.8417,0.8595);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F7C42B").s().p("AgFg2QAqgPArADIAKB2IizAQQgBhcBVgeg");
	this.shape_41.setTransform(-375.5988,236.7889,0.8417,0.8595);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#2FCAFE").s().p("Al8AFQAwgfBAgEQgJhiBQgoQA1gaCEgMQCagOBCBJQAhAkABAnIAsgBQAyABAhAPQA0AYALBYQAFAsgFAoIiBALQACgWgLgVQgXgphEAGQhDAGgMAsQgGAXAHAVIjOASQAGgWgKgVQgSgqhLAHQhKAHgLArQgGAVAKAUIiLANQhOiNBghAg");
	this.shape_42.setTransform(-364.7113,245.9439,0.8417,0.8595);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF8095").s().p("AojlBIQGhcIBBLfIwGBcg");
	this.shape_43.setTransform(-366.0413,245.2085,0.8408,0.8583);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#FEFFFB","#F9F9F6","#EAE8E7","#E0DCDD"],[0,0.329,0.773,1],5.2,-41,-9.8,78.6).s().p("AsAnDIWliBIBdQII2mCBg");
	this.shape_44.setTransform(-366.0624,245.2085,0.8408,0.8583);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#E76857").s().p("AtMoUIYtiNIBsS2I4tCOg");
	this.shape_45.setTransform(-366.0624,245.1871,0.8408,0.8583);

	this.instance_9 = new lib.Path_7_1();
	this.instance_9.setTransform(-367.05,251.3,0.8448,0.8624,0,0,0,84.3,67.5);
	this.instance_9.compositeOperation = "multiply";

	this.instance_10 = new lib.Path_9_0();
	this.instance_10.setTransform(748.7,369.85,0.8448,0.8624,0,0,0,97.5,111.1);
	this.instance_10.compositeOperation = "multiply";

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#A7B7D3").s().p("ACxgIQhOgehkgFIhZgEIhYgGQg9gFgbgHQgkgJgXgUQASALAjABQAXABA3gFQAvgFBIAIIB3AMQA3ADAlAKQAxALAlAZQAlAYAbAbQAnAnABAbQg+hFhXgig");
	this.shape_46.setTransform(288.0176,448.3246,0.8448,0.8624);

	this.instance_11 = new lib.Path_11_0();
	this.instance_11.setTransform(408.2,460.35,0.8448,0.8624,0,0,0,18,5.6);
	this.instance_11.alpha = 0.6484;
	this.instance_11.compositeOperation = "multiply";

	this.instance_12 = new lib.Path_12_0();
	this.instance_12.setTransform(383.05,449.65,0.8448,0.8624,0,0,0,51.1,10.2);
	this.instance_12.alpha = 0.6484;
	this.instance_12.compositeOperation = "multiply";

	this.instance_13 = new lib.Path_13();
	this.instance_13.setTransform(361.7,453.95,0.8448,0.8624,0,0,0,25.3,9);
	this.instance_13.alpha = 0.6484;
	this.instance_13.compositeOperation = "multiply";

	this.instance_14 = new lib.Group_12();
	this.instance_14.setTransform(279.3,534.5,0.8448,0.8624,0,0,0,219.1,32.2);
	this.instance_14.alpha = 0.3203;
	this.instance_14.compositeOperation = "multiply";

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.rf(["#EFE6E0","#E9DCD4","#DBC3B3","#DAC2B2"],[0,0.349,0.98,1],0,0,0,0,0,4.2).s().p("AgkAeQgOgNAAgRQAAgRAOgMQAPgMAVAAQAVAAAPAMQAPAMAAARQAAARgPANQgPAMgVAAQgVAAgPgMg");
	this.shape_47.setTransform(138.6981,521.8422,0.8426,0.8603);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#7E7372").s().p("AgnAhQgRgOAAgTQAAgTARgNQAQgOAXgBQAYABARAOQARANAAATQAAATgRAOQgRAPgYAAQgXAAgQgPg");
	this.shape_48.setTransform(138.6981,521.8422,0.8426,0.8603);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["#F7EBD6","#F4E3C7","#F1DBB8"],[0,0.455,1],0,-32,0,28).s().p("AoSEyIAApiIQkAAIAAJig");
	this.shape_49.setTransform(139.487,534.5924,0.8438,0.8614);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#7E7372").s().p("AocFHIAAqNIQ5AAIAAKNg");
	this.shape_50.setTransform(139.487,534.5924,0.8438,0.8614);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.rf(["#EFE6E0","#E9DCD4","#DBC3B3","#DAC2B2"],[0,0.349,0.98,1],0,0,0,0,0,4.2).s().p("AgjAeQgPgNgBgRQABgRAPgMQAPgMAUAAQAWAAAOAMQAQAMAAARQAAARgQANQgOAMgWAAQgUAAgPgMg");
	this.shape_51.setTransform(265.082,521.8422,0.8426,0.8603);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#7E7372").s().p("AgoAhQgQgOAAgTQAAgTAQgNQARgOAXgBQAXABARAOQASANgBATQABATgSAOQgRAPgXAAQgXAAgRgPg");
	this.shape_52.setTransform(265.082,521.8422,0.8426,0.8603);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["#F7EBD6","#F4E3C7","#F1DBB8"],[0,0.455,1],0,-32,0,28).s().p("AsBEyIAApiIYDAAIAAJig");
	this.shape_53.setTransform(266.0564,534.5924,0.8438,0.8614);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#7E7372").s().p("AsMFHIAAqNIYZAAIAAKNg");
	this.shape_54.setTransform(266.0564,534.5924,0.8438,0.8614);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.rf(["#EFE6E0","#E9DCD4","#DBC3B3","#DAC2B2"],[0,0.349,0.98,1],0,0,0,0,0,4.2).s().p("AgkAeQgPgNAAgRQAAgRAPgMQAQgMAUAAQAWAAAPAMQAPAMAAARQAAARgPANQgPAMgWAAQgUAAgQgMg");
	this.shape_55.setTransform(396.5846,521.8422,0.8426,0.8603);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#7E7372").s().p("AgnAhQgRgOAAgTQAAgTARgNQAQgOAXgBQAYABARAOQAQANAAATQAAATgQAOQgRAPgYAAQgXAAgQgPg");
	this.shape_56.setTransform(396.5846,521.8422,0.8426,0.8603);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["#F7EBD6","#F4E3C7","#F1DBB8"],[0,0.455,1],0,-32,0,28).s().p("AsBEyIAApiIYDAAIAAJig");
	this.shape_57.setTransform(397.7518,534.5924,0.8438,0.8614);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#7E7372").s().p("AsLFHIAAqNIYXAAIAAKNg");
	this.shape_58.setTransform(397.7518,534.5924,0.8438,0.8614);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["#F7EBD6","#F4E3C7","#F1DBB8"],[0,0.455,1],0,-191.8,0,206.5).s().p("AhYeNMAAAg8ZICxAAMAAAA8Zg");
	this.shape_59.setTransform(472.1113,406.2088,0.8448,0.8624);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.lf(["#F7EBD6","#F4E3C7","#F1DBB8"],[0,0.455,1],0,-186.3,0,188.1).s().p("AhYeNMAAAg8ZICxAAMAAAA8Zg");
	this.shape_60.setTransform(86.8599,406.2088,0.8448,0.8624);

	this.instance_15 = new lib.Path_16();
	this.instance_15.setTransform(197.5,250.3,0.8448,0.8624,0,0,0,10.3,5.9);
	this.instance_15.alpha = 0.3203;
	this.instance_15.compositeOperation = "multiply";

	this.instance_16 = new lib.Path_17();
	this.instance_16.setTransform(186.85,458.05,0.8448,0.8624,0,0,0,7.5,7);
	this.instance_16.alpha = 0.3203;
	this.instance_16.compositeOperation = "multiply";

	this.instance_17 = new lib.Path_18();
	this.instance_17.setTransform(93,458.05,0.8448,0.8624,0,0,0,7.6,7);
	this.instance_17.alpha = 0.3203;
	this.instance_17.compositeOperation = "multiply";

	this.instance_18 = new lib.Path_19();
	this.instance_18.setTransform(186.85,420.8,0.8448,0.8624,0,0,0,7.5,6.9);
	this.instance_18.alpha = 0.3203;
	this.instance_18.compositeOperation = "multiply";

	this.instance_19 = new lib.Path_20();
	this.instance_19.setTransform(93,420.8,0.8448,0.8624,0,0,0,7.6,6.9);
	this.instance_19.alpha = 0.3203;
	this.instance_19.compositeOperation = "multiply";

	this.instance_20 = new lib.Path_21();
	this.instance_20.setTransform(186.85,383.7,0.8448,0.8624,0,0,0,7.5,7.2);
	this.instance_20.alpha = 0.3203;
	this.instance_20.compositeOperation = "multiply";

	this.instance_21 = new lib.Path_22();
	this.instance_21.setTransform(93,383.7,0.8448,0.8624,0,0,0,7.6,7.2);
	this.instance_21.alpha = 0.3203;
	this.instance_21.compositeOperation = "multiply";

	this.instance_22 = new lib.Path_23();
	this.instance_22.setTransform(186.85,346.25,0.8448,0.8624,0,0,0,7.5,6.9);
	this.instance_22.alpha = 0.3203;
	this.instance_22.compositeOperation = "multiply";

	this.instance_23 = new lib.Path_24();
	this.instance_23.setTransform(93,346.25,0.8448,0.8624,0,0,0,7.6,6.9);
	this.instance_23.alpha = 0.3203;
	this.instance_23.compositeOperation = "multiply";

	this.instance_24 = new lib.Path_25();
	this.instance_24.setTransform(468.6,250.3,0.8448,0.8624,0,0,0,11.6,5.9);
	this.instance_24.alpha = 0.3203;
	this.instance_24.compositeOperation = "multiply";

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.lf(["#F7EBD6","#F4E3C7","#F1DBB8"],[0,0.455,1],0,-6.3,0,6.4).s().p("A6vA4IAAhvMA1fAAAIAABvg");
	this.shape_61.setTransform(333.6556,250.3362,0.8448,0.8624);

	this.instance_25 = new lib.Path_27();
	this.instance_25.setTransform(193.35,309.55,0.8448,0.8624,0,0,0,15.2,11.3);
	this.instance_25.alpha = 0.3203;
	this.instance_25.compositeOperation = "multiply";

	this.instance_26 = new lib.Path_28();
	this.instance_26.setTransform(469.2,309.55,0.8448,0.8624,0,0,0,12.3,11.3);
	this.instance_26.alpha = 0.3203;
	this.instance_26.compositeOperation = "multiply";

	this.instance_27 = new lib.Path_29();
	this.instance_27.setTransform(89.35,309.55,0.8448,0.8624,0,0,0,12.2,11.3);
	this.instance_27.alpha = 0.3203;
	this.instance_27.compositeOperation = "multiply";

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.lf(["#F7EBD6","#F4E3C7","#F1DBB8"],[0,0.455,1],0,-10.5,0,8.8).s().p("EglBABwIAAjfMBKDAAAIAADfg");
	this.shape_62.setTransform(279.4856,315.8329,0.8448,0.8624);

	this.instance_28 = new lib.Path_31();
	this.instance_28.setTransform(469.35,497.35,0.8448,0.8624,0,0,0,12.3,11.6);
	this.instance_28.alpha = 0.3203;
	this.instance_28.compositeOperation = "multiply";

	this.instance_29 = new lib.Path_32();
	this.instance_29.setTransform(192.8,497.35,0.8448,0.8624,0,0,0,15.3,11.6);
	this.instance_29.alpha = 0.3203;
	this.instance_29.compositeOperation = "multiply";

	this.instance_30 = new lib.Path_33();
	this.instance_30.setTransform(89.45,497.35,0.8448,0.8624,0,0,0,12.3,11.6);
	this.instance_30.alpha = 0.3203;
	this.instance_30.compositeOperation = "multiply";

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.lf(["#F7EBD6","#F4E3C7","#F1DBB8"],[0,0.455,1],0,-10,0,15.9).s().p("EglBABwIAAjgMBKDAAAIAADgg");
	this.shape_63.setTransform(279.4856,497.4256,0.8448,0.8624);

	this.instance_31 = new lib.Path_35();
	this.instance_31.setTransform(279.3,292,0.8448,0.8624,0,0,0,228.1,4.3);
	this.instance_31.alpha = 0.3203;
	this.instance_31.compositeOperation = "screen";

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.lf(["#8D48A3","#803399"],[0,1],0,-16.8,0,3.7).s().p("EgjnACwIAAlfMBHPAAAIAAFfg");
	this.shape_64.setTransform(279.5067,303.8029,0.8448,0.8624);

	this.instance_32 = new lib.Path_37();
	this.instance_32.setTransform(279.3,449.75,0.8448,0.8624,0,0,0,228.1,8.7);
	this.instance_32.alpha = 0.3203;
	this.instance_32.compositeOperation = "screen";

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.lf(["#8D48A3","#803399"],[0,1],0,-36,0,7.8).s().p("EgjnAF2IAArrMBHPAAAIAALrg");
	this.shape_65.setTransform(279.5067,474.8963,0.8448,0.8624);

	this.instance_33 = new lib.Group_16();
	this.instance_33.setTransform(333.45,255.2,0.8448,0.8624,0,0,0,131.9,6);
	this.instance_33.compositeOperation = "multiply";

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.lf(["#F7EBD6","#F4E3C7","#F1DBB8"],[0,0.455,1],0,-34.2,0,34.4).s().p("Ag2FYIAAqvIBtAAIAAKvg");
	this.shape_66.setTransform(440.3062,280.0663,0.8448,0.8624);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.lf(["#F7EBD6","#F4E3C7","#F1DBB8"],[0,0.455,1],0,-34.2,0,34.4).s().p("Ag1FYIAAqvIBrAAIAAKvg");
	this.shape_67.setTransform(409.8316,280.0663,0.8448,0.8624);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.lf(["#F7EBD6","#F4E3C7","#F1DBB8"],[0,0.455,1],0,-34.2,0,34.4).s().p("Ag2FYIAAqvIBtAAIAAKvg");
	this.shape_68.setTransform(379.357,280.0663,0.8448,0.8624);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.lf(["#F7EBD6","#F4E3C7","#F1DBB8"],[0,0.455,1],0,-34.2,0,34.4).s().p("Ag2FYIAAqvIBsAAIAAKvg");
	this.shape_69.setTransform(348.8824,280.0663,0.8448,0.8624);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.lf(["#F7EBD6","#F4E3C7","#F1DBB8"],[0,0.455,1],0,-34.2,0,34.4).s().p("Ag1FYIAAqvIBsAAIAAKvg");
	this.shape_70.setTransform(318.4289,280.0663,0.8448,0.8624);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.lf(["#F7EBD6","#F4E3C7","#F1DBB8"],[0,0.455,1],0,-34.2,0,34.4).s().p("Ag2FYIAAqvIBtAAIAAKvg");
	this.shape_71.setTransform(287.9543,280.0663,0.8448,0.8624);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.lf(["#F7EBD6","#F4E3C7","#F1DBB8"],[0,0.455,1],0,-34.2,0,34.4).s().p("Ag2FYIAAqvIBsAAIAAKvg");
	this.shape_72.setTransform(257.4797,280.0663,0.8448,0.8624);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.lf(["#F7EBD6","#F4E3C7","#F1DBB8"],[0,0.455,1],0,-34.2,0,34.4).s().p("Ag2FYIAAqvIBtAAIAAKvg");
	this.shape_73.setTransform(227.0051,280.0663,0.8448,0.8624);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AA5AGQgagDAAgDQAAgCAagDQAZgCAkAAQAkAAAZACQAaADAAACQAAADgaADQgZACgkAAQgkAAgZgCgAi1AGQgXgDAAgDQAAgCAXgDQAXgCAgAAQAhAAAWACQAXADAAACQAAADgXADQgWACghAAQggAAgXgCg");
	this.shape_74.setTransform(292.275,566.875);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#3B2E2E").s().p("A9rDqIAAnTMA7XAAAIAAHTgAC0CoQgaADAAADQAAADAaADQAZACAkAAQAkAAAZgCQAagDAAgDQAAgDgagDQgZgCgkAAQgkAAgZACgAg6CoQgXADAAADQAAADAXADQAXACAgAAQAgAAAWgCQAXgDAAgDQAAgDgXgDQgWgCggAAQggAAgXACg");
	this.shape_75.setTransform(279.975,549.475);

	this.instance_34 = new lib.Path_9();
	this.instance_34.setTransform(563.75,330.5,0.8432,0.8609,0,0,0,5,5.8);
	this.instance_34.alpha = 0.75;
	this.instance_34.compositeOperation = "screen";

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgKALQgGgEAAgHQAAgGAGgEQAFgGAFAAQAHAAAEAGQAGAEAAAGQAAAHgGAEQgEAGgHAAQgFAAgFgGg");
	this.shape_76.setTransform(562.0847,305.5098,0.8417,0.8595);

	this.instance_35 = new lib.Path_2_0();
	this.instance_35.setTransform(561.4,334.5,0.8432,0.8609,0,0,0,5.8,6.2);
	this.instance_35.alpha = 0.75;
	this.instance_35.compositeOperation = "screen";

	this.instance_36 = new lib.Path_3_1();
	this.instance_36.setTransform(562.45,301.05,0.8432,0.8609,0,0,0,6,6.8);
	this.instance_36.compositeOperation = "screen";

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.lf(["#FDFC03","#FDF503","#FEE002","#FEBF01","#FFAA00"],[0.016,0.204,0.482,0.824,1],-2.8,0,2.9,0).s().p("AgcAaQAAgFAOgZIAOgZQADgHAFAJQAYAhgDAPQgDALgaABIgEAAQgXAAgBgHg");
	this.shape_77.setTransform(533.4633,324.7672,0.8408,0.8583);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#4A4A4A").s().p("AgIAJQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAAEADQADAEAAAEQAAAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_78.setTransform(530.8855,315.1878,0.8408,0.8583);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FDFCDA").s().p("AgRASQgHgIAAgKQAAgJAHgIQAIgHAJAAQAKAAAIAHQAHAIAAAJQAAAKgHAIQgIAHgKAAQgJAAgIgHg");
	this.shape_79.setTransform(531.0116,314.7587,0.8408,0.8583);

	this.instance_37 = new lib.Path_3_0();
	this.instance_37.setTransform(534.7,320.3,0.8427,0.8604,0,0,0,9,7);
	this.instance_37.alpha = 0.3203;
	this.instance_37.compositeOperation = "multiply";

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FDFC03").s().p("AgnAPIgagUQAKABARAEQATACAJABQAUACAUgMQARgMALgTQANAIgJASQgGALgNAKQgVATgdALQgMgHgUgRg");
	this.shape_80.setTransform(532.4385,319.2433,0.8408,0.8583);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#F86A14").s().p("AgcAxQgVgSgFgDQgMgGgIgHQgJgHAHABQAKACALgHIgSgEQgGgCAJgIIAigfQAigZAwgJQgPArApAdQANAIgJASQgGALgNALQgVATgeAMQgLgIgXgTg");
	this.shape_81.setTransform(531.2546,316.132,0.8408,0.8583);

	this.instance_38 = new lib.ClipGroup();
	this.instance_38.setTransform(541.2,316.05,0.8427,0.8604,0,0,0,22.1,16.1);

	this.instance_39 = new lib.Path_6_0();
	this.instance_39.setTransform(533.65,323.1,0.8427,0.8604,0,0,0,7.4,7.9);
	this.instance_39.alpha = 0.75;
	this.instance_39.compositeOperation = "multiply";

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.lf(["#FDFC03","#FDF503","#FEE002","#FEBF01","#FFAA00"],[0.016,0.204,0.482,0.824,1],-2.9,0,2.9,0).s().p("AgPAUQgTgIAIgCQAJgDAkggIALAGIgDATQgFAVgJAEIgIABQgIAAgMgGg");
	this.shape_82.setTransform(530.975,323.5898,0.8408,0.8583);

	this.instance_40 = new lib.Path_8();
	this.instance_40.setTransform(544.9,326.15,0.8427,0.8604,0,0,0,8.9,10.1);
	this.instance_40.alpha = 0.75;
	this.instance_40.compositeOperation = "multiply";

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.lf(["#FDFC03","#FDF503","#FDE002","#FEBE02","#FF9000","#FF7C00"],[0.016,0.122,0.275,0.463,0.678,0.761],3.8,3.5,-1.6,-5.8).s().p("Ag0ACQgKgNgGgPIgEgNQAKAAALgLIAOALQAVANAXAFQAWAGAZgHQALgEAIgFQAAAUgQANQgSAPAAAEQgDANAGAQQg+gFgggrg");
	this.shape_83.setTransform(544.5696,326.6248,0.8408,0.8583);

	this.instance_41 = new lib.Path_10();
	this.instance_41.setTransform(547.6,310,0.8427,0.8604,0,0,0,11.5,8.3);
	this.instance_41.alpha = 0.75;
	this.instance_41.compositeOperation = "multiply";

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.lf(["#FDFC03","#FDF503","#FDE002","#FEBE02","#FF9000","#FF7C00"],[0.016,0.122,0.275,0.463,0.678,0.761],2.1,-5.2,-1.5,4.4).s().p("AhfAJIAUgfQAYghAYADQANABApAWQAlATAggDIgDARQgGARgUABQgaACgNAGQgQAHgIAQQgugdg1gPg");
	this.shape_84.setTransform(547.3232,308.8287,0.8408,0.8583);

	this.instance_42 = new lib.Path_12();
	this.instance_42.setTransform(561.35,320.35,0.8427,0.8604,0,0,0,12.1,10.6);
	this.instance_42.alpha = 0.75;
	this.instance_42.compositeOperation = "multiply";

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.lf(["#FDFC03","#FDF503","#FDE002","#FEBE02","#FF9000","#FF7C00"],[0.016,0.122,0.275,0.463,0.678,0.761],9.8,-1,-10.5,2.2).s().p("AgPBwQgVgIgYgoQgagrgagNQAGgOgIgJIAVgPQAYgRAQgPQA5gzAfABQA2ABAagEIgTAXIgZAhQgGALgjAXQgjAXgSADIAVASQAVAVAFARQAEATAOALQAMALALgBQgJAHgPAGQgQAGgPAAQgMAAgNgEg");
	this.shape_85.setTransform(561.4488,316.2565,0.8408,0.8583);

	this.instance_43 = new lib.Path_4();
	this.instance_43.setTransform(529.1,317.3,0.8432,0.8609,0,0,0,10.6,25.2);
	this.instance_43.alpha = 0.5508;
	this.instance_43.compositeOperation = "screen";

	this.instance_44 = new lib.Path_5();
	this.instance_44.setTransform(569.8,317.3,0.8432,0.8609,0,0,0,10.3,25.2);
	this.instance_44.alpha = 0.5508;
	this.instance_44.compositeOperation = "screen";

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.lf(["#D0EAF1","#D0FCF1"],[0.09,1],-33.8,15.1,33.8,-19.4).s().p("AiTEmIhFgPQgkgNgogtQhBhIgShwQgShyBIh+QAkhAAogpIHrAAIAZAcQAdAkAWAoQBIB/gSByQgSBvhCBJQgnAsgkAOQgcAHgpAIQhTAPhBAAQhAAAhTgPgAjqkLQgiAjgfA3Qg+BvARBiQAQBhA8A/QAkAmAhANIBAAMQBMAMA7AAQA8AABMgMQAlgHAagGQAhgMAlgmQA8g/AQhiQARhig9huQgTgjgZgfIgVgYg");
	this.shape_86.setTransform(547.2932,316.7686,0.8417,0.8595);

	this.instance_45 = new lib.Path_6();
	this.instance_45.setTransform(549.1,342.05,0.8432,0.8609,0,0,0,23.5,7.5);
	this.instance_45.compositeOperation = "multiply";

	this.instance_46 = new lib.Path_7();
	this.instance_46.setTransform(538.55,342.05,0.8432,0.8609,0,0,0,12.6,7.5);
	this.instance_46.alpha = 0.5508;
	this.instance_46.compositeOperation = "multiply";

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.lf(["#D0EAF1","#D0FCF1"],[0.09,1],-20.6,11.3,47,-23.2).s().p("AjVAhIAbhBIC6ALIC8gLIAaBBg");
	this.shape_87.setTransform(547.2923,342.2943,0.8417,0.8595);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.rf(["#EAF6F9","#C0E4ED"],[0.039,1],0,0,0,0,0,1.4).s().p("AgIAKQgEgFAAgFQAAgEAEgEQADgFAFAAQAFAAAEAFQAEAEAAAEQAAAFgEAFQgEADgFAAQgFAAgDgDg");
	this.shape_88.setTransform(553.4191,320.917,0.8408,0.8583);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.rf(["#EAF6F9","#C0E4ED"],[0.039,1],0,0,0,0,0,0.9).s().p("AgIAAQAAgIAIAAQAEAAACADQADACAAADQAAAEgDACQgCADgEAAQgIAAAAgJg");
	this.shape_89.setTransform(555.3529,334.4783,0.8408,0.8583);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.rf(["#EAF6F9","#C0E4ED"],[0.039,1],0,0,0,0,0,0.9).s().p("AgFAGQgDgCAAgEQAAgDADgCQADgDACAAQAEAAACADQADACAAADQAAAEgDACQgCADgEAAQgCAAgDgDg");
	this.shape_90.setTransform(536.4768,334.4783,0.8408,0.8583);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.rf(["#EAF6F9","#C0E4ED"],[0.039,1],0,0,0,0,0,1.4).s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAFAAAFAEQAEAEAAAFQAAAGgEAEQgFAEgFAAQgFAAgEgEg");
	this.shape_91.setTransform(521.7838,320.96,0.8408,0.8583);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.rf(["#EAF6F9","#C0E4ED"],[0.039,1],0,0,0,0,0,1.3).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgFAAgDgEg");
	this.shape_92.setTransform(531.1167,311.0465,0.8408,0.8583);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.rf(["#EAF6F9","#C0E4ED"],[0.039,1],0,0,0,0,0,1.5).s().p("AgJALQgFgFAAgGQAAgFAFgEQAEgFAFAAQAGAAAFAFQAEAEAAAFQAAAGgEAFQgFAEgGAAQgFAAgEgEg");
	this.shape_93.setTransform(565.6107,330.9807,0.8408,0.8583);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.rf(["#EAF6F9","#C0E4ED"],[0.039,1],0,0,0,0,0,1.1).s().p("AgHAIQgDgEAAgEQAAgDADgEQADgDAEAAQAFAAADADQADAEAAADQAAAEgDAEQgDADgFAAQgEAAgDgDg");
	this.shape_94.setTransform(571.4964,311.2182,0.8408,0.8583);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.rf(["#EAF6F9","#C0E4ED"],[0.039,1],0,0,0,0,0,1).s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_95.setTransform(567.2713,321.196,0.8408,0.8583);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.rf(["#EAF6F9","#C0E4ED"],[0.039,1],0,0,0,0,0,1).s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_96.setTransform(543.4135,313.4498,0.8408,0.8583);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.rf(["#EAF6F9","#C0E4ED"],[0.039,1],0,0,0,0,0,0.7).s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_97.setTransform(530.5912,319.179,0.8408,0.8583);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.rf(["#EAF6F9","#C0E4ED"],[0.039,1],0,0,0,0,0,2.3).s().p("AgPAQQgGgHAAgJQAAgIAGgHQAHgGAIAAQAJAAAHAGQAGAHAAAIQAAAJgGAHQgHAGgJAAQgIAAgHgGg");
	this.shape_98.setTransform(528.1529,327.805,0.8408,0.8583);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.rf(["#EAF6F9","#C0E4ED"],[0.039,1],0,0,0,0,0,1.6).s().p("AgKALQgFgEAAgHQAAgFAFgGQAEgEAGAAQAHAAAFAEQAEAGAAAFQAAAHgEAEQgFAFgHAAQgGAAgEgFg");
	this.shape_99.setTransform(546.4824,332.8904,0.8408,0.8583);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.rf(["#EAF6F9","#C0E4ED"],[0.039,1],0,0,0,0,0,1.3).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAGAAAEAEQADADAAAFQAAAFgDAEQgEAEgGAAQgEAAgEgEg");
	this.shape_100.setTransform(559.1365,327.4616,0.8408,0.8583);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.rf(["#EAF6F9","#C0E4ED"],[0.039,1],0,0,0,0,0,2.5).s().p("AgRASQgGgIAAgKQAAgJAGgHQAIgIAJAAQAKAAAHAIQAHAHAAAJQAAAKgHAIQgHAHgKAAQgJAAgIgHg");
	this.shape_101.setTransform(563.0253,314.2866,0.8408,0.8583);

	this.instance_47 = new lib.Path_14();
	this.instance_47.setTransform(543.65,320.1,0.8427,0.8604,0,0,0,7.4,7.8);
	this.instance_47.alpha = 0.5508;

	this.instance_48 = new lib.Path_15();
	this.instance_48.setTransform(524,309.15,0.8427,0.8604,0,0,0,6.6,7.3);
	this.instance_48.alpha = 0.5508;

	this.instance_49 = new lib.Group_13();
	this.instance_49.setTransform(548.75,321.55,0.8427,0.8604,0,0,0,41,27.5);
	this.instance_49.alpha = 0.3203;
	this.instance_49.compositeOperation = "screen";

	this.instance_50 = new lib.CompoundPath_1();
	this.instance_50.setTransform(549.1,316.35,0.8432,0.8609,0,0,0,39.8,33.2);
	this.instance_50.alpha = 0.3203;
	this.instance_50.compositeOperation = "screen";

	this.instance_51 = new lib.Path_48();
	this.instance_51.setTransform(540.1,319.05,0.8448,0.8624,0,0,0,38.3,32.1);
	this.instance_51.compositeOperation = "multiply";

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.rf(["#EFE6E0","#E9DCD4","#DBC3B3","#DAC2B2"],[0,0.349,0.98,1],0,0,0,0,0,4.1).s().p("AgkAXQgOgKAAgNQAAgNAOgJQAPgKAVAAQAVAAAPAKQAQAJgBANQABANgQAKQgPAKgVAAQgVAAgPgKg");
	this.shape_102.setTransform(557.1188,527.3127,0.8417,0.8595);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#7E7372").s().p("AgnAaQgRgLAAgPQAAgOARgLQAQgKAXAAQAYAAARAKQAQALAAAOQAAAPgQALQgRAKgYAAQgXAAgQgKg");
	this.shape_103.setTransform(557.1188,527.3127,0.8417,0.8595);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.lf(["#F7EBD6","#F4E3C7","#F1DBB8"],[0,0.455,1],0,-23,0,20.5).s().p("Ar9DqIAAnTIX7AAIAAHTg");
	this.shape_104.setTransform(558.1243,540.5545,0.8426,0.8603);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#7E7372").s().p("AsID6IAAnzIYRAAIAAHzg");
	this.shape_105.setTransform(558.1243,540.5545,0.8426,0.8603);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.rf(["#EFE6E0","#E9DCD4","#DBC3B3","#DAC2B2"],[0,0.349,0.98,1],0,0,0,0,0,4.1).s().p("AgkAXQgOgJAAgOQAAgNAOgJQAPgKAVAAQAVAAAPAKQAQAJgBANQABAOgQAJQgPAKgVAAQgVAAgPgKg");
	this.shape_106.setTransform(557.1188,485.7153,0.8417,0.8595);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#7E7372").s().p("AgnAaQgRgLAAgPQAAgOARgLQAQgKAXAAQAYAAARAKQAQALAAAOQAAAPgQALQgRAKgYAAQgXAAgQgKg");
	this.shape_107.setTransform(557.1188,485.7153,0.8417,0.8595);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.lf(["#F7EBD6","#F4E3C7","#F1DBB8"],[0,0.455,1],0,-21.7,0,22.4).s().p("Ar9DqIAAnTIX7AAIAAHTg");
	this.shape_108.setTransform(558.1243,498.9357,0.8426,0.8603);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#7E7372").s().p("AsID6IAAnzIYRAAIAAHzg");
	this.shape_109.setTransform(558.1243,498.9142,0.8426,0.8603);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.rf(["#EFE6E0","#E9DCD4","#DBC3B3","#DAC2B2"],[0,0.349,0.98,1],0,0,0,0,0,4.1).s().p("AgkAXQgOgJAAgOQAAgMAOgKQAPgKAVAAQAVAAAPAKQAQAKgBAMQABAOgQAJQgPAKgVAAQgVAAgPgKg");
	this.shape_110.setTransform(557.1188,444.1178,0.8417,0.8595);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#7E7372").s().p("AgnAaQgRgLAAgPQAAgOARgKQAQgLAXAAQAYAAARALQAQAKAAAOQAAAPgQALQgRAKgYAAQgXAAgQgKg");
	this.shape_111.setTransform(557.1188,444.1178,0.8417,0.8595);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.lf(["#F7EBD6","#F4E3C7","#F1DBB8"],[0,0.455,1],0,-20.8,0,21.8).s().p("Ar9DqIAAnTIX7AAIAAHTg");
	this.shape_112.setTransform(558.1243,457.2954,0.8426,0.8603);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#7E7372").s().p("AsID6IAAnzIYRAAIAAHzg");
	this.shape_113.setTransform(558.1243,457.2954,0.8426,0.8603);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.rf(["#EFE6E0","#E9DCD4","#DBC3B3","#DAC2B2"],[0,0.349,0.98,1],0,0,0,0,0,4.1).s().p("AgkAXQgOgKAAgNQAAgNAOgJQAPgJAVAAQAVAAAPAJQAQAJgBANQABANgQAKQgPAJgVAAQgVAAgPgJg");
	this.shape_114.setTransform(557.1188,402.5419,0.8417,0.8595);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#7E7372").s().p("AgnAaQgRgLAAgPQAAgOARgKQAQgMAXAAQAYAAARAMQAQAKAAAOQAAAPgQALQgRALgYAAQgXAAgQgLg");
	this.shape_115.setTransform(557.1188,402.5419,0.8417,0.8595);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.lf(["#F7EBD6","#F4E3C7","#F1DBB8"],[0,0.455,1],0,-23.7,0,24.2).s().p("Ar9DqIAAnTIX7AAIAAHTg");
	this.shape_116.setTransform(558.1243,415.6552,0.8426,0.8603);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#7E7372").s().p("AsID6IAAnzIYRAAIAAHzg");
	this.shape_117.setTransform(558.1243,415.6767,0.8426,0.8603);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.rf(["#EFE6E0","#E9DCD4","#DBC3B3","#DAC2B2"],[0,0.349,0.98,1],0,0,0,0,0,4.1).s().p("AgkAXQgOgKAAgNQAAgNAOgJQAPgKAVAAQAVAAAPAKQAQAJgBANQABANgQAKQgPAKgVAAQgVAAgPgKg");
	this.shape_118.setTransform(558.1243,361.454,0.8426,0.8603);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#7E7372").s().p("AgnAaQgRgLAAgPQAAgOARgLQAQgKAXAAQAYAAARAKQAQALAAAOQAAAPgQALQgRAKgYAAQgXAAgQgKg");
	this.shape_119.setTransform(558.1243,361.454,0.8426,0.8603);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.lf(["#F7EBD6","#F4E3C7","#F1DBB8"],[0,0.455,1],0,-21,0,23.8).s().p("Ar9DqIAAnTIX7AAIAAHTg");
	this.shape_120.setTransform(559.5286,374.6324,0.8438,0.8614);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#7E7372").s().p("AsID6IAAnzIYRAAIAAHzg");
	this.shape_121.setTransform(559.5286,374.6324,0.8438,0.8614);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.lf(["#F1DBB8","#F4E3C7","#F7EBD6"],[0,0.545,1],-83.1,0,83.2,0).s().p("As+UfMAAAgo9IZ9AAMAAAAo9g");
	this.shape_122.setTransform(559.5497,459.0916,0.8438,0.8614);

	this.instance_52 = new lib.Path();
	this.instance_52.setTransform(541.85,273.65,0.8443,0.8619,0,0,0,1.6,2);
	this.instance_52.compositeOperation = "multiply";

	this.instance_53 = new lib.Path_1();
	this.instance_53.setTransform(466.45,274.4,0.8443,0.8619,0,0,0,1.4,1.9);
	this.instance_53.compositeOperation = "multiply";

	this.instance_54 = new lib.Path_2();
	this.instance_54.setTransform(530.1,459.5,0.8443,0.8619,0,0,0,84.7,133.1);
	this.instance_54.compositeOperation = "multiply";

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFF2BB").s().p("Ei2OANsIAA7XMFsdAAAIAAbXg");
	this.shape_123.setTransform(294.7546,648.3611,0.8448,0.8624);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#2FCAFE").s().p("Ag0DUIAEi+QAAgPAGgMIBfjbIgJDuQgBARgGALIhNCyIgJAFg");
	this.shape_124.setTransform(351.6545,285.5706,0.8417,0.8595);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#2FCAFE").s().p("AACAAIBwgaIgKBdgAhkhBIBmBBIhzAbgAACAAg");
	this.shape_125.setTransform(348.2878,312.0846,0.8417,0.8595);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#00C077").s().p("AgKgDIB6AGIg2BWgAhwgJIAmhPIBABVg");
	this.shape_126.setTransform(346.2678,323.7087,0.8417,0.8595);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#F7494A").s().p("Ag1BgIA1hrIgqhfIBWAGIgsBZIA2B2g");
	this.shape_127.setTransform(330.7599,329.7678,0.8417,0.8595);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#2FCAFE").s().p("Ag6CTQgkgIgkgQQgUgJgNgHIAGgKQACACAXAKQAeAOAeAJQBgAbA4glQBbg8gXjXIALgBQAYDfhhA+QgkAYgxAAQgbAAgggIg");
	this.shape_128.setTransform(333.8863,316.7703,0.8408,0.8583);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#00C077").s().p("AB5BbQhHgshGgLQg1gIgwALIAeiDQBFgCBIAcIBICfg");
	this.shape_129.setTransform(360.1554,290.6542,0.8417,0.8595);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFE228").s().p("ACkBoQhFg7hIgaQhrgnhVAvIAch8QBugcCFBQIBFCXg");
	this.shape_130.setTransform(361.7967,302.578,0.8417,0.8595);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#F7494A").s().p("AimgYQBVgxBsAoQBHAbBFA6g");
	this.shape_131.setTransform(361.5021,307.0749,0.8417,0.8595);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#00C077").s().p("AARAnQhFgWhTAJICFhuQBMAGA+AgIgeCDQgngfgygPg");
	this.shape_132.setTransform(340.9968,286.7093,0.8417,0.8595);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFE228").s().p("AgNABQhLgGhZAWIgHgCIB/hpQCcgPBWBKIgcB8Qg5hRhxgLg");
	this.shape_133.setTransform(334.2739,296.8771,0.8417,0.8595);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#F7494A").s().p("AimgdQBYgWBLAHQByALA4BQg");
	this.shape_134.setTransform(333.3691,300.8834,0.8417,0.8595);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.lf(["#8D48A3","#803399"],[0,1],-8.9,2.5,7.5,-0.8).s().p("AgGBHQgwgLgigmIBzhgIA/CJQgfAMgfAAQgRAAgRgEg");
	this.shape_135.setTransform(353.8428,272.7017,0.8417,0.8595);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFE228").s().p("AhGBTIAsi/IBhDZQhIgdhFADg");
	this.shape_136.setTransform(358.3879,275.5794,0.8417,0.8595);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFE228").s().p("AhaA6IC1iZIgsC/Qg8ghhNgFg");
	this.shape_137.setTransform(348.414,274.4622,0.8417,0.8595);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.lf(["#FEFFFB","#F9F9F6","#EAE8E7","#E0DCDD"],[0,0.329,0.773,1],-6.4,-31.4,36.3,177.7).s().p("Ap8mPIQpjaIDQP5IwpDag");
	this.shape_138.setTransform(347.0722,304.2056,0.8426,0.8603);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFAE1E").s().p("AsEoKIT+kGIEMUbIz/EGg");
	this.shape_139.setTransform(347.0722,304.2056,0.8426,0.8603);

	this.instance_55 = new lib.Path_8_0();
	this.instance_55.setTransform(345.55,309.95,0.8448,0.8624,0,0,0,77.5,78.6);
	this.instance_55.compositeOperation = "multiply";

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.lf(["#12BAC7","#76B7D7"],[0,1],0,-426.9,0,295.5).s().p("Ei3kBBjMAAAiDFMFvJAAAMAAACDFg");
	this.shape_140.setTransform(293.9348,291.1649,0.8392,0.6935);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#FFFFFF").ss(1,1,1).p("A13BqIAAjTMArvAAAIAADT");
	this.shape_141.setTransform(1071.725,453.225);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#3B2E2E").s().p("EgjIAEPIAAodMBGRAAAIAAIdg");
	this.shape_142.setTransform(279.9713,549.4693,0.8448,0.8624);

	this.instance_56 = new lib.picstatic("synched",0);
	this.instance_56.setTransform(752,364.65,1,1,0,0,0,82,95.7);

	this.instance_57 = new lib.eye("synched",0);
	this.instance_57.setTransform(350.1,652.95,0.9746,0.9735,0,0,0,97,91.4);

	this.instance_58 = new lib.eye("synched",0);
	this.instance_58.setTransform(353.2,624,0.9761,0.9761,0,0,0,67,61.5);

	this.instance_59 = new lib.eyestatic("synched",0);
	this.instance_59.setTransform(350.1,652.95,0.9746,0.9735,0,0,0,97,91.4);

	this.instance_60 = new lib.eyestatic("synched",0);
	this.instance_60.setTransform(353.2,624,0.9761,0.9761,0,0,0,67,61.5);

	this.instance_61 = new lib.doll("synched",0);
	this.instance_61.setTransform(-54.7,341.95,0.4328,0.3845,0,0,0,104.3,177.5);

	this.instance_62 = new lib.dollstatic("synched",0);
	this.instance_62.setTransform(-54.7,341.95,0.4328,0.3845,0,0,0,104.3,177.5);

	this.instance_63 = new lib.bear("synched",0);
	this.instance_63.setTransform(-277.85,314.9,0.4688,0.3849,0,0,0,42.1,69.1);

	this.instance_64 = new lib.bearstatic("synched",0);
	this.instance_64.setTransform(-277.85,314.9,0.4688,0.3849,0,0,0,42.1,69.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_141},{t:this.shape_140},{t:this.instance_55},{t:this.shape_139,p:{x:347.0722,y:304.2056,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_138,p:{x:347.0722,y:304.2056,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_137,p:{x:348.414,scaleX:0.8417,scaleY:0.8595,y:274.4622}},{t:this.shape_136,p:{x:358.3879,scaleX:0.8417,scaleY:0.8595,y:275.5794}},{t:this.shape_135,p:{x:353.8428,scaleX:0.8417,scaleY:0.8595,y:272.7017}},{t:this.shape_134,p:{x:333.3691,scaleX:0.8417,scaleY:0.8595,y:300.8834}},{t:this.shape_133,p:{x:334.2739,scaleX:0.8417,scaleY:0.8595,y:296.8771}},{t:this.shape_132,p:{x:340.9968,scaleX:0.8417,scaleY:0.8595,y:286.7093}},{t:this.shape_131,p:{x:361.5021,scaleX:0.8417,scaleY:0.8595,y:307.0749}},{t:this.shape_130,p:{x:361.7967,scaleX:0.8417,scaleY:0.8595,y:302.578}},{t:this.shape_129,p:{x:360.1554,scaleX:0.8417,scaleY:0.8595,y:290.6542}},{t:this.shape_128,p:{scaleY:0.8583,x:333.8863,y:316.7703,scaleX:0.8408}},{t:this.shape_127,p:{x:330.7599,scaleX:0.8417,scaleY:0.8595,y:329.7678}},{t:this.shape_126,p:{x:346.2678,scaleX:0.8417,scaleY:0.8595,y:323.7087}},{t:this.shape_125,p:{x:348.2878,scaleX:0.8417,scaleY:0.8595,y:312.0846}},{t:this.shape_124,p:{x:351.6545,scaleX:0.8417,scaleY:0.8595,y:285.5706}},{t:this.shape_123},{t:this.instance_54,p:{regY:133.1,scaleY:0.8619,x:530.1,regX:84.7,scaleX:0.8443,y:459.5}},{t:this.instance_53,p:{regX:1.4,scaleY:0.8619,y:274.4,regY:1.9,scaleX:0.8443,x:466.45}},{t:this.instance_52,p:{regY:2,scaleY:0.8619,x:541.85,y:273.65,regX:1.6,scaleX:0.8443}},{t:this.shape_122,p:{x:559.5497,y:459.0916,scaleX:0.8438,scaleY:0.8614}},{t:this.shape_121,p:{x:559.5286,y:374.6324,scaleX:0.8438,scaleY:0.8614}},{t:this.shape_120,p:{x:559.5286,y:374.6324,scaleX:0.8438,scaleY:0.8614}},{t:this.shape_119,p:{x:558.1243,y:361.454,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_118,p:{x:558.1243,y:361.454,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_117,p:{x:558.1243,y:415.6767,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_116,p:{x:558.1243,y:415.6552,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_115,p:{x:557.1188,scaleX:0.8417,scaleY:0.8595,y:402.5419}},{t:this.shape_114,p:{x:557.1188,scaleX:0.8417,scaleY:0.8595,y:402.5419}},{t:this.shape_113,p:{x:558.1243,y:457.2954,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_112,p:{x:558.1243,y:457.2954,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_111,p:{x:557.1188,scaleX:0.8417,scaleY:0.8595,y:444.1178}},{t:this.shape_110,p:{x:557.1188,scaleX:0.8417,scaleY:0.8595,y:444.1178}},{t:this.shape_109,p:{x:558.1243,y:498.9142,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_108,p:{x:558.1243,y:498.9357,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_107,p:{x:557.1188,scaleX:0.8417,scaleY:0.8595,y:485.7153}},{t:this.shape_106,p:{x:557.1188,scaleX:0.8417,scaleY:0.8595,y:485.7153}},{t:this.shape_105,p:{x:558.1243,y:540.5545,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_104,p:{x:558.1243,y:540.5545,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_103,p:{x:557.1188,scaleX:0.8417,scaleY:0.8595,y:527.3127}},{t:this.shape_102,p:{x:557.1188,scaleX:0.8417,scaleY:0.8595,y:527.3127}},{t:this.instance_51},{t:this.instance_50,p:{regX:39.8,regY:33.2,scaleX:0.8432,scaleY:0.8609,x:549.1,y:316.35}},{t:this.instance_49,p:{regX:41,regY:27.5,scaleX:0.8427,scaleY:0.8604,x:548.75,y:321.55}},{t:this.instance_48,p:{regX:6.6,regY:7.3,scaleX:0.8427,scaleY:0.8604,y:309.15,x:524}},{t:this.instance_47,p:{regX:7.4,regY:7.8,scaleX:0.8427,scaleY:0.8604,x:543.65,y:320.1}},{t:this.shape_101,p:{scaleY:0.8583,x:563.0253,y:314.2866,scaleX:0.8408}},{t:this.shape_100,p:{scaleY:0.8583,x:559.1365,y:327.4616,scaleX:0.8408}},{t:this.shape_99,p:{scaleY:0.8583,x:546.4824,y:332.8904,scaleX:0.8408}},{t:this.shape_98,p:{scaleY:0.8583,x:528.1529,y:327.805,scaleX:0.8408}},{t:this.shape_97,p:{scaleY:0.8583,x:530.5912,y:319.179,scaleX:0.8408}},{t:this.shape_96,p:{scaleY:0.8583,x:543.4135,y:313.4498,scaleX:0.8408}},{t:this.shape_95,p:{scaleY:0.8583,x:567.2713,y:321.196,scaleX:0.8408}},{t:this.shape_94,p:{scaleY:0.8583,x:571.4964,y:311.2182,scaleX:0.8408}},{t:this.shape_93,p:{scaleY:0.8583,x:565.6107,y:330.9807,scaleX:0.8408}},{t:this.shape_92,p:{scaleY:0.8583,x:531.1167,y:311.0465,scaleX:0.8408}},{t:this.shape_91,p:{scaleY:0.8583,x:521.7838,y:320.96,scaleX:0.8408}},{t:this.shape_90,p:{scaleY:0.8583,x:536.4768,y:334.4783,scaleX:0.8408}},{t:this.shape_89,p:{scaleY:0.8583,x:555.3529,y:334.4783,scaleX:0.8408}},{t:this.shape_88,p:{scaleY:0.8583,x:553.4191,y:320.917,scaleX:0.8408}},{t:this.shape_87,p:{x:547.2923,scaleX:0.8417,scaleY:0.8595,y:342.2943}},{t:this.instance_46,p:{regX:12.6,regY:7.5,scaleX:0.8432,scaleY:0.8609,x:538.55,y:342.05}},{t:this.instance_45,p:{regX:23.5,regY:7.5,scaleX:0.8432,scaleY:0.8609,x:549.1,y:342.05}},{t:this.shape_86,p:{x:547.2932,scaleX:0.8417,scaleY:0.8595,y:316.7686}},{t:this.instance_44,p:{regX:10.3,regY:25.2,scaleX:0.8432,scaleY:0.8609,x:569.8,y:317.3}},{t:this.instance_43,p:{regX:10.6,regY:25.2,scaleX:0.8432,scaleY:0.8609,x:529.1,y:317.3}},{t:this.shape_85,p:{scaleY:0.8583,x:561.4488,y:316.2565,scaleX:0.8408}},{t:this.instance_42,p:{regX:12.1,regY:10.6,scaleX:0.8427,scaleY:0.8604,x:561.35,y:320.35}},{t:this.shape_84,p:{scaleY:0.8583,x:547.3232,y:308.8287,scaleX:0.8408}},{t:this.instance_41,p:{regX:11.5,regY:8.3,scaleX:0.8427,scaleY:0.8604,x:547.6,y:310}},{t:this.shape_83,p:{scaleY:0.8583,x:544.5696,y:326.6248,scaleX:0.8408}},{t:this.instance_40,p:{regX:8.9,regY:10.1,scaleX:0.8427,scaleY:0.8604,x:544.9,y:326.15}},{t:this.shape_82,p:{scaleY:0.8583,x:530.975,y:323.5898,scaleX:0.8408}},{t:this.instance_39,p:{regX:7.4,regY:7.9,scaleX:0.8427,scaleY:0.8604,x:533.65,y:323.1}},{t:this.instance_38,p:{regX:22.1,regY:16.1,scaleX:0.8427,scaleY:0.8604,x:541.2,y:316.05}},{t:this.shape_81,p:{scaleY:0.8583,x:531.2546,y:316.132,scaleX:0.8408}},{t:this.shape_80,p:{scaleY:0.8583,x:532.4385,y:319.2433,scaleX:0.8408}},{t:this.instance_37,p:{regX:9,regY:7,scaleX:0.8427,scaleY:0.8604,x:534.7,y:320.3}},{t:this.shape_79,p:{scaleY:0.8583,x:531.0116,y:314.7587,scaleX:0.8408}},{t:this.shape_78,p:{scaleY:0.8583,x:530.8855,y:315.1878,scaleX:0.8408}},{t:this.shape_77,p:{scaleY:0.8583,x:533.4633,y:324.7672,scaleX:0.8408}},{t:this.instance_36,p:{regX:6,regY:6.8,scaleX:0.8432,scaleY:0.8609,x:562.45,y:301.05}},{t:this.instance_35,p:{regX:5.8,regY:6.2,scaleX:0.8432,scaleY:0.8609,x:561.4,y:334.5}},{t:this.shape_76,p:{x:562.0847,scaleX:0.8417,scaleY:0.8595,y:305.5098}},{t:this.instance_34,p:{regX:5,regY:5.8,scaleX:0.8432,scaleY:0.8609,y:330.5,x:563.75}},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.instance_33},{t:this.shape_65},{t:this.instance_32},{t:this.shape_64},{t:this.instance_31},{t:this.shape_63},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.shape_62},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.shape_61},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58,p:{x:397.7518,y:534.5924,scaleX:0.8438,scaleY:0.8614}},{t:this.shape_57,p:{x:397.7518,y:534.5924,scaleX:0.8438,scaleY:0.8614}},{t:this.shape_56,p:{x:396.5846,y:521.8422,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_55,p:{x:396.5846,y:521.8422,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_54,p:{x:266.0564,y:534.5924,scaleX:0.8438,scaleY:0.8614}},{t:this.shape_53,p:{x:266.0564,y:534.5924,scaleX:0.8438,scaleY:0.8614}},{t:this.shape_52,p:{x:265.082,y:521.8422,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_51,p:{x:265.082,y:521.8422,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_50,p:{x:139.487,y:534.5924,scaleX:0.8438,scaleY:0.8614}},{t:this.shape_49,p:{x:139.487,y:534.5924,scaleX:0.8438,scaleY:0.8614}},{t:this.shape_48,p:{x:138.6981,y:521.8422,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_47,p:{x:138.6981,y:521.8422,scaleX:0.8426,scaleY:0.8603}},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.shape_46},{t:this.instance_10},{t:this.instance_9},{t:this.shape_45,p:{scaleY:0.8583,x:-366.0624,y:245.1871,scaleX:0.8408}},{t:this.shape_44,p:{scaleY:0.8583,x:-366.0624,y:245.2085,scaleX:0.8408}},{t:this.shape_43,p:{scaleY:0.8583,x:-366.0413,y:245.2085,scaleX:0.8408}},{t:this.shape_42,p:{x:-364.7113,scaleX:0.8417,scaleY:0.8595,y:245.9439}},{t:this.shape_41,p:{x:-375.5988,scaleX:0.8417,scaleY:0.8595,y:236.7889}},{t:this.shape_40,p:{x:-357.2282,scaleX:0.8417,scaleY:0.8595,y:235.5117}},{t:this.shape_39,p:{scaleY:0.8583,x:-379.5368,y:236.9044,scaleX:0.8408}},{t:this.shape_38,p:{scaleY:0.8583,x:-376.0049,y:236.368,scaleX:0.8408}},{t:this.shape_37,p:{scaleY:0.8583,x:-372.6417,y:236.1748,scaleX:0.8408}},{t:this.shape_36,p:{scaleY:0.8583,x:-377.7706,y:236.604,scaleX:0.8408}},{t:this.shape_35,p:{scaleY:0.8583,x:-374.1341,y:236.2178,scaleX:0.8408}},{t:this.shape_34,p:{scaleY:0.8583,x:-362.2998,y:235.1749,scaleX:0.8408}},{t:this.shape_33,p:{scaleY:0.8583,x:-359.5671,y:235.2307,scaleX:0.8408}},{t:this.shape_32,p:{scaleY:0.8583,x:-354.2701,y:235.8744,scaleX:0.8408}},{t:this.shape_31,p:{scaleY:0.8583,x:-361.1226,y:235.1878,scaleX:0.8408}},{t:this.shape_30,p:{scaleY:0.8583,x:-357.2549,y:235.3809,scaleX:0.8408}},{t:this.shape_29,p:{x:-370.8423,scaleX:0.8417,scaleY:0.8595,y:245.7986}},{t:this.shape_28,p:{x:-352.0309,scaleX:0.8417,scaleY:0.8595,y:244.1012}},{t:this.shape_27,p:{x:-333.3878,scaleX:0.8417,scaleY:0.8595,y:243.9912}},{t:this.shape_26,p:{x:-397.6551,scaleX:0.8417,scaleY:0.8595,y:249.8937}},{t:this.shape_25,p:{x:-397.9653,scaleX:0.8417,scaleY:0.8595,y:259.249}},{t:this.shape_24,p:{scaleY:0.8583,x:-379.9515,y:259.4567,scaleX:0.8408}},{t:this.shape_23,p:{scaleY:0.8583,x:-379.9356,y:259.4779,scaleX:0.8408}},{t:this.shape_22,p:{scaleY:0.8583,x:-347.7115,y:256.5385,scaleX:0.8408}},{t:this.shape_21,p:{scaleY:0.8583,x:-347.6908,y:256.5382,scaleX:0.8408}},{t:this.shape_20,p:{x:-516.4374,scaleX:0.8417,scaleY:0.8595,y:361.0518}},{t:this.shape_19,p:{scaleY:0.8583,x:-522.391,y:356.923,scaleX:0.8408}},{t:this.shape_18,p:{scaleY:0.8583,x:-523.5051,y:356.9445,scaleX:0.8408}},{t:this.shape_17,p:{x:-567.0641,scaleX:0.8417,scaleY:0.8595,y:364.4682}},{t:this.shape_16,p:{x:-567.0641,scaleX:0.8417,scaleY:0.8595,y:364.4682}},{t:this.shape_15,p:{x:-631.7468,scaleX:0.8417,scaleY:0.8595,y:360.8585}},{t:this.shape_14,p:{scaleY:0.8583,x:-625.4106,y:356.7514,scaleX:0.8408}},{t:this.shape_13,p:{scaleY:0.8583,x:-624.3176,y:356.7514,scaleX:0.8408}},{t:this.shape_12,p:{x:-581.1201,scaleX:0.8417,scaleY:0.8595,y:364.2533}},{t:this.shape_11,p:{x:-581.1201,scaleX:0.8417,scaleY:0.8595,y:364.2533}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.instance_8},{t:this.instance_7},{t:this.shape_4},{t:this.shape_3,p:{x:139.5081,y:345.9266,scaleX:0.8438,scaleY:0.8614}},{t:this.shape_2,p:{x:139.5081,y:383.1602,scaleX:0.8438,scaleY:0.8614}},{t:this.shape_1,p:{x:139.5081,y:420.3937,scaleX:0.8438,scaleY:0.8614}},{t:this.shape,p:{x:139.5081,y:457.6057,scaleX:0.8438,scaleY:0.8614}},{t:this.instance_6,p:{mode:"independent",startPosition:undefined}},{t:this.instance_5},{t:this.instance_4,p:{regX:77.9,regY:127.2,x:-129.5,y:326.65}},{t:this.doll},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.shape_141},{t:this.shape_140},{t:this.instance_55},{t:this.shape_139,p:{x:347.1488,y:304.1865,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_138,p:{x:347.1488,y:304.1865,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_137,p:{x:348.4755,scaleX:0.8417,scaleY:0.8595,y:274.4622}},{t:this.shape_136,p:{x:358.45,scaleX:0.8417,scaleY:0.8595,y:275.5794}},{t:this.shape_135,p:{x:353.9047,scaleX:0.8417,scaleY:0.8595,y:272.7017}},{t:this.shape_134,p:{x:333.4294,scaleX:0.8417,scaleY:0.8595,y:300.8834}},{t:this.shape_133,p:{x:334.3343,scaleX:0.8417,scaleY:0.8595,y:296.8771}},{t:this.shape_132,p:{x:341.0577,scaleX:0.8417,scaleY:0.8595,y:286.7093}},{t:this.shape_131,p:{x:361.5645,scaleX:0.8417,scaleY:0.8595,y:307.0749}},{t:this.shape_130,p:{x:361.8591,scaleX:0.8417,scaleY:0.8595,y:302.578}},{t:this.shape_129,p:{x:360.2177,scaleX:0.8417,scaleY:0.8595,y:290.6542}},{t:this.shape_128,p:{scaleY:0.8584,x:333.841,y:316.8027,scaleX:0.8408}},{t:this.shape_127,p:{x:330.8201,scaleX:0.8417,scaleY:0.8595,y:329.7678}},{t:this.shape_126,p:{x:346.329,scaleX:0.8417,scaleY:0.8595,y:323.7087}},{t:this.shape_125,p:{x:348.3492,scaleX:0.8417,scaleY:0.8595,y:312.0846}},{t:this.shape_124,p:{x:351.7162,scaleX:0.8417,scaleY:0.8595,y:285.5706}},{t:this.shape_123},{t:this.instance_54,p:{regY:133.2,scaleY:0.8618,x:530.05,regX:84.7,scaleX:0.8443,y:459.5}},{t:this.instance_53,p:{regX:1.5,scaleY:0.8618,y:274.3,regY:1.9,scaleX:0.8443,x:466.45}},{t:this.instance_52,p:{regY:2.1,scaleY:0.8618,x:541.8,y:273.7,regX:1.6,scaleX:0.8443}},{t:this.shape_122,p:{x:559.515,y:459.0815,scaleX:0.8438,scaleY:0.8614}},{t:this.shape_121,p:{x:559.4939,y:374.6238,scaleX:0.8438,scaleY:0.8614}},{t:this.shape_120,p:{x:559.4939,y:374.6238,scaleX:0.8438,scaleY:0.8614}},{t:this.shape_119,p:{x:558.211,y:361.4119,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_118,p:{x:558.211,y:361.4119,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_117,p:{x:558.211,y:415.6298,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_116,p:{x:558.211,y:415.6083,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_115,p:{x:557.1882,scaleX:0.8417,scaleY:0.8595,y:402.5419}},{t:this.shape_114,p:{x:557.1882,scaleX:0.8417,scaleY:0.8595,y:402.5419}},{t:this.shape_113,p:{x:558.211,y:457.2449,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_112,p:{x:558.211,y:457.2449,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_111,p:{x:557.1882,scaleX:0.8417,scaleY:0.8595,y:444.1178}},{t:this.shape_110,p:{x:557.1882,scaleX:0.8417,scaleY:0.8595,y:444.1178}},{t:this.shape_109,p:{x:558.211,y:498.8599,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_108,p:{x:558.211,y:498.8814,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_107,p:{x:557.1882,scaleX:0.8417,scaleY:0.8595,y:485.7153}},{t:this.shape_106,p:{x:557.1882,scaleX:0.8417,scaleY:0.8595,y:485.7153}},{t:this.shape_105,p:{x:558.211,y:540.4965,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_104,p:{x:558.211,y:540.4965,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_103,p:{x:557.1882,scaleX:0.8417,scaleY:0.8595,y:527.3127}},{t:this.shape_102,p:{x:557.1882,scaleX:0.8417,scaleY:0.8595,y:527.3127}},{t:this.instance_51},{t:this.instance_50,p:{regX:40.1,regY:33.5,scaleX:0.8431,scaleY:0.8608,x:549.15,y:316.35}},{t:this.instance_49,p:{regX:41.2,regY:27.6,scaleX:0.8426,scaleY:0.8603,x:548.65,y:321.45}},{t:this.instance_48,p:{regX:6.8,regY:7.5,scaleX:0.8426,scaleY:0.8603,y:309.05,x:524}},{t:this.instance_47,p:{regX:7.5,regY:8.1,scaleX:0.8426,scaleY:0.8603,x:543.4,y:320.05}},{t:this.shape_101,p:{scaleY:0.8584,x:562.9729,y:314.3474,scaleX:0.8408}},{t:this.shape_100,p:{scaleY:0.8584,x:559.0844,y:327.5243,scaleX:0.8408}},{t:this.shape_99,p:{scaleY:0.8584,x:546.4309,y:332.9538,scaleX:0.8408}},{t:this.shape_98,p:{scaleY:0.8584,x:528.1024,y:327.8677,scaleX:0.8408}},{t:this.shape_97,p:{scaleY:0.8584,x:530.5406,y:319.2404,scaleX:0.8408}},{t:this.shape_96,p:{scaleY:0.8584,x:543.3622,y:313.5104,scaleX:0.8408}},{t:this.shape_95,p:{scaleY:0.8584,x:567.2187,y:321.2577,scaleX:0.8408}},{t:this.shape_94,p:{scaleY:0.8584,x:571.4435,y:311.2785,scaleX:0.8408}},{t:this.shape_93,p:{scaleY:0.8584,x:565.5582,y:331.0438,scaleX:0.8408}},{t:this.shape_92,p:{scaleY:0.8584,x:531.0661,y:311.1068,scaleX:0.8408}},{t:this.shape_91,p:{scaleY:0.8584,x:521.7336,y:321.0217,scaleX:0.8408}},{t:this.shape_90,p:{scaleY:0.8584,x:536.4259,y:334.5419,scaleX:0.8408}},{t:this.shape_89,p:{scaleY:0.8584,x:555.301,y:334.5419,scaleX:0.8408}},{t:this.shape_88,p:{scaleY:0.8584,x:553.3672,y:320.9788,scaleX:0.8408}},{t:this.shape_87,p:{x:547.3609,scaleX:0.8417,scaleY:0.8595,y:342.2943}},{t:this.instance_46,p:{regX:12.8,regY:7.8,scaleX:0.8431,scaleY:0.8608,x:538.6,y:342.05}},{t:this.instance_45,p:{regX:23.7,regY:7.8,scaleX:0.8431,scaleY:0.8608,x:549.15,y:342.05}},{t:this.shape_86,p:{x:547.3618,scaleX:0.8417,scaleY:0.8595,y:316.7686}},{t:this.instance_44,p:{regX:10.5,regY:25.4,scaleX:0.8431,scaleY:0.8608,x:569.75,y:317.25}},{t:this.instance_43,p:{regX:10.8,regY:25.4,scaleX:0.8431,scaleY:0.8608,x:529.05,y:317.25}},{t:this.shape_85,p:{scaleY:0.8584,x:561.3965,y:316.3176,scaleX:0.8408}},{t:this.instance_42,p:{regX:12.4,regY:10.8,scaleX:0.8426,scaleY:0.8603,x:561.3,y:320.3}},{t:this.shape_84,p:{scaleY:0.8584,x:547.2717,y:308.8887,scaleX:0.8408}},{t:this.instance_41,p:{regX:11.8,regY:8.6,scaleX:0.8426,scaleY:0.8603,x:547.55,y:310}},{t:this.shape_83,p:{scaleY:0.8584,x:544.5182,y:326.6873,scaleX:0.8408}},{t:this.instance_40,p:{regX:9.2,regY:10.4,scaleX:0.8426,scaleY:0.8603,x:544.85,y:326.05}},{t:this.shape_82,p:{scaleY:0.8584,x:530.9244,y:323.6519,scaleX:0.8408}},{t:this.instance_39,p:{regX:7.5,regY:8.2,scaleX:0.8426,scaleY:0.8603,x:533.45,y:323.05}},{t:this.instance_38,p:{regX:22.2,regY:16.3,scaleX:0.8426,scaleY:0.8603,x:541.05,y:315.9}},{t:this.shape_81,p:{scaleY:0.8584,x:531.2039,y:316.193,scaleX:0.8408}},{t:this.shape_80,p:{scaleY:0.8584,x:532.3878,y:319.3048,scaleX:0.8408}},{t:this.instance_37,p:{regX:9.3,regY:7.3,scaleX:0.8426,scaleY:0.8603,x:534.65,y:320.3}},{t:this.shape_79,p:{scaleY:0.8584,x:530.961,y:314.8195,scaleX:0.8408}},{t:this.shape_78,p:{scaleY:0.8584,x:530.8349,y:315.2487,scaleX:0.8408}},{t:this.shape_77,p:{scaleY:0.8584,x:533.4125,y:324.8294,scaleX:0.8408}},{t:this.instance_36,p:{regX:6.2,regY:7,scaleX:0.8431,scaleY:0.8608,x:562.5,y:300.95}},{t:this.instance_35,p:{regX:6,regY:6.4,scaleX:0.8431,scaleY:0.8608,x:561.35,y:334.45}},{t:this.shape_76,p:{x:562.1544,scaleX:0.8417,scaleY:0.8595,y:305.5098}},{t:this.instance_34,p:{regX:5.2,regY:5.9,scaleX:0.8431,scaleY:0.8608,y:330.4,x:563.75}},{t:this.shape_142},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.instance_33},{t:this.shape_65},{t:this.instance_32},{t:this.shape_64},{t:this.instance_31},{t:this.shape_63},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.shape_62},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.shape_61},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58,p:{x:397.723,y:534.5809,scaleX:0.8438,scaleY:0.8614}},{t:this.shape_57,p:{x:397.723,y:534.5809,scaleX:0.8438,scaleY:0.8614}},{t:this.shape_56,p:{x:396.6566,y:521.7859,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_55,p:{x:396.6566,y:521.7859,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_54,p:{x:266.0323,y:534.5809,scaleX:0.8438,scaleY:0.8614}},{t:this.shape_53,p:{x:266.0323,y:534.5809,scaleX:0.8438,scaleY:0.8614}},{t:this.shape_52,p:{x:265.1422,y:521.7859,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_51,p:{x:265.1422,y:521.7859,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_50,p:{x:139.4676,y:534.5809,scaleX:0.8438,scaleY:0.8614}},{t:this.shape_49,p:{x:139.4676,y:534.5809,scaleX:0.8438,scaleY:0.8614}},{t:this.shape_48,p:{x:138.7468,y:521.7859,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_47,p:{x:138.7468,y:521.7859,scaleX:0.8426,scaleY:0.8603}},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.shape_46},{t:this.instance_9},{t:this.shape_45,p:{scaleY:0.8584,x:-366.0943,y:245.2179,scaleX:0.8408}},{t:this.shape_44,p:{scaleY:0.8584,x:-366.0943,y:245.2394,scaleX:0.8408}},{t:this.shape_43,p:{scaleY:0.8584,x:-366.0733,y:245.2394,scaleX:0.8408}},{t:this.shape_42,p:{x:-364.6686,scaleX:0.8417,scaleY:0.8595,y:245.9439}},{t:this.shape_41,p:{x:-375.557,scaleX:0.8417,scaleY:0.8595,y:236.7889}},{t:this.shape_40,p:{x:-357.185,scaleX:0.8417,scaleY:0.8595,y:235.5117}},{t:this.shape_39,p:{scaleY:0.8584,x:-379.568,y:236.9341,scaleX:0.8408}},{t:this.shape_38,p:{scaleY:0.8584,x:-376.0363,y:236.3976,scaleX:0.8408}},{t:this.shape_37,p:{scaleY:0.8584,x:-372.6732,y:236.2044,scaleX:0.8408}},{t:this.shape_36,p:{scaleY:0.8584,x:-377.8019,y:236.6336,scaleX:0.8408}},{t:this.shape_35,p:{scaleY:0.8584,x:-374.1656,y:236.2473,scaleX:0.8408}},{t:this.shape_34,p:{scaleY:0.8584,x:-362.3319,y:235.2043,scaleX:0.8408}},{t:this.shape_33,p:{scaleY:0.8584,x:-359.5994,y:235.2601,scaleX:0.8408}},{t:this.shape_32,p:{scaleY:0.8584,x:-354.3026,y:235.904,scaleX:0.8408}},{t:this.shape_31,p:{scaleY:0.8584,x:-361.1548,y:235.2172,scaleX:0.8408}},{t:this.shape_30,p:{scaleY:0.8584,x:-357.2873,y:235.4104,scaleX:0.8408}},{t:this.shape_29,p:{x:-370.8001,scaleX:0.8417,scaleY:0.8595,y:245.7986}},{t:this.shape_28,p:{x:-351.9873,scaleX:0.8417,scaleY:0.8595,y:244.1012}},{t:this.shape_27,p:{x:-333.3429,scaleX:0.8417,scaleY:0.8595,y:243.9912}},{t:this.shape_26,p:{x:-397.6148,scaleX:0.8417,scaleY:0.8595,y:249.8937}},{t:this.shape_25,p:{x:-397.925,scaleX:0.8417,scaleY:0.8595,y:259.249}},{t:this.shape_24,p:{scaleY:0.8584,x:-379.9827,y:259.4896,scaleX:0.8408}},{t:this.shape_23,p:{scaleY:0.8584,x:-379.9668,y:259.5108,scaleX:0.8408}},{t:this.shape_22,p:{scaleY:0.8584,x:-347.7444,y:256.571,scaleX:0.8408}},{t:this.shape_21,p:{scaleY:0.8584,x:-347.7237,y:256.5706,scaleX:0.8408}},{t:this.shape_20,p:{x:-516.4459,scaleX:0.8417,scaleY:0.8595,y:361.0518}},{t:this.shape_19,p:{scaleY:0.8584,x:-522.3843,y:356.9899,scaleX:0.8408}},{t:this.shape_18,p:{scaleY:0.8584,x:-523.4983,y:357.0113,scaleX:0.8408}},{t:this.shape_17,p:{x:-567.0763,scaleX:0.8417,scaleY:0.8595,y:364.4682}},{t:this.shape_16,p:{x:-567.0763,scaleX:0.8417,scaleY:0.8595,y:364.4682}},{t:this.shape_15,p:{x:-631.7637,scaleX:0.8417,scaleY:0.8595,y:360.8585}},{t:this.shape_14,p:{scaleY:0.8584,x:-625.3983,y:356.8182,scaleX:0.8408}},{t:this.shape_13,p:{scaleY:0.8584,x:-624.3053,y:356.8182,scaleX:0.8408}},{t:this.shape_12,p:{x:-581.1333,scaleX:0.8417,scaleY:0.8595,y:364.2533}},{t:this.shape_11,p:{x:-581.1333,scaleX:0.8417,scaleY:0.8595,y:364.2533}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.instance_8},{t:this.instance_7},{t:this.shape_4},{t:this.shape_3,p:{x:139.4886,y:345.9185,scaleX:0.8438,scaleY:0.8614}},{t:this.shape_2,p:{x:139.4886,y:383.1514,scaleX:0.8438,scaleY:0.8614}},{t:this.shape_1,p:{x:139.4886,y:420.3843,scaleX:0.8438,scaleY:0.8614}},{t:this.shape,p:{x:139.4886,y:457.5956,scaleX:0.8438,scaleY:0.8614}},{t:this.instance_6,p:{mode:"synched",startPosition:10}},{t:this.instance_5},{t:this.instance_4,p:{regX:0,regY:0,x:-167.8,y:264.1}},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.shape_141},{t:this.shape_140},{t:this.instance_55},{t:this.shape_139,p:{x:347.1488,y:304.1865,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_138,p:{x:347.1488,y:304.1865,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_137,p:{x:348.4755,scaleX:0.8417,scaleY:0.8595,y:274.4622}},{t:this.shape_136,p:{x:358.45,scaleX:0.8417,scaleY:0.8595,y:275.5794}},{t:this.shape_135,p:{x:353.9047,scaleX:0.8417,scaleY:0.8595,y:272.7017}},{t:this.shape_134,p:{x:333.4294,scaleX:0.8417,scaleY:0.8595,y:300.8834}},{t:this.shape_133,p:{x:334.3343,scaleX:0.8417,scaleY:0.8595,y:296.8771}},{t:this.shape_132,p:{x:341.0577,scaleX:0.8417,scaleY:0.8595,y:286.7093}},{t:this.shape_131,p:{x:361.5645,scaleX:0.8417,scaleY:0.8595,y:307.0749}},{t:this.shape_130,p:{x:361.8591,scaleX:0.8417,scaleY:0.8595,y:302.578}},{t:this.shape_129,p:{x:360.2177,scaleX:0.8417,scaleY:0.8595,y:290.6542}},{t:this.shape_128,p:{scaleY:0.8584,x:333.841,y:316.8027,scaleX:0.8408}},{t:this.shape_127,p:{x:330.8201,scaleX:0.8417,scaleY:0.8595,y:329.7678}},{t:this.shape_126,p:{x:346.329,scaleX:0.8417,scaleY:0.8595,y:323.7087}},{t:this.shape_125,p:{x:348.3492,scaleX:0.8417,scaleY:0.8595,y:312.0846}},{t:this.shape_124,p:{x:351.7162,scaleX:0.8417,scaleY:0.8595,y:285.5706}},{t:this.shape_123},{t:this.instance_54,p:{regY:133.2,scaleY:0.8618,x:530.05,regX:84.7,scaleX:0.8443,y:459.5}},{t:this.instance_53,p:{regX:1.5,scaleY:0.8618,y:274.3,regY:1.9,scaleX:0.8443,x:466.45}},{t:this.instance_52,p:{regY:2.1,scaleY:0.8618,x:541.8,y:273.7,regX:1.6,scaleX:0.8443}},{t:this.shape_122,p:{x:559.515,y:459.0815,scaleX:0.8438,scaleY:0.8614}},{t:this.shape_121,p:{x:559.4939,y:374.6238,scaleX:0.8438,scaleY:0.8614}},{t:this.shape_120,p:{x:559.4939,y:374.6238,scaleX:0.8438,scaleY:0.8614}},{t:this.shape_119,p:{x:558.211,y:361.4119,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_118,p:{x:558.211,y:361.4119,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_117,p:{x:558.211,y:415.6298,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_116,p:{x:558.211,y:415.6083,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_115,p:{x:557.1882,scaleX:0.8417,scaleY:0.8595,y:402.5419}},{t:this.shape_114,p:{x:557.1882,scaleX:0.8417,scaleY:0.8595,y:402.5419}},{t:this.shape_113,p:{x:558.211,y:457.2449,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_112,p:{x:558.211,y:457.2449,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_111,p:{x:557.1882,scaleX:0.8417,scaleY:0.8595,y:444.1178}},{t:this.shape_110,p:{x:557.1882,scaleX:0.8417,scaleY:0.8595,y:444.1178}},{t:this.shape_109,p:{x:558.211,y:498.8599,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_108,p:{x:558.211,y:498.8814,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_107,p:{x:557.1882,scaleX:0.8417,scaleY:0.8595,y:485.7153}},{t:this.shape_106,p:{x:557.1882,scaleX:0.8417,scaleY:0.8595,y:485.7153}},{t:this.shape_105,p:{x:558.211,y:540.4965,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_104,p:{x:558.211,y:540.4965,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_103,p:{x:557.1882,scaleX:0.8417,scaleY:0.8595,y:527.3127}},{t:this.shape_102,p:{x:557.1882,scaleX:0.8417,scaleY:0.8595,y:527.3127}},{t:this.instance_51},{t:this.instance_50,p:{regX:40.1,regY:33.5,scaleX:0.8431,scaleY:0.8608,x:549.15,y:316.35}},{t:this.instance_49,p:{regX:41.2,regY:27.6,scaleX:0.8426,scaleY:0.8603,x:548.65,y:321.45}},{t:this.instance_48,p:{regX:6.8,regY:7.5,scaleX:0.8426,scaleY:0.8603,y:309.05,x:524}},{t:this.instance_47,p:{regX:7.5,regY:8.1,scaleX:0.8426,scaleY:0.8603,x:543.4,y:320.05}},{t:this.shape_101,p:{scaleY:0.8584,x:562.9729,y:314.3474,scaleX:0.8408}},{t:this.shape_100,p:{scaleY:0.8584,x:559.0844,y:327.5243,scaleX:0.8408}},{t:this.shape_99,p:{scaleY:0.8584,x:546.4309,y:332.9538,scaleX:0.8408}},{t:this.shape_98,p:{scaleY:0.8584,x:528.1024,y:327.8677,scaleX:0.8408}},{t:this.shape_97,p:{scaleY:0.8584,x:530.5406,y:319.2404,scaleX:0.8408}},{t:this.shape_96,p:{scaleY:0.8584,x:543.3622,y:313.5104,scaleX:0.8408}},{t:this.shape_95,p:{scaleY:0.8584,x:567.2187,y:321.2577,scaleX:0.8408}},{t:this.shape_94,p:{scaleY:0.8584,x:571.4435,y:311.2785,scaleX:0.8408}},{t:this.shape_93,p:{scaleY:0.8584,x:565.5582,y:331.0438,scaleX:0.8408}},{t:this.shape_92,p:{scaleY:0.8584,x:531.0661,y:311.1068,scaleX:0.8408}},{t:this.shape_91,p:{scaleY:0.8584,x:521.7336,y:321.0217,scaleX:0.8408}},{t:this.shape_90,p:{scaleY:0.8584,x:536.4259,y:334.5419,scaleX:0.8408}},{t:this.shape_89,p:{scaleY:0.8584,x:555.301,y:334.5419,scaleX:0.8408}},{t:this.shape_88,p:{scaleY:0.8584,x:553.3672,y:320.9788,scaleX:0.8408}},{t:this.shape_87,p:{x:547.3609,scaleX:0.8417,scaleY:0.8595,y:342.2943}},{t:this.instance_46,p:{regX:12.8,regY:7.8,scaleX:0.8431,scaleY:0.8608,x:538.6,y:342.05}},{t:this.instance_45,p:{regX:23.7,regY:7.8,scaleX:0.8431,scaleY:0.8608,x:549.15,y:342.05}},{t:this.shape_86,p:{x:547.3618,scaleX:0.8417,scaleY:0.8595,y:316.7686}},{t:this.instance_44,p:{regX:10.5,regY:25.4,scaleX:0.8431,scaleY:0.8608,x:569.75,y:317.25}},{t:this.instance_43,p:{regX:10.8,regY:25.4,scaleX:0.8431,scaleY:0.8608,x:529.05,y:317.25}},{t:this.shape_85,p:{scaleY:0.8584,x:561.3965,y:316.3176,scaleX:0.8408}},{t:this.instance_42,p:{regX:12.4,regY:10.8,scaleX:0.8426,scaleY:0.8603,x:561.3,y:320.3}},{t:this.shape_84,p:{scaleY:0.8584,x:547.2717,y:308.8887,scaleX:0.8408}},{t:this.instance_41,p:{regX:11.8,regY:8.6,scaleX:0.8426,scaleY:0.8603,x:547.55,y:310}},{t:this.shape_83,p:{scaleY:0.8584,x:544.5182,y:326.6873,scaleX:0.8408}},{t:this.instance_40,p:{regX:9.2,regY:10.4,scaleX:0.8426,scaleY:0.8603,x:544.85,y:326.05}},{t:this.shape_82,p:{scaleY:0.8584,x:530.9244,y:323.6519,scaleX:0.8408}},{t:this.instance_39,p:{regX:7.5,regY:8.2,scaleX:0.8426,scaleY:0.8603,x:533.45,y:323.05}},{t:this.instance_38,p:{regX:22.2,regY:16.3,scaleX:0.8426,scaleY:0.8603,x:541.05,y:315.9}},{t:this.shape_81,p:{scaleY:0.8584,x:531.2039,y:316.193,scaleX:0.8408}},{t:this.shape_80,p:{scaleY:0.8584,x:532.3878,y:319.3048,scaleX:0.8408}},{t:this.instance_37,p:{regX:9.3,regY:7.3,scaleX:0.8426,scaleY:0.8603,x:534.65,y:320.3}},{t:this.shape_79,p:{scaleY:0.8584,x:530.961,y:314.8195,scaleX:0.8408}},{t:this.shape_78,p:{scaleY:0.8584,x:530.8349,y:315.2487,scaleX:0.8408}},{t:this.shape_77,p:{scaleY:0.8584,x:533.4125,y:324.8294,scaleX:0.8408}},{t:this.instance_36,p:{regX:6.2,regY:7,scaleX:0.8431,scaleY:0.8608,x:562.5,y:300.95}},{t:this.instance_35,p:{regX:6,regY:6.4,scaleX:0.8431,scaleY:0.8608,x:561.35,y:334.45}},{t:this.shape_76,p:{x:562.1544,scaleX:0.8417,scaleY:0.8595,y:305.5098}},{t:this.instance_34,p:{regX:5.2,regY:5.9,scaleX:0.8431,scaleY:0.8608,y:330.4,x:563.75}},{t:this.shape_142},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.instance_33},{t:this.shape_65},{t:this.instance_32},{t:this.shape_64},{t:this.instance_31},{t:this.shape_63},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.shape_62},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.shape_61},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58,p:{x:397.723,y:534.5809,scaleX:0.8438,scaleY:0.8614}},{t:this.shape_57,p:{x:397.723,y:534.5809,scaleX:0.8438,scaleY:0.8614}},{t:this.shape_56,p:{x:396.6566,y:521.7859,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_55,p:{x:396.6566,y:521.7859,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_54,p:{x:266.0323,y:534.5809,scaleX:0.8438,scaleY:0.8614}},{t:this.shape_53,p:{x:266.0323,y:534.5809,scaleX:0.8438,scaleY:0.8614}},{t:this.shape_52,p:{x:265.1422,y:521.7859,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_51,p:{x:265.1422,y:521.7859,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_50,p:{x:139.4676,y:534.5809,scaleX:0.8438,scaleY:0.8614}},{t:this.shape_49,p:{x:139.4676,y:534.5809,scaleX:0.8438,scaleY:0.8614}},{t:this.shape_48,p:{x:138.7468,y:521.7859,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_47,p:{x:138.7468,y:521.7859,scaleX:0.8426,scaleY:0.8603}},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.shape_46},{t:this.instance_9},{t:this.shape_45,p:{scaleY:0.8584,x:-366.0943,y:245.2179,scaleX:0.8408}},{t:this.shape_44,p:{scaleY:0.8584,x:-366.0943,y:245.2394,scaleX:0.8408}},{t:this.shape_43,p:{scaleY:0.8584,x:-366.0733,y:245.2394,scaleX:0.8408}},{t:this.shape_42,p:{x:-364.6686,scaleX:0.8417,scaleY:0.8595,y:245.9439}},{t:this.shape_41,p:{x:-375.557,scaleX:0.8417,scaleY:0.8595,y:236.7889}},{t:this.shape_40,p:{x:-357.185,scaleX:0.8417,scaleY:0.8595,y:235.5117}},{t:this.shape_39,p:{scaleY:0.8584,x:-379.568,y:236.9341,scaleX:0.8408}},{t:this.shape_38,p:{scaleY:0.8584,x:-376.0363,y:236.3976,scaleX:0.8408}},{t:this.shape_37,p:{scaleY:0.8584,x:-372.6732,y:236.2044,scaleX:0.8408}},{t:this.shape_36,p:{scaleY:0.8584,x:-377.8019,y:236.6336,scaleX:0.8408}},{t:this.shape_35,p:{scaleY:0.8584,x:-374.1656,y:236.2473,scaleX:0.8408}},{t:this.shape_34,p:{scaleY:0.8584,x:-362.3319,y:235.2043,scaleX:0.8408}},{t:this.shape_33,p:{scaleY:0.8584,x:-359.5994,y:235.2601,scaleX:0.8408}},{t:this.shape_32,p:{scaleY:0.8584,x:-354.3026,y:235.904,scaleX:0.8408}},{t:this.shape_31,p:{scaleY:0.8584,x:-361.1548,y:235.2172,scaleX:0.8408}},{t:this.shape_30,p:{scaleY:0.8584,x:-357.2873,y:235.4104,scaleX:0.8408}},{t:this.shape_29,p:{x:-370.8001,scaleX:0.8417,scaleY:0.8595,y:245.7986}},{t:this.shape_28,p:{x:-351.9873,scaleX:0.8417,scaleY:0.8595,y:244.1012}},{t:this.shape_27,p:{x:-333.3429,scaleX:0.8417,scaleY:0.8595,y:243.9912}},{t:this.shape_26,p:{x:-397.6148,scaleX:0.8417,scaleY:0.8595,y:249.8937}},{t:this.shape_25,p:{x:-397.925,scaleX:0.8417,scaleY:0.8595,y:259.249}},{t:this.shape_24,p:{scaleY:0.8584,x:-379.9827,y:259.4896,scaleX:0.8408}},{t:this.shape_23,p:{scaleY:0.8584,x:-379.9668,y:259.5108,scaleX:0.8408}},{t:this.shape_22,p:{scaleY:0.8584,x:-347.7444,y:256.571,scaleX:0.8408}},{t:this.shape_21,p:{scaleY:0.8584,x:-347.7237,y:256.5706,scaleX:0.8408}},{t:this.shape_20,p:{x:-516.4459,scaleX:0.8417,scaleY:0.8595,y:361.0518}},{t:this.shape_19,p:{scaleY:0.8584,x:-522.3843,y:356.9899,scaleX:0.8408}},{t:this.shape_18,p:{scaleY:0.8584,x:-523.4983,y:357.0113,scaleX:0.8408}},{t:this.shape_17,p:{x:-567.0763,scaleX:0.8417,scaleY:0.8595,y:364.4682}},{t:this.shape_16,p:{x:-567.0763,scaleX:0.8417,scaleY:0.8595,y:364.4682}},{t:this.shape_15,p:{x:-631.7637,scaleX:0.8417,scaleY:0.8595,y:360.8585}},{t:this.shape_14,p:{scaleY:0.8584,x:-625.3983,y:356.8182,scaleX:0.8408}},{t:this.shape_13,p:{scaleY:0.8584,x:-624.3053,y:356.8182,scaleX:0.8408}},{t:this.shape_12,p:{x:-581.1333,scaleX:0.8417,scaleY:0.8595,y:364.2533}},{t:this.shape_11,p:{x:-581.1333,scaleX:0.8417,scaleY:0.8595,y:364.2533}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.instance_8},{t:this.instance_7},{t:this.shape_4},{t:this.shape_3,p:{x:139.4886,y:345.9185,scaleX:0.8438,scaleY:0.8614}},{t:this.shape_2,p:{x:139.4886,y:383.1514,scaleX:0.8438,scaleY:0.8614}},{t:this.shape_1,p:{x:139.4886,y:420.3843,scaleX:0.8438,scaleY:0.8614}},{t:this.shape,p:{x:139.4886,y:457.5956,scaleX:0.8438,scaleY:0.8614}},{t:this.instance_56},{t:this.instance_5},{t:this.instance_4,p:{regX:0,regY:0,x:-167.8,y:264.1}},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},104).to({state:[{t:this.shape_141},{t:this.shape_140},{t:this.instance_55},{t:this.shape_139,p:{x:347.0262,y:304.1789,scaleX:0.8425,scaleY:0.8602}},{t:this.shape_138,p:{x:347.0262,y:304.1789,scaleX:0.8425,scaleY:0.8602}},{t:this.shape_137,p:{x:348.1375,scaleX:0.8414,scaleY:0.8594,y:274.4457}},{t:this.shape_136,p:{x:358.1081,scaleX:0.8414,scaleY:0.8594,y:275.5629}},{t:this.shape_135,p:{x:353.5646,scaleX:0.8414,scaleY:0.8594,y:272.6854}},{t:this.shape_134,p:{x:333.0975,scaleX:0.8414,scaleY:0.8594,y:300.8646}},{t:this.shape_133,p:{x:334.002,scaleX:0.8414,scaleY:0.8594,y:296.8587}},{t:this.shape_132,p:{x:340.7227,scaleX:0.8414,scaleY:0.8594,y:286.6918}},{t:this.shape_131,p:{x:361.2213,scaleX:0.8414,scaleY:0.8594,y:307.0556}},{t:this.shape_130,p:{x:361.5158,scaleX:0.8414,scaleY:0.8594,y:302.559}},{t:this.shape_129,p:{x:359.8751,scaleX:0.8414,scaleY:0.8594,y:290.6363}},{t:this.shape_128,p:{scaleY:0.8582,x:333.5236,y:316.7501,scaleX:0.8404}},{t:this.shape_127,p:{x:330.4892,scaleX:0.8414,scaleY:0.8594,y:329.7465}},{t:this.shape_126,p:{x:345.992,scaleX:0.8414,scaleY:0.8594,y:323.6879}},{t:this.shape_125,p:{x:348.0113,scaleX:0.8414,scaleY:0.8594,y:312.0648}},{t:this.shape_124,p:{x:351.3769,scaleX:0.8414,scaleY:0.8594,y:285.5531}},{t:this.shape_123},{t:this.instance_54,p:{regY:133.3,scaleY:0.8618,x:530.1,regX:84.8,scaleX:0.8442,y:459.55}},{t:this.instance_53,p:{regX:1.6,scaleY:0.8618,y:274.3,regY:2,scaleX:0.8442,x:466.5}},{t:this.instance_52,p:{regY:2.2,scaleY:0.8618,x:541.85,y:273.7,regX:1.7,scaleX:0.8442}},{t:this.shape_122,p:{x:559.4977,y:459.0713,scaleX:0.8438,scaleY:0.8614}},{t:this.shape_121,p:{x:559.4766,y:374.6151,scaleX:0.8438,scaleY:0.8614}},{t:this.shape_120,p:{x:559.4766,y:374.6151,scaleX:0.8438,scaleY:0.8614}},{t:this.shape_119,p:{x:558.0723,y:361.3951,scaleX:0.8425,scaleY:0.8602}},{t:this.shape_118,p:{x:558.0723,y:361.3951,scaleX:0.8425,scaleY:0.8602}},{t:this.shape_117,p:{x:558.0723,y:415.611,scaleX:0.8425,scaleY:0.8602}},{t:this.shape_116,p:{x:558.0723,y:415.5895,scaleX:0.8425,scaleY:0.8602}},{t:this.shape_115,p:{x:556.8068,scaleX:0.8414,scaleY:0.8594,y:402.4961}},{t:this.shape_114,p:{x:556.8068,scaleX:0.8414,scaleY:0.8594,y:402.4961}},{t:this.shape_113,p:{x:558.0723,y:457.2246,scaleX:0.8425,scaleY:0.8602}},{t:this.shape_112,p:{x:558.0723,y:457.2246,scaleX:0.8425,scaleY:0.8602}},{t:this.shape_111,p:{x:556.8068,scaleX:0.8414,scaleY:0.8594,y:444.0684}},{t:this.shape_110,p:{x:556.8068,scaleX:0.8414,scaleY:0.8594,y:444.0684}},{t:this.shape_109,p:{x:558.0723,y:498.8382,scaleX:0.8425,scaleY:0.8602}},{t:this.shape_108,p:{x:558.0723,y:498.8597,scaleX:0.8425,scaleY:0.8602}},{t:this.shape_107,p:{x:556.8068,scaleX:0.8414,scaleY:0.8594,y:485.6621}},{t:this.shape_106,p:{x:556.8068,scaleX:0.8414,scaleY:0.8594,y:485.6621}},{t:this.shape_105,p:{x:558.0723,y:540.4733,scaleX:0.8425,scaleY:0.8602}},{t:this.shape_104,p:{x:558.0723,y:540.4733,scaleX:0.8425,scaleY:0.8602}},{t:this.shape_103,p:{x:556.8068,scaleX:0.8414,scaleY:0.8594,y:527.2559}},{t:this.shape_102,p:{x:556.8068,scaleX:0.8414,scaleY:0.8594,y:527.2559}},{t:this.instance_51},{t:this.instance_50,p:{regX:40.1,regY:33.7,scaleX:0.8431,scaleY:0.8608,x:549,y:316.3}},{t:this.instance_49,p:{regX:41.4,regY:27.9,scaleX:0.8425,scaleY:0.8603,x:548.55,y:321.35}},{t:this.instance_48,p:{regX:7,regY:7.7,scaleX:0.8425,scaleY:0.8603,y:308.95,x:523.85}},{t:this.instance_47,p:{regX:7.8,regY:8.3,scaleX:0.8425,scaleY:0.8603,x:543.35,y:319.95}},{t:this.shape_101,p:{scaleY:0.8582,x:562.6062,y:314.2486,scaleX:0.8404}},{t:this.shape_100,p:{scaleY:0.8582,x:558.7192,y:327.4225,scaleX:0.8404}},{t:this.shape_99,p:{scaleY:0.8582,x:546.0706,y:332.8508,scaleX:0.8404}},{t:this.shape_98,p:{scaleY:0.8582,x:527.749,y:327.7658,scaleX:0.8404}},{t:this.shape_97,p:{scaleY:0.8582,x:530.1863,y:319.1406,scaleX:0.8404}},{t:this.shape_96,p:{scaleY:0.8582,x:543.003,y:313.4119,scaleX:0.8404}},{t:this.shape_95,p:{scaleY:0.8582,x:566.8504,y:321.1574,scaleX:0.8404}},{t:this.shape_94,p:{scaleY:0.8582,x:571.0736,y:311.1805,scaleX:0.8404}},{t:this.shape_93,p:{scaleY:0.8582,x:565.1905,y:330.9412,scaleX:0.8404}},{t:this.shape_92,p:{scaleY:0.8582,x:530.7115,y:311.0088,scaleX:0.8404}},{t:this.shape_91,p:{scaleY:0.8582,x:521.3827,y:320.9214,scaleX:0.8404}},{t:this.shape_90,p:{scaleY:0.8582,x:536.0693,y:334.4385,scaleX:0.8404}},{t:this.shape_89,p:{scaleY:0.8582,x:554.9372,y:334.4385,scaleX:0.8404}},{t:this.shape_88,p:{scaleY:0.8582,x:553.0042,y:320.8785,scaleX:0.8404}},{t:this.shape_87,p:{x:546.9834,scaleX:0.8414,scaleY:0.8594,y:342.2539}},{t:this.instance_46,p:{regX:12.8,regY:7.9,scaleX:0.8431,scaleY:0.8608,x:538.45,y:341.9}},{t:this.instance_45,p:{regX:23.9,regY:7.9,scaleX:0.8431,scaleY:0.8608,x:549.1,y:341.9}},{t:this.shape_86,p:{x:546.9843,scaleX:0.8414,scaleY:0.8594,y:316.7305}},{t:this.instance_44,p:{regX:10.6,regY:25.6,scaleX:0.8431,scaleY:0.8608,x:569.7,y:317.25}},{t:this.instance_43,p:{regX:10.9,regY:25.6,scaleX:0.8431,scaleY:0.8608,x:529,y:317.25}},{t:this.shape_85,p:{scaleY:0.8582,x:561.0304,y:316.2184,scaleX:0.8404}},{t:this.instance_42,p:{regX:12.5,regY:10.8,scaleX:0.8425,scaleY:0.8603,x:561.15,y:320.05}},{t:this.shape_84,p:{scaleY:0.8582,x:546.911,y:308.7912,scaleX:0.8404}},{t:this.instance_41,p:{regX:12.1,regY:8.6,scaleX:0.8425,scaleY:0.8603,x:547.55,y:309.75}},{t:this.shape_83,p:{scaleY:0.8582,x:544.1586,y:326.5857,scaleX:0.8404}},{t:this.instance_40,p:{regX:9.5,regY:10.5,scaleX:0.8425,scaleY:0.8603,x:544.8,y:325.9}},{t:this.shape_82,p:{scaleY:0.8582,x:530.5699,y:323.551,scaleX:0.8404}},{t:this.instance_39,p:{regX:7.8,regY:8.4,scaleX:0.8425,scaleY:0.8603,x:533.45,y:322.9}},{t:this.instance_38,p:{regX:22.4,regY:16.4,scaleX:0.8425,scaleY:0.8603,x:540.9,y:315.8}},{t:this.shape_81,p:{scaleY:0.8582,x:530.8493,y:316.0938,scaleX:0.8404}},{t:this.shape_80,p:{scaleY:0.8582,x:532.0327,y:319.2049,scaleX:0.8404}},{t:this.instance_37,p:{regX:9.5,regY:7.4,scaleX:0.8425,scaleY:0.8603,x:534.6,y:320.1}},{t:this.shape_79,p:{scaleY:0.8582,x:530.6065,y:314.7207,scaleX:0.8404}},{t:this.shape_78,p:{scaleY:0.8582,x:530.4804,y:315.1498,scaleX:0.8404}},{t:this.shape_77,p:{scaleY:0.8582,x:533.0571,y:324.7283,scaleX:0.8404}},{t:this.instance_36,p:{regX:6.4,regY:7.2,scaleX:0.8431,scaleY:0.8608,x:562.45,y:300.85}},{t:this.instance_35,p:{regX:6.1,regY:6.5,scaleX:0.8431,scaleY:0.8608,x:561.3,y:334.3}},{t:this.shape_76,p:{x:561.771,scaleX:0.8414,scaleY:0.8594,y:305.4727}},{t:this.instance_34,p:{regX:5.4,regY:6.1,scaleX:0.8431,scaleY:0.8608,y:330.3,x:563.7}},{t:this.shape_142},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.instance_33},{t:this.shape_65},{t:this.instance_32},{t:this.shape_64},{t:this.instance_31},{t:this.shape_63},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.shape_62},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.shape_61},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58,p:{x:397.7086,y:534.5694,scaleX:0.8438,scaleY:0.8614}},{t:this.shape_57,p:{x:397.7086,y:534.5694,scaleX:0.8438,scaleY:0.8614}},{t:this.shape_56,p:{x:396.5413,y:521.7633,scaleX:0.8425,scaleY:0.8602}},{t:this.shape_55,p:{x:396.5413,y:521.7633,scaleX:0.8425,scaleY:0.8602}},{t:this.shape_54,p:{x:266.0203,y:534.5694,scaleX:0.8438,scaleY:0.8614}},{t:this.shape_53,p:{x:266.0203,y:534.5694,scaleX:0.8438,scaleY:0.8614}},{t:this.shape_52,p:{x:265.0459,y:521.7633,scaleX:0.8425,scaleY:0.8602}},{t:this.shape_51,p:{x:265.0459,y:521.7633,scaleX:0.8425,scaleY:0.8602}},{t:this.shape_50,p:{x:139.4578,y:534.5694,scaleX:0.8438,scaleY:0.8614}},{t:this.shape_49,p:{x:139.4578,y:534.5694,scaleX:0.8438,scaleY:0.8614}},{t:this.shape_48,p:{x:138.6688,y:521.7633,scaleX:0.8425,scaleY:0.8602}},{t:this.shape_47,p:{x:138.6688,y:521.7633,scaleX:0.8425,scaleY:0.8602}},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.shape_46},{t:this.instance_9},{t:this.shape_45,p:{scaleY:0.8582,x:-366.3178,y:245.1678,scaleX:0.8404}},{t:this.shape_44,p:{scaleY:0.8582,x:-366.3178,y:245.1892,scaleX:0.8404}},{t:this.shape_43,p:{scaleY:0.8582,x:-366.2968,y:245.1892,scaleX:0.8404}},{t:this.shape_42,p:{x:-364.9031,scaleX:0.8414,scaleY:0.8594,y:245.9246}},{t:this.shape_41,p:{x:-375.7871,scaleX:0.8414,scaleY:0.8594,y:236.7704}},{t:this.shape_40,p:{x:-357.4225,scaleX:0.8414,scaleY:0.8594,y:235.4933}},{t:this.shape_39,p:{scaleY:0.8582,x:-379.7864,y:236.8859,scaleX:0.8404}},{t:this.shape_38,p:{scaleY:0.8582,x:-376.256,y:236.3495,scaleX:0.8404}},{t:this.shape_37,p:{scaleY:0.8582,x:-372.8943,y:236.1564,scaleX:0.8404}},{t:this.shape_36,p:{scaleY:0.8582,x:-378.021,y:236.5855,scaleX:0.8404}},{t:this.shape_35,p:{scaleY:0.8582,x:-374.3861,y:236.1993,scaleX:0.8404}},{t:this.shape_34,p:{scaleY:0.8582,x:-362.5569,y:235.1565,scaleX:0.8404}},{t:this.shape_33,p:{scaleY:0.8582,x:-359.8255,y:235.2123,scaleX:0.8404}},{t:this.shape_32,p:{scaleY:0.8582,x:-354.5307,y:235.856,scaleX:0.8404}},{t:this.shape_31,p:{scaleY:0.8582,x:-361.3803,y:235.1694,scaleX:0.8404}},{t:this.shape_30,p:{scaleY:0.8582,x:-357.5142,y:235.3625,scaleX:0.8404}},{t:this.shape_29,p:{x:-371.0321,scaleX:0.8414,scaleY:0.8594,y:245.7793}},{t:this.shape_28,p:{x:-352.2269,scaleX:0.8414,scaleY:0.8594,y:244.082}},{t:this.shape_27,p:{x:-333.5898,scaleX:0.8414,scaleY:0.8594,y:243.9721}},{t:this.shape_26,p:{x:-397.8362,scaleX:0.8414,scaleY:0.8594,y:249.874}},{t:this.shape_25,p:{x:-398.1463,scaleX:0.8414,scaleY:0.8594,y:259.2285}},{t:this.shape_24,p:{scaleY:0.8582,x:-380.201,y:259.4362,scaleX:0.8404}},{t:this.shape_23,p:{scaleY:0.8582,x:-380.1851,y:259.4573,scaleX:0.8404}},{t:this.shape_22,p:{scaleY:0.8582,x:-347.9749,y:256.5182,scaleX:0.8404}},{t:this.shape_21,p:{scaleY:0.8582,x:-347.9543,y:256.5179,scaleX:0.8404}},{t:this.shape_20,p:{x:-516.3991,scaleX:0.8414,scaleY:0.8594,y:361.0098}},{t:this.shape_19,p:{scaleY:0.8582,x:-522.3373,y:356.8812,scaleX:0.8404}},{t:this.shape_18,p:{scaleY:0.8582,x:-523.4509,y:356.9027,scaleX:0.8404}},{t:this.shape_17,p:{x:-567.0093,scaleX:0.8414,scaleY:0.8594,y:364.4258}},{t:this.shape_16,p:{x:-567.0093,scaleX:0.8414,scaleY:0.8594,y:364.4258}},{t:this.shape_15,p:{x:-631.6709,scaleX:0.8414,scaleY:0.8594,y:360.8164}},{t:this.shape_14,p:{scaleY:0.8582,x:-625.3121,y:356.7096,scaleX:0.8404}},{t:this.shape_13,p:{scaleY:0.8582,x:-624.2195,y:356.7096,scaleX:0.8404}},{t:this.shape_12,p:{x:-581.0607,scaleX:0.8414,scaleY:0.8594,y:364.2109}},{t:this.shape_11,p:{x:-581.0607,scaleX:0.8414,scaleY:0.8594,y:364.2109}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.instance_8},{t:this.instance_7},{t:this.shape_4},{t:this.shape_3,p:{x:139.4789,y:345.9104,scaleX:0.8438,scaleY:0.8614}},{t:this.shape_2,p:{x:139.4789,y:383.1426,scaleX:0.8438,scaleY:0.8614}},{t:this.shape_1,p:{x:139.4789,y:420.3748,scaleX:0.8438,scaleY:0.8614}},{t:this.shape,p:{x:139.4789,y:457.5855,scaleX:0.8438,scaleY:0.8614}},{t:this.instance_56},{t:this.instance_5},{t:this.instance_4,p:{regX:0,regY:0,x:-167.8,y:264.1}},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_58},{t:this.instance_57}]},64).to({state:[{t:this.shape_141},{t:this.shape_140},{t:this.instance_55},{t:this.shape_139,p:{x:347.1488,y:304.1865,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_138,p:{x:347.1488,y:304.1865,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_137,p:{x:348.4755,scaleX:0.8417,scaleY:0.8595,y:274.4622}},{t:this.shape_136,p:{x:358.45,scaleX:0.8417,scaleY:0.8595,y:275.5794}},{t:this.shape_135,p:{x:353.9047,scaleX:0.8417,scaleY:0.8595,y:272.7017}},{t:this.shape_134,p:{x:333.4294,scaleX:0.8417,scaleY:0.8595,y:300.8834}},{t:this.shape_133,p:{x:334.3343,scaleX:0.8417,scaleY:0.8595,y:296.8771}},{t:this.shape_132,p:{x:341.0577,scaleX:0.8417,scaleY:0.8595,y:286.7093}},{t:this.shape_131,p:{x:361.5645,scaleX:0.8417,scaleY:0.8595,y:307.0749}},{t:this.shape_130,p:{x:361.8591,scaleX:0.8417,scaleY:0.8595,y:302.578}},{t:this.shape_129,p:{x:360.2177,scaleX:0.8417,scaleY:0.8595,y:290.6542}},{t:this.shape_128,p:{scaleY:0.8584,x:333.841,y:316.8027,scaleX:0.8408}},{t:this.shape_127,p:{x:330.8201,scaleX:0.8417,scaleY:0.8595,y:329.7678}},{t:this.shape_126,p:{x:346.329,scaleX:0.8417,scaleY:0.8595,y:323.7087}},{t:this.shape_125,p:{x:348.3492,scaleX:0.8417,scaleY:0.8595,y:312.0846}},{t:this.shape_124,p:{x:351.7162,scaleX:0.8417,scaleY:0.8595,y:285.5706}},{t:this.shape_123},{t:this.instance_54,p:{regY:133.2,scaleY:0.8618,x:530.05,regX:84.7,scaleX:0.8443,y:459.5}},{t:this.instance_53,p:{regX:1.5,scaleY:0.8618,y:274.3,regY:1.9,scaleX:0.8443,x:466.45}},{t:this.instance_52,p:{regY:2.1,scaleY:0.8618,x:541.8,y:273.7,regX:1.6,scaleX:0.8443}},{t:this.shape_122,p:{x:559.515,y:459.0815,scaleX:0.8438,scaleY:0.8614}},{t:this.shape_121,p:{x:559.4939,y:374.6238,scaleX:0.8438,scaleY:0.8614}},{t:this.shape_120,p:{x:559.4939,y:374.6238,scaleX:0.8438,scaleY:0.8614}},{t:this.shape_119,p:{x:558.211,y:361.4119,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_118,p:{x:558.211,y:361.4119,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_117,p:{x:558.211,y:415.6298,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_116,p:{x:558.211,y:415.6083,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_115,p:{x:557.1882,scaleX:0.8417,scaleY:0.8595,y:402.5419}},{t:this.shape_114,p:{x:557.1882,scaleX:0.8417,scaleY:0.8595,y:402.5419}},{t:this.shape_113,p:{x:558.211,y:457.2449,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_112,p:{x:558.211,y:457.2449,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_111,p:{x:557.1882,scaleX:0.8417,scaleY:0.8595,y:444.1178}},{t:this.shape_110,p:{x:557.1882,scaleX:0.8417,scaleY:0.8595,y:444.1178}},{t:this.shape_109,p:{x:558.211,y:498.8599,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_108,p:{x:558.211,y:498.8814,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_107,p:{x:557.1882,scaleX:0.8417,scaleY:0.8595,y:485.7153}},{t:this.shape_106,p:{x:557.1882,scaleX:0.8417,scaleY:0.8595,y:485.7153}},{t:this.shape_105,p:{x:558.211,y:540.4965,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_104,p:{x:558.211,y:540.4965,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_103,p:{x:557.1882,scaleX:0.8417,scaleY:0.8595,y:527.3127}},{t:this.shape_102,p:{x:557.1882,scaleX:0.8417,scaleY:0.8595,y:527.3127}},{t:this.instance_51},{t:this.instance_50,p:{regX:40.1,regY:33.5,scaleX:0.8431,scaleY:0.8608,x:549.15,y:316.35}},{t:this.instance_49,p:{regX:41.2,regY:27.6,scaleX:0.8426,scaleY:0.8603,x:548.65,y:321.45}},{t:this.instance_48,p:{regX:6.8,regY:7.5,scaleX:0.8426,scaleY:0.8603,y:309.05,x:524}},{t:this.instance_47,p:{regX:7.5,regY:8.1,scaleX:0.8426,scaleY:0.8603,x:543.4,y:320.05}},{t:this.shape_101,p:{scaleY:0.8584,x:562.9729,y:314.3474,scaleX:0.8408}},{t:this.shape_100,p:{scaleY:0.8584,x:559.0844,y:327.5243,scaleX:0.8408}},{t:this.shape_99,p:{scaleY:0.8584,x:546.4309,y:332.9538,scaleX:0.8408}},{t:this.shape_98,p:{scaleY:0.8584,x:528.1024,y:327.8677,scaleX:0.8408}},{t:this.shape_97,p:{scaleY:0.8584,x:530.5406,y:319.2404,scaleX:0.8408}},{t:this.shape_96,p:{scaleY:0.8584,x:543.3622,y:313.5104,scaleX:0.8408}},{t:this.shape_95,p:{scaleY:0.8584,x:567.2187,y:321.2577,scaleX:0.8408}},{t:this.shape_94,p:{scaleY:0.8584,x:571.4435,y:311.2785,scaleX:0.8408}},{t:this.shape_93,p:{scaleY:0.8584,x:565.5582,y:331.0438,scaleX:0.8408}},{t:this.shape_92,p:{scaleY:0.8584,x:531.0661,y:311.1068,scaleX:0.8408}},{t:this.shape_91,p:{scaleY:0.8584,x:521.7336,y:321.0217,scaleX:0.8408}},{t:this.shape_90,p:{scaleY:0.8584,x:536.4259,y:334.5419,scaleX:0.8408}},{t:this.shape_89,p:{scaleY:0.8584,x:555.301,y:334.5419,scaleX:0.8408}},{t:this.shape_88,p:{scaleY:0.8584,x:553.3672,y:320.9788,scaleX:0.8408}},{t:this.shape_87,p:{x:547.3609,scaleX:0.8417,scaleY:0.8595,y:342.2943}},{t:this.instance_46,p:{regX:12.8,regY:7.8,scaleX:0.8431,scaleY:0.8608,x:538.6,y:342.05}},{t:this.instance_45,p:{regX:23.7,regY:7.8,scaleX:0.8431,scaleY:0.8608,x:549.15,y:342.05}},{t:this.shape_86,p:{x:547.3618,scaleX:0.8417,scaleY:0.8595,y:316.7686}},{t:this.instance_44,p:{regX:10.5,regY:25.4,scaleX:0.8431,scaleY:0.8608,x:569.75,y:317.25}},{t:this.instance_43,p:{regX:10.8,regY:25.4,scaleX:0.8431,scaleY:0.8608,x:529.05,y:317.25}},{t:this.shape_85,p:{scaleY:0.8584,x:561.3965,y:316.3176,scaleX:0.8408}},{t:this.instance_42,p:{regX:12.4,regY:10.8,scaleX:0.8426,scaleY:0.8603,x:561.3,y:320.3}},{t:this.shape_84,p:{scaleY:0.8584,x:547.2717,y:308.8887,scaleX:0.8408}},{t:this.instance_41,p:{regX:11.8,regY:8.6,scaleX:0.8426,scaleY:0.8603,x:547.55,y:310}},{t:this.shape_83,p:{scaleY:0.8584,x:544.5182,y:326.6873,scaleX:0.8408}},{t:this.instance_40,p:{regX:9.2,regY:10.4,scaleX:0.8426,scaleY:0.8603,x:544.85,y:326.05}},{t:this.shape_82,p:{scaleY:0.8584,x:530.9244,y:323.6519,scaleX:0.8408}},{t:this.instance_39,p:{regX:7.5,regY:8.2,scaleX:0.8426,scaleY:0.8603,x:533.45,y:323.05}},{t:this.instance_38,p:{regX:22.2,regY:16.3,scaleX:0.8426,scaleY:0.8603,x:541.05,y:315.9}},{t:this.shape_81,p:{scaleY:0.8584,x:531.2039,y:316.193,scaleX:0.8408}},{t:this.shape_80,p:{scaleY:0.8584,x:532.3878,y:319.3048,scaleX:0.8408}},{t:this.instance_37,p:{regX:9.3,regY:7.3,scaleX:0.8426,scaleY:0.8603,x:534.65,y:320.3}},{t:this.shape_79,p:{scaleY:0.8584,x:530.961,y:314.8195,scaleX:0.8408}},{t:this.shape_78,p:{scaleY:0.8584,x:530.8349,y:315.2487,scaleX:0.8408}},{t:this.shape_77,p:{scaleY:0.8584,x:533.4125,y:324.8294,scaleX:0.8408}},{t:this.instance_36,p:{regX:6.2,regY:7,scaleX:0.8431,scaleY:0.8608,x:562.5,y:300.95}},{t:this.instance_35,p:{regX:6,regY:6.4,scaleX:0.8431,scaleY:0.8608,x:561.35,y:334.45}},{t:this.shape_76,p:{x:562.1544,scaleX:0.8417,scaleY:0.8595,y:305.5098}},{t:this.instance_34,p:{regX:5.2,regY:5.9,scaleX:0.8431,scaleY:0.8608,y:330.4,x:563.75}},{t:this.shape_142},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.instance_33},{t:this.shape_65},{t:this.instance_32},{t:this.shape_64},{t:this.instance_31},{t:this.shape_63},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.shape_62},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.shape_61},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58,p:{x:397.723,y:534.5809,scaleX:0.8438,scaleY:0.8614}},{t:this.shape_57,p:{x:397.723,y:534.5809,scaleX:0.8438,scaleY:0.8614}},{t:this.shape_56,p:{x:396.6566,y:521.7859,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_55,p:{x:396.6566,y:521.7859,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_54,p:{x:266.0323,y:534.5809,scaleX:0.8438,scaleY:0.8614}},{t:this.shape_53,p:{x:266.0323,y:534.5809,scaleX:0.8438,scaleY:0.8614}},{t:this.shape_52,p:{x:265.1422,y:521.7859,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_51,p:{x:265.1422,y:521.7859,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_50,p:{x:139.4676,y:534.5809,scaleX:0.8438,scaleY:0.8614}},{t:this.shape_49,p:{x:139.4676,y:534.5809,scaleX:0.8438,scaleY:0.8614}},{t:this.shape_48,p:{x:138.7468,y:521.7859,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_47,p:{x:138.7468,y:521.7859,scaleX:0.8426,scaleY:0.8603}},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.shape_46},{t:this.instance_9},{t:this.shape_45,p:{scaleY:0.8584,x:-366.0943,y:245.2179,scaleX:0.8408}},{t:this.shape_44,p:{scaleY:0.8584,x:-366.0943,y:245.2394,scaleX:0.8408}},{t:this.shape_43,p:{scaleY:0.8584,x:-366.0733,y:245.2394,scaleX:0.8408}},{t:this.shape_42,p:{x:-364.6686,scaleX:0.8417,scaleY:0.8595,y:245.9439}},{t:this.shape_41,p:{x:-375.557,scaleX:0.8417,scaleY:0.8595,y:236.7889}},{t:this.shape_40,p:{x:-357.185,scaleX:0.8417,scaleY:0.8595,y:235.5117}},{t:this.shape_39,p:{scaleY:0.8584,x:-379.568,y:236.9341,scaleX:0.8408}},{t:this.shape_38,p:{scaleY:0.8584,x:-376.0363,y:236.3976,scaleX:0.8408}},{t:this.shape_37,p:{scaleY:0.8584,x:-372.6732,y:236.2044,scaleX:0.8408}},{t:this.shape_36,p:{scaleY:0.8584,x:-377.8019,y:236.6336,scaleX:0.8408}},{t:this.shape_35,p:{scaleY:0.8584,x:-374.1656,y:236.2473,scaleX:0.8408}},{t:this.shape_34,p:{scaleY:0.8584,x:-362.3319,y:235.2043,scaleX:0.8408}},{t:this.shape_33,p:{scaleY:0.8584,x:-359.5994,y:235.2601,scaleX:0.8408}},{t:this.shape_32,p:{scaleY:0.8584,x:-354.3026,y:235.904,scaleX:0.8408}},{t:this.shape_31,p:{scaleY:0.8584,x:-361.1548,y:235.2172,scaleX:0.8408}},{t:this.shape_30,p:{scaleY:0.8584,x:-357.2873,y:235.4104,scaleX:0.8408}},{t:this.shape_29,p:{x:-370.8001,scaleX:0.8417,scaleY:0.8595,y:245.7986}},{t:this.shape_28,p:{x:-351.9873,scaleX:0.8417,scaleY:0.8595,y:244.1012}},{t:this.shape_27,p:{x:-333.3429,scaleX:0.8417,scaleY:0.8595,y:243.9912}},{t:this.shape_26,p:{x:-397.6148,scaleX:0.8417,scaleY:0.8595,y:249.8937}},{t:this.shape_25,p:{x:-397.925,scaleX:0.8417,scaleY:0.8595,y:259.249}},{t:this.shape_24,p:{scaleY:0.8584,x:-379.9827,y:259.4896,scaleX:0.8408}},{t:this.shape_23,p:{scaleY:0.8584,x:-379.9668,y:259.5108,scaleX:0.8408}},{t:this.shape_22,p:{scaleY:0.8584,x:-347.7444,y:256.571,scaleX:0.8408}},{t:this.shape_21,p:{scaleY:0.8584,x:-347.7237,y:256.5706,scaleX:0.8408}},{t:this.shape_20,p:{x:-516.4459,scaleX:0.8417,scaleY:0.8595,y:361.0518}},{t:this.shape_19,p:{scaleY:0.8584,x:-522.3843,y:356.9899,scaleX:0.8408}},{t:this.shape_18,p:{scaleY:0.8584,x:-523.4983,y:357.0113,scaleX:0.8408}},{t:this.shape_17,p:{x:-567.0763,scaleX:0.8417,scaleY:0.8595,y:364.4682}},{t:this.shape_16,p:{x:-567.0763,scaleX:0.8417,scaleY:0.8595,y:364.4682}},{t:this.shape_15,p:{x:-631.7637,scaleX:0.8417,scaleY:0.8595,y:360.8585}},{t:this.shape_14,p:{scaleY:0.8584,x:-625.3983,y:356.8182,scaleX:0.8408}},{t:this.shape_13,p:{scaleY:0.8584,x:-624.3053,y:356.8182,scaleX:0.8408}},{t:this.shape_12,p:{x:-581.1333,scaleX:0.8417,scaleY:0.8595,y:364.2533}},{t:this.shape_11,p:{x:-581.1333,scaleX:0.8417,scaleY:0.8595,y:364.2533}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.instance_8},{t:this.instance_7},{t:this.shape_4},{t:this.shape_3,p:{x:139.4886,y:345.9185,scaleX:0.8438,scaleY:0.8614}},{t:this.shape_2,p:{x:139.4886,y:383.1514,scaleX:0.8438,scaleY:0.8614}},{t:this.shape_1,p:{x:139.4886,y:420.3843,scaleX:0.8438,scaleY:0.8614}},{t:this.shape,p:{x:139.4886,y:457.5956,scaleX:0.8438,scaleY:0.8614}},{t:this.instance_56},{t:this.instance_5},{t:this.instance_4,p:{regX:0,regY:0,x:-167.8,y:264.1}},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_60},{t:this.instance_59}]},27).to({state:[{t:this.shape_141},{t:this.shape_140},{t:this.instance_55},{t:this.shape_139,p:{x:347.1488,y:304.1865,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_138,p:{x:347.1488,y:304.1865,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_137,p:{x:348.4755,scaleX:0.8417,scaleY:0.8595,y:274.4622}},{t:this.shape_136,p:{x:358.45,scaleX:0.8417,scaleY:0.8595,y:275.5794}},{t:this.shape_135,p:{x:353.9047,scaleX:0.8417,scaleY:0.8595,y:272.7017}},{t:this.shape_134,p:{x:333.4294,scaleX:0.8417,scaleY:0.8595,y:300.8834}},{t:this.shape_133,p:{x:334.3343,scaleX:0.8417,scaleY:0.8595,y:296.8771}},{t:this.shape_132,p:{x:341.0577,scaleX:0.8417,scaleY:0.8595,y:286.7093}},{t:this.shape_131,p:{x:361.5645,scaleX:0.8417,scaleY:0.8595,y:307.0749}},{t:this.shape_130,p:{x:361.8591,scaleX:0.8417,scaleY:0.8595,y:302.578}},{t:this.shape_129,p:{x:360.2177,scaleX:0.8417,scaleY:0.8595,y:290.6542}},{t:this.shape_128,p:{scaleY:0.8584,x:333.841,y:316.8027,scaleX:0.8408}},{t:this.shape_127,p:{x:330.8201,scaleX:0.8417,scaleY:0.8595,y:329.7678}},{t:this.shape_126,p:{x:346.329,scaleX:0.8417,scaleY:0.8595,y:323.7087}},{t:this.shape_125,p:{x:348.3492,scaleX:0.8417,scaleY:0.8595,y:312.0846}},{t:this.shape_124,p:{x:351.7162,scaleX:0.8417,scaleY:0.8595,y:285.5706}},{t:this.shape_123},{t:this.instance_54,p:{regY:133.2,scaleY:0.8618,x:530.05,regX:84.7,scaleX:0.8443,y:459.5}},{t:this.instance_53,p:{regX:1.5,scaleY:0.8618,y:274.3,regY:1.9,scaleX:0.8443,x:466.45}},{t:this.instance_52,p:{regY:2.1,scaleY:0.8618,x:541.8,y:273.7,regX:1.6,scaleX:0.8443}},{t:this.shape_122,p:{x:559.515,y:459.0815,scaleX:0.8438,scaleY:0.8614}},{t:this.shape_121,p:{x:559.4939,y:374.6238,scaleX:0.8438,scaleY:0.8614}},{t:this.shape_120,p:{x:559.4939,y:374.6238,scaleX:0.8438,scaleY:0.8614}},{t:this.shape_119,p:{x:558.211,y:361.4119,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_118,p:{x:558.211,y:361.4119,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_117,p:{x:558.211,y:415.6298,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_116,p:{x:558.211,y:415.6083,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_115,p:{x:557.1882,scaleX:0.8417,scaleY:0.8595,y:402.5419}},{t:this.shape_114,p:{x:557.1882,scaleX:0.8417,scaleY:0.8595,y:402.5419}},{t:this.shape_113,p:{x:558.211,y:457.2449,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_112,p:{x:558.211,y:457.2449,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_111,p:{x:557.1882,scaleX:0.8417,scaleY:0.8595,y:444.1178}},{t:this.shape_110,p:{x:557.1882,scaleX:0.8417,scaleY:0.8595,y:444.1178}},{t:this.shape_109,p:{x:558.211,y:498.8599,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_108,p:{x:558.211,y:498.8814,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_107,p:{x:557.1882,scaleX:0.8417,scaleY:0.8595,y:485.7153}},{t:this.shape_106,p:{x:557.1882,scaleX:0.8417,scaleY:0.8595,y:485.7153}},{t:this.shape_105,p:{x:558.211,y:540.4965,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_104,p:{x:558.211,y:540.4965,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_103,p:{x:557.1882,scaleX:0.8417,scaleY:0.8595,y:527.3127}},{t:this.shape_102,p:{x:557.1882,scaleX:0.8417,scaleY:0.8595,y:527.3127}},{t:this.instance_51},{t:this.instance_50,p:{regX:40.1,regY:33.5,scaleX:0.8431,scaleY:0.8608,x:549.15,y:316.35}},{t:this.instance_49,p:{regX:41.2,regY:27.6,scaleX:0.8426,scaleY:0.8603,x:548.65,y:321.45}},{t:this.instance_48,p:{regX:6.8,regY:7.5,scaleX:0.8426,scaleY:0.8603,y:309.05,x:524}},{t:this.instance_47,p:{regX:7.5,regY:8.1,scaleX:0.8426,scaleY:0.8603,x:543.4,y:320.05}},{t:this.shape_101,p:{scaleY:0.8584,x:562.9729,y:314.3474,scaleX:0.8408}},{t:this.shape_100,p:{scaleY:0.8584,x:559.0844,y:327.5243,scaleX:0.8408}},{t:this.shape_99,p:{scaleY:0.8584,x:546.4309,y:332.9538,scaleX:0.8408}},{t:this.shape_98,p:{scaleY:0.8584,x:528.1024,y:327.8677,scaleX:0.8408}},{t:this.shape_97,p:{scaleY:0.8584,x:530.5406,y:319.2404,scaleX:0.8408}},{t:this.shape_96,p:{scaleY:0.8584,x:543.3622,y:313.5104,scaleX:0.8408}},{t:this.shape_95,p:{scaleY:0.8584,x:567.2187,y:321.2577,scaleX:0.8408}},{t:this.shape_94,p:{scaleY:0.8584,x:571.4435,y:311.2785,scaleX:0.8408}},{t:this.shape_93,p:{scaleY:0.8584,x:565.5582,y:331.0438,scaleX:0.8408}},{t:this.shape_92,p:{scaleY:0.8584,x:531.0661,y:311.1068,scaleX:0.8408}},{t:this.shape_91,p:{scaleY:0.8584,x:521.7336,y:321.0217,scaleX:0.8408}},{t:this.shape_90,p:{scaleY:0.8584,x:536.4259,y:334.5419,scaleX:0.8408}},{t:this.shape_89,p:{scaleY:0.8584,x:555.301,y:334.5419,scaleX:0.8408}},{t:this.shape_88,p:{scaleY:0.8584,x:553.3672,y:320.9788,scaleX:0.8408}},{t:this.shape_87,p:{x:547.3609,scaleX:0.8417,scaleY:0.8595,y:342.2943}},{t:this.instance_46,p:{regX:12.8,regY:7.8,scaleX:0.8431,scaleY:0.8608,x:538.6,y:342.05}},{t:this.instance_45,p:{regX:23.7,regY:7.8,scaleX:0.8431,scaleY:0.8608,x:549.15,y:342.05}},{t:this.shape_86,p:{x:547.3618,scaleX:0.8417,scaleY:0.8595,y:316.7686}},{t:this.instance_44,p:{regX:10.5,regY:25.4,scaleX:0.8431,scaleY:0.8608,x:569.75,y:317.25}},{t:this.instance_43,p:{regX:10.8,regY:25.4,scaleX:0.8431,scaleY:0.8608,x:529.05,y:317.25}},{t:this.shape_85,p:{scaleY:0.8584,x:561.3965,y:316.3176,scaleX:0.8408}},{t:this.instance_42,p:{regX:12.4,regY:10.8,scaleX:0.8426,scaleY:0.8603,x:561.3,y:320.3}},{t:this.shape_84,p:{scaleY:0.8584,x:547.2717,y:308.8887,scaleX:0.8408}},{t:this.instance_41,p:{regX:11.8,regY:8.6,scaleX:0.8426,scaleY:0.8603,x:547.55,y:310}},{t:this.shape_83,p:{scaleY:0.8584,x:544.5182,y:326.6873,scaleX:0.8408}},{t:this.instance_40,p:{regX:9.2,regY:10.4,scaleX:0.8426,scaleY:0.8603,x:544.85,y:326.05}},{t:this.shape_82,p:{scaleY:0.8584,x:530.9244,y:323.6519,scaleX:0.8408}},{t:this.instance_39,p:{regX:7.5,regY:8.2,scaleX:0.8426,scaleY:0.8603,x:533.45,y:323.05}},{t:this.instance_38,p:{regX:22.2,regY:16.3,scaleX:0.8426,scaleY:0.8603,x:541.05,y:315.9}},{t:this.shape_81,p:{scaleY:0.8584,x:531.2039,y:316.193,scaleX:0.8408}},{t:this.shape_80,p:{scaleY:0.8584,x:532.3878,y:319.3048,scaleX:0.8408}},{t:this.instance_37,p:{regX:9.3,regY:7.3,scaleX:0.8426,scaleY:0.8603,x:534.65,y:320.3}},{t:this.shape_79,p:{scaleY:0.8584,x:530.961,y:314.8195,scaleX:0.8408}},{t:this.shape_78,p:{scaleY:0.8584,x:530.8349,y:315.2487,scaleX:0.8408}},{t:this.shape_77,p:{scaleY:0.8584,x:533.4125,y:324.8294,scaleX:0.8408}},{t:this.instance_36,p:{regX:6.2,regY:7,scaleX:0.8431,scaleY:0.8608,x:562.5,y:300.95}},{t:this.instance_35,p:{regX:6,regY:6.4,scaleX:0.8431,scaleY:0.8608,x:561.35,y:334.45}},{t:this.shape_76,p:{x:562.1544,scaleX:0.8417,scaleY:0.8595,y:305.5098}},{t:this.instance_34,p:{regX:5.2,regY:5.9,scaleX:0.8431,scaleY:0.8608,y:330.4,x:563.75}},{t:this.shape_142},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.instance_33},{t:this.shape_65},{t:this.instance_32},{t:this.shape_64},{t:this.instance_31},{t:this.shape_63},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.shape_62},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.shape_61},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58,p:{x:397.723,y:534.5809,scaleX:0.8438,scaleY:0.8614}},{t:this.shape_57,p:{x:397.723,y:534.5809,scaleX:0.8438,scaleY:0.8614}},{t:this.shape_56,p:{x:396.6566,y:521.7859,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_55,p:{x:396.6566,y:521.7859,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_54,p:{x:266.0323,y:534.5809,scaleX:0.8438,scaleY:0.8614}},{t:this.shape_53,p:{x:266.0323,y:534.5809,scaleX:0.8438,scaleY:0.8614}},{t:this.shape_52,p:{x:265.1422,y:521.7859,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_51,p:{x:265.1422,y:521.7859,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_50,p:{x:139.4676,y:534.5809,scaleX:0.8438,scaleY:0.8614}},{t:this.shape_49,p:{x:139.4676,y:534.5809,scaleX:0.8438,scaleY:0.8614}},{t:this.shape_48,p:{x:138.7468,y:521.7859,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_47,p:{x:138.7468,y:521.7859,scaleX:0.8426,scaleY:0.8603}},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.shape_46},{t:this.instance_9},{t:this.shape_45,p:{scaleY:0.8584,x:-366.0943,y:245.2179,scaleX:0.8408}},{t:this.shape_44,p:{scaleY:0.8584,x:-366.0943,y:245.2394,scaleX:0.8408}},{t:this.shape_43,p:{scaleY:0.8584,x:-366.0733,y:245.2394,scaleX:0.8408}},{t:this.shape_42,p:{x:-364.6686,scaleX:0.8417,scaleY:0.8595,y:245.9439}},{t:this.shape_41,p:{x:-375.557,scaleX:0.8417,scaleY:0.8595,y:236.7889}},{t:this.shape_40,p:{x:-357.185,scaleX:0.8417,scaleY:0.8595,y:235.5117}},{t:this.shape_39,p:{scaleY:0.8584,x:-379.568,y:236.9341,scaleX:0.8408}},{t:this.shape_38,p:{scaleY:0.8584,x:-376.0363,y:236.3976,scaleX:0.8408}},{t:this.shape_37,p:{scaleY:0.8584,x:-372.6732,y:236.2044,scaleX:0.8408}},{t:this.shape_36,p:{scaleY:0.8584,x:-377.8019,y:236.6336,scaleX:0.8408}},{t:this.shape_35,p:{scaleY:0.8584,x:-374.1656,y:236.2473,scaleX:0.8408}},{t:this.shape_34,p:{scaleY:0.8584,x:-362.3319,y:235.2043,scaleX:0.8408}},{t:this.shape_33,p:{scaleY:0.8584,x:-359.5994,y:235.2601,scaleX:0.8408}},{t:this.shape_32,p:{scaleY:0.8584,x:-354.3026,y:235.904,scaleX:0.8408}},{t:this.shape_31,p:{scaleY:0.8584,x:-361.1548,y:235.2172,scaleX:0.8408}},{t:this.shape_30,p:{scaleY:0.8584,x:-357.2873,y:235.4104,scaleX:0.8408}},{t:this.shape_29,p:{x:-370.8001,scaleX:0.8417,scaleY:0.8595,y:245.7986}},{t:this.shape_28,p:{x:-351.9873,scaleX:0.8417,scaleY:0.8595,y:244.1012}},{t:this.shape_27,p:{x:-333.3429,scaleX:0.8417,scaleY:0.8595,y:243.9912}},{t:this.shape_26,p:{x:-397.6148,scaleX:0.8417,scaleY:0.8595,y:249.8937}},{t:this.shape_25,p:{x:-397.925,scaleX:0.8417,scaleY:0.8595,y:259.249}},{t:this.shape_24,p:{scaleY:0.8584,x:-379.9827,y:259.4896,scaleX:0.8408}},{t:this.shape_23,p:{scaleY:0.8584,x:-379.9668,y:259.5108,scaleX:0.8408}},{t:this.shape_22,p:{scaleY:0.8584,x:-347.7444,y:256.571,scaleX:0.8408}},{t:this.shape_21,p:{scaleY:0.8584,x:-347.7237,y:256.5706,scaleX:0.8408}},{t:this.shape_20,p:{x:-516.4459,scaleX:0.8417,scaleY:0.8595,y:361.0518}},{t:this.shape_19,p:{scaleY:0.8584,x:-522.3843,y:356.9899,scaleX:0.8408}},{t:this.shape_18,p:{scaleY:0.8584,x:-523.4983,y:357.0113,scaleX:0.8408}},{t:this.shape_17,p:{x:-567.0763,scaleX:0.8417,scaleY:0.8595,y:364.4682}},{t:this.shape_16,p:{x:-567.0763,scaleX:0.8417,scaleY:0.8595,y:364.4682}},{t:this.shape_15,p:{x:-631.7637,scaleX:0.8417,scaleY:0.8595,y:360.8585}},{t:this.shape_14,p:{scaleY:0.8584,x:-625.3983,y:356.8182,scaleX:0.8408}},{t:this.shape_13,p:{scaleY:0.8584,x:-624.3053,y:356.8182,scaleX:0.8408}},{t:this.shape_12,p:{x:-581.1333,scaleX:0.8417,scaleY:0.8595,y:364.2533}},{t:this.shape_11,p:{x:-581.1333,scaleX:0.8417,scaleY:0.8595,y:364.2533}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.instance_8},{t:this.instance_7},{t:this.shape_4},{t:this.shape_3,p:{x:139.4886,y:345.9185,scaleX:0.8438,scaleY:0.8614}},{t:this.shape_2,p:{x:139.4886,y:383.1514,scaleX:0.8438,scaleY:0.8614}},{t:this.shape_1,p:{x:139.4886,y:420.3843,scaleX:0.8438,scaleY:0.8614}},{t:this.shape,p:{x:139.4886,y:457.5956,scaleX:0.8438,scaleY:0.8614}},{t:this.instance_56},{t:this.instance_5},{t:this.instance_4,p:{regX:0,regY:0,x:-167.8,y:264.1}},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_60},{t:this.instance_59},{t:this.instance_61}]},19).to({state:[{t:this.shape_141},{t:this.shape_140},{t:this.instance_55},{t:this.shape_139,p:{x:347.1488,y:304.1865,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_138,p:{x:347.1488,y:304.1865,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_137,p:{x:348.4755,scaleX:0.8417,scaleY:0.8595,y:274.4622}},{t:this.shape_136,p:{x:358.45,scaleX:0.8417,scaleY:0.8595,y:275.5794}},{t:this.shape_135,p:{x:353.9047,scaleX:0.8417,scaleY:0.8595,y:272.7017}},{t:this.shape_134,p:{x:333.4294,scaleX:0.8417,scaleY:0.8595,y:300.8834}},{t:this.shape_133,p:{x:334.3343,scaleX:0.8417,scaleY:0.8595,y:296.8771}},{t:this.shape_132,p:{x:341.0577,scaleX:0.8417,scaleY:0.8595,y:286.7093}},{t:this.shape_131,p:{x:361.5645,scaleX:0.8417,scaleY:0.8595,y:307.0749}},{t:this.shape_130,p:{x:361.8591,scaleX:0.8417,scaleY:0.8595,y:302.578}},{t:this.shape_129,p:{x:360.2177,scaleX:0.8417,scaleY:0.8595,y:290.6542}},{t:this.shape_128,p:{scaleY:0.8584,x:333.841,y:316.8027,scaleX:0.8408}},{t:this.shape_127,p:{x:330.8201,scaleX:0.8417,scaleY:0.8595,y:329.7678}},{t:this.shape_126,p:{x:346.329,scaleX:0.8417,scaleY:0.8595,y:323.7087}},{t:this.shape_125,p:{x:348.3492,scaleX:0.8417,scaleY:0.8595,y:312.0846}},{t:this.shape_124,p:{x:351.7162,scaleX:0.8417,scaleY:0.8595,y:285.5706}},{t:this.shape_123},{t:this.instance_54,p:{regY:133.2,scaleY:0.8618,x:530.05,regX:84.7,scaleX:0.8443,y:459.5}},{t:this.instance_53,p:{regX:1.5,scaleY:0.8618,y:274.3,regY:1.9,scaleX:0.8443,x:466.45}},{t:this.instance_52,p:{regY:2.1,scaleY:0.8618,x:541.8,y:273.7,regX:1.6,scaleX:0.8443}},{t:this.shape_122,p:{x:559.515,y:459.0815,scaleX:0.8438,scaleY:0.8614}},{t:this.shape_121,p:{x:559.4939,y:374.6238,scaleX:0.8438,scaleY:0.8614}},{t:this.shape_120,p:{x:559.4939,y:374.6238,scaleX:0.8438,scaleY:0.8614}},{t:this.shape_119,p:{x:558.211,y:361.4119,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_118,p:{x:558.211,y:361.4119,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_117,p:{x:558.211,y:415.6298,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_116,p:{x:558.211,y:415.6083,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_115,p:{x:557.1882,scaleX:0.8417,scaleY:0.8595,y:402.5419}},{t:this.shape_114,p:{x:557.1882,scaleX:0.8417,scaleY:0.8595,y:402.5419}},{t:this.shape_113,p:{x:558.211,y:457.2449,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_112,p:{x:558.211,y:457.2449,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_111,p:{x:557.1882,scaleX:0.8417,scaleY:0.8595,y:444.1178}},{t:this.shape_110,p:{x:557.1882,scaleX:0.8417,scaleY:0.8595,y:444.1178}},{t:this.shape_109,p:{x:558.211,y:498.8599,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_108,p:{x:558.211,y:498.8814,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_107,p:{x:557.1882,scaleX:0.8417,scaleY:0.8595,y:485.7153}},{t:this.shape_106,p:{x:557.1882,scaleX:0.8417,scaleY:0.8595,y:485.7153}},{t:this.shape_105,p:{x:558.211,y:540.4965,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_104,p:{x:558.211,y:540.4965,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_103,p:{x:557.1882,scaleX:0.8417,scaleY:0.8595,y:527.3127}},{t:this.shape_102,p:{x:557.1882,scaleX:0.8417,scaleY:0.8595,y:527.3127}},{t:this.instance_51},{t:this.instance_50,p:{regX:40.1,regY:33.5,scaleX:0.8431,scaleY:0.8608,x:549.15,y:316.35}},{t:this.instance_49,p:{regX:41.2,regY:27.6,scaleX:0.8426,scaleY:0.8603,x:548.65,y:321.45}},{t:this.instance_48,p:{regX:6.8,regY:7.5,scaleX:0.8426,scaleY:0.8603,y:309.05,x:524}},{t:this.instance_47,p:{regX:7.5,regY:8.1,scaleX:0.8426,scaleY:0.8603,x:543.4,y:320.05}},{t:this.shape_101,p:{scaleY:0.8584,x:562.9729,y:314.3474,scaleX:0.8408}},{t:this.shape_100,p:{scaleY:0.8584,x:559.0844,y:327.5243,scaleX:0.8408}},{t:this.shape_99,p:{scaleY:0.8584,x:546.4309,y:332.9538,scaleX:0.8408}},{t:this.shape_98,p:{scaleY:0.8584,x:528.1024,y:327.8677,scaleX:0.8408}},{t:this.shape_97,p:{scaleY:0.8584,x:530.5406,y:319.2404,scaleX:0.8408}},{t:this.shape_96,p:{scaleY:0.8584,x:543.3622,y:313.5104,scaleX:0.8408}},{t:this.shape_95,p:{scaleY:0.8584,x:567.2187,y:321.2577,scaleX:0.8408}},{t:this.shape_94,p:{scaleY:0.8584,x:571.4435,y:311.2785,scaleX:0.8408}},{t:this.shape_93,p:{scaleY:0.8584,x:565.5582,y:331.0438,scaleX:0.8408}},{t:this.shape_92,p:{scaleY:0.8584,x:531.0661,y:311.1068,scaleX:0.8408}},{t:this.shape_91,p:{scaleY:0.8584,x:521.7336,y:321.0217,scaleX:0.8408}},{t:this.shape_90,p:{scaleY:0.8584,x:536.4259,y:334.5419,scaleX:0.8408}},{t:this.shape_89,p:{scaleY:0.8584,x:555.301,y:334.5419,scaleX:0.8408}},{t:this.shape_88,p:{scaleY:0.8584,x:553.3672,y:320.9788,scaleX:0.8408}},{t:this.shape_87,p:{x:547.3609,scaleX:0.8417,scaleY:0.8595,y:342.2943}},{t:this.instance_46,p:{regX:12.8,regY:7.8,scaleX:0.8431,scaleY:0.8608,x:538.6,y:342.05}},{t:this.instance_45,p:{regX:23.7,regY:7.8,scaleX:0.8431,scaleY:0.8608,x:549.15,y:342.05}},{t:this.shape_86,p:{x:547.3618,scaleX:0.8417,scaleY:0.8595,y:316.7686}},{t:this.instance_44,p:{regX:10.5,regY:25.4,scaleX:0.8431,scaleY:0.8608,x:569.75,y:317.25}},{t:this.instance_43,p:{regX:10.8,regY:25.4,scaleX:0.8431,scaleY:0.8608,x:529.05,y:317.25}},{t:this.shape_85,p:{scaleY:0.8584,x:561.3965,y:316.3176,scaleX:0.8408}},{t:this.instance_42,p:{regX:12.4,regY:10.8,scaleX:0.8426,scaleY:0.8603,x:561.3,y:320.3}},{t:this.shape_84,p:{scaleY:0.8584,x:547.2717,y:308.8887,scaleX:0.8408}},{t:this.instance_41,p:{regX:11.8,regY:8.6,scaleX:0.8426,scaleY:0.8603,x:547.55,y:310}},{t:this.shape_83,p:{scaleY:0.8584,x:544.5182,y:326.6873,scaleX:0.8408}},{t:this.instance_40,p:{regX:9.2,regY:10.4,scaleX:0.8426,scaleY:0.8603,x:544.85,y:326.05}},{t:this.shape_82,p:{scaleY:0.8584,x:530.9244,y:323.6519,scaleX:0.8408}},{t:this.instance_39,p:{regX:7.5,regY:8.2,scaleX:0.8426,scaleY:0.8603,x:533.45,y:323.05}},{t:this.instance_38,p:{regX:22.2,regY:16.3,scaleX:0.8426,scaleY:0.8603,x:541.05,y:315.9}},{t:this.shape_81,p:{scaleY:0.8584,x:531.2039,y:316.193,scaleX:0.8408}},{t:this.shape_80,p:{scaleY:0.8584,x:532.3878,y:319.3048,scaleX:0.8408}},{t:this.instance_37,p:{regX:9.3,regY:7.3,scaleX:0.8426,scaleY:0.8603,x:534.65,y:320.3}},{t:this.shape_79,p:{scaleY:0.8584,x:530.961,y:314.8195,scaleX:0.8408}},{t:this.shape_78,p:{scaleY:0.8584,x:530.8349,y:315.2487,scaleX:0.8408}},{t:this.shape_77,p:{scaleY:0.8584,x:533.4125,y:324.8294,scaleX:0.8408}},{t:this.instance_36,p:{regX:6.2,regY:7,scaleX:0.8431,scaleY:0.8608,x:562.5,y:300.95}},{t:this.instance_35,p:{regX:6,regY:6.4,scaleX:0.8431,scaleY:0.8608,x:561.35,y:334.45}},{t:this.shape_76,p:{x:562.1544,scaleX:0.8417,scaleY:0.8595,y:305.5098}},{t:this.instance_34,p:{regX:5.2,regY:5.9,scaleX:0.8431,scaleY:0.8608,y:330.4,x:563.75}},{t:this.shape_142},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.instance_33},{t:this.shape_65},{t:this.instance_32},{t:this.shape_64},{t:this.instance_31},{t:this.shape_63},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.shape_62},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.shape_61},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58,p:{x:397.723,y:534.5809,scaleX:0.8438,scaleY:0.8614}},{t:this.shape_57,p:{x:397.723,y:534.5809,scaleX:0.8438,scaleY:0.8614}},{t:this.shape_56,p:{x:396.6566,y:521.7859,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_55,p:{x:396.6566,y:521.7859,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_54,p:{x:266.0323,y:534.5809,scaleX:0.8438,scaleY:0.8614}},{t:this.shape_53,p:{x:266.0323,y:534.5809,scaleX:0.8438,scaleY:0.8614}},{t:this.shape_52,p:{x:265.1422,y:521.7859,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_51,p:{x:265.1422,y:521.7859,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_50,p:{x:139.4676,y:534.5809,scaleX:0.8438,scaleY:0.8614}},{t:this.shape_49,p:{x:139.4676,y:534.5809,scaleX:0.8438,scaleY:0.8614}},{t:this.shape_48,p:{x:138.7468,y:521.7859,scaleX:0.8426,scaleY:0.8603}},{t:this.shape_47,p:{x:138.7468,y:521.7859,scaleX:0.8426,scaleY:0.8603}},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.shape_46},{t:this.instance_9},{t:this.shape_45,p:{scaleY:0.8584,x:-366.0943,y:245.2179,scaleX:0.8408}},{t:this.shape_44,p:{scaleY:0.8584,x:-366.0943,y:245.2394,scaleX:0.8408}},{t:this.shape_43,p:{scaleY:0.8584,x:-366.0733,y:245.2394,scaleX:0.8408}},{t:this.shape_42,p:{x:-364.6686,scaleX:0.8417,scaleY:0.8595,y:245.9439}},{t:this.shape_41,p:{x:-375.557,scaleX:0.8417,scaleY:0.8595,y:236.7889}},{t:this.shape_40,p:{x:-357.185,scaleX:0.8417,scaleY:0.8595,y:235.5117}},{t:this.shape_39,p:{scaleY:0.8584,x:-379.568,y:236.9341,scaleX:0.8408}},{t:this.shape_38,p:{scaleY:0.8584,x:-376.0363,y:236.3976,scaleX:0.8408}},{t:this.shape_37,p:{scaleY:0.8584,x:-372.6732,y:236.2044,scaleX:0.8408}},{t:this.shape_36,p:{scaleY:0.8584,x:-377.8019,y:236.6336,scaleX:0.8408}},{t:this.shape_35,p:{scaleY:0.8584,x:-374.1656,y:236.2473,scaleX:0.8408}},{t:this.shape_34,p:{scaleY:0.8584,x:-362.3319,y:235.2043,scaleX:0.8408}},{t:this.shape_33,p:{scaleY:0.8584,x:-359.5994,y:235.2601,scaleX:0.8408}},{t:this.shape_32,p:{scaleY:0.8584,x:-354.3026,y:235.904,scaleX:0.8408}},{t:this.shape_31,p:{scaleY:0.8584,x:-361.1548,y:235.2172,scaleX:0.8408}},{t:this.shape_30,p:{scaleY:0.8584,x:-357.2873,y:235.4104,scaleX:0.8408}},{t:this.shape_29,p:{x:-370.8001,scaleX:0.8417,scaleY:0.8595,y:245.7986}},{t:this.shape_28,p:{x:-351.9873,scaleX:0.8417,scaleY:0.8595,y:244.1012}},{t:this.shape_27,p:{x:-333.3429,scaleX:0.8417,scaleY:0.8595,y:243.9912}},{t:this.shape_26,p:{x:-397.6148,scaleX:0.8417,scaleY:0.8595,y:249.8937}},{t:this.shape_25,p:{x:-397.925,scaleX:0.8417,scaleY:0.8595,y:259.249}},{t:this.shape_24,p:{scaleY:0.8584,x:-379.9827,y:259.4896,scaleX:0.8408}},{t:this.shape_23,p:{scaleY:0.8584,x:-379.9668,y:259.5108,scaleX:0.8408}},{t:this.shape_22,p:{scaleY:0.8584,x:-347.7444,y:256.571,scaleX:0.8408}},{t:this.shape_21,p:{scaleY:0.8584,x:-347.7237,y:256.5706,scaleX:0.8408}},{t:this.shape_20,p:{x:-516.4459,scaleX:0.8417,scaleY:0.8595,y:361.0518}},{t:this.shape_19,p:{scaleY:0.8584,x:-522.3843,y:356.9899,scaleX:0.8408}},{t:this.shape_18,p:{scaleY:0.8584,x:-523.4983,y:357.0113,scaleX:0.8408}},{t:this.shape_17,p:{x:-567.0763,scaleX:0.8417,scaleY:0.8595,y:364.4682}},{t:this.shape_16,p:{x:-567.0763,scaleX:0.8417,scaleY:0.8595,y:364.4682}},{t:this.shape_15,p:{x:-631.7637,scaleX:0.8417,scaleY:0.8595,y:360.8585}},{t:this.shape_14,p:{scaleY:0.8584,x:-625.3983,y:356.8182,scaleX:0.8408}},{t:this.shape_13,p:{scaleY:0.8584,x:-624.3053,y:356.8182,scaleX:0.8408}},{t:this.shape_12,p:{x:-581.1333,scaleX:0.8417,scaleY:0.8595,y:364.2533}},{t:this.shape_11,p:{x:-581.1333,scaleX:0.8417,scaleY:0.8595,y:364.2533}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.instance_8},{t:this.instance_7},{t:this.shape_4},{t:this.shape_3,p:{x:139.4886,y:345.9185,scaleX:0.8438,scaleY:0.8614}},{t:this.shape_2,p:{x:139.4886,y:383.1514,scaleX:0.8438,scaleY:0.8614}},{t:this.shape_1,p:{x:139.4886,y:420.3843,scaleX:0.8438,scaleY:0.8614}},{t:this.shape,p:{x:139.4886,y:457.5956,scaleX:0.8438,scaleY:0.8614}},{t:this.instance_56},{t:this.instance_5},{t:this.instance_4,p:{regX:0,regY:0,x:-167.8,y:264.1}},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_60},{t:this.instance_59},{t:this.instance_62}]},71).to({state:[{t:this.shape_141},{t:this.shape_140},{t:this.instance_55},{t:this.shape_139,p:{x:346.9496,y:304.1751,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_138,p:{x:346.9496,y:304.1751,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_137,p:{x:348.2451,scaleX:0.8415,scaleY:0.8594,y:274.449}},{t:this.shape_136,p:{x:358.2169,scaleX:0.8415,scaleY:0.8594,y:275.5662}},{t:this.shape_135,p:{x:353.6728,scaleX:0.8415,scaleY:0.8594,y:272.6887}},{t:this.shape_134,p:{x:333.2031,scaleX:0.8415,scaleY:0.8594,y:300.8683}},{t:this.shape_133,p:{x:334.1077,scaleX:0.8415,scaleY:0.8594,y:296.8624}},{t:this.shape_132,p:{x:340.8293,scaleX:0.8415,scaleY:0.8594,y:286.6953}},{t:this.shape_131,p:{x:361.3305,scaleX:0.8415,scaleY:0.8594,y:307.0595}},{t:this.shape_130,p:{x:361.625,scaleX:0.8415,scaleY:0.8594,y:302.5628}},{t:this.shape_129,p:{x:359.9841,scaleX:0.8415,scaleY:0.8594,y:290.6398}},{t:this.shape_128,p:{scaleY:0.8581,x:333.5236,y:316.7096,scaleX:0.8404}},{t:this.shape_127,p:{x:330.5944,scaleX:0.8415,scaleY:0.8594,y:329.7508}},{t:this.shape_126,p:{x:346.0992,scaleX:0.8415,scaleY:0.8594,y:323.6921}},{t:this.shape_125,p:{x:348.1188,scaleX:0.8415,scaleY:0.8594,y:312.0688}},{t:this.shape_124,p:{x:351.4849,scaleX:0.8415,scaleY:0.8594,y:285.5566}},{t:this.shape_123},{t:this.instance_54,p:{regY:133.3,scaleY:0.8618,x:530.05,regX:84.8,scaleX:0.8442,y:459.5}},{t:this.instance_53,p:{regX:1.6,scaleY:0.8618,y:274.35,regY:2.1,scaleX:0.8442,x:466.45}},{t:this.instance_52,p:{regY:2.3,scaleY:0.8618,x:541.8,y:273.7,regX:1.7,scaleX:0.8442}},{t:this.shape_122,p:{x:559.4803,y:459.0511,scaleX:0.8437,scaleY:0.8613}},{t:this.shape_121,p:{x:559.4592,y:374.5979,scaleX:0.8437,scaleY:0.8613}},{t:this.shape_120,p:{x:559.4592,y:374.5979,scaleX:0.8437,scaleY:0.8613}},{t:this.shape_119,p:{x:557.9856,y:361.3866,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_118,p:{x:557.9856,y:361.3866,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_117,p:{x:557.9856,y:415.6016,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_116,p:{x:557.9856,y:415.5801,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_115,p:{x:556.9281,scaleX:0.8415,scaleY:0.8594,y:402.5052}},{t:this.shape_114,p:{x:556.9281,scaleX:0.8415,scaleY:0.8594,y:402.5052}},{t:this.shape_113,p:{x:557.9856,y:457.2145,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_112,p:{x:557.9856,y:457.2145,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_111,p:{x:556.9281,scaleX:0.8415,scaleY:0.8594,y:444.0783}},{t:this.shape_110,p:{x:556.9281,scaleX:0.8415,scaleY:0.8594,y:444.0783}},{t:this.shape_109,p:{x:557.9856,y:498.8274,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_108,p:{x:557.9856,y:498.8489,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_107,p:{x:556.9281,scaleX:0.8415,scaleY:0.8594,y:485.6727}},{t:this.shape_106,p:{x:556.9281,scaleX:0.8415,scaleY:0.8594,y:485.6727}},{t:this.shape_105,p:{x:557.9856,y:540.4617,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_104,p:{x:557.9856,y:540.4617,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_103,p:{x:556.9281,scaleX:0.8415,scaleY:0.8594,y:527.2672}},{t:this.shape_102,p:{x:556.9281,scaleX:0.8415,scaleY:0.8594,y:527.2672}},{t:this.instance_51},{t:this.instance_50,p:{regX:40.4,regY:34,scaleX:0.843,scaleY:0.8607,x:549.05,y:316.3}},{t:this.instance_49,p:{regX:41.5,regY:28.2,scaleX:0.8424,scaleY:0.8602,x:548.35,y:321.3}},{t:this.instance_48,p:{regX:7.2,regY:7.9,scaleX:0.8424,scaleY:0.8602,y:308.85,x:523.75}},{t:this.instance_47,p:{regX:8,regY:8.6,scaleX:0.8424,scaleY:0.8602,x:543.3,y:319.9}},{t:this.shape_101,p:{scaleY:0.8581,x:562.6062,y:314.1727,scaleX:0.8404}},{t:this.shape_100,p:{scaleY:0.8581,x:558.7192,y:327.3442,scaleX:0.8404}},{t:this.shape_99,p:{scaleY:0.8581,x:546.0706,y:332.7715,scaleX:0.8404}},{t:this.shape_98,p:{scaleY:0.8581,x:527.749,y:327.6874,scaleX:0.8404}},{t:this.shape_97,p:{scaleY:0.8581,x:530.1863,y:319.0637,scaleX:0.8404}},{t:this.shape_96,p:{scaleY:0.8581,x:543.003,y:313.3361,scaleX:0.8404}},{t:this.shape_95,p:{scaleY:0.8581,x:566.8504,y:321.0802,scaleX:0.8404}},{t:this.shape_94,p:{scaleY:0.8581,x:571.0736,y:311.1051,scaleX:0.8404}},{t:this.shape_93,p:{scaleY:0.8581,x:565.1905,y:330.8623,scaleX:0.8404}},{t:this.shape_92,p:{scaleY:0.8581,x:530.7115,y:310.9334,scaleX:0.8404}},{t:this.shape_91,p:{scaleY:0.8581,x:521.3827,y:320.8442,scaleX:0.8404}},{t:this.shape_90,p:{scaleY:0.8581,x:536.0693,y:334.359,scaleX:0.8404}},{t:this.shape_89,p:{scaleY:0.8581,x:554.9372,y:334.359,scaleX:0.8404}},{t:this.shape_88,p:{scaleY:0.8581,x:553.0042,y:320.8013,scaleX:0.8404}},{t:this.shape_87,p:{x:547.1035,scaleX:0.8415,scaleY:0.8594,y:342.262}},{t:this.instance_46,p:{regX:13.1,regY:8,scaleX:0.843,scaleY:0.8607,x:538.5,y:341.85}},{t:this.instance_45,p:{regX:24,regY:8,scaleX:0.843,scaleY:0.8607,x:549,y:341.85}},{t:this.shape_86,p:{x:547.1044,scaleX:0.8415,scaleY:0.8594,y:316.7381}},{t:this.instance_44,p:{regX:10.7,regY:25.9,scaleX:0.843,scaleY:0.8607,x:569.55,y:317.3}},{t:this.instance_43,p:{regX:11.1,regY:25.9,scaleX:0.843,scaleY:0.8607,x:528.95,y:317.3}},{t:this.shape_85,p:{scaleY:0.8581,x:561.0304,y:316.1421,scaleX:0.8404}},{t:this.instance_42,p:{regX:12.7,regY:11.1,scaleX:0.8424,scaleY:0.8602,x:561.05,y:320.05}},{t:this.shape_84,p:{scaleY:0.8581,x:546.911,y:308.7162,scaleX:0.8404}},{t:this.instance_41,p:{regX:12.3,regY:9,scaleX:0.8424,scaleY:0.8602,x:547.45,y:309.8}},{t:this.shape_83,p:{scaleY:0.8581,x:544.1586,y:326.5076,scaleX:0.8404}},{t:this.instance_40,p:{regX:9.6,regY:10.8,scaleX:0.8424,scaleY:0.8602,x:544.65,y:325.85}},{t:this.shape_82,p:{scaleY:0.8581,x:530.5699,y:323.4734,scaleX:0.8404}},{t:this.instance_39,p:{regX:8,regY:8.7,scaleX:0.8424,scaleY:0.8602,x:533.35,y:322.85}},{t:this.instance_38,p:{regX:22.7,regY:16.6,scaleX:0.8424,scaleY:0.8602,x:540.85,y:315.7}},{t:this.shape_81,p:{scaleY:0.8581,x:530.8493,y:316.0175,scaleX:0.8404}},{t:this.shape_80,p:{scaleY:0.8581,x:532.0327,y:319.1281,scaleX:0.8404}},{t:this.instance_37,p:{regX:9.6,regY:7.7,scaleX:0.8424,scaleY:0.8602,x:534.45,y:320.05}},{t:this.shape_79,p:{scaleY:0.8581,x:530.6065,y:314.6446,scaleX:0.8404}},{t:this.shape_78,p:{scaleY:0.8581,x:530.4804,y:315.0737,scaleX:0.8404}},{t:this.shape_77,p:{scaleY:0.8581,x:533.0571,y:324.6504,scaleX:0.8404}},{t:this.instance_36,p:{regX:6.5,regY:7.2,scaleX:0.843,scaleY:0.8607,x:562.35,y:300.7}},{t:this.instance_35,p:{regX:6.3,regY:6.8,scaleX:0.843,scaleY:0.8607,x:561.25,y:334.35}},{t:this.shape_76,p:{x:561.893,scaleX:0.8415,scaleY:0.8594,y:305.4801}},{t:this.instance_34,p:{regX:5.5,regY:6.2,scaleX:0.843,scaleY:0.8607,y:330.25,x:563.65}},{t:this.shape_142},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.instance_33},{t:this.shape_65},{t:this.instance_32},{t:this.shape_64},{t:this.instance_31},{t:this.shape_63},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.shape_62},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.shape_61},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58,p:{x:397.6942,y:534.5465,scaleX:0.8437,scaleY:0.8613}},{t:this.shape_57,p:{x:397.6942,y:534.5465,scaleX:0.8437,scaleY:0.8613}},{t:this.shape_56,p:{x:396.4693,y:521.7521,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_55,p:{x:396.4693,y:521.7521,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_54,p:{x:266.0083,y:534.5465,scaleX:0.8437,scaleY:0.8613}},{t:this.shape_53,p:{x:266.0083,y:534.5465,scaleX:0.8437,scaleY:0.8613}},{t:this.shape_52,p:{x:264.9858,y:521.7521,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_51,p:{x:264.9858,y:521.7521,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_50,p:{x:139.4481,y:534.5465,scaleX:0.8437,scaleY:0.8613}},{t:this.shape_49,p:{x:139.4481,y:534.5465,scaleX:0.8437,scaleY:0.8613}},{t:this.shape_48,p:{x:138.6201,y:521.7521,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_47,p:{x:138.6201,y:521.7521,scaleX:0.8424,scaleY:0.8602}},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.shape_46},{t:this.instance_9},{t:this.shape_45,p:{scaleY:0.8581,x:-366.3178,y:245.1292,scaleX:0.8404}},{t:this.shape_44,p:{scaleY:0.8581,x:-366.3178,y:245.1507,scaleX:0.8404}},{t:this.shape_43,p:{scaleY:0.8581,x:-366.2968,y:245.1507,scaleX:0.8404}},{t:this.shape_42,p:{x:-364.8285,scaleX:0.8415,scaleY:0.8594,y:245.9284}},{t:this.shape_41,p:{x:-375.7139,scaleX:0.8415,scaleY:0.8594,y:236.7741}},{t:this.shape_40,p:{x:-357.3469,scaleX:0.8415,scaleY:0.8594,y:235.497}},{t:this.shape_39,p:{scaleY:0.8581,x:-379.7864,y:236.8488,scaleX:0.8404}},{t:this.shape_38,p:{scaleY:0.8581,x:-376.256,y:236.3125,scaleX:0.8404}},{t:this.shape_37,p:{scaleY:0.8581,x:-372.8943,y:236.1194,scaleX:0.8404}},{t:this.shape_36,p:{scaleY:0.8581,x:-378.021,y:236.5484,scaleX:0.8404}},{t:this.shape_35,p:{scaleY:0.8581,x:-374.3861,y:236.1623,scaleX:0.8404}},{t:this.shape_34,p:{scaleY:0.8581,x:-362.5569,y:235.1197,scaleX:0.8404}},{t:this.shape_33,p:{scaleY:0.8581,x:-359.8255,y:235.1755,scaleX:0.8404}},{t:this.shape_32,p:{scaleY:0.8581,x:-354.5307,y:235.8191,scaleX:0.8404}},{t:this.shape_31,p:{scaleY:0.8581,x:-361.3803,y:235.1326,scaleX:0.8404}},{t:this.shape_30,p:{scaleY:0.8581,x:-357.5142,y:235.3257,scaleX:0.8404}},{t:this.shape_29,p:{x:-370.9583,scaleX:0.8415,scaleY:0.8594,y:245.7832}},{t:this.shape_28,p:{x:-352.1506,scaleX:0.8415,scaleY:0.8594,y:244.0859}},{t:this.shape_27,p:{x:-333.5113,scaleX:0.8415,scaleY:0.8594,y:243.9759}},{t:this.shape_26,p:{x:-397.7658,scaleX:0.8415,scaleY:0.8594,y:249.878}},{t:this.shape_25,p:{x:-398.0759,scaleX:0.8415,scaleY:0.8594,y:259.2326}},{t:this.shape_24,p:{scaleY:0.8581,x:-380.201,y:259.3951,scaleX:0.8404}},{t:this.shape_23,p:{scaleY:0.8581,x:-380.1851,y:259.4162,scaleX:0.8404}},{t:this.shape_22,p:{scaleY:0.8581,x:-347.9749,y:256.4776,scaleX:0.8404}},{t:this.shape_21,p:{scaleY:0.8581,x:-347.9543,y:256.4773,scaleX:0.8404}},{t:this.shape_20,p:{x:-516.414,scaleX:0.8415,scaleY:0.8594,y:361.0182}},{t:this.shape_19,p:{scaleY:0.8581,x:-522.3373,y:356.7977,scaleX:0.8404}},{t:this.shape_18,p:{scaleY:0.8581,x:-523.4509,y:356.8192,scaleX:0.8404}},{t:this.shape_17,p:{x:-567.0306,scaleX:0.8415,scaleY:0.8594,y:364.4343}},{t:this.shape_16,p:{x:-567.0306,scaleX:0.8415,scaleY:0.8594,y:364.4343}},{t:this.shape_15,p:{x:-631.7004,scaleX:0.8415,scaleY:0.8594,y:360.8248}},{t:this.shape_14,p:{scaleY:0.8581,x:-625.3121,y:356.6261,scaleX:0.8404}},{t:this.shape_13,p:{scaleY:0.8581,x:-624.2195,y:356.6261,scaleX:0.8404}},{t:this.shape_12,p:{x:-581.0838,scaleX:0.8415,scaleY:0.8594,y:364.2194}},{t:this.shape_11,p:{x:-581.0838,scaleX:0.8415,scaleY:0.8594,y:364.2194}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.instance_8},{t:this.instance_7},{t:this.shape_4},{t:this.shape_3,p:{x:139.4692,y:345.8941,scaleX:0.8437,scaleY:0.8613}},{t:this.shape_2,p:{x:139.4692,y:383.125,scaleX:0.8437,scaleY:0.8613}},{t:this.shape_1,p:{x:139.4692,y:420.3559,scaleX:0.8437,scaleY:0.8613}},{t:this.shape,p:{x:139.4692,y:457.5653,scaleX:0.8437,scaleY:0.8613}},{t:this.instance_56},{t:this.instance_5},{t:this.instance_4,p:{regX:0,regY:0,x:-167.8,y:264.1}},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_60},{t:this.instance_59},{t:this.instance_62},{t:this.instance_63}]},31).to({state:[{t:this.shape_141},{t:this.shape_140},{t:this.instance_55},{t:this.shape_139,p:{x:346.9496,y:304.1751,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_138,p:{x:346.9496,y:304.1751,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_137,p:{x:348.2451,scaleX:0.8415,scaleY:0.8594,y:274.449}},{t:this.shape_136,p:{x:358.2169,scaleX:0.8415,scaleY:0.8594,y:275.5662}},{t:this.shape_135,p:{x:353.6728,scaleX:0.8415,scaleY:0.8594,y:272.6887}},{t:this.shape_134,p:{x:333.2031,scaleX:0.8415,scaleY:0.8594,y:300.8683}},{t:this.shape_133,p:{x:334.1077,scaleX:0.8415,scaleY:0.8594,y:296.8624}},{t:this.shape_132,p:{x:340.8293,scaleX:0.8415,scaleY:0.8594,y:286.6953}},{t:this.shape_131,p:{x:361.3305,scaleX:0.8415,scaleY:0.8594,y:307.0595}},{t:this.shape_130,p:{x:361.625,scaleX:0.8415,scaleY:0.8594,y:302.5628}},{t:this.shape_129,p:{x:359.9841,scaleX:0.8415,scaleY:0.8594,y:290.6398}},{t:this.shape_128,p:{scaleY:0.8581,x:333.5236,y:316.7096,scaleX:0.8404}},{t:this.shape_127,p:{x:330.5944,scaleX:0.8415,scaleY:0.8594,y:329.7508}},{t:this.shape_126,p:{x:346.0992,scaleX:0.8415,scaleY:0.8594,y:323.6921}},{t:this.shape_125,p:{x:348.1188,scaleX:0.8415,scaleY:0.8594,y:312.0688}},{t:this.shape_124,p:{x:351.4849,scaleX:0.8415,scaleY:0.8594,y:285.5566}},{t:this.shape_123},{t:this.instance_54,p:{regY:133.3,scaleY:0.8618,x:530.05,regX:84.8,scaleX:0.8442,y:459.5}},{t:this.instance_53,p:{regX:1.6,scaleY:0.8618,y:274.35,regY:2.1,scaleX:0.8442,x:466.45}},{t:this.instance_52,p:{regY:2.3,scaleY:0.8618,x:541.8,y:273.7,regX:1.7,scaleX:0.8442}},{t:this.shape_122,p:{x:559.4803,y:459.0511,scaleX:0.8437,scaleY:0.8613}},{t:this.shape_121,p:{x:559.4592,y:374.5979,scaleX:0.8437,scaleY:0.8613}},{t:this.shape_120,p:{x:559.4592,y:374.5979,scaleX:0.8437,scaleY:0.8613}},{t:this.shape_119,p:{x:557.9856,y:361.3866,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_118,p:{x:557.9856,y:361.3866,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_117,p:{x:557.9856,y:415.6016,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_116,p:{x:557.9856,y:415.5801,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_115,p:{x:556.9281,scaleX:0.8415,scaleY:0.8594,y:402.5052}},{t:this.shape_114,p:{x:556.9281,scaleX:0.8415,scaleY:0.8594,y:402.5052}},{t:this.shape_113,p:{x:557.9856,y:457.2145,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_112,p:{x:557.9856,y:457.2145,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_111,p:{x:556.9281,scaleX:0.8415,scaleY:0.8594,y:444.0783}},{t:this.shape_110,p:{x:556.9281,scaleX:0.8415,scaleY:0.8594,y:444.0783}},{t:this.shape_109,p:{x:557.9856,y:498.8274,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_108,p:{x:557.9856,y:498.8489,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_107,p:{x:556.9281,scaleX:0.8415,scaleY:0.8594,y:485.6727}},{t:this.shape_106,p:{x:556.9281,scaleX:0.8415,scaleY:0.8594,y:485.6727}},{t:this.shape_105,p:{x:557.9856,y:540.4617,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_104,p:{x:557.9856,y:540.4617,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_103,p:{x:556.9281,scaleX:0.8415,scaleY:0.8594,y:527.2672}},{t:this.shape_102,p:{x:556.9281,scaleX:0.8415,scaleY:0.8594,y:527.2672}},{t:this.instance_51},{t:this.instance_50,p:{regX:40.4,regY:34,scaleX:0.843,scaleY:0.8607,x:549.05,y:316.3}},{t:this.instance_49,p:{regX:41.5,regY:28.2,scaleX:0.8424,scaleY:0.8602,x:548.35,y:321.3}},{t:this.instance_48,p:{regX:7.2,regY:7.9,scaleX:0.8424,scaleY:0.8602,y:308.85,x:523.75}},{t:this.instance_47,p:{regX:8,regY:8.6,scaleX:0.8424,scaleY:0.8602,x:543.3,y:319.9}},{t:this.shape_101,p:{scaleY:0.8581,x:562.6062,y:314.1727,scaleX:0.8404}},{t:this.shape_100,p:{scaleY:0.8581,x:558.7192,y:327.3442,scaleX:0.8404}},{t:this.shape_99,p:{scaleY:0.8581,x:546.0706,y:332.7715,scaleX:0.8404}},{t:this.shape_98,p:{scaleY:0.8581,x:527.749,y:327.6874,scaleX:0.8404}},{t:this.shape_97,p:{scaleY:0.8581,x:530.1863,y:319.0637,scaleX:0.8404}},{t:this.shape_96,p:{scaleY:0.8581,x:543.003,y:313.3361,scaleX:0.8404}},{t:this.shape_95,p:{scaleY:0.8581,x:566.8504,y:321.0802,scaleX:0.8404}},{t:this.shape_94,p:{scaleY:0.8581,x:571.0736,y:311.1051,scaleX:0.8404}},{t:this.shape_93,p:{scaleY:0.8581,x:565.1905,y:330.8623,scaleX:0.8404}},{t:this.shape_92,p:{scaleY:0.8581,x:530.7115,y:310.9334,scaleX:0.8404}},{t:this.shape_91,p:{scaleY:0.8581,x:521.3827,y:320.8442,scaleX:0.8404}},{t:this.shape_90,p:{scaleY:0.8581,x:536.0693,y:334.359,scaleX:0.8404}},{t:this.shape_89,p:{scaleY:0.8581,x:554.9372,y:334.359,scaleX:0.8404}},{t:this.shape_88,p:{scaleY:0.8581,x:553.0042,y:320.8013,scaleX:0.8404}},{t:this.shape_87,p:{x:547.1035,scaleX:0.8415,scaleY:0.8594,y:342.262}},{t:this.instance_46,p:{regX:13.1,regY:8,scaleX:0.843,scaleY:0.8607,x:538.5,y:341.85}},{t:this.instance_45,p:{regX:24,regY:8,scaleX:0.843,scaleY:0.8607,x:549,y:341.85}},{t:this.shape_86,p:{x:547.1044,scaleX:0.8415,scaleY:0.8594,y:316.7381}},{t:this.instance_44,p:{regX:10.7,regY:25.9,scaleX:0.843,scaleY:0.8607,x:569.55,y:317.3}},{t:this.instance_43,p:{regX:11.1,regY:25.9,scaleX:0.843,scaleY:0.8607,x:528.95,y:317.3}},{t:this.shape_85,p:{scaleY:0.8581,x:561.0304,y:316.1421,scaleX:0.8404}},{t:this.instance_42,p:{regX:12.7,regY:11.1,scaleX:0.8424,scaleY:0.8602,x:561.05,y:320.05}},{t:this.shape_84,p:{scaleY:0.8581,x:546.911,y:308.7162,scaleX:0.8404}},{t:this.instance_41,p:{regX:12.3,regY:9,scaleX:0.8424,scaleY:0.8602,x:547.45,y:309.8}},{t:this.shape_83,p:{scaleY:0.8581,x:544.1586,y:326.5076,scaleX:0.8404}},{t:this.instance_40,p:{regX:9.6,regY:10.8,scaleX:0.8424,scaleY:0.8602,x:544.65,y:325.85}},{t:this.shape_82,p:{scaleY:0.8581,x:530.5699,y:323.4734,scaleX:0.8404}},{t:this.instance_39,p:{regX:8,regY:8.7,scaleX:0.8424,scaleY:0.8602,x:533.35,y:322.85}},{t:this.instance_38,p:{regX:22.7,regY:16.6,scaleX:0.8424,scaleY:0.8602,x:540.85,y:315.7}},{t:this.shape_81,p:{scaleY:0.8581,x:530.8493,y:316.0175,scaleX:0.8404}},{t:this.shape_80,p:{scaleY:0.8581,x:532.0327,y:319.1281,scaleX:0.8404}},{t:this.instance_37,p:{regX:9.6,regY:7.7,scaleX:0.8424,scaleY:0.8602,x:534.45,y:320.05}},{t:this.shape_79,p:{scaleY:0.8581,x:530.6065,y:314.6446,scaleX:0.8404}},{t:this.shape_78,p:{scaleY:0.8581,x:530.4804,y:315.0737,scaleX:0.8404}},{t:this.shape_77,p:{scaleY:0.8581,x:533.0571,y:324.6504,scaleX:0.8404}},{t:this.instance_36,p:{regX:6.5,regY:7.2,scaleX:0.843,scaleY:0.8607,x:562.35,y:300.7}},{t:this.instance_35,p:{regX:6.3,regY:6.8,scaleX:0.843,scaleY:0.8607,x:561.25,y:334.35}},{t:this.shape_76,p:{x:561.893,scaleX:0.8415,scaleY:0.8594,y:305.4801}},{t:this.instance_34,p:{regX:5.5,regY:6.2,scaleX:0.843,scaleY:0.8607,y:330.25,x:563.65}},{t:this.shape_142},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.instance_33},{t:this.shape_65},{t:this.instance_32},{t:this.shape_64},{t:this.instance_31},{t:this.shape_63},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.shape_62},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.shape_61},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58,p:{x:397.6942,y:534.5465,scaleX:0.8437,scaleY:0.8613}},{t:this.shape_57,p:{x:397.6942,y:534.5465,scaleX:0.8437,scaleY:0.8613}},{t:this.shape_56,p:{x:396.4693,y:521.7521,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_55,p:{x:396.4693,y:521.7521,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_54,p:{x:266.0083,y:534.5465,scaleX:0.8437,scaleY:0.8613}},{t:this.shape_53,p:{x:266.0083,y:534.5465,scaleX:0.8437,scaleY:0.8613}},{t:this.shape_52,p:{x:264.9858,y:521.7521,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_51,p:{x:264.9858,y:521.7521,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_50,p:{x:139.4481,y:534.5465,scaleX:0.8437,scaleY:0.8613}},{t:this.shape_49,p:{x:139.4481,y:534.5465,scaleX:0.8437,scaleY:0.8613}},{t:this.shape_48,p:{x:138.6201,y:521.7521,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_47,p:{x:138.6201,y:521.7521,scaleX:0.8424,scaleY:0.8602}},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.shape_46},{t:this.instance_9},{t:this.shape_45,p:{scaleY:0.8581,x:-366.3178,y:245.1292,scaleX:0.8404}},{t:this.shape_44,p:{scaleY:0.8581,x:-366.3178,y:245.1507,scaleX:0.8404}},{t:this.shape_43,p:{scaleY:0.8581,x:-366.2968,y:245.1507,scaleX:0.8404}},{t:this.shape_42,p:{x:-364.8285,scaleX:0.8415,scaleY:0.8594,y:245.9284}},{t:this.shape_41,p:{x:-375.7139,scaleX:0.8415,scaleY:0.8594,y:236.7741}},{t:this.shape_40,p:{x:-357.3469,scaleX:0.8415,scaleY:0.8594,y:235.497}},{t:this.shape_39,p:{scaleY:0.8581,x:-379.7864,y:236.8488,scaleX:0.8404}},{t:this.shape_38,p:{scaleY:0.8581,x:-376.256,y:236.3125,scaleX:0.8404}},{t:this.shape_37,p:{scaleY:0.8581,x:-372.8943,y:236.1194,scaleX:0.8404}},{t:this.shape_36,p:{scaleY:0.8581,x:-378.021,y:236.5484,scaleX:0.8404}},{t:this.shape_35,p:{scaleY:0.8581,x:-374.3861,y:236.1623,scaleX:0.8404}},{t:this.shape_34,p:{scaleY:0.8581,x:-362.5569,y:235.1197,scaleX:0.8404}},{t:this.shape_33,p:{scaleY:0.8581,x:-359.8255,y:235.1755,scaleX:0.8404}},{t:this.shape_32,p:{scaleY:0.8581,x:-354.5307,y:235.8191,scaleX:0.8404}},{t:this.shape_31,p:{scaleY:0.8581,x:-361.3803,y:235.1326,scaleX:0.8404}},{t:this.shape_30,p:{scaleY:0.8581,x:-357.5142,y:235.3257,scaleX:0.8404}},{t:this.shape_29,p:{x:-370.9583,scaleX:0.8415,scaleY:0.8594,y:245.7832}},{t:this.shape_28,p:{x:-352.1506,scaleX:0.8415,scaleY:0.8594,y:244.0859}},{t:this.shape_27,p:{x:-333.5113,scaleX:0.8415,scaleY:0.8594,y:243.9759}},{t:this.shape_26,p:{x:-397.7658,scaleX:0.8415,scaleY:0.8594,y:249.878}},{t:this.shape_25,p:{x:-398.0759,scaleX:0.8415,scaleY:0.8594,y:259.2326}},{t:this.shape_24,p:{scaleY:0.8581,x:-380.201,y:259.3951,scaleX:0.8404}},{t:this.shape_23,p:{scaleY:0.8581,x:-380.1851,y:259.4162,scaleX:0.8404}},{t:this.shape_22,p:{scaleY:0.8581,x:-347.9749,y:256.4776,scaleX:0.8404}},{t:this.shape_21,p:{scaleY:0.8581,x:-347.9543,y:256.4773,scaleX:0.8404}},{t:this.shape_20,p:{x:-516.414,scaleX:0.8415,scaleY:0.8594,y:361.0182}},{t:this.shape_19,p:{scaleY:0.8581,x:-522.3373,y:356.7977,scaleX:0.8404}},{t:this.shape_18,p:{scaleY:0.8581,x:-523.4509,y:356.8192,scaleX:0.8404}},{t:this.shape_17,p:{x:-567.0306,scaleX:0.8415,scaleY:0.8594,y:364.4343}},{t:this.shape_16,p:{x:-567.0306,scaleX:0.8415,scaleY:0.8594,y:364.4343}},{t:this.shape_15,p:{x:-631.7004,scaleX:0.8415,scaleY:0.8594,y:360.8248}},{t:this.shape_14,p:{scaleY:0.8581,x:-625.3121,y:356.6261,scaleX:0.8404}},{t:this.shape_13,p:{scaleY:0.8581,x:-624.2195,y:356.6261,scaleX:0.8404}},{t:this.shape_12,p:{x:-581.0838,scaleX:0.8415,scaleY:0.8594,y:364.2194}},{t:this.shape_11,p:{x:-581.0838,scaleX:0.8415,scaleY:0.8594,y:364.2194}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.instance_8},{t:this.instance_7},{t:this.shape_4},{t:this.shape_3,p:{x:139.4692,y:345.8941,scaleX:0.8437,scaleY:0.8613}},{t:this.shape_2,p:{x:139.4692,y:383.125,scaleX:0.8437,scaleY:0.8613}},{t:this.shape_1,p:{x:139.4692,y:420.3559,scaleX:0.8437,scaleY:0.8613}},{t:this.shape,p:{x:139.4692,y:457.5653,scaleX:0.8437,scaleY:0.8613}},{t:this.instance_56},{t:this.instance_5},{t:this.instance_4,p:{regX:0,regY:0,x:-167.8,y:264.1}},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_60},{t:this.instance_59},{t:this.instance_62},{t:this.instance_64}]},69).to({state:[{t:this.shape_141},{t:this.shape_140},{t:this.instance_55},{t:this.shape_139,p:{x:346.9496,y:304.1751,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_138,p:{x:346.9496,y:304.1751,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_137,p:{x:348.2451,scaleX:0.8415,scaleY:0.8594,y:274.449}},{t:this.shape_136,p:{x:358.2169,scaleX:0.8415,scaleY:0.8594,y:275.5662}},{t:this.shape_135,p:{x:353.6728,scaleX:0.8415,scaleY:0.8594,y:272.6887}},{t:this.shape_134,p:{x:333.2031,scaleX:0.8415,scaleY:0.8594,y:300.8683}},{t:this.shape_133,p:{x:334.1077,scaleX:0.8415,scaleY:0.8594,y:296.8624}},{t:this.shape_132,p:{x:340.8293,scaleX:0.8415,scaleY:0.8594,y:286.6953}},{t:this.shape_131,p:{x:361.3305,scaleX:0.8415,scaleY:0.8594,y:307.0595}},{t:this.shape_130,p:{x:361.625,scaleX:0.8415,scaleY:0.8594,y:302.5628}},{t:this.shape_129,p:{x:359.9841,scaleX:0.8415,scaleY:0.8594,y:290.6398}},{t:this.shape_128,p:{scaleY:0.8581,x:333.5236,y:316.7096,scaleX:0.8404}},{t:this.shape_127,p:{x:330.5944,scaleX:0.8415,scaleY:0.8594,y:329.7508}},{t:this.shape_126,p:{x:346.0992,scaleX:0.8415,scaleY:0.8594,y:323.6921}},{t:this.shape_125,p:{x:348.1188,scaleX:0.8415,scaleY:0.8594,y:312.0688}},{t:this.shape_124,p:{x:351.4849,scaleX:0.8415,scaleY:0.8594,y:285.5566}},{t:this.shape_123},{t:this.instance_54,p:{regY:133.3,scaleY:0.8618,x:530.05,regX:84.8,scaleX:0.8442,y:459.5}},{t:this.instance_53,p:{regX:1.6,scaleY:0.8618,y:274.35,regY:2.1,scaleX:0.8442,x:466.45}},{t:this.instance_52,p:{regY:2.3,scaleY:0.8618,x:541.8,y:273.7,regX:1.7,scaleX:0.8442}},{t:this.shape_122,p:{x:559.4803,y:459.0511,scaleX:0.8437,scaleY:0.8613}},{t:this.shape_121,p:{x:559.4592,y:374.5979,scaleX:0.8437,scaleY:0.8613}},{t:this.shape_120,p:{x:559.4592,y:374.5979,scaleX:0.8437,scaleY:0.8613}},{t:this.shape_119,p:{x:557.9856,y:361.3866,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_118,p:{x:557.9856,y:361.3866,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_117,p:{x:557.9856,y:415.6016,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_116,p:{x:557.9856,y:415.5801,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_115,p:{x:556.9281,scaleX:0.8415,scaleY:0.8594,y:402.5052}},{t:this.shape_114,p:{x:556.9281,scaleX:0.8415,scaleY:0.8594,y:402.5052}},{t:this.shape_113,p:{x:557.9856,y:457.2145,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_112,p:{x:557.9856,y:457.2145,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_111,p:{x:556.9281,scaleX:0.8415,scaleY:0.8594,y:444.0783}},{t:this.shape_110,p:{x:556.9281,scaleX:0.8415,scaleY:0.8594,y:444.0783}},{t:this.shape_109,p:{x:557.9856,y:498.8274,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_108,p:{x:557.9856,y:498.8489,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_107,p:{x:556.9281,scaleX:0.8415,scaleY:0.8594,y:485.6727}},{t:this.shape_106,p:{x:556.9281,scaleX:0.8415,scaleY:0.8594,y:485.6727}},{t:this.shape_105,p:{x:557.9856,y:540.4617,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_104,p:{x:557.9856,y:540.4617,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_103,p:{x:556.9281,scaleX:0.8415,scaleY:0.8594,y:527.2672}},{t:this.shape_102,p:{x:556.9281,scaleX:0.8415,scaleY:0.8594,y:527.2672}},{t:this.instance_51},{t:this.instance_50,p:{regX:40.4,regY:34,scaleX:0.843,scaleY:0.8607,x:549.05,y:316.3}},{t:this.instance_49,p:{regX:41.5,regY:28.2,scaleX:0.8424,scaleY:0.8602,x:548.35,y:321.3}},{t:this.instance_48,p:{regX:7.2,regY:7.9,scaleX:0.8424,scaleY:0.8602,y:308.85,x:523.75}},{t:this.instance_47,p:{regX:8,regY:8.6,scaleX:0.8424,scaleY:0.8602,x:543.3,y:319.9}},{t:this.shape_101,p:{scaleY:0.8581,x:562.6062,y:314.1727,scaleX:0.8404}},{t:this.shape_100,p:{scaleY:0.8581,x:558.7192,y:327.3442,scaleX:0.8404}},{t:this.shape_99,p:{scaleY:0.8581,x:546.0706,y:332.7715,scaleX:0.8404}},{t:this.shape_98,p:{scaleY:0.8581,x:527.749,y:327.6874,scaleX:0.8404}},{t:this.shape_97,p:{scaleY:0.8581,x:530.1863,y:319.0637,scaleX:0.8404}},{t:this.shape_96,p:{scaleY:0.8581,x:543.003,y:313.3361,scaleX:0.8404}},{t:this.shape_95,p:{scaleY:0.8581,x:566.8504,y:321.0802,scaleX:0.8404}},{t:this.shape_94,p:{scaleY:0.8581,x:571.0736,y:311.1051,scaleX:0.8404}},{t:this.shape_93,p:{scaleY:0.8581,x:565.1905,y:330.8623,scaleX:0.8404}},{t:this.shape_92,p:{scaleY:0.8581,x:530.7115,y:310.9334,scaleX:0.8404}},{t:this.shape_91,p:{scaleY:0.8581,x:521.3827,y:320.8442,scaleX:0.8404}},{t:this.shape_90,p:{scaleY:0.8581,x:536.0693,y:334.359,scaleX:0.8404}},{t:this.shape_89,p:{scaleY:0.8581,x:554.9372,y:334.359,scaleX:0.8404}},{t:this.shape_88,p:{scaleY:0.8581,x:553.0042,y:320.8013,scaleX:0.8404}},{t:this.shape_87,p:{x:547.1035,scaleX:0.8415,scaleY:0.8594,y:342.262}},{t:this.instance_46,p:{regX:13.1,regY:8,scaleX:0.843,scaleY:0.8607,x:538.5,y:341.85}},{t:this.instance_45,p:{regX:24,regY:8,scaleX:0.843,scaleY:0.8607,x:549,y:341.85}},{t:this.shape_86,p:{x:547.1044,scaleX:0.8415,scaleY:0.8594,y:316.7381}},{t:this.instance_44,p:{regX:10.7,regY:25.9,scaleX:0.843,scaleY:0.8607,x:569.55,y:317.3}},{t:this.instance_43,p:{regX:11.1,regY:25.9,scaleX:0.843,scaleY:0.8607,x:528.95,y:317.3}},{t:this.shape_85,p:{scaleY:0.8581,x:561.0304,y:316.1421,scaleX:0.8404}},{t:this.instance_42,p:{regX:12.7,regY:11.1,scaleX:0.8424,scaleY:0.8602,x:561.05,y:320.05}},{t:this.shape_84,p:{scaleY:0.8581,x:546.911,y:308.7162,scaleX:0.8404}},{t:this.instance_41,p:{regX:12.3,regY:9,scaleX:0.8424,scaleY:0.8602,x:547.45,y:309.8}},{t:this.shape_83,p:{scaleY:0.8581,x:544.1586,y:326.5076,scaleX:0.8404}},{t:this.instance_40,p:{regX:9.6,regY:10.8,scaleX:0.8424,scaleY:0.8602,x:544.65,y:325.85}},{t:this.shape_82,p:{scaleY:0.8581,x:530.5699,y:323.4734,scaleX:0.8404}},{t:this.instance_39,p:{regX:8,regY:8.7,scaleX:0.8424,scaleY:0.8602,x:533.35,y:322.85}},{t:this.instance_38,p:{regX:22.7,regY:16.6,scaleX:0.8424,scaleY:0.8602,x:540.85,y:315.7}},{t:this.shape_81,p:{scaleY:0.8581,x:530.8493,y:316.0175,scaleX:0.8404}},{t:this.shape_80,p:{scaleY:0.8581,x:532.0327,y:319.1281,scaleX:0.8404}},{t:this.instance_37,p:{regX:9.6,regY:7.7,scaleX:0.8424,scaleY:0.8602,x:534.45,y:320.05}},{t:this.shape_79,p:{scaleY:0.8581,x:530.6065,y:314.6446,scaleX:0.8404}},{t:this.shape_78,p:{scaleY:0.8581,x:530.4804,y:315.0737,scaleX:0.8404}},{t:this.shape_77,p:{scaleY:0.8581,x:533.0571,y:324.6504,scaleX:0.8404}},{t:this.instance_36,p:{regX:6.5,regY:7.2,scaleX:0.843,scaleY:0.8607,x:562.35,y:300.7}},{t:this.instance_35,p:{regX:6.3,regY:6.8,scaleX:0.843,scaleY:0.8607,x:561.25,y:334.35}},{t:this.shape_76,p:{x:561.893,scaleX:0.8415,scaleY:0.8594,y:305.4801}},{t:this.instance_34,p:{regX:5.5,regY:6.2,scaleX:0.843,scaleY:0.8607,y:330.25,x:563.65}},{t:this.shape_142},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.instance_33},{t:this.shape_65},{t:this.instance_32},{t:this.shape_64},{t:this.instance_31},{t:this.shape_63},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.shape_62},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.shape_61},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58,p:{x:397.6942,y:534.5465,scaleX:0.8437,scaleY:0.8613}},{t:this.shape_57,p:{x:397.6942,y:534.5465,scaleX:0.8437,scaleY:0.8613}},{t:this.shape_56,p:{x:396.4693,y:521.7521,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_55,p:{x:396.4693,y:521.7521,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_54,p:{x:266.0083,y:534.5465,scaleX:0.8437,scaleY:0.8613}},{t:this.shape_53,p:{x:266.0083,y:534.5465,scaleX:0.8437,scaleY:0.8613}},{t:this.shape_52,p:{x:264.9858,y:521.7521,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_51,p:{x:264.9858,y:521.7521,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_50,p:{x:139.4481,y:534.5465,scaleX:0.8437,scaleY:0.8613}},{t:this.shape_49,p:{x:139.4481,y:534.5465,scaleX:0.8437,scaleY:0.8613}},{t:this.shape_48,p:{x:138.6201,y:521.7521,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_47,p:{x:138.6201,y:521.7521,scaleX:0.8424,scaleY:0.8602}},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.shape_46},{t:this.instance_9},{t:this.shape_45,p:{scaleY:0.8581,x:-366.3178,y:245.1292,scaleX:0.8404}},{t:this.shape_44,p:{scaleY:0.8581,x:-366.3178,y:245.1507,scaleX:0.8404}},{t:this.shape_43,p:{scaleY:0.8581,x:-366.2968,y:245.1507,scaleX:0.8404}},{t:this.shape_42,p:{x:-364.8285,scaleX:0.8415,scaleY:0.8594,y:245.9284}},{t:this.shape_41,p:{x:-375.7139,scaleX:0.8415,scaleY:0.8594,y:236.7741}},{t:this.shape_40,p:{x:-357.3469,scaleX:0.8415,scaleY:0.8594,y:235.497}},{t:this.shape_39,p:{scaleY:0.8581,x:-379.7864,y:236.8488,scaleX:0.8404}},{t:this.shape_38,p:{scaleY:0.8581,x:-376.256,y:236.3125,scaleX:0.8404}},{t:this.shape_37,p:{scaleY:0.8581,x:-372.8943,y:236.1194,scaleX:0.8404}},{t:this.shape_36,p:{scaleY:0.8581,x:-378.021,y:236.5484,scaleX:0.8404}},{t:this.shape_35,p:{scaleY:0.8581,x:-374.3861,y:236.1623,scaleX:0.8404}},{t:this.shape_34,p:{scaleY:0.8581,x:-362.5569,y:235.1197,scaleX:0.8404}},{t:this.shape_33,p:{scaleY:0.8581,x:-359.8255,y:235.1755,scaleX:0.8404}},{t:this.shape_32,p:{scaleY:0.8581,x:-354.5307,y:235.8191,scaleX:0.8404}},{t:this.shape_31,p:{scaleY:0.8581,x:-361.3803,y:235.1326,scaleX:0.8404}},{t:this.shape_30,p:{scaleY:0.8581,x:-357.5142,y:235.3257,scaleX:0.8404}},{t:this.shape_29,p:{x:-370.9583,scaleX:0.8415,scaleY:0.8594,y:245.7832}},{t:this.shape_28,p:{x:-352.1506,scaleX:0.8415,scaleY:0.8594,y:244.0859}},{t:this.shape_27,p:{x:-333.5113,scaleX:0.8415,scaleY:0.8594,y:243.9759}},{t:this.shape_26,p:{x:-397.7658,scaleX:0.8415,scaleY:0.8594,y:249.878}},{t:this.shape_25,p:{x:-398.0759,scaleX:0.8415,scaleY:0.8594,y:259.2326}},{t:this.shape_24,p:{scaleY:0.8581,x:-380.201,y:259.3951,scaleX:0.8404}},{t:this.shape_23,p:{scaleY:0.8581,x:-380.1851,y:259.4162,scaleX:0.8404}},{t:this.shape_22,p:{scaleY:0.8581,x:-347.9749,y:256.4776,scaleX:0.8404}},{t:this.shape_21,p:{scaleY:0.8581,x:-347.9543,y:256.4773,scaleX:0.8404}},{t:this.shape_20,p:{x:-516.414,scaleX:0.8415,scaleY:0.8594,y:361.0182}},{t:this.shape_19,p:{scaleY:0.8581,x:-522.3373,y:356.7977,scaleX:0.8404}},{t:this.shape_18,p:{scaleY:0.8581,x:-523.4509,y:356.8192,scaleX:0.8404}},{t:this.shape_17,p:{x:-567.0306,scaleX:0.8415,scaleY:0.8594,y:364.4343}},{t:this.shape_16,p:{x:-567.0306,scaleX:0.8415,scaleY:0.8594,y:364.4343}},{t:this.shape_15,p:{x:-631.7004,scaleX:0.8415,scaleY:0.8594,y:360.8248}},{t:this.shape_14,p:{scaleY:0.8581,x:-625.3121,y:356.6261,scaleX:0.8404}},{t:this.shape_13,p:{scaleY:0.8581,x:-624.2195,y:356.6261,scaleX:0.8404}},{t:this.shape_12,p:{x:-581.0838,scaleX:0.8415,scaleY:0.8594,y:364.2194}},{t:this.shape_11,p:{x:-581.0838,scaleX:0.8415,scaleY:0.8594,y:364.2194}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.instance_8},{t:this.instance_7},{t:this.shape_4},{t:this.shape_3,p:{x:139.4692,y:345.8941,scaleX:0.8437,scaleY:0.8613}},{t:this.shape_2,p:{x:139.4692,y:383.125,scaleX:0.8437,scaleY:0.8613}},{t:this.shape_1,p:{x:139.4692,y:420.3559,scaleX:0.8437,scaleY:0.8613}},{t:this.shape,p:{x:139.4692,y:457.5653,scaleX:0.8437,scaleY:0.8613}},{t:this.instance_56},{t:this.instance_5},{t:this.instance_4,p:{regX:0,regY:0,x:-167.8,y:264.1}},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_62},{t:this.instance_64}]},181).to({state:[{t:this.shape_141},{t:this.shape_140},{t:this.instance_55},{t:this.shape_139,p:{x:346.9496,y:304.1751,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_138,p:{x:346.9496,y:304.1751,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_137,p:{x:348.2451,scaleX:0.8415,scaleY:0.8594,y:274.449}},{t:this.shape_136,p:{x:358.2169,scaleX:0.8415,scaleY:0.8594,y:275.5662}},{t:this.shape_135,p:{x:353.6728,scaleX:0.8415,scaleY:0.8594,y:272.6887}},{t:this.shape_134,p:{x:333.2031,scaleX:0.8415,scaleY:0.8594,y:300.8683}},{t:this.shape_133,p:{x:334.1077,scaleX:0.8415,scaleY:0.8594,y:296.8624}},{t:this.shape_132,p:{x:340.8293,scaleX:0.8415,scaleY:0.8594,y:286.6953}},{t:this.shape_131,p:{x:361.3305,scaleX:0.8415,scaleY:0.8594,y:307.0595}},{t:this.shape_130,p:{x:361.625,scaleX:0.8415,scaleY:0.8594,y:302.5628}},{t:this.shape_129,p:{x:359.9841,scaleX:0.8415,scaleY:0.8594,y:290.6398}},{t:this.shape_128,p:{scaleY:0.8581,x:333.5236,y:316.7096,scaleX:0.8404}},{t:this.shape_127,p:{x:330.5944,scaleX:0.8415,scaleY:0.8594,y:329.7508}},{t:this.shape_126,p:{x:346.0992,scaleX:0.8415,scaleY:0.8594,y:323.6921}},{t:this.shape_125,p:{x:348.1188,scaleX:0.8415,scaleY:0.8594,y:312.0688}},{t:this.shape_124,p:{x:351.4849,scaleX:0.8415,scaleY:0.8594,y:285.5566}},{t:this.shape_123},{t:this.instance_54,p:{regY:133.3,scaleY:0.8618,x:530.05,regX:84.8,scaleX:0.8442,y:459.5}},{t:this.instance_53,p:{regX:1.6,scaleY:0.8618,y:274.35,regY:2.1,scaleX:0.8442,x:466.45}},{t:this.instance_52,p:{regY:2.3,scaleY:0.8618,x:541.8,y:273.7,regX:1.7,scaleX:0.8442}},{t:this.shape_122,p:{x:559.4803,y:459.0511,scaleX:0.8437,scaleY:0.8613}},{t:this.shape_121,p:{x:559.4592,y:374.5979,scaleX:0.8437,scaleY:0.8613}},{t:this.shape_120,p:{x:559.4592,y:374.5979,scaleX:0.8437,scaleY:0.8613}},{t:this.shape_119,p:{x:557.9856,y:361.3866,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_118,p:{x:557.9856,y:361.3866,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_117,p:{x:557.9856,y:415.6016,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_116,p:{x:557.9856,y:415.5801,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_115,p:{x:556.9281,scaleX:0.8415,scaleY:0.8594,y:402.5052}},{t:this.shape_114,p:{x:556.9281,scaleX:0.8415,scaleY:0.8594,y:402.5052}},{t:this.shape_113,p:{x:557.9856,y:457.2145,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_112,p:{x:557.9856,y:457.2145,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_111,p:{x:556.9281,scaleX:0.8415,scaleY:0.8594,y:444.0783}},{t:this.shape_110,p:{x:556.9281,scaleX:0.8415,scaleY:0.8594,y:444.0783}},{t:this.shape_109,p:{x:557.9856,y:498.8274,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_108,p:{x:557.9856,y:498.8489,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_107,p:{x:556.9281,scaleX:0.8415,scaleY:0.8594,y:485.6727}},{t:this.shape_106,p:{x:556.9281,scaleX:0.8415,scaleY:0.8594,y:485.6727}},{t:this.shape_105,p:{x:557.9856,y:540.4617,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_104,p:{x:557.9856,y:540.4617,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_103,p:{x:556.9281,scaleX:0.8415,scaleY:0.8594,y:527.2672}},{t:this.shape_102,p:{x:556.9281,scaleX:0.8415,scaleY:0.8594,y:527.2672}},{t:this.instance_51},{t:this.instance_50,p:{regX:40.4,regY:34,scaleX:0.843,scaleY:0.8607,x:549.05,y:316.3}},{t:this.instance_49,p:{regX:41.5,regY:28.2,scaleX:0.8424,scaleY:0.8602,x:548.35,y:321.3}},{t:this.instance_48,p:{regX:7.2,regY:7.9,scaleX:0.8424,scaleY:0.8602,y:308.85,x:523.75}},{t:this.instance_47,p:{regX:8,regY:8.6,scaleX:0.8424,scaleY:0.8602,x:543.3,y:319.9}},{t:this.shape_101,p:{scaleY:0.8581,x:562.6062,y:314.1727,scaleX:0.8404}},{t:this.shape_100,p:{scaleY:0.8581,x:558.7192,y:327.3442,scaleX:0.8404}},{t:this.shape_99,p:{scaleY:0.8581,x:546.0706,y:332.7715,scaleX:0.8404}},{t:this.shape_98,p:{scaleY:0.8581,x:527.749,y:327.6874,scaleX:0.8404}},{t:this.shape_97,p:{scaleY:0.8581,x:530.1863,y:319.0637,scaleX:0.8404}},{t:this.shape_96,p:{scaleY:0.8581,x:543.003,y:313.3361,scaleX:0.8404}},{t:this.shape_95,p:{scaleY:0.8581,x:566.8504,y:321.0802,scaleX:0.8404}},{t:this.shape_94,p:{scaleY:0.8581,x:571.0736,y:311.1051,scaleX:0.8404}},{t:this.shape_93,p:{scaleY:0.8581,x:565.1905,y:330.8623,scaleX:0.8404}},{t:this.shape_92,p:{scaleY:0.8581,x:530.7115,y:310.9334,scaleX:0.8404}},{t:this.shape_91,p:{scaleY:0.8581,x:521.3827,y:320.8442,scaleX:0.8404}},{t:this.shape_90,p:{scaleY:0.8581,x:536.0693,y:334.359,scaleX:0.8404}},{t:this.shape_89,p:{scaleY:0.8581,x:554.9372,y:334.359,scaleX:0.8404}},{t:this.shape_88,p:{scaleY:0.8581,x:553.0042,y:320.8013,scaleX:0.8404}},{t:this.shape_87,p:{x:547.1035,scaleX:0.8415,scaleY:0.8594,y:342.262}},{t:this.instance_46,p:{regX:13.1,regY:8,scaleX:0.843,scaleY:0.8607,x:538.5,y:341.85}},{t:this.instance_45,p:{regX:24,regY:8,scaleX:0.843,scaleY:0.8607,x:549,y:341.85}},{t:this.shape_86,p:{x:547.1044,scaleX:0.8415,scaleY:0.8594,y:316.7381}},{t:this.instance_44,p:{regX:10.7,regY:25.9,scaleX:0.843,scaleY:0.8607,x:569.55,y:317.3}},{t:this.instance_43,p:{regX:11.1,regY:25.9,scaleX:0.843,scaleY:0.8607,x:528.95,y:317.3}},{t:this.shape_85,p:{scaleY:0.8581,x:561.0304,y:316.1421,scaleX:0.8404}},{t:this.instance_42,p:{regX:12.7,regY:11.1,scaleX:0.8424,scaleY:0.8602,x:561.05,y:320.05}},{t:this.shape_84,p:{scaleY:0.8581,x:546.911,y:308.7162,scaleX:0.8404}},{t:this.instance_41,p:{regX:12.3,regY:9,scaleX:0.8424,scaleY:0.8602,x:547.45,y:309.8}},{t:this.shape_83,p:{scaleY:0.8581,x:544.1586,y:326.5076,scaleX:0.8404}},{t:this.instance_40,p:{regX:9.6,regY:10.8,scaleX:0.8424,scaleY:0.8602,x:544.65,y:325.85}},{t:this.shape_82,p:{scaleY:0.8581,x:530.5699,y:323.4734,scaleX:0.8404}},{t:this.instance_39,p:{regX:8,regY:8.7,scaleX:0.8424,scaleY:0.8602,x:533.35,y:322.85}},{t:this.instance_38,p:{regX:22.7,regY:16.6,scaleX:0.8424,scaleY:0.8602,x:540.85,y:315.7}},{t:this.shape_81,p:{scaleY:0.8581,x:530.8493,y:316.0175,scaleX:0.8404}},{t:this.shape_80,p:{scaleY:0.8581,x:532.0327,y:319.1281,scaleX:0.8404}},{t:this.instance_37,p:{regX:9.6,regY:7.7,scaleX:0.8424,scaleY:0.8602,x:534.45,y:320.05}},{t:this.shape_79,p:{scaleY:0.8581,x:530.6065,y:314.6446,scaleX:0.8404}},{t:this.shape_78,p:{scaleY:0.8581,x:530.4804,y:315.0737,scaleX:0.8404}},{t:this.shape_77,p:{scaleY:0.8581,x:533.0571,y:324.6504,scaleX:0.8404}},{t:this.instance_36,p:{regX:6.5,regY:7.2,scaleX:0.843,scaleY:0.8607,x:562.35,y:300.7}},{t:this.instance_35,p:{regX:6.3,regY:6.8,scaleX:0.843,scaleY:0.8607,x:561.25,y:334.35}},{t:this.shape_76,p:{x:561.893,scaleX:0.8415,scaleY:0.8594,y:305.4801}},{t:this.instance_34,p:{regX:5.5,regY:6.2,scaleX:0.843,scaleY:0.8607,y:330.25,x:563.65}},{t:this.shape_142},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.instance_33},{t:this.shape_65},{t:this.instance_32},{t:this.shape_64},{t:this.instance_31},{t:this.shape_63},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.shape_62},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.shape_61},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58,p:{x:397.6942,y:534.5465,scaleX:0.8437,scaleY:0.8613}},{t:this.shape_57,p:{x:397.6942,y:534.5465,scaleX:0.8437,scaleY:0.8613}},{t:this.shape_56,p:{x:396.4693,y:521.7521,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_55,p:{x:396.4693,y:521.7521,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_54,p:{x:266.0083,y:534.5465,scaleX:0.8437,scaleY:0.8613}},{t:this.shape_53,p:{x:266.0083,y:534.5465,scaleX:0.8437,scaleY:0.8613}},{t:this.shape_52,p:{x:264.9858,y:521.7521,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_51,p:{x:264.9858,y:521.7521,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_50,p:{x:139.4481,y:534.5465,scaleX:0.8437,scaleY:0.8613}},{t:this.shape_49,p:{x:139.4481,y:534.5465,scaleX:0.8437,scaleY:0.8613}},{t:this.shape_48,p:{x:138.6201,y:521.7521,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_47,p:{x:138.6201,y:521.7521,scaleX:0.8424,scaleY:0.8602}},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.shape_46},{t:this.instance_9},{t:this.shape_45,p:{scaleY:0.8581,x:-366.3178,y:245.1292,scaleX:0.8404}},{t:this.shape_44,p:{scaleY:0.8581,x:-366.3178,y:245.1507,scaleX:0.8404}},{t:this.shape_43,p:{scaleY:0.8581,x:-366.2968,y:245.1507,scaleX:0.8404}},{t:this.shape_42,p:{x:-364.8285,scaleX:0.8415,scaleY:0.8594,y:245.9284}},{t:this.shape_41,p:{x:-375.7139,scaleX:0.8415,scaleY:0.8594,y:236.7741}},{t:this.shape_40,p:{x:-357.3469,scaleX:0.8415,scaleY:0.8594,y:235.497}},{t:this.shape_39,p:{scaleY:0.8581,x:-379.7864,y:236.8488,scaleX:0.8404}},{t:this.shape_38,p:{scaleY:0.8581,x:-376.256,y:236.3125,scaleX:0.8404}},{t:this.shape_37,p:{scaleY:0.8581,x:-372.8943,y:236.1194,scaleX:0.8404}},{t:this.shape_36,p:{scaleY:0.8581,x:-378.021,y:236.5484,scaleX:0.8404}},{t:this.shape_35,p:{scaleY:0.8581,x:-374.3861,y:236.1623,scaleX:0.8404}},{t:this.shape_34,p:{scaleY:0.8581,x:-362.5569,y:235.1197,scaleX:0.8404}},{t:this.shape_33,p:{scaleY:0.8581,x:-359.8255,y:235.1755,scaleX:0.8404}},{t:this.shape_32,p:{scaleY:0.8581,x:-354.5307,y:235.8191,scaleX:0.8404}},{t:this.shape_31,p:{scaleY:0.8581,x:-361.3803,y:235.1326,scaleX:0.8404}},{t:this.shape_30,p:{scaleY:0.8581,x:-357.5142,y:235.3257,scaleX:0.8404}},{t:this.shape_29,p:{x:-370.9583,scaleX:0.8415,scaleY:0.8594,y:245.7832}},{t:this.shape_28,p:{x:-352.1506,scaleX:0.8415,scaleY:0.8594,y:244.0859}},{t:this.shape_27,p:{x:-333.5113,scaleX:0.8415,scaleY:0.8594,y:243.9759}},{t:this.shape_26,p:{x:-397.7658,scaleX:0.8415,scaleY:0.8594,y:249.878}},{t:this.shape_25,p:{x:-398.0759,scaleX:0.8415,scaleY:0.8594,y:259.2326}},{t:this.shape_24,p:{scaleY:0.8581,x:-380.201,y:259.3951,scaleX:0.8404}},{t:this.shape_23,p:{scaleY:0.8581,x:-380.1851,y:259.4162,scaleX:0.8404}},{t:this.shape_22,p:{scaleY:0.8581,x:-347.9749,y:256.4776,scaleX:0.8404}},{t:this.shape_21,p:{scaleY:0.8581,x:-347.9543,y:256.4773,scaleX:0.8404}},{t:this.shape_20,p:{x:-516.414,scaleX:0.8415,scaleY:0.8594,y:361.0182}},{t:this.shape_19,p:{scaleY:0.8581,x:-522.3373,y:356.7977,scaleX:0.8404}},{t:this.shape_18,p:{scaleY:0.8581,x:-523.4509,y:356.8192,scaleX:0.8404}},{t:this.shape_17,p:{x:-567.0306,scaleX:0.8415,scaleY:0.8594,y:364.4343}},{t:this.shape_16,p:{x:-567.0306,scaleX:0.8415,scaleY:0.8594,y:364.4343}},{t:this.shape_15,p:{x:-631.7004,scaleX:0.8415,scaleY:0.8594,y:360.8248}},{t:this.shape_14,p:{scaleY:0.8581,x:-625.3121,y:356.6261,scaleX:0.8404}},{t:this.shape_13,p:{scaleY:0.8581,x:-624.2195,y:356.6261,scaleX:0.8404}},{t:this.shape_12,p:{x:-581.0838,scaleX:0.8415,scaleY:0.8594,y:364.2194}},{t:this.shape_11,p:{x:-581.0838,scaleX:0.8415,scaleY:0.8594,y:364.2194}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.instance_8},{t:this.instance_7},{t:this.shape_4},{t:this.shape_3,p:{x:139.4692,y:345.8941,scaleX:0.8437,scaleY:0.8613}},{t:this.shape_2,p:{x:139.4692,y:383.125,scaleX:0.8437,scaleY:0.8613}},{t:this.shape_1,p:{x:139.4692,y:420.3559,scaleX:0.8437,scaleY:0.8613}},{t:this.shape,p:{x:139.4692,y:457.5653,scaleX:0.8437,scaleY:0.8613}},{t:this.instance_56},{t:this.instance_5},{t:this.instance_4,p:{regX:0,regY:0,x:-167.8,y:264.1}},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_62},{t:this.instance_64}]},29).to({state:[{t:this.shape_141},{t:this.shape_140},{t:this.instance_55},{t:this.shape_139,p:{x:346.9496,y:304.1751,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_138,p:{x:346.9496,y:304.1751,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_137,p:{x:348.2451,scaleX:0.8415,scaleY:0.8594,y:274.449}},{t:this.shape_136,p:{x:358.2169,scaleX:0.8415,scaleY:0.8594,y:275.5662}},{t:this.shape_135,p:{x:353.6728,scaleX:0.8415,scaleY:0.8594,y:272.6887}},{t:this.shape_134,p:{x:333.2031,scaleX:0.8415,scaleY:0.8594,y:300.8683}},{t:this.shape_133,p:{x:334.1077,scaleX:0.8415,scaleY:0.8594,y:296.8624}},{t:this.shape_132,p:{x:340.8293,scaleX:0.8415,scaleY:0.8594,y:286.6953}},{t:this.shape_131,p:{x:361.3305,scaleX:0.8415,scaleY:0.8594,y:307.0595}},{t:this.shape_130,p:{x:361.625,scaleX:0.8415,scaleY:0.8594,y:302.5628}},{t:this.shape_129,p:{x:359.9841,scaleX:0.8415,scaleY:0.8594,y:290.6398}},{t:this.shape_128,p:{scaleY:0.8581,x:333.5236,y:316.7096,scaleX:0.8404}},{t:this.shape_127,p:{x:330.5944,scaleX:0.8415,scaleY:0.8594,y:329.7508}},{t:this.shape_126,p:{x:346.0992,scaleX:0.8415,scaleY:0.8594,y:323.6921}},{t:this.shape_125,p:{x:348.1188,scaleX:0.8415,scaleY:0.8594,y:312.0688}},{t:this.shape_124,p:{x:351.4849,scaleX:0.8415,scaleY:0.8594,y:285.5566}},{t:this.shape_123},{t:this.instance_54,p:{regY:133.3,scaleY:0.8618,x:530.05,regX:84.8,scaleX:0.8442,y:459.5}},{t:this.instance_53,p:{regX:1.6,scaleY:0.8618,y:274.35,regY:2.1,scaleX:0.8442,x:466.45}},{t:this.instance_52,p:{regY:2.3,scaleY:0.8618,x:541.8,y:273.7,regX:1.7,scaleX:0.8442}},{t:this.shape_122,p:{x:559.4803,y:459.0511,scaleX:0.8437,scaleY:0.8613}},{t:this.shape_121,p:{x:559.4592,y:374.5979,scaleX:0.8437,scaleY:0.8613}},{t:this.shape_120,p:{x:559.4592,y:374.5979,scaleX:0.8437,scaleY:0.8613}},{t:this.shape_119,p:{x:557.9856,y:361.3866,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_118,p:{x:557.9856,y:361.3866,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_117,p:{x:557.9856,y:415.6016,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_116,p:{x:557.9856,y:415.5801,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_115,p:{x:556.9281,scaleX:0.8415,scaleY:0.8594,y:402.5052}},{t:this.shape_114,p:{x:556.9281,scaleX:0.8415,scaleY:0.8594,y:402.5052}},{t:this.shape_113,p:{x:557.9856,y:457.2145,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_112,p:{x:557.9856,y:457.2145,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_111,p:{x:556.9281,scaleX:0.8415,scaleY:0.8594,y:444.0783}},{t:this.shape_110,p:{x:556.9281,scaleX:0.8415,scaleY:0.8594,y:444.0783}},{t:this.shape_109,p:{x:557.9856,y:498.8274,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_108,p:{x:557.9856,y:498.8489,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_107,p:{x:556.9281,scaleX:0.8415,scaleY:0.8594,y:485.6727}},{t:this.shape_106,p:{x:556.9281,scaleX:0.8415,scaleY:0.8594,y:485.6727}},{t:this.shape_105,p:{x:557.9856,y:540.4617,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_104,p:{x:557.9856,y:540.4617,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_103,p:{x:556.9281,scaleX:0.8415,scaleY:0.8594,y:527.2672}},{t:this.shape_102,p:{x:556.9281,scaleX:0.8415,scaleY:0.8594,y:527.2672}},{t:this.instance_51},{t:this.instance_50,p:{regX:40.4,regY:34,scaleX:0.843,scaleY:0.8607,x:549.05,y:316.3}},{t:this.instance_49,p:{regX:41.5,regY:28.2,scaleX:0.8424,scaleY:0.8602,x:548.35,y:321.3}},{t:this.instance_48,p:{regX:7.2,regY:7.9,scaleX:0.8424,scaleY:0.8602,y:308.85,x:523.75}},{t:this.instance_47,p:{regX:8,regY:8.6,scaleX:0.8424,scaleY:0.8602,x:543.3,y:319.9}},{t:this.shape_101,p:{scaleY:0.8581,x:562.6062,y:314.1727,scaleX:0.8404}},{t:this.shape_100,p:{scaleY:0.8581,x:558.7192,y:327.3442,scaleX:0.8404}},{t:this.shape_99,p:{scaleY:0.8581,x:546.0706,y:332.7715,scaleX:0.8404}},{t:this.shape_98,p:{scaleY:0.8581,x:527.749,y:327.6874,scaleX:0.8404}},{t:this.shape_97,p:{scaleY:0.8581,x:530.1863,y:319.0637,scaleX:0.8404}},{t:this.shape_96,p:{scaleY:0.8581,x:543.003,y:313.3361,scaleX:0.8404}},{t:this.shape_95,p:{scaleY:0.8581,x:566.8504,y:321.0802,scaleX:0.8404}},{t:this.shape_94,p:{scaleY:0.8581,x:571.0736,y:311.1051,scaleX:0.8404}},{t:this.shape_93,p:{scaleY:0.8581,x:565.1905,y:330.8623,scaleX:0.8404}},{t:this.shape_92,p:{scaleY:0.8581,x:530.7115,y:310.9334,scaleX:0.8404}},{t:this.shape_91,p:{scaleY:0.8581,x:521.3827,y:320.8442,scaleX:0.8404}},{t:this.shape_90,p:{scaleY:0.8581,x:536.0693,y:334.359,scaleX:0.8404}},{t:this.shape_89,p:{scaleY:0.8581,x:554.9372,y:334.359,scaleX:0.8404}},{t:this.shape_88,p:{scaleY:0.8581,x:553.0042,y:320.8013,scaleX:0.8404}},{t:this.shape_87,p:{x:547.1035,scaleX:0.8415,scaleY:0.8594,y:342.262}},{t:this.instance_46,p:{regX:13.1,regY:8,scaleX:0.843,scaleY:0.8607,x:538.5,y:341.85}},{t:this.instance_45,p:{regX:24,regY:8,scaleX:0.843,scaleY:0.8607,x:549,y:341.85}},{t:this.shape_86,p:{x:547.1044,scaleX:0.8415,scaleY:0.8594,y:316.7381}},{t:this.instance_44,p:{regX:10.7,regY:25.9,scaleX:0.843,scaleY:0.8607,x:569.55,y:317.3}},{t:this.instance_43,p:{regX:11.1,regY:25.9,scaleX:0.843,scaleY:0.8607,x:528.95,y:317.3}},{t:this.shape_85,p:{scaleY:0.8581,x:561.0304,y:316.1421,scaleX:0.8404}},{t:this.instance_42,p:{regX:12.7,regY:11.1,scaleX:0.8424,scaleY:0.8602,x:561.05,y:320.05}},{t:this.shape_84,p:{scaleY:0.8581,x:546.911,y:308.7162,scaleX:0.8404}},{t:this.instance_41,p:{regX:12.3,regY:9,scaleX:0.8424,scaleY:0.8602,x:547.45,y:309.8}},{t:this.shape_83,p:{scaleY:0.8581,x:544.1586,y:326.5076,scaleX:0.8404}},{t:this.instance_40,p:{regX:9.6,regY:10.8,scaleX:0.8424,scaleY:0.8602,x:544.65,y:325.85}},{t:this.shape_82,p:{scaleY:0.8581,x:530.5699,y:323.4734,scaleX:0.8404}},{t:this.instance_39,p:{regX:8,regY:8.7,scaleX:0.8424,scaleY:0.8602,x:533.35,y:322.85}},{t:this.instance_38,p:{regX:22.7,regY:16.6,scaleX:0.8424,scaleY:0.8602,x:540.85,y:315.7}},{t:this.shape_81,p:{scaleY:0.8581,x:530.8493,y:316.0175,scaleX:0.8404}},{t:this.shape_80,p:{scaleY:0.8581,x:532.0327,y:319.1281,scaleX:0.8404}},{t:this.instance_37,p:{regX:9.6,regY:7.7,scaleX:0.8424,scaleY:0.8602,x:534.45,y:320.05}},{t:this.shape_79,p:{scaleY:0.8581,x:530.6065,y:314.6446,scaleX:0.8404}},{t:this.shape_78,p:{scaleY:0.8581,x:530.4804,y:315.0737,scaleX:0.8404}},{t:this.shape_77,p:{scaleY:0.8581,x:533.0571,y:324.6504,scaleX:0.8404}},{t:this.instance_36,p:{regX:6.5,regY:7.2,scaleX:0.843,scaleY:0.8607,x:562.35,y:300.7}},{t:this.instance_35,p:{regX:6.3,regY:6.8,scaleX:0.843,scaleY:0.8607,x:561.25,y:334.35}},{t:this.shape_76,p:{x:561.893,scaleX:0.8415,scaleY:0.8594,y:305.4801}},{t:this.instance_34,p:{regX:5.5,regY:6.2,scaleX:0.843,scaleY:0.8607,y:330.25,x:563.65}},{t:this.shape_142},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.instance_33},{t:this.shape_65},{t:this.instance_32},{t:this.shape_64},{t:this.instance_31},{t:this.shape_63},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.shape_62},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.shape_61},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58,p:{x:397.6942,y:534.5465,scaleX:0.8437,scaleY:0.8613}},{t:this.shape_57,p:{x:397.6942,y:534.5465,scaleX:0.8437,scaleY:0.8613}},{t:this.shape_56,p:{x:396.4693,y:521.7521,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_55,p:{x:396.4693,y:521.7521,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_54,p:{x:266.0083,y:534.5465,scaleX:0.8437,scaleY:0.8613}},{t:this.shape_53,p:{x:266.0083,y:534.5465,scaleX:0.8437,scaleY:0.8613}},{t:this.shape_52,p:{x:264.9858,y:521.7521,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_51,p:{x:264.9858,y:521.7521,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_50,p:{x:139.4481,y:534.5465,scaleX:0.8437,scaleY:0.8613}},{t:this.shape_49,p:{x:139.4481,y:534.5465,scaleX:0.8437,scaleY:0.8613}},{t:this.shape_48,p:{x:138.6201,y:521.7521,scaleX:0.8424,scaleY:0.8602}},{t:this.shape_47,p:{x:138.6201,y:521.7521,scaleX:0.8424,scaleY:0.8602}},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.shape_46},{t:this.instance_9},{t:this.shape_45,p:{scaleY:0.8581,x:-366.3178,y:245.1292,scaleX:0.8404}},{t:this.shape_44,p:{scaleY:0.8581,x:-366.3178,y:245.1507,scaleX:0.8404}},{t:this.shape_43,p:{scaleY:0.8581,x:-366.2968,y:245.1507,scaleX:0.8404}},{t:this.shape_42,p:{x:-364.8285,scaleX:0.8415,scaleY:0.8594,y:245.9284}},{t:this.shape_41,p:{x:-375.7139,scaleX:0.8415,scaleY:0.8594,y:236.7741}},{t:this.shape_40,p:{x:-357.3469,scaleX:0.8415,scaleY:0.8594,y:235.497}},{t:this.shape_39,p:{scaleY:0.8581,x:-379.7864,y:236.8488,scaleX:0.8404}},{t:this.shape_38,p:{scaleY:0.8581,x:-376.256,y:236.3125,scaleX:0.8404}},{t:this.shape_37,p:{scaleY:0.8581,x:-372.8943,y:236.1194,scaleX:0.8404}},{t:this.shape_36,p:{scaleY:0.8581,x:-378.021,y:236.5484,scaleX:0.8404}},{t:this.shape_35,p:{scaleY:0.8581,x:-374.3861,y:236.1623,scaleX:0.8404}},{t:this.shape_34,p:{scaleY:0.8581,x:-362.5569,y:235.1197,scaleX:0.8404}},{t:this.shape_33,p:{scaleY:0.8581,x:-359.8255,y:235.1755,scaleX:0.8404}},{t:this.shape_32,p:{scaleY:0.8581,x:-354.5307,y:235.8191,scaleX:0.8404}},{t:this.shape_31,p:{scaleY:0.8581,x:-361.3803,y:235.1326,scaleX:0.8404}},{t:this.shape_30,p:{scaleY:0.8581,x:-357.5142,y:235.3257,scaleX:0.8404}},{t:this.shape_29,p:{x:-370.9583,scaleX:0.8415,scaleY:0.8594,y:245.7832}},{t:this.shape_28,p:{x:-352.1506,scaleX:0.8415,scaleY:0.8594,y:244.0859}},{t:this.shape_27,p:{x:-333.5113,scaleX:0.8415,scaleY:0.8594,y:243.9759}},{t:this.shape_26,p:{x:-397.7658,scaleX:0.8415,scaleY:0.8594,y:249.878}},{t:this.shape_25,p:{x:-398.0759,scaleX:0.8415,scaleY:0.8594,y:259.2326}},{t:this.shape_24,p:{scaleY:0.8581,x:-380.201,y:259.3951,scaleX:0.8404}},{t:this.shape_23,p:{scaleY:0.8581,x:-380.1851,y:259.4162,scaleX:0.8404}},{t:this.shape_22,p:{scaleY:0.8581,x:-347.9749,y:256.4776,scaleX:0.8404}},{t:this.shape_21,p:{scaleY:0.8581,x:-347.9543,y:256.4773,scaleX:0.8404}},{t:this.shape_20,p:{x:-516.414,scaleX:0.8415,scaleY:0.8594,y:361.0182}},{t:this.shape_19,p:{scaleY:0.8581,x:-522.3373,y:356.7977,scaleX:0.8404}},{t:this.shape_18,p:{scaleY:0.8581,x:-523.4509,y:356.8192,scaleX:0.8404}},{t:this.shape_17,p:{x:-567.0306,scaleX:0.8415,scaleY:0.8594,y:364.4343}},{t:this.shape_16,p:{x:-567.0306,scaleX:0.8415,scaleY:0.8594,y:364.4343}},{t:this.shape_15,p:{x:-631.7004,scaleX:0.8415,scaleY:0.8594,y:360.8248}},{t:this.shape_14,p:{scaleY:0.8581,x:-625.3121,y:356.6261,scaleX:0.8404}},{t:this.shape_13,p:{scaleY:0.8581,x:-624.2195,y:356.6261,scaleX:0.8404}},{t:this.shape_12,p:{x:-581.0838,scaleX:0.8415,scaleY:0.8594,y:364.2194}},{t:this.shape_11,p:{x:-581.0838,scaleX:0.8415,scaleY:0.8594,y:364.2194}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.instance_8},{t:this.instance_7},{t:this.shape_4},{t:this.shape_3,p:{x:139.4692,y:345.8941,scaleX:0.8437,scaleY:0.8613}},{t:this.shape_2,p:{x:139.4692,y:383.125,scaleX:0.8437,scaleY:0.8613}},{t:this.shape_1,p:{x:139.4692,y:420.3559,scaleX:0.8437,scaleY:0.8613}},{t:this.shape,p:{x:139.4692,y:457.5653,scaleX:0.8437,scaleY:0.8613}},{t:this.instance_56},{t:this.instance_5},{t:this.instance_4,p:{regX:0,regY:0,x:-167.8,y:264.1}},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_62},{t:this.instance_64}]},23).to({state:[{t:this.shape_141},{t:this.shape_140},{t:this.instance_55},{t:this.shape_139,p:{x:346.919,y:304.1522,scaleX:0.8424,scaleY:0.8601}},{t:this.shape_138,p:{x:346.919,y:304.1522,scaleX:0.8424,scaleY:0.8601}},{t:this.shape_137,p:{x:347.9839,scaleX:0.8412,scaleY:0.859,y:274.3667}},{t:this.shape_136,p:{x:357.9527,scaleX:0.8412,scaleY:0.859,y:275.4834}},{t:this.shape_135,p:{x:353.41,scaleX:0.8412,scaleY:0.859,y:272.6072}},{t:this.shape_134,p:{x:332.9466,scaleX:0.8412,scaleY:0.859,y:300.7743}},{t:this.shape_133,p:{x:333.851,scaleX:0.8412,scaleY:0.859,y:296.7701}},{t:this.shape_132,p:{x:340.5704,scaleX:0.8412,scaleY:0.859,y:286.6076}},{t:this.shape_131,p:{x:361.0653,scaleX:0.8412,scaleY:0.859,y:306.9627}},{t:this.shape_130,p:{x:361.3598,scaleX:0.8412,scaleY:0.859,y:302.4681}},{t:this.shape_129,p:{x:359.7193,scaleX:0.8412,scaleY:0.859,y:290.5504}},{t:this.shape_128,p:{scaleY:0.8578,x:333.312,y:316.6449,scaleX:0.8402}},{t:this.shape_127,p:{x:330.3387,scaleX:0.8412,scaleY:0.859,y:329.6439}},{t:this.shape_126,p:{x:345.8387,scaleX:0.8412,scaleY:0.859,y:323.5879}},{t:this.shape_125,p:{x:347.8577,scaleX:0.8412,scaleY:0.859,y:311.9698}},{t:this.shape_124,p:{x:351.2227,scaleX:0.8412,scaleY:0.859,y:285.4694}},{t:this.shape_123},{t:this.instance_54,p:{regY:133.6,scaleY:0.8618,x:530.05,regX:85,scaleX:0.8441,y:459.5}},{t:this.instance_53,p:{regX:1.8,scaleY:0.8618,y:274.35,regY:2.4,scaleX:0.8441,x:466.45}},{t:this.instance_52,p:{regY:2.6,scaleY:0.8618,x:541.8,y:273.75,regX:1.9,scaleX:0.8441}},{t:this.shape_122,p:{x:559.411,y:459.0207,scaleX:0.8437,scaleY:0.8613}},{t:this.shape_121,p:{x:559.3899,y:374.5719,scaleX:0.8437,scaleY:0.8613}},{t:this.shape_120,p:{x:559.3899,y:374.5719,scaleX:0.8437,scaleY:0.8613}},{t:this.shape_119,p:{x:557.951,y:361.3362,scaleX:0.8424,scaleY:0.8601}},{t:this.shape_118,p:{x:557.951,y:361.3362,scaleX:0.8424,scaleY:0.8601}},{t:this.shape_117,p:{x:557.951,y:415.5454,scaleX:0.8424,scaleY:0.8601}},{t:this.shape_116,p:{x:557.951,y:415.5239,scaleX:0.8424,scaleY:0.8601}},{t:this.shape_115,p:{x:556.6334,scaleX:0.8412,scaleY:0.859,y:402.2764}},{t:this.shape_114,p:{x:556.6334,scaleX:0.8412,scaleY:0.859,y:402.2764}},{t:this.shape_113,p:{x:557.951,y:457.1538,scaleX:0.8424,scaleY:0.8601}},{t:this.shape_112,p:{x:557.951,y:457.1538,scaleX:0.8424,scaleY:0.8601}},{t:this.shape_111,p:{x:556.6334,scaleX:0.8412,scaleY:0.859,y:443.831}},{t:this.shape_110,p:{x:556.6334,scaleX:0.8412,scaleY:0.859,y:443.831}},{t:this.shape_109,p:{x:557.951,y:498.7623,scaleX:0.8424,scaleY:0.8601}},{t:this.shape_108,p:{x:557.951,y:498.7838,scaleX:0.8424,scaleY:0.8601}},{t:this.shape_107,p:{x:556.6334,scaleX:0.8412,scaleY:0.859,y:485.407}},{t:this.shape_106,p:{x:556.6334,scaleX:0.8412,scaleY:0.859,y:485.407}},{t:this.shape_105,p:{x:557.951,y:540.3922,scaleX:0.8424,scaleY:0.8601}},{t:this.shape_104,p:{x:557.951,y:540.3922,scaleX:0.8424,scaleY:0.8601}},{t:this.shape_103,p:{x:556.6334,scaleX:0.8412,scaleY:0.859,y:526.983}},{t:this.shape_102,p:{x:556.6334,scaleX:0.8412,scaleY:0.859,y:526.983}},{t:this.instance_51},{t:this.instance_50,p:{regX:40.6,regY:34.4,scaleX:0.8428,scaleY:0.8605,x:548.75,y:316.05}},{t:this.instance_49,p:{regX:42.4,regY:28.9,scaleX:0.8422,scaleY:0.86,x:548.2,y:321.05}},{t:this.instance_48,p:{regX:8,regY:8.5,scaleX:0.8422,scaleY:0.86,y:308.5,x:523.55}},{t:this.instance_47,p:{regX:8.6,regY:9.5,scaleX:0.8422,scaleY:0.86,x:543.05,y:319.65}},{t:this.shape_101,p:{scaleY:0.8578,x:562.3617,y:314.0511,scaleX:0.8402}},{t:this.shape_100,p:{scaleY:0.8578,x:558.4757,y:327.2189,scaleX:0.8402}},{t:this.shape_99,p:{scaleY:0.8578,x:545.8303,y:332.6447,scaleX:0.8402}},{t:this.shape_98,p:{scaleY:0.8578,x:527.5134,y:327.562,scaleX:0.8402}},{t:this.shape_97,p:{scaleY:0.8578,x:529.95,y:318.9408,scaleX:0.8402}},{t:this.shape_96,p:{scaleY:0.8578,x:542.7635,y:313.2148,scaleX:0.8402}},{t:this.shape_95,p:{scaleY:0.8578,x:566.6049,y:320.9567,scaleX:0.8402}},{t:this.shape_94,p:{scaleY:0.8578,x:570.827,y:310.9844,scaleX:0.8402}},{t:this.shape_93,p:{scaleY:0.8578,x:564.9454,y:330.736,scaleX:0.8402}},{t:this.shape_92,p:{scaleY:0.8578,x:530.4752,y:310.8128,scaleX:0.8402}},{t:this.shape_91,p:{scaleY:0.8578,x:521.1487,y:320.7208,scaleX:0.8402}},{t:this.shape_90,p:{scaleY:0.8578,x:535.8316,y:334.2317,scaleX:0.8402}},{t:this.shape_89,p:{scaleY:0.8578,x:554.6947,y:334.2317,scaleX:0.8402}},{t:this.shape_88,p:{scaleY:0.8578,x:552.7622,y:320.6779,scaleX:0.8402}},{t:this.shape_87,p:{x:546.8118,scaleX:0.8412,scaleY:0.859,y:342.0599}},{t:this.instance_46,p:{regX:13.5,regY:8.3,scaleX:0.8428,scaleY:0.8605,x:538.4,y:341.55}},{t:this.instance_45,p:{regX:24.4,regY:8.3,scaleX:0.8428,scaleY:0.8605,x:548.75,y:341.55}},{t:this.shape_86,p:{x:546.8127,scaleX:0.8412,scaleY:0.859,y:316.5473}},{t:this.instance_44,p:{regX:11.2,regY:26.3,scaleX:0.8428,scaleY:0.8605,x:569.55,y:317}},{t:this.instance_43,p:{regX:11.6,regY:26.3,scaleX:0.8428,scaleY:0.8605,x:528.95,y:317}},{t:this.shape_85,p:{scaleY:0.8578,x:560.7863,y:316.02,scaleX:0.8402}},{t:this.instance_42,p:{regX:13.4,regY:11.8,scaleX:0.8422,scaleY:0.86,x:560.85,y:319.75}},{t:this.shape_84,p:{scaleY:0.8578,x:546.6705,y:308.5962,scaleX:0.8402}},{t:this.instance_41,p:{regX:12.8,regY:9.6,scaleX:0.8422,scaleY:0.86,x:547.15,y:309.45}},{t:this.shape_83,p:{scaleY:0.8578,x:543.9188,y:326.3825,scaleX:0.8402}},{t:this.instance_40,p:{regX:10.2,regY:11.8,scaleX:0.8422,scaleY:0.86,x:544.4,y:325.7}},{t:this.shape_82,p:{scaleY:0.8578,x:530.3336,y:323.3492,scaleX:0.8402}},{t:this.instance_39,p:{regX:8.6,regY:9.7,scaleX:0.8422,scaleY:0.86,x:533.2,y:322.65}},{t:this.instance_38,p:{regX:23.3,regY:17.2,scaleX:0.8422,scaleY:0.86,x:540.65,y:315.4}},{t:this.shape_81,p:{scaleY:0.8578,x:530.6129,y:315.8955,scaleX:0.8402}},{t:this.shape_80,p:{scaleY:0.8578,x:531.796,y:319.0051,scaleX:0.8402}},{t:this.instance_37,p:{regX:9.9,regY:8.6,scaleX:0.8422,scaleY:0.86,x:534.05,y:319.8}},{t:this.shape_79,p:{scaleY:0.8578,x:530.3702,y:314.523,scaleX:0.8402}},{t:this.shape_78,p:{scaleY:0.8578,x:530.2441,y:314.9519,scaleX:0.8402}},{t:this.shape_77,p:{scaleY:0.8578,x:532.8201,y:324.5259,scaleX:0.8402}},{t:this.instance_36,p:{regX:7,regY:7.5,scaleX:0.8428,scaleY:0.8605,x:562.25,y:300.35}},{t:this.instance_35,p:{regX:6.7,regY:7.3,scaleX:0.8428,scaleY:0.8605,x:561.15,y:334.2}},{t:this.shape_76,p:{x:561.5968,scaleX:0.8412,scaleY:0.859,y:305.2943}},{t:this.instance_34,p:{regX:5.8,regY:6.8,scaleX:0.8428,scaleY:0.8605,y:330.1,x:563.4}},{t:this.shape_142},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.instance_33},{t:this.shape_65},{t:this.instance_32},{t:this.shape_64},{t:this.instance_31},{t:this.shape_63},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.shape_62},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.shape_61},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58,p:{x:397.6365,y:534.5121,scaleX:0.8437,scaleY:0.8613}},{t:this.shape_57,p:{x:397.6365,y:534.5121,scaleX:0.8437,scaleY:0.8613}},{t:this.shape_56,p:{x:396.4404,y:521.6845,scaleX:0.8424,scaleY:0.8601}},{t:this.shape_55,p:{x:396.4404,y:521.6845,scaleX:0.8424,scaleY:0.8601}},{t:this.shape_54,p:{x:265.9602,y:534.5121,scaleX:0.8437,scaleY:0.8613}},{t:this.shape_53,p:{x:265.9602,y:534.5121,scaleX:0.8437,scaleY:0.8613}},{t:this.shape_52,p:{x:264.9617,y:521.6845,scaleX:0.8424,scaleY:0.8601}},{t:this.shape_51,p:{x:264.9617,y:521.6845,scaleX:0.8424,scaleY:0.8601}},{t:this.shape_50,p:{x:139.4091,y:534.5121,scaleX:0.8437,scaleY:0.8613}},{t:this.shape_49,p:{x:139.4091,y:534.5121,scaleX:0.8437,scaleY:0.8613}},{t:this.shape_48,p:{x:138.6007,y:521.6845,scaleX:0.8424,scaleY:0.8601}},{t:this.shape_47,p:{x:138.6007,y:521.6845,scaleX:0.8424,scaleY:0.8601}},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.shape_46},{t:this.instance_9},{t:this.shape_45,p:{scaleY:0.8578,x:-366.4669,y:245.0675,scaleX:0.8402}},{t:this.shape_44,p:{scaleY:0.8578,x:-366.4669,y:245.089,scaleX:0.8402}},{t:this.shape_43,p:{scaleY:0.8578,x:-366.4459,y:245.089,scaleX:0.8402}},{t:this.shape_42,p:{x:-365.0097,scaleX:0.8412,scaleY:0.859,y:245.8318}},{t:this.shape_41,p:{x:-375.8918,scaleX:0.8412,scaleY:0.859,y:236.6815}},{t:this.shape_40,p:{x:-357.5304,scaleX:0.8412,scaleY:0.859,y:235.405}},{t:this.shape_39,p:{scaleY:0.8578,x:-379.932,y:236.7894,scaleX:0.8402}},{t:this.shape_38,p:{scaleY:0.8578,x:-376.4025,y:236.2533,scaleX:0.8402}},{t:this.shape_37,p:{scaleY:0.8578,x:-373.0416,y:236.0603,scaleX:0.8402}},{t:this.shape_36,p:{scaleY:0.8578,x:-378.167,y:236.4892,scaleX:0.8402}},{t:this.shape_35,p:{scaleY:0.8578,x:-374.533,y:236.1031,scaleX:0.8402}},{t:this.shape_34,p:{scaleY:0.8578,x:-362.7069,y:235.0609,scaleX:0.8402}},{t:this.shape_33,p:{scaleY:0.8578,x:-359.9761,y:235.1166,scaleX:0.8402}},{t:this.shape_32,p:{scaleY:0.8578,x:-354.6827,y:235.76,scaleX:0.8402}},{t:this.shape_31,p:{scaleY:0.8578,x:-361.5306,y:235.0737,scaleX:0.8402}},{t:this.shape_30,p:{scaleY:0.8578,x:-357.6655,y:235.2668,scaleX:0.8402}},{t:this.shape_29,p:{x:-371.1376,scaleX:0.8412,scaleY:0.859,y:245.6866}},{t:this.shape_28,p:{x:-352.3357,scaleX:0.8412,scaleY:0.859,y:243.9901}},{t:this.shape_27,p:{x:-333.7021,scaleX:0.8412,scaleY:0.859,y:243.8802}},{t:this.shape_26,p:{x:-397.9368,scaleX:0.8412,scaleY:0.859,y:249.7796}},{t:this.shape_25,p:{x:-398.2468,scaleX:0.8412,scaleY:0.859,y:259.1301}},{t:this.shape_24,p:{scaleY:0.8578,x:-380.3465,y:259.3293,scaleX:0.8402}},{t:this.shape_23,p:{scaleY:0.8578,x:-380.3306,y:259.3504,scaleX:0.8402}},{t:this.shape_22,p:{scaleY:0.8578,x:-348.1286,y:256.4127,scaleX:0.8402}},{t:this.shape_21,p:{scaleY:0.8578,x:-348.108,y:256.4124,scaleX:0.8402}},{t:this.shape_20,p:{x:-516.3778,scaleX:0.8412,scaleY:0.859,y:360.8078}},{t:this.shape_19,p:{scaleY:0.8578,x:-522.306,y:356.664,scaleX:0.8402}},{t:this.shape_18,p:{scaleY:0.8578,x:-523.4193,y:356.6855,scaleX:0.8402}},{t:this.shape_17,p:{x:-566.9789,scaleX:0.8412,scaleY:0.859,y:364.2223}},{t:this.shape_16,p:{x:-566.9789,scaleX:0.8412,scaleY:0.859,y:364.2223}},{t:this.shape_15,p:{x:-631.6288,scaleX:0.8412,scaleY:0.859,y:360.6145}},{t:this.shape_14,p:{scaleY:0.8578,x:-625.2546,y:356.4925,scaleX:0.8402}},{t:this.shape_13,p:{scaleY:0.8578,x:-624.1623,y:356.4925,scaleX:0.8402}},{t:this.shape_12,p:{x:-581.0277,scaleX:0.8412,scaleY:0.859,y:364.0076}},{t:this.shape_11,p:{x:-581.0277,scaleX:0.8412,scaleY:0.859,y:364.0076}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.instance_8},{t:this.instance_7},{t:this.shape_4},{t:this.shape_3,p:{x:139.4302,y:345.8697,scaleX:0.8437,scaleY:0.8613}},{t:this.shape_2,p:{x:139.4302,y:383.0986,scaleX:0.8437,scaleY:0.8613}},{t:this.shape_1,p:{x:139.4302,y:420.3276,scaleX:0.8437,scaleY:0.8613}},{t:this.shape,p:{x:139.4302,y:457.535,scaleX:0.8437,scaleY:0.8613}},{t:this.instance_56},{t:this.instance_5},{t:this.instance_4,p:{regX:0,regY:0,x:-167.8,y:264.1}},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_62},{t:this.instance_64}]},2).wait(74));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.zehava = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,694,695];
	this.streamSoundSymbolsList[1] = [{id:"הבובהזהבהAudioTrimmercom",startFrame:1,endFrame:694,loop:1,offset:0}];
	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.numChildren - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_0 = function() {
		this.clearAllSoundStreams();
		 
		if(this.playbutton.parent == undefined || this.playbutton.parent == this)
		this.playbutton = this.playbutton.playbutton;
		this.doll = this.animation.doll;
		var self=this;
		self.stop();
		
		self.playbutton.addEventListener("click", play);
		
		function play(){
			self.gotoAndPlay(1);
		}
	}
	this.frame_1 = function() {
		var soundInstance = playSound("הבובהזהבהAudioTrimmercom",0);
		this.InsertIntoSoundStreamData(soundInstance,1,694,1);
		this.doll = undefined;
	}
	this.frame_694 = function() {
		this.replaybutton = this.playbutton.replaybutton;
		var self=this;
		self.stop();
		
		self.replaybutton.addEventListener("click", replay);
		
		function replay(){
			self.gotoAndPlay(0);
		}
	}
	this.frame_695 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(693).call(this.frame_694).wait(1).call(this.frame_695).wait(1));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.name = "___camera___instance";
	this.___camera___instance.setTransform(968.95,549.7,0.4628,0.4628,0,0,0,1,1);
	this.___camera___instance.depth = 0;
	this.___camera___instance.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).wait(48).to({regX:0,regY:0,scaleX:0.4652,scaleY:0.4652,x:968.5842,y:543.3103},0).wait(1).to({scaleX:0.4669,scaleY:0.4669,x:966.4615,y:537.1042},0).wait(1).to({scaleX:0.4686,scaleY:0.4686,x:964.3388,y:530.8981},0).wait(1).to({scaleX:0.4703,scaleY:0.4703,x:962.216,y:524.692},0).wait(1).to({scaleX:0.472,scaleY:0.472,x:960.0933,y:518.4859},0).wait(1).to({scaleX:0.4737,scaleY:0.4737,x:957.9706,y:512.2798},0).wait(1).to({scaleX:0.4753,scaleY:0.4753,x:955.8478,y:506.0737},0).wait(1).to({scaleX:0.477,scaleY:0.477,x:953.7251,y:499.8676},0).wait(1).to({scaleX:0.4787,scaleY:0.4787,x:951.6024,y:493.6615},0).wait(1).to({scaleX:0.4804,scaleY:0.4804,x:949.4796,y:487.4554},0).wait(1).to({scaleX:0.4821,scaleY:0.4821,x:947.3569,y:481.2493},0).wait(1).to({scaleX:0.4838,scaleY:0.4838,x:945.2342,y:475.0432},0).wait(1).to({scaleX:0.4855,scaleY:0.4855,x:943.1115,y:468.8371},0).wait(1).to({scaleX:0.4872,scaleY:0.4872,x:940.9887,y:462.631},0).wait(1).to({scaleX:0.4889,scaleY:0.4889,x:938.866,y:456.4249},0).wait(1).to({scaleX:0.4906,scaleY:0.4906,x:936.7433,y:450.2188},0).wait(1).to({scaleX:0.4923,scaleY:0.4923,x:934.6205,y:444.0127},0).wait(1).to({scaleX:0.494,scaleY:0.494,x:932.4978,y:437.8066},0).wait(1).to({scaleX:0.4957,scaleY:0.4957,x:930.3751,y:431.6005},0).wait(1).to({scaleX:0.4974,scaleY:0.4974,x:928.2523,y:425.3944},0).wait(1).to({scaleX:0.499,scaleY:0.499,x:926.1296,y:419.1883},0).wait(1).to({scaleX:0.5007,scaleY:0.5007,x:924.0069,y:412.9822},0).wait(1).to({scaleX:0.5024,scaleY:0.5024,x:921.8842,y:406.7761},0).wait(1).to({scaleX:0.5041,scaleY:0.5041,x:919.7614,y:400.57},0).wait(1).to({scaleX:0.5058,scaleY:0.5058,x:917.6387,y:394.3639},0).wait(1).to({scaleX:0.5075,scaleY:0.5075,x:915.516,y:388.1578},0).wait(1).to({scaleX:0.5092,scaleY:0.5092,x:913.3932,y:381.9517},0).wait(1).to({scaleX:0.5109,scaleY:0.5109,x:911.2705,y:375.7456},0).wait(1).to({scaleX:0.5126,scaleY:0.5126,x:909.1478,y:369.5395},0).wait(1).to({scaleX:0.5143,scaleY:0.5143,x:907.025,y:363.3334},0).wait(1).to({scaleX:0.516,scaleY:0.516,x:904.9023,y:357.1274},0).wait(1).to({scaleX:0.5177,scaleY:0.5177,x:902.7796,y:350.9213},0).wait(1).to({scaleX:0.5194,scaleY:0.5194,x:900.6569,y:344.7152},0).wait(1).to({scaleX:0.5211,scaleY:0.5211,x:898.5341,y:338.5091},0).wait(1).to({scaleX:0.5227,scaleY:0.5227,x:896.4114,y:332.303},0).wait(1).to({scaleX:0.5244,scaleY:0.5244,x:894.2887,y:326.0969},0).wait(1).to({scaleX:0.5261,scaleY:0.5261,x:892.1659,y:319.8908},0).wait(1).to({scaleX:0.5278,scaleY:0.5278,x:890.0432,y:313.6847},0).wait(1).to({scaleX:0.5295,scaleY:0.5295,x:887.9205,y:307.4786},0).wait(1).to({scaleX:0.5312,scaleY:0.5312,x:885.7977,y:301.2725},0).wait(1).to({scaleX:0.5329,scaleY:0.5329,x:883.675,y:295.0664},0).wait(1).to({scaleX:0.5346,scaleY:0.5346,x:881.5523,y:288.8603},0).wait(1).to({scaleX:0.5363,scaleY:0.5363,x:879.4296,y:282.6542},0).wait(1).to({scaleX:0.538,scaleY:0.538,x:877.3068,y:276.4481},0).wait(1).to({scaleX:0.5397,scaleY:0.5397,x:875.1841,y:270.242},0).wait(1).to({scaleX:0.5414,scaleY:0.5414,x:874.6888,y:270.3748},0).wait(1).to({scaleX:0.5431,scaleY:0.5431,x:874.1935,y:270.5077},0).wait(1).to({scaleX:0.5448,scaleY:0.5448,x:873.6982,y:270.6405},0).wait(1).to({scaleX:0.5464,scaleY:0.5464,x:873.2029,y:270.7733},0).wait(1).to({scaleX:0.5481,scaleY:0.5481,x:872.7076,y:270.9061},0).wait(1).to({scaleX:0.5498,scaleY:0.5498,x:872.2123,y:271.039},0).wait(1).to({scaleX:0.5515,scaleY:0.5515,x:871.7169,y:271.1718},0).wait(1).to({scaleX:0.5532,scaleY:0.5532,x:871.2216,y:271.3046},0).wait(1).to({scaleX:0.5549,scaleY:0.5549,x:870.7263,y:271.4374},0).wait(1).to({scaleX:0.5566,scaleY:0.5566,x:870.231,y:271.5703},0).wait(1).to({scaleX:0.5583,scaleY:0.5583,x:869.7357,y:271.7031},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:869.2404,y:271.8359},0).wait(1).to({scaleX:0.5617,scaleY:0.5617,x:868.7451,y:271.9687},0).wait(1).to({scaleX:0.5634,scaleY:0.5634,x:868.2498,y:272.1016},0).wait(1).to({scaleX:0.5651,scaleY:0.5651,x:867.7545,y:272.2344},0).wait(1).to({scaleX:0.5668,scaleY:0.5668,x:867.2592,y:272.3672},0).wait(1).to({scaleX:0.5684,scaleY:0.5684,x:866.7639,y:272.5001},0).wait(1).to({scaleX:0.5701,scaleY:0.5701,x:866.2686,y:272.6329},0).wait(1).to({scaleX:0.5718,scaleY:0.5718,x:865.7732,y:272.7657},0).wait(1).to({scaleX:0.5735,scaleY:0.5735,x:865.2779,y:272.8985},0).wait(1).to({scaleX:0.5752,scaleY:0.5752,x:864.7826,y:273.0314},0).wait(1).to({scaleX:0.5769,scaleY:0.5769,x:864.2873,y:273.1642},0).wait(1).to({scaleX:0.5786,scaleY:0.5786,x:863.792,y:273.297},0).wait(1).to({scaleX:0.5835,scaleY:0.5835,x:840.0894,y:279.7442},0).wait(1).to({scaleX:0.5885,scaleY:0.5885,x:816.3868,y:286.1914},0).wait(1).to({scaleX:0.5934,scaleY:0.5934,x:792.6842,y:292.6386},0).wait(1).to({scaleX:0.5983,scaleY:0.5983,x:768.9816,y:299.0858},0).wait(1).to({scaleX:0.6033,scaleY:0.6033,x:745.279,y:305.5329},0).wait(1).to({scaleX:0.6082,scaleY:0.6082,x:721.5764,y:311.9801},0).wait(1).to({scaleX:0.6131,scaleY:0.6131,x:697.8738,y:318.4273},0).wait(1).to({scaleX:0.6181,scaleY:0.6181,x:674.1712,y:324.8745},0).wait(1).to({scaleX:0.623,scaleY:0.623,x:650.4686,y:331.3217},0).wait(1).to({scaleX:0.6279,scaleY:0.6279,x:626.766,y:337.7689},0).wait(1).to({scaleX:0.6328,scaleY:0.6328,x:603.0634,y:344.2161},0).wait(1).to({scaleX:0.6378,scaleY:0.6378,x:579.3608,y:350.6632},0).wait(1).to({scaleX:0.6427,scaleY:0.6427,x:555.6582,y:357.1104},0).wait(1).to({scaleX:0.6476,scaleY:0.6476,x:531.9556,y:363.5576},0).wait(1).to({scaleX:0.6526,scaleY:0.6526,x:508.2531,y:370.0048},0).wait(1).to({scaleX:0.6575,scaleY:0.6575,x:484.5505,y:376.452},0).wait(1).to({scaleX:0.6624,scaleY:0.6624,x:460.8479,y:382.8992},0).wait(1).to({scaleX:0.6674,scaleY:0.6674,x:437.1453,y:389.3463},0).wait(1).to({scaleX:0.6723,scaleY:0.6723,x:413.4427,y:395.7935},0).wait(1).to({scaleX:0.6772,scaleY:0.6772,x:389.7401,y:402.2407},0).wait(1).to({scaleX:0.6822,scaleY:0.6822,x:366.0375,y:408.6879},0).wait(1).to({scaleX:0.6871,scaleY:0.6871,x:342.3349,y:415.1351},0).wait(1).to({scaleX:0.692,scaleY:0.692,x:318.6323,y:421.5823},0).wait(1).to({scaleX:0.6858,scaleY:0.6858,x:318.2859,y:422.5521},0).wait(1).to({scaleX:0.6795,scaleY:0.6795,x:317.9395,y:423.5219},0).wait(1).to({scaleX:0.6732,scaleY:0.6732,x:317.5932,y:424.4916},0).wait(1).to({scaleX:0.667,scaleY:0.667,x:317.2468,y:425.4614},0).wait(1).to({scaleX:0.6607,scaleY:0.6607,x:316.9005,y:426.4312},0).wait(1).to({scaleX:0.6545,scaleY:0.6545,x:316.5541,y:427.401},0).wait(1).to({scaleX:0.6482,scaleY:0.6482,x:316.2077,y:428.3708},0).wait(1).to({scaleX:0.6419,scaleY:0.6419,x:315.8614,y:429.3406},0).wait(1).to({scaleX:0.6357,scaleY:0.6357,x:315.515,y:430.3104},0).wait(1).to({scaleX:0.6294,scaleY:0.6294,x:315.1687,y:431.2802},0).wait(1).to({scaleX:0.6232,scaleY:0.6232,x:314.8223,y:432.25},0).wait(1).to({scaleX:0.6169,scaleY:0.6169,x:314.4759,y:433.2198},0).wait(1).to({scaleX:0.6107,scaleY:0.6107,x:314.1296,y:434.1896},0).wait(1).to({scaleX:0.6044,scaleY:0.6044,x:313.7832,y:435.1594},0).wait(1).to({scaleX:0.5981,scaleY:0.5981,x:313.4368,y:436.1292},0).wait(1).to({scaleX:0.5919,scaleY:0.5919,x:313.0905,y:437.0989},0).wait(1).to({scaleX:0.5856,scaleY:0.5856,x:312.7441,y:438.0687},0).wait(1).to({scaleX:0.5794,scaleY:0.5794,x:312.3978,y:439.0385},0).wait(1).to({scaleX:0.5731,scaleY:0.5731,x:312.0514,y:440.0083},0).wait(1).to({scaleX:0.5668,scaleY:0.5668,x:311.705,y:440.9781},0).wait(1).to({scaleX:0.5606,scaleY:0.5606,x:311.3587,y:441.9479},0).wait(1).to({scaleX:0.5543,scaleY:0.5543,x:311.0123,y:442.9177},0).wait(1).to({scaleX:0.5481,scaleY:0.5481,x:310.6659,y:443.8875},0).wait(1).to({scaleX:0.5418,scaleY:0.5418,x:310.3196,y:444.8573},0).wait(1).to({scaleX:0.5355,scaleY:0.5355,x:309.9732,y:445.8271},0).wait(1).to({scaleX:0.5293,scaleY:0.5293,x:309.6269,y:446.7969},0).wait(1).to({scaleX:0.523,scaleY:0.523,x:309.2805,y:447.7667},0).wait(1).to({scaleX:0.5168,scaleY:0.5168,x:308.9341,y:448.7364},0).wait(1).to({scaleX:0.5105,scaleY:0.5105,x:308.5878,y:449.7062},0).wait(1).to({scaleX:0.5043,scaleY:0.5043,x:308.2414,y:450.676},0).wait(1).to({scaleX:0.498,scaleY:0.498,x:307.8951,y:451.6458},0).wait(1).to({scaleX:0.4917,scaleY:0.4917,x:307.5487,y:452.6156},0).wait(1).to({scaleX:0.4855,scaleY:0.4855,x:307.2023,y:453.5854},0).wait(1).to({scaleX:0.4792,scaleY:0.4792,x:306.856,y:454.5552},0).wait(1).to({scaleX:0.473,scaleY:0.473,x:306.5096,y:455.525},0).wait(1).to({scaleX:0.4667,scaleY:0.4667,x:306.1632,y:456.4948},0).wait(1).to({scaleX:0.4604,scaleY:0.4604,x:305.8169,y:457.4646},0).wait(1).to({scaleX:0.4542,scaleY:0.4542,x:305.4705,y:458.4344},0).wait(1).to({scaleX:0.4479,scaleY:0.4479,x:305.1242,y:459.4042},0).wait(1).to({scaleX:0.4417,scaleY:0.4417,x:304.7778,y:460.3739},0).wait(1).to({scaleX:0.4354,scaleY:0.4354,x:304.4314,y:461.3437},0).wait(1).to({scaleX:0.4292,scaleY:0.4292,x:304.0851,y:462.3135},0).wait(1).to({scaleX:0.4229,scaleY:0.4229,x:303.7387,y:463.2833},0).wait(1).to({scaleX:0.4166,scaleY:0.4166,x:303.3923,y:464.2531},0).wait(1).to({scaleX:0.4104,scaleY:0.4104,x:303.046,y:465.2229},0).wait(1).to({scaleX:0.4041,scaleY:0.4041,x:302.6996,y:466.1927},0).wait(1).to({scaleX:0.3979,scaleY:0.3979,x:302.3533,y:467.1625},0).wait(1).to({scaleX:0.3916,scaleY:0.3916,x:302.0069,y:468.1323},0).wait(1).to({scaleX:0.3853,scaleY:0.3853,x:301.6605,y:469.1021},0).wait(1).to({scaleX:0.3791,scaleY:0.3791,x:301.3142,y:470.0719},0).wait(1).to({scaleX:0.3728,scaleY:0.3728,x:300.9678,y:471.0417},0).wait(1).to({scaleX:0.3666,scaleY:0.3666,x:300.6215,y:472.0115},0).wait(1).to({scaleX:0.3603,scaleY:0.3603,x:300.2751,y:472.9812},0).wait(1).to({scaleX:0.354,scaleY:0.354,x:299.9287,y:473.951},0).wait(1).to({scaleX:0.3478,scaleY:0.3478,x:299.5824,y:474.9208},0).wait(1).to({scaleX:0.3415,scaleY:0.3415,x:299.236,y:475.8906},0).wait(1).to({scaleX:0.3353,scaleY:0.3353,x:298.8896,y:476.8604},0).wait(1).to({scaleX:0.329,scaleY:0.329,x:298.5433,y:477.8302},0).wait(1).to({scaleX:0.3228,scaleY:0.3228,x:298.1969,y:478.8},0).wait(1).to({scaleX:0.3165,scaleY:0.3165,x:297.8506,y:479.7698},0).wait(1).to({scaleX:0.3102,scaleY:0.3102,x:297.5042,y:480.7396},0).wait(1).to({scaleX:0.304,scaleY:0.304,x:297.1578,y:481.7094},0).wait(1).to({scaleX:0.2977,scaleY:0.2977,x:296.8115,y:482.6792},0).wait(1).to({scaleX:0.2915,scaleY:0.2915,x:296.4651,y:483.649},0).wait(1).to({scaleX:0.2852,scaleY:0.2852,x:296.1187,y:484.6187},0).wait(1).to({scaleX:0.2829,scaleY:0.2829,x:286.9939,y:480.7088},0).wait(1).to({scaleX:0.2806,scaleY:0.2806,x:277.869,y:476.7988},0).wait(1).to({scaleX:0.2784,scaleY:0.2784,x:268.7442,y:472.8888},0).wait(1).to({scaleX:0.2761,scaleY:0.2761,x:259.6193,y:468.9788},0).wait(1).to({scaleX:0.2738,scaleY:0.2738,x:250.4944,y:465.0688},0).wait(1).to({scaleX:0.2715,scaleY:0.2715,x:241.3696,y:461.1588},0).wait(1).to({scaleX:0.2692,scaleY:0.2692,x:232.2447,y:457.2488},0).wait(1).to({scaleX:0.267,scaleY:0.267,x:223.1199,y:453.3388},0).wait(1).to({scaleX:0.2647,scaleY:0.2647,x:213.995,y:449.4288},0).wait(1).to({scaleX:0.2624,scaleY:0.2624,x:204.8701,y:445.5188},0).wait(1).to({scaleX:0.2601,scaleY:0.2601,x:195.7453,y:441.6088},0).wait(1).to({scaleX:0.2578,scaleY:0.2578,x:186.6204,y:437.6988},0).wait(1).to({scaleX:0.2556,scaleY:0.2556,x:177.4956,y:433.7888},0).wait(1).to({scaleX:0.2533,scaleY:0.2533,x:168.3707,y:429.8788},0).wait(1).to({scaleX:0.251,scaleY:0.251,x:159.2458,y:425.9688},0).wait(1).to({scaleX:0.2487,scaleY:0.2487,x:150.121,y:422.0588},0).wait(1).to({scaleX:0.2464,scaleY:0.2464,x:140.9961,y:418.1488},0).wait(1).to({scaleX:0.2442,scaleY:0.2442,x:131.8713,y:414.2388},0).wait(1).to({scaleX:0.2419,scaleY:0.2419,x:122.7464,y:410.3288},0).wait(1).to({scaleX:0.2396,scaleY:0.2396,x:113.6215,y:406.4188},0).wait(1).to({scaleX:0.2373,scaleY:0.2373,x:104.4967,y:402.5088},0).wait(1).to({scaleX:0.235,scaleY:0.235,x:95.3718,y:398.5988},0).wait(1).to({scaleX:0.2327,scaleY:0.2327,x:86.247,y:394.6888},0).wait(1).to({scaleX:0.2305,scaleY:0.2305,x:77.1221,y:390.7789},0).wait(1).to({scaleX:0.2282,scaleY:0.2282,x:67.9972,y:386.8689},0).wait(1).to({scaleX:0.2259,scaleY:0.2259,x:58.8724,y:382.9589},0).wait(1).to({scaleX:0.2236,scaleY:0.2236,x:49.7475,y:379.0489},0).wait(1).to({scaleX:0.2213,scaleY:0.2213,x:40.6227,y:375.1389},0).wait(1).to({scaleX:0.2191,scaleY:0.2191,x:31.4978,y:371.2289},0).wait(1).to({scaleX:0.2168,scaleY:0.2168,x:22.3729,y:367.3189},0).wait(1).to({scaleX:0.2145,scaleY:0.2145,x:13.2481,y:363.4089},0).wait(1).to({scaleX:0.2122,scaleY:0.2122,x:4.1232,y:359.4989},0).wait(1).to({scaleX:0.2099,scaleY:0.2099,x:-5.0016,y:355.5889},0).wait(1).to({scaleX:0.2077,scaleY:0.2077,x:-14.1265,y:351.6789},0).wait(1).to({scaleX:0.2054,scaleY:0.2054,x:-23.2514,y:347.7689},0).wait(1).to({scaleX:0.2031,scaleY:0.2031,x:-32.3762,y:343.8589},0).wait(1).to({scaleX:0.2008,scaleY:0.2008,x:-41.5011,y:339.9489},0).wait(46).to({x:-41.587,y:339.9522},0).wait(1).to({x:-41.6729,y:339.9554},0).wait(1).to({x:-41.7589,y:339.9587},0).wait(1).to({x:-41.8448,y:339.9619},0).wait(1).to({x:-41.9307,y:339.9652},0).wait(1).to({x:-42.0166,y:339.9685},0).wait(1).to({x:-42.1026,y:339.9717},0).wait(1).to({x:-42.1885,y:339.975},0).wait(1).to({x:-42.2744,y:339.9782},0).wait(1).to({x:-42.3604,y:339.9815},0).wait(1).to({x:-42.4463,y:339.9848},0).wait(1).to({x:-42.5322,y:339.988},0).wait(1).to({x:-42.6181,y:339.9913},0).wait(1).to({x:-42.7041,y:339.9945},0).wait(1).to({x:-42.79,y:339.9978},0).wait(1).to({x:-42.8759,y:340.0011},0).wait(1).to({x:-42.9618,y:340.0043},0).wait(1).to({x:-43.0478,y:340.0076},0).wait(1).to({x:-43.1337,y:340.0108},0).wait(1).to({x:-43.2196,y:340.0141},0).wait(1).to({x:-43.3055,y:340.0174},0).wait(1).to({x:-43.3915,y:340.0206},0).wait(1).to({x:-43.4774,y:340.0239},0).wait(1).to({x:-43.5633,y:340.0271},0).wait(1).to({x:-43.6492,y:340.0304},0).wait(1).to({x:-43.7352,y:340.0336},0).wait(1).to({x:-43.8211,y:340.0369},0).wait(1).to({x:-48.9783,y:340.2326},0).wait(1).to({x:-54.1355,y:340.4283},0).wait(1).to({x:-59.2927,y:340.624},0).wait(1).to({x:-64.4498,y:340.8197},0).wait(1).to({x:-69.607,y:341.0153},0).wait(1).to({x:-74.7642,y:341.211},0).wait(1).to({x:-79.9214,y:341.4067},0).wait(1).to({x:-85.0786,y:341.6024},0).wait(1).to({x:-90.2358,y:341.7981},0).wait(1).to({x:-95.393,y:341.9938},0).wait(1).to({x:-100.5502,y:342.1895},0).wait(1).to({x:-105.7073,y:342.3852},0).wait(1).to({x:-110.8645,y:342.5808},0).wait(1).to({x:-116.0217,y:342.7765},0).wait(1).to({x:-121.1789,y:342.9722},0).wait(1).to({x:-126.3361,y:343.1679},0).wait(1).to({x:-131.4933,y:343.3636},0).wait(1).to({x:-136.6505,y:343.5593},0).wait(1).to({x:-141.8077,y:343.755},0).wait(1).to({x:-146.9648,y:343.9507},0).wait(1).to({x:-152.122,y:344.1463},0).wait(1).to({x:-157.2792,y:344.342},0).wait(1).to({x:-162.4364,y:344.5377},0).wait(1).to({x:-167.5936,y:344.7334},0).wait(1).to({x:-172.7508,y:344.9291},0).wait(1).to({x:-177.908,y:345.1248},0).wait(1).to({x:-183.0652,y:345.3205},0).wait(1).to({x:-188.2223,y:345.5162},0).wait(1).to({x:-193.3795,y:345.7118},0).wait(1).to({x:-198.5367,y:345.9075},0).wait(1).to({x:-203.6939,y:346.1032},0).wait(1).to({x:-208.8511,y:346.2989},0).wait(1).to({scaleX:0.2009,scaleY:0.2009,x:-208.8127,y:346.3363},0).wait(1).to({x:-208.7743,y:346.3737},0).wait(1).to({scaleX:0.201,scaleY:0.201,x:-208.7359,y:346.4111},0).wait(1).to({scaleX:0.2011,scaleY:0.2011,x:-208.6975,y:346.4485},0).wait(1).to({x:-208.6591,y:346.4859},0).wait(1).to({scaleX:0.2012,scaleY:0.2012,x:-208.6207,y:346.5233},0).wait(1).to({x:-208.5823,y:346.5607},0).wait(1).to({scaleX:0.2013,scaleY:0.2013,x:-208.5439,y:346.5981},0).wait(1).to({scaleX:0.2014,scaleY:0.2014,x:-208.5055,y:346.6355},0).wait(1).to({x:-208.467,y:346.673},0).wait(1).to({scaleX:0.2015,scaleY:0.2015,x:-208.4286,y:346.7104},0).wait(1).to({x:-208.3902,y:346.7478},0).wait(1).to({scaleX:0.2016,scaleY:0.2016,x:-208.3518,y:346.7852},0).wait(1).to({scaleX:0.2017,scaleY:0.2017,x:-208.3134,y:346.8226},0).wait(1).to({x:-208.275,y:346.86},0).wait(1).to({scaleX:0.2018,scaleY:0.2018,x:-208.2366,y:346.8974},0).wait(1).to({x:-208.1982,y:346.9348},0).wait(1).to({scaleX:0.2019,scaleY:0.2019,x:-208.1598,y:346.9722},0).wait(1).to({scaleX:0.202,scaleY:0.202,x:-208.1214,y:347.0096},0).wait(1).to({x:-208.083,y:347.047},0).wait(1).to({scaleX:0.2021,scaleY:0.2021,x:-208.0446,y:347.0844},0).wait(1).to({x:-208.0062,y:347.1218},0).wait(1).to({scaleX:0.2022,scaleY:0.2022,x:-207.9678,y:347.1592},0).wait(1).to({scaleX:0.2023,scaleY:0.2023,x:-207.9294,y:347.1966},0).wait(1).to({x:-207.891,y:347.234},0).wait(1).to({scaleX:0.2024,scaleY:0.2024,x:-207.8526,y:347.2714},0).wait(1).to({x:-207.8142,y:347.3088},0).wait(1).to({scaleX:0.2025,scaleY:0.2025,x:-207.7758,y:347.3462},0).wait(1).to({scaleX:0.2026,scaleY:0.2026,x:-207.7374,y:347.3836},0).wait(1).to({x:-207.699,y:347.421},0).wait(1).to({scaleX:0.2027,scaleY:0.2027,x:-207.6606,y:347.4584},0).wait(1).to({x:-207.6222,y:347.4958},0).wait(1).to({scaleX:0.2028,scaleY:0.2028,x:-207.5837,y:347.5333},0).wait(1).to({scaleX:0.2029,scaleY:0.2029,x:-207.5453,y:347.5707},0).wait(1).to({x:-207.5069,y:347.6081},0).wait(1).to({scaleX:0.203,scaleY:0.203,x:-207.4685,y:347.6455},0).wait(1).to({x:-207.4301,y:347.6829},0).wait(1).to({scaleX:0.2031,scaleY:0.2031,x:-207.3917,y:347.7203},0).wait(1).to({scaleX:0.2032,scaleY:0.2032,x:-207.3533,y:347.7577},0).wait(1).to({x:-207.3149,y:347.7951},0).wait(1).to({scaleX:0.2033,scaleY:0.2033,x:-207.2765,y:347.8325},0).wait(1).to({x:-207.2381,y:347.8699},0).wait(1).to({scaleX:0.2034,scaleY:0.2034,x:-207.1997,y:347.9073},0).wait(1).to({scaleX:0.2035,scaleY:0.2035,x:-207.1613,y:347.9447},0).wait(1).to({x:-207.1229,y:347.9821},0).wait(1).to({scaleX:0.2036,scaleY:0.2036,x:-207.0845,y:348.0195},0).wait(1).to({x:-207.0461,y:348.0569},0).wait(1).to({scaleX:0.2037,scaleY:0.2037,x:-207.0077,y:348.0943},0).wait(1).to({scaleX:0.2038,scaleY:0.2038,x:-206.9693,y:348.1317},0).wait(1).to({x:-206.9309,y:348.1691},0).wait(1).to({scaleX:0.2039,scaleY:0.2039,x:-206.8925,y:348.2065},0).wait(1).to({x:-206.8541,y:348.2439},0).wait(1).to({scaleX:0.204,scaleY:0.204,x:-206.8157,y:348.2813},0).wait(1).to({scaleX:0.2041,scaleY:0.2041,x:-206.7773,y:348.3187},0).wait(1).to({x:-206.7389,y:348.3561},0).wait(1).to({scaleX:0.2042,scaleY:0.2042,x:-206.7004,y:348.3936},0).wait(1).to({x:-206.662,y:348.431},0).wait(1).to({scaleX:0.2043,scaleY:0.2043,x:-206.6236,y:348.4684},0).wait(1).to({scaleX:0.2044,scaleY:0.2044,x:-206.5852,y:348.5058},0).wait(1).to({x:-206.5468,y:348.5432},0).wait(1).to({scaleX:0.2045,scaleY:0.2045,x:-206.5084,y:348.5806},0).wait(1).to({scaleX:0.2046,scaleY:0.2046,x:-206.47,y:348.618},0).wait(1).to({x:-206.4316,y:348.6554},0).wait(1).to({scaleX:0.2047,scaleY:0.2047,x:-206.3932,y:348.6928},0).wait(1).to({x:-206.3548,y:348.7302},0).wait(1).to({scaleX:0.207,scaleY:0.207,x:-205.57,y:353.3718},0).wait(1).to({scaleX:0.2093,scaleY:0.2093,x:-204.7851,y:358.0134},0).wait(1).to({scaleX:0.2116,scaleY:0.2116,x:-204.0002,y:362.655},0).wait(1).to({scaleX:0.2139,scaleY:0.2139,x:-203.2154,y:367.2967},0).wait(1).to({scaleX:0.2162,scaleY:0.2162,x:-202.4305,y:371.9383},0).wait(1).to({scaleX:0.2185,scaleY:0.2185,x:-201.6457,y:376.5799},0).wait(1).to({scaleX:0.2208,scaleY:0.2208,x:-200.8608,y:381.2215},0).wait(1).to({scaleX:0.2231,scaleY:0.2231,x:-200.076,y:385.8631},0).wait(1).to({scaleX:0.2254,scaleY:0.2254,x:-199.2911,y:390.5047},0).wait(1).to({scaleX:0.2277,scaleY:0.2277,x:-198.5063,y:395.1463},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-197.7214,y:399.788},0).wait(1).to({scaleX:0.2323,scaleY:0.2323,x:-196.9365,y:404.4296},0).wait(1).to({scaleX:0.2346,scaleY:0.2346,x:-196.1517,y:409.0712},0).wait(1).to({scaleX:0.2369,scaleY:0.2369,x:-195.3668,y:413.7128},0).wait(1).to({scaleX:0.2392,scaleY:0.2392,x:-194.582,y:418.3544},0).wait(1).to({scaleX:0.2415,scaleY:0.2415,x:-193.7971,y:422.996},0).wait(1).to({scaleX:0.2438,scaleY:0.2438,x:-193.0123,y:427.6376},0).wait(1).to({scaleX:0.2461,scaleY:0.2461,x:-192.2274,y:432.2793},0).wait(1).to({scaleX:0.2484,scaleY:0.2484,x:-191.4426,y:436.9209},0).wait(1).to({scaleX:0.2507,scaleY:0.2507,x:-190.6577,y:441.5625},0).wait(1).to({scaleX:0.253,scaleY:0.253,x:-189.8728,y:446.2041},0).wait(1).to({scaleX:0.2553,scaleY:0.2553,x:-189.088,y:450.8457},0).wait(1).to({scaleX:0.2575,scaleY:0.2575,x:-188.3031,y:455.4873},0).wait(1).to({scaleX:0.2598,scaleY:0.2598,x:-187.5183,y:460.1289},0).wait(1).to({scaleX:0.2621,scaleY:0.2621,x:-186.7334,y:464.7706},0).wait(1).to({scaleX:0.2644,scaleY:0.2644,x:-185.9486,y:469.4122},0).wait(1).to({scaleX:0.2667,scaleY:0.2667,x:-185.1637,y:474.0538},0).wait(1).to({scaleX:0.269,scaleY:0.269,x:-184.3789,y:478.6954},0).wait(1).to({scaleX:0.2713,scaleY:0.2713,x:-183.594,y:483.337},0).wait(1).to({scaleX:0.2736,scaleY:0.2736,x:-182.8091,y:487.9786},0).wait(1).to({scaleX:0.2759,scaleY:0.2759,x:-182.0243,y:492.6203},0).wait(1).to({scaleX:0.2782,scaleY:0.2782,x:-181.2394,y:497.2619},0).wait(1).to({scaleX:0.2805,scaleY:0.2805,x:-180.4546,y:501.9035},0).wait(1).to({scaleX:0.2828,scaleY:0.2828,x:-179.6697,y:506.5451},0).wait(1).to({scaleX:0.2851,scaleY:0.2851,x:-178.8849,y:511.1867},0).wait(1).to({scaleX:0.2874,scaleY:0.2874,x:-178.1,y:515.8283},0).wait(1).to({scaleX:0.2897,scaleY:0.2897,x:-177.3152,y:520.4699},0).wait(1).to({scaleX:0.292,scaleY:0.292,x:-176.5303,y:525.1116},0).wait(1).to({scaleX:0.2943,scaleY:0.2943,x:-175.7454,y:529.7532},0).wait(1).to({scaleX:0.2966,scaleY:0.2966,x:-174.9606,y:534.3948},0).wait(1).to({scaleX:0.2989,scaleY:0.2989,x:-174.1757,y:539.0364},0).wait(1).to({scaleX:0.3012,scaleY:0.3012,x:-173.3909,y:543.678},0).wait(1).to({scaleX:0.3035,scaleY:0.3035,x:-172.606,y:548.3196},0).wait(1).to({scaleX:0.3058,scaleY:0.3058,x:-171.8212,y:552.9612},0).wait(1).to({scaleX:0.3081,scaleY:0.3081,x:-171.0363,y:557.6029},0).wait(1).to({scaleX:0.3104,scaleY:0.3104,x:-170.2515,y:562.2445},0).wait(1).to({scaleX:0.3127,scaleY:0.3127,x:-169.4666,y:566.8861},0).wait(1).to({scaleX:0.315,scaleY:0.315,x:-168.6817,y:571.5277},0).wait(1).to({scaleX:0.3173,scaleY:0.3173,x:-167.8969,y:576.1693},0).wait(1).to({scaleX:0.3195,scaleY:0.3195,x:-167.112,y:580.8109},0).wait(1).to({scaleX:0.3218,scaleY:0.3218,x:-166.3272,y:585.4525},0).wait(1).to({scaleX:0.3241,scaleY:0.3241,x:-165.5423,y:590.0942},0).wait(1).to({scaleX:0.3264,scaleY:0.3264,x:-164.7575,y:594.7358},0).wait(1).to({scaleX:0.3287,scaleY:0.3287,x:-163.9726,y:599.3774},0).wait(1).to({scaleX:0.3291,scaleY:0.3291,x:-159.2387,y:599.3025},0).wait(1).to({scaleX:0.3294,scaleY:0.3294,x:-154.5048,y:599.2276},0).wait(1).to({scaleX:0.3298,scaleY:0.3298,x:-149.7708,y:599.1526},0).wait(1).to({scaleX:0.3301,scaleY:0.3301,x:-145.0369,y:599.0777},0).wait(1).to({scaleX:0.3304,scaleY:0.3304,x:-140.303,y:599.0028},0).wait(1).to({scaleX:0.3308,scaleY:0.3308,x:-135.5691,y:598.9279},0).wait(1).to({scaleX:0.3311,scaleY:0.3311,x:-130.8352,y:598.853},0).wait(1).to({scaleX:0.3315,scaleY:0.3315,x:-126.1012,y:598.7781},0).wait(1).to({scaleX:0.3318,scaleY:0.3318,x:-121.3673,y:598.7032},0).wait(1).to({scaleX:0.3321,scaleY:0.3321,x:-116.6334,y:598.6282},0).wait(1).to({scaleX:0.3325,scaleY:0.3325,x:-111.8995,y:598.5533},0).wait(1).to({scaleX:0.3328,scaleY:0.3328,x:-107.1656,y:598.4784},0).wait(1).to({scaleX:0.3332,scaleY:0.3332,x:-102.4316,y:598.4035},0).wait(1).to({scaleX:0.3335,scaleY:0.3335,x:-97.6977,y:598.3286},0).wait(1).to({scaleX:0.3338,scaleY:0.3338,x:-92.9638,y:598.2537},0).wait(1).to({scaleX:0.3342,scaleY:0.3342,x:-88.2299,y:598.1787},0).wait(1).to({scaleX:0.3345,scaleY:0.3345,x:-83.4959,y:598.1038},0).wait(1).to({scaleX:0.3349,scaleY:0.3349,x:-78.762,y:598.0289},0).wait(1).to({scaleX:0.3352,scaleY:0.3352,x:-74.0281,y:597.954},0).wait(1).to({scaleX:0.3355,scaleY:0.3355,x:-69.2942,y:597.8791},0).wait(1).to({scaleX:0.3359,scaleY:0.3359,x:-64.5603,y:597.8042},0).wait(1).to({scaleX:0.3362,scaleY:0.3362,x:-59.8263,y:597.7293},0).wait(1).to({scaleX:0.3366,scaleY:0.3366,x:-55.0924,y:597.6543},0).wait(1).to({scaleX:0.3369,scaleY:0.3369,x:-50.3585,y:597.5794},0).wait(1).to({scaleX:0.3372,scaleY:0.3372,x:-45.6246,y:597.5045},0).wait(1).to({scaleX:0.3376,scaleY:0.3376,x:-40.8907,y:597.4296},0).wait(1).to({scaleX:0.3379,scaleY:0.3379,x:-36.1567,y:597.3547},0).wait(1).to({scaleX:0.3383,scaleY:0.3383,x:-31.4228,y:597.2798},0).wait(1).to({scaleX:0.3386,scaleY:0.3386,x:-26.6889,y:597.2048},0).wait(1).to({scaleX:0.339,scaleY:0.339,x:-21.955,y:597.1299},0).wait(1).to({scaleX:0.3393,scaleY:0.3393,x:-17.221,y:597.055},0).wait(1).to({scaleX:0.3396,scaleY:0.3396,x:-12.4871,y:596.9801},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:-7.7532,y:596.9052},0).wait(1).to({scaleX:0.3403,scaleY:0.3403,x:-3.0193,y:596.8303},0).wait(1).to({scaleX:0.3407,scaleY:0.3407,x:1.7146,y:596.7554},0).wait(1).to({scaleX:0.341,scaleY:0.341,x:6.4486,y:596.6804},0).wait(1).to({scaleX:0.3413,scaleY:0.3413,x:11.1825,y:596.6055},0).wait(1).to({scaleX:0.3417,scaleY:0.3417,x:15.9164,y:596.5306},0).wait(1).to({scaleX:0.342,scaleY:0.342,x:20.6503,y:596.4557},0).wait(1).to({scaleX:0.3424,scaleY:0.3424,x:25.3842,y:596.3808},0).wait(1).to({scaleX:0.3427,scaleY:0.3427,x:30.1182,y:596.3059},0).wait(1).to({scaleX:0.343,scaleY:0.343,x:34.8521,y:596.2309},0).wait(1).to({scaleX:0.3434,scaleY:0.3434,x:39.586,y:596.156},0).wait(1).to({scaleX:0.3437,scaleY:0.3437,x:44.3199,y:596.0811},0).wait(1).to({scaleX:0.3441,scaleY:0.3441,x:49.0539,y:596.0062},0).wait(1).to({scaleX:0.3444,scaleY:0.3444,x:53.7878,y:595.9313},0).wait(1).to({scaleX:0.3447,scaleY:0.3447,x:58.5217,y:595.8564},0).wait(1).to({scaleX:0.3451,scaleY:0.3451,x:63.2556,y:595.7815},0).wait(1).to({scaleX:0.3454,scaleY:0.3454,x:67.9895,y:595.7065},0).wait(1).to({scaleX:0.3458,scaleY:0.3458,x:72.7235,y:595.6316},0).wait(1).to({scaleX:0.3461,scaleY:0.3461,x:77.4574,y:595.5567},0).wait(1).to({scaleX:0.3464,scaleY:0.3464,x:82.1913,y:595.4818},0).wait(1).to({scaleX:0.3468,scaleY:0.3468,x:86.9252,y:595.4069},0).wait(1).to({scaleX:0.3471,scaleY:0.3471,x:91.6591,y:595.332},0).wait(1).to({scaleX:0.3475,scaleY:0.3475,x:96.3931,y:595.257},0).wait(1).to({scaleX:0.3478,scaleY:0.3478,x:101.127,y:595.1821},0).wait(1).to({scaleX:0.3481,scaleY:0.3481,x:105.8609,y:595.1072},0).wait(1).to({scaleX:0.3485,scaleY:0.3485,x:110.5948,y:595.0323},0).wait(1).to({scaleX:0.3488,scaleY:0.3488,x:115.3288,y:594.9574},0).wait(1).to({scaleX:0.3492,scaleY:0.3492,x:120.0627,y:594.8825},0).wait(1).to({scaleX:0.3495,scaleY:0.3495,x:124.7966,y:594.8076},0).wait(1).to({scaleX:0.3498,scaleY:0.3498,x:129.5305,y:594.7326},0).wait(1).to({scaleX:0.3502,scaleY:0.3502,x:134.2644,y:594.6577},0).wait(1).to({scaleX:0.3505,scaleY:0.3505,x:138.9984,y:594.5828},0).wait(1).to({scaleX:0.3509,scaleY:0.3509,x:143.7323,y:594.5079},0).wait(1).to({scaleX:0.3512,scaleY:0.3512,x:148.4662,y:594.433},0).wait(1).to({scaleX:0.3515,scaleY:0.3515,x:153.2001,y:594.3581},0).wait(1).to({scaleX:0.3519,scaleY:0.3519,x:157.934,y:594.2831},0).wait(1).to({scaleX:0.3522,scaleY:0.3522,x:162.668,y:594.2082},0).wait(1).to({scaleX:0.3526,scaleY:0.3526,x:167.4019,y:594.1333},0).wait(1).to({scaleX:0.3529,scaleY:0.3529,x:172.1358,y:594.0584},0).wait(1).to({scaleX:0.3533,scaleY:0.3533,x:176.8697,y:593.9835},0).wait(1).to({scaleX:0.3536,scaleY:0.3536,x:181.6037,y:593.9086},0).wait(1).to({scaleX:0.3539,scaleY:0.3539,x:186.3376,y:593.8337},0).wait(1).to({scaleX:0.3543,scaleY:0.3543,x:191.0715,y:593.7587},0).wait(1).to({scaleX:0.3546,scaleY:0.3546,x:195.8054,y:593.6838},0).wait(1).to({scaleX:0.355,scaleY:0.355,x:200.5393,y:593.6089},0).wait(1).to({scaleX:0.3553,scaleY:0.3553,x:205.2733,y:593.534},0).wait(1).to({scaleX:0.3556,scaleY:0.3556,x:210.0072,y:593.4591},0).wait(1).to({scaleX:0.356,scaleY:0.356,x:214.7411,y:593.3842},0).wait(1).to({scaleX:0.3563,scaleY:0.3563,x:219.475,y:593.3092},0).wait(1).to({scaleX:0.3567,scaleY:0.3567,x:224.2089,y:593.2343},0).wait(1).to({scaleX:0.357,scaleY:0.357,x:228.9429,y:593.1594},0).wait(1).to({scaleX:0.3573,scaleY:0.3573,x:233.6768,y:593.0845},0).wait(1).to({scaleX:0.3577,scaleY:0.3577,x:238.4107,y:593.0096},0).wait(1).to({scaleX:0.358,scaleY:0.358,x:243.1446,y:592.9347},0).wait(1).to({scaleX:0.3584,scaleY:0.3584,x:247.8786,y:592.8598},0).wait(1).to({scaleX:0.3587,scaleY:0.3587,x:252.6125,y:592.7848},0).wait(1).to({scaleX:0.359,scaleY:0.359,x:257.3464,y:592.7099},0).wait(1).to({scaleX:0.3594,scaleY:0.3594,x:262.0803,y:592.635},0).wait(1).to({scaleX:0.3597,scaleY:0.3597,x:266.8142,y:592.5601},0).wait(1).to({scaleX:0.3601,scaleY:0.3601,x:271.5482,y:592.4852},0).wait(1).to({scaleX:0.3604,scaleY:0.3604,x:276.2821,y:592.4103},0).wait(1).to({scaleX:0.3607,scaleY:0.3607,x:281.016,y:592.3353},0).wait(1).to({scaleX:0.3611,scaleY:0.3611,x:285.7499,y:592.2604},0).wait(1).to({scaleX:0.3614,scaleY:0.3614,x:290.4838,y:592.1855},0).wait(1).to({scaleX:0.3618,scaleY:0.3618,x:295.2178,y:592.1106},0).wait(1).to({scaleX:0.3621,scaleY:0.3621,x:299.9517,y:592.0357},0).wait(1).to({scaleX:0.3641,scaleY:0.3641,x:299.9281,y:591.1781},0).wait(1).to({scaleX:0.3662,scaleY:0.3662,x:299.9045,y:590.3204},0).wait(1).to({scaleX:0.3682,scaleY:0.3682,x:299.8809,y:589.4628},0).wait(1).to({scaleX:0.3703,scaleY:0.3703,x:299.8573,y:588.6051},0).wait(1).to({scaleX:0.3723,scaleY:0.3723,x:299.8337,y:587.7475},0).wait(1).to({scaleX:0.3744,scaleY:0.3744,x:299.81,y:586.8899},0).wait(1).to({scaleX:0.3764,scaleY:0.3764,x:299.7864,y:586.0322},0).wait(1).to({scaleX:0.3784,scaleY:0.3784,x:299.7628,y:585.1746},0).wait(1).to({scaleX:0.3805,scaleY:0.3805,x:299.7392,y:584.317},0).wait(1).to({scaleX:0.3825,scaleY:0.3825,x:299.7156,y:583.4593},0).wait(1).to({scaleX:0.3846,scaleY:0.3846,x:299.692,y:582.6017},0).wait(1).to({scaleX:0.3866,scaleY:0.3866,x:299.6684,y:581.7441},0).wait(1).to({scaleX:0.3887,scaleY:0.3887,x:299.6448,y:580.8864},0).wait(1).to({scaleX:0.3907,scaleY:0.3907,x:299.6212,y:580.0288},0).wait(1).to({scaleX:0.3927,scaleY:0.3927,x:299.5976,y:579.1711},0).wait(1).to({scaleX:0.3948,scaleY:0.3948,x:299.574,y:578.3135},0).wait(1).to({scaleX:0.3968,scaleY:0.3968,x:299.5504,y:577.4559},0).wait(1).to({scaleX:0.3989,scaleY:0.3989,x:299.5268,y:576.5982},0).wait(1).to({scaleX:0.4009,scaleY:0.4009,x:299.5031,y:575.7406},0).wait(1).to({scaleX:0.403,scaleY:0.403,x:299.4795,y:574.883},0).wait(1).to({scaleX:0.405,scaleY:0.405,x:299.4559,y:574.0253},0).wait(1).to({scaleX:0.407,scaleY:0.407,x:299.4323,y:573.1677},0).wait(1).to({scaleX:0.4091,scaleY:0.4091,x:299.4087,y:572.31},0).wait(1).to({scaleX:0.4111,scaleY:0.4111,x:299.3851,y:571.4524},0).wait(1).to({scaleX:0.4132,scaleY:0.4132,x:299.3615,y:570.5948},0).wait(1).to({scaleX:0.4152,scaleY:0.4152,x:299.3379,y:569.7371},0).wait(1).to({scaleX:0.4173,scaleY:0.4173,x:299.3143,y:568.8795},0).wait(1).to({scaleX:0.4193,scaleY:0.4193,x:299.2907,y:568.0219},0).wait(1).to({scaleX:0.4213,scaleY:0.4213,x:299.2671,y:567.1642},0).wait(1).to({scaleX:0.4234,scaleY:0.4234,x:299.2435,y:566.3066},0).wait(1).to({scaleX:0.4254,scaleY:0.4254,x:299.2199,y:565.449},0).wait(1).to({scaleX:0.4275,scaleY:0.4275,x:299.1963,y:564.5913},0).wait(1).to({scaleX:0.4295,scaleY:0.4295,x:299.1726,y:563.7337},0).wait(1).to({scaleX:0.4316,scaleY:0.4316,x:299.149,y:562.876},0).wait(1).to({scaleX:0.4336,scaleY:0.4336,x:299.1254,y:562.0184},0).wait(1).to({scaleX:0.4356,scaleY:0.4356,x:299.1018,y:561.1608},0).wait(1).to({scaleX:0.4377,scaleY:0.4377,x:299.0782,y:560.3031},0).wait(1).to({scaleX:0.4397,scaleY:0.4397,x:299.0546,y:559.4455},0).wait(1).to({scaleX:0.4418,scaleY:0.4418,x:299.031,y:558.5879},0).wait(1).to({scaleX:0.4438,scaleY:0.4438,x:299.0074,y:557.7302},0).wait(1).to({scaleX:0.4459,scaleY:0.4459,x:298.9838,y:556.8726},0).wait(1).to({scaleX:0.4479,scaleY:0.4479,x:298.9602,y:556.015},0).wait(1).to({scaleX:0.4499,scaleY:0.4499,x:298.9366,y:555.1573},0).wait(1).to({scaleX:0.452,scaleY:0.452,x:298.913,y:554.2997},0).wait(1).to({scaleX:0.454,scaleY:0.454,x:298.8894,y:553.442},0).wait(1).to({scaleX:0.4561,scaleY:0.4561,x:298.8658,y:552.5844},0).wait(1).to({scaleX:0.4581,scaleY:0.4581,x:298.8421,y:551.7268},0).wait(1).to({scaleX:0.4602,scaleY:0.4602,x:298.8185,y:550.8691},0).wait(1).to({scaleX:0.4622,scaleY:0.4622,x:298.7949,y:550.0115},0).wait(1).to({scaleX:0.4642,scaleY:0.4642,x:298.7713,y:549.1539},0).wait(1).to({scaleX:0.4663,scaleY:0.4663,x:298.7477,y:548.2962},0).wait(1).to({scaleX:0.4683,scaleY:0.4683,x:298.7241,y:547.4386},0).wait(1).to({scaleX:0.4704,scaleY:0.4704,x:298.7005,y:546.581},0).wait(1).to({scaleX:0.4724,scaleY:0.4724,x:298.6769,y:545.7233},0).wait(1).to({scaleX:0.4745,scaleY:0.4745,x:298.6533,y:544.8657},0).wait(1).to({scaleX:0.4765,scaleY:0.4765,x:298.6297,y:544.008},0).wait(1).to({scaleX:0.4785,scaleY:0.4785,x:298.6061,y:543.1504},0).wait(1).to({scaleX:0.4806,scaleY:0.4806,x:298.5825,y:542.2928},0).wait(1).to({scaleX:0.4826,scaleY:0.4826,x:298.5589,y:541.4351},0).wait(1).to({scaleX:0.4847,scaleY:0.4847,x:298.5352,y:540.5775},0).wait(1).to({scaleX:0.4867,scaleY:0.4867,x:298.5116,y:539.7199},0).wait(1).to({scaleX:0.4888,scaleY:0.4888,x:298.488,y:538.8622},0).wait(1).to({scaleX:0.4908,scaleY:0.4908,x:298.4644,y:538.0046},0).wait(1).to({scaleX:0.4928,scaleY:0.4928,x:298.4408,y:537.147},0).wait(1).to({scaleX:0.4949,scaleY:0.4949,x:298.4172,y:536.2893},0).wait(1).to({scaleX:0.4969,scaleY:0.4969,x:298.3936,y:535.4317},0).wait(1).to({scaleX:0.499,scaleY:0.499,x:298.37,y:534.574},0).wait(1).to({scaleX:0.501,scaleY:0.501,x:298.3464,y:533.7164},0).wait(1).to({scaleX:0.5031,scaleY:0.5031,x:298.3228,y:532.8588},0).wait(1).to({scaleX:0.5051,scaleY:0.5051,x:298.2992,y:532.0011},0).wait(1).to({scaleX:0.5071,scaleY:0.5071,x:298.2756,y:531.1435},0).wait(1).to({scaleX:0.5092,scaleY:0.5092,x:298.252,y:530.2859},0).wait(1).to({scaleX:0.5112,scaleY:0.5112,x:297.2211,y:529.6774},0).wait(1).to({scaleX:0.5131,scaleY:0.5131,x:296.1901,y:529.069},0).wait(1).to({scaleX:0.5151,scaleY:0.5151,x:295.1592,y:528.4606},0).wait(1).to({scaleX:0.5171,scaleY:0.5171,x:294.1283,y:527.8522},0).wait(1).to({scaleX:0.5191,scaleY:0.5191,x:293.0974,y:527.2438},0).wait(1).to({scaleX:0.521,scaleY:0.521,x:292.0665,y:526.6354},0).wait(1).to({scaleX:0.523,scaleY:0.523,x:291.0356,y:526.027},0).wait(1).to({scaleX:0.525,scaleY:0.525,x:290.0047,y:525.4185},0).wait(1).to({scaleX:0.527,scaleY:0.527,x:288.9738,y:524.8101},0).wait(1).to({scaleX:0.5289,scaleY:0.5289,x:287.9429,y:524.2017},0).wait(1).to({scaleX:0.5309,scaleY:0.5309,x:286.912,y:523.5933},0).wait(1).to({scaleX:0.5329,scaleY:0.5329,x:285.8811,y:522.9849},0).wait(1).to({scaleX:0.5348,scaleY:0.5348,x:284.8502,y:522.3765},0).wait(1).to({scaleX:0.5368,scaleY:0.5368,x:283.8193,y:521.7681},0).wait(1).to({scaleX:0.5388,scaleY:0.5388,x:282.7883,y:521.1597},0).wait(1).to({scaleX:0.5408,scaleY:0.5408,x:281.7574,y:520.5512},0).wait(1).to({scaleX:0.5427,scaleY:0.5427,x:280.7265,y:519.9428},0).wait(1).to({scaleX:0.5447,scaleY:0.5447,x:279.6956,y:519.3344},0).wait(1).to({scaleX:0.5467,scaleY:0.5467,x:278.6647,y:518.726},0).wait(1).to({scaleX:0.5487,scaleY:0.5487,x:277.6338,y:518.1176},0).wait(1).to({scaleX:0.5506,scaleY:0.5506,x:276.6029,y:517.5092},0).wait(1).to({scaleX:0.5526,scaleY:0.5526,x:275.572,y:516.9008},0).wait(1).to({scaleX:0.5546,scaleY:0.5546,x:274.5411,y:516.2923},0).wait(1).to({scaleX:0.5566,scaleY:0.5566,x:273.5102,y:515.6839},0).wait(1).to({scaleX:0.5585,scaleY:0.5585,x:272.4793,y:515.0755},0).wait(1).to({scaleX:0.5605,scaleY:0.5605,x:271.4484,y:514.4671},0).wait(1).to({scaleX:0.5625,scaleY:0.5625,x:270.4175,y:513.8587},0).wait(1).to({scaleX:0.5645,scaleY:0.5645,x:269.3865,y:513.2503},0).wait(1).to({scaleX:0.5664,scaleY:0.5664,x:268.3556,y:512.6419},0).wait(1).to({scaleX:0.5684,scaleY:0.5684,x:267.3247,y:512.0334},0).wait(1).to({scaleX:0.5704,scaleY:0.5704,x:266.2938,y:511.425},0).wait(1).to({scaleX:0.5724,scaleY:0.5724,x:265.2629,y:510.8166},0).wait(1).to({scaleX:0.5743,scaleY:0.5743,x:264.232,y:510.2082},0).wait(1).to({scaleX:0.5763,scaleY:0.5763,x:263.2011,y:509.5998},0).wait(1).to({scaleX:0.5783,scaleY:0.5783,x:262.1702,y:508.9914},0).wait(1).to({scaleX:0.5803,scaleY:0.5803,x:261.1393,y:508.383},0).wait(1).to({scaleX:0.5822,scaleY:0.5822,x:260.1084,y:507.7745},0).wait(1).to({scaleX:0.5842,scaleY:0.5842,x:259.0775,y:507.1661},0).wait(1).to({scaleX:0.5862,scaleY:0.5862,x:258.0466,y:506.5577},0).wait(1).to({scaleX:0.5881,scaleY:0.5881,x:257.0157,y:505.9493},0).wait(1).to({scaleX:0.5901,scaleY:0.5901,x:255.9847,y:505.3409},0).wait(1).to({scaleX:0.5921,scaleY:0.5921,x:254.9538,y:504.7325},0).wait(1).to({scaleX:0.5941,scaleY:0.5941,x:253.9229,y:504.1241},0).wait(1).to({scaleX:0.596,scaleY:0.596,x:252.892,y:503.5156},0).wait(1).to({scaleX:0.598,scaleY:0.598,x:251.8611,y:502.9072},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:250.8302,y:502.2988},0).wait(1).to({scaleX:0.602,scaleY:0.602,x:249.7993,y:501.6904},0).wait(1).to({scaleX:0.6039,scaleY:0.6039,x:248.7684,y:501.082},0).wait(1).to({scaleX:0.6059,scaleY:0.6059,x:247.7375,y:500.4736},0).wait(1).to({scaleX:0.6079,scaleY:0.6079,x:246.7066,y:499.8652},0).wait(1).to({scaleX:0.6099,scaleY:0.6099,x:245.6757,y:499.2567},0).wait(1).to({scaleX:0.6118,scaleY:0.6118,x:244.6448,y:498.6483},0).wait(1).to({scaleX:0.6138,scaleY:0.6138,x:243.6139,y:498.0399},0).wait(1).to({scaleX:0.6158,scaleY:0.6158,x:242.583,y:497.4315},0).wait(1).to({scaleX:0.6178,scaleY:0.6178,x:241.552,y:496.8231},0).wait(1).to({scaleX:0.6197,scaleY:0.6197,x:240.5211,y:496.2147},0).wait(1).to({scaleX:0.6217,scaleY:0.6217,x:239.4902,y:495.6063},0).wait(1).to({scaleX:0.6237,scaleY:0.6237,x:238.4593,y:494.9978},0).wait(1).to({scaleX:0.6257,scaleY:0.6257,x:237.4284,y:494.3894},0).wait(1).to({scaleX:0.6276,scaleY:0.6276,x:236.3975,y:493.781},0).wait(1).to({scaleX:0.6296,scaleY:0.6296,x:235.3666,y:493.1726},0).wait(1).to({scaleX:0.6316,scaleY:0.6316,x:234.3357,y:492.5642},0).wait(1));

	// playbutton_obj_
	this.playbutton = new lib.Scene_1_playbutton();
	this.playbutton.name = "playbutton";
	this.playbutton.setTransform(963.55,642.75,2.1606,2.1606,0,0,0,1118.2,680.1);
	this.playbutton.depth = 0;
	this.playbutton.isAttachedToCamera = 0
	this.playbutton.isAttachedToMask = 0
	this.playbutton.layerDepth = 0
	this.playbutton.layerIndex = 0
	this.playbutton.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.playbutton).wait(694).to({regX:439.1,regY:671.1,scaleX:1.5884,scaleY:1.5884,y:642.7},0).wait(2));

	// start_obj_
	this.start = new lib.Scene_1_start();
	this.start.name = "start";
	this.start.setTransform(970.9,548.15,2.1606,2.1606,0,0,0,1121.6,636.3);
	this.start.depth = 0;
	this.start.isAttachedToCamera = 0
	this.start.isAttachedToMask = 0
	this.start.layerDepth = 0
	this.start.layerIndex = 1
	this.start.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.start).wait(694).to({regX:443.7,regY:611.6,scaleX:1.5884,scaleY:1.5884,x:970.85,y:548.2},0).wait(2));

	// dark_obj_
	this.dark = new lib.Scene_1_dark();
	this.dark.name = "dark";
	this.dark.setTransform(0.1,0,2.1606,2.1606,0,0,0,672.3,382.6);
	this.dark.depth = 0;
	this.dark.isAttachedToCamera = 0
	this.dark.isAttachedToMask = 0
	this.dark.layerDepth = 0
	this.dark.layerIndex = 2
	this.dark.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.dark).wait(1).to({_off:true},694).wait(1));

	// shaddows_obj_
	this.shaddows = new lib.Scene_1_shaddows();
	this.shaddows.name = "shaddows";
	this.shaddows.setTransform(0.1,0,2.1606,2.1606,0,0,0,672.3,382.6);
	this.shaddows.depth = 0;
	this.shaddows.isAttachedToCamera = 0
	this.shaddows.isAttachedToMask = 0
	this.shaddows.layerDepth = 0
	this.shaddows.layerIndex = 3
	this.shaddows.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.shaddows).wait(366).to({regX:-337.4,regY:274.4,scaleX:4.9476,scaleY:4.9476,x:-0.25,y:0.25},0).wait(203).to({regX:57.6,regY:448.9,scaleX:2.6426,scaleY:2.6426,x:0.15,y:0.15},0).wait(50).to({regX:-9,regY:369.3,scaleX:2.0809,scaleY:2.0809,x:-0.05,y:0.05},0).to({_off:true},76).wait(1));

	// animation_obj_
	this.animation = new lib.Scene_1_animation();
	this.animation.name = "animation";
	this.animation.setTransform(293.95,362.1,2.1606,2.1606,0,0,0,808.3,550.2);
	this.animation.depth = 0;
	this.animation.isAttachedToCamera = 0
	this.animation.isAttachedToMask = 0
	this.animation.layerDepth = 0
	this.animation.layerIndex = 4
	this.animation.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.animation).wait(105).to({regX:674.4,regY:273.1,scaleX:1.7804,scaleY:1.7804,x:294.05},0).wait(64).to({regX:135.6,regY:452.7,scaleX:2.0081,scaleY:2.0081,x:293.95,y:362.2},0).wait(27).to({regX:184.7,regY:478.5,scaleX:3.0396,scaleY:3.0396,y:362},0).wait(19).to({regX:97.4,regY:438.3,scaleX:3.8788,scaleY:3.8788,x:294.05,y:362.3},0).wait(71).to({regX:-111,regY:340.4,scaleX:4.9799,scaleY:4.9799,y:362.05},0).wait(31).to({regX:-139.1,regY:341.4,x:293.8,y:361.8},0).wait(69).to({regX:-277.6,regY:348.3,scaleX:4.9183,scaleY:4.9183,x:293.6,y:362.25},0).wait(181).to({regX:170.3,regY:587.6,scaleX:2.6713,scaleY:2.6713,x:294.1,y:361.95},0).wait(29).to({regX:149,regY:562.9,scaleX:2.3064,scaleY:2.3064,x:293.95,y:362.25},0).wait(23).to({regX:132.3,regY:543.3,scaleX:2.0809,scaleY:2.0809,x:294,y:362.1},0).wait(2).to({regX:130.9,regY:541.5,scaleX:2.0633,scaleY:2.0633,y:362.05},0).to({_off:true},74).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-62.6,360.2,1342.6,422.59999999999997);
// library properties:
lib.properties = {
	id: 'C3BE14533565624190C091EDCA544C6C',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/zehava_atlas_1.png?1598116638588", id:"zehava_atlas_1"},
		{src:"sounds/הבובהזהבהAudioTrimmercom.mp3?1598116639776", id:"הבובהזהבהAudioTrimmercom"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['C3BE14533565624190C091EDCA544C6C'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}

p._getProjectionMatrix = function(container, totalDepth) {	var focalLength = 528.25;
	var projectionCenter = { x : lib.properties.width/2, y : lib.properties.height/2 };
	var scale = (totalDepth + focalLength)/focalLength;
	var scaleMat = new createjs.Matrix2D;
	scaleMat.a = 1/scale;
	scaleMat.d = 1/scale;
	var projMat = new createjs.Matrix2D;
	projMat.tx = -projectionCenter.x;
	projMat.ty = -projectionCenter.y;
	projMat = projMat.prependMatrix(scaleMat);
	projMat.tx += projectionCenter.x;
	projMat.ty += projectionCenter.y;
	return projMat;
}
p._handleTick = function(event) {
	var cameraInstance = exportRoot.___camera___instance;
	if(cameraInstance !== undefined && cameraInstance.pinToObject !== undefined)
	{
		cameraInstance.x = cameraInstance.pinToObject.x + cameraInstance.pinToObject.pinOffsetX;
		cameraInstance.y = cameraInstance.pinToObject.y + cameraInstance.pinToObject.pinOffsetY;
		if(cameraInstance.pinToObject.parent !== undefined && cameraInstance.pinToObject.parent.depth !== undefined)
		cameraInstance.depth = cameraInstance.pinToObject.parent.depth + cameraInstance.pinToObject.pinOffsetZ;
	}
	stage._applyLayerZDepth(exportRoot);
}
p._applyLayerZDepth = function(parent)
{
	var cameraInstance = parent.___camera___instance;
	var focalLength = 528.25;
	var projectionCenter = { 'x' : 0, 'y' : 0};
	if(parent === exportRoot)
	{
		var stageCenter = { 'x' : lib.properties.width/2, 'y' : lib.properties.height/2 };
		projectionCenter.x = stageCenter.x;
		projectionCenter.y = stageCenter.y;
	}
	for(child in parent.children)
	{
		var layerObj = parent.children[child];
		if(layerObj == cameraInstance)
			continue;
		stage._applyLayerZDepth(layerObj, cameraInstance);
		if(layerObj.layerDepth === undefined)
			continue;
		if(layerObj.currentFrame != layerObj.parent.currentFrame)
		{
			layerObj.gotoAndPlay(layerObj.parent.currentFrame);
		}
		var matToApply = new createjs.Matrix2D;
		var cameraMat = new createjs.Matrix2D;
		var totalDepth = layerObj.layerDepth ? layerObj.layerDepth : 0;
		var cameraDepth = 0;
		if(cameraInstance && !layerObj.isAttachedToCamera)
		{
			var mat = cameraInstance.getMatrix();
			mat.tx -= projectionCenter.x;
			mat.ty -= projectionCenter.y;
			cameraMat = mat.invert();
			cameraMat.prependTransform(projectionCenter.x, projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			cameraMat.appendTransform(-projectionCenter.x, -projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			if(cameraInstance.depth)
				cameraDepth = cameraInstance.depth;
		}
		if(layerObj.depth)
		{
			totalDepth = layerObj.depth;
		}
		//Offset by camera depth
		totalDepth -= cameraDepth;
		if(totalDepth < -focalLength)
		{
			matToApply.a = 0;
			matToApply.d = 0;
		}
		else
		{
			if(layerObj.layerDepth)
			{
				var sizeLockedMat = stage._getProjectionMatrix(parent, layerObj.layerDepth);
				if(sizeLockedMat)
				{
					sizeLockedMat.invert();
					matToApply.prependMatrix(sizeLockedMat);
				}
			}
			matToApply.prependMatrix(cameraMat);
			var projMat = stage._getProjectionMatrix(parent, totalDepth);
			if(projMat)
			{
				matToApply.prependMatrix(projMat);
			}
		}
		layerObj.transformMatrix = matToApply;
	}
}
an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}

// Virtual camera API : 

an.VirtualCamera = new function() {
var _camera = new Object();
function VC(timeline) {
	this.timeline = timeline;
	this.camera = timeline.___camera___instance;
	this.centerX = lib.properties.width / 2;
	this.centerY = lib.properties.height / 2;
	this.camAxisX = this.camera.x;
	this.camAxisY = this.camera.y;
	if(timeline.___camera___instance == null || timeline.___camera___instance == undefined ) {
		timeline.___camera___instance = new cjs.MovieClip();
		timeline.___camera___instance.visible = false;
		timeline.___camera___instance.parent = timeline;
		timeline.___camera___instance.setTransform(this.centerX, this.centerY);
	}
	this.camera = timeline.___camera___instance;
}

VC.prototype.moveBy = function(x, y, z) {
z = typeof z !== 'undefined' ? z : 0;
	var position = this.___getCamPosition___();
	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	this.camAxisX = this.camAxisX - x;
	this.camAxisY = this.camAxisY - y;
	var posX = position.x + offX;
	var posY = position.y + offY;
	this.camera.x = this.centerX - posX;
	this.camera.y = this.centerY - posY;
	this.camera.depth += z;
};

VC.prototype.setPosition = function(x, y, z) {
	z = typeof z !== 'undefined' ? z : 0;

	const MAX_X = 10000;
	const MIN_X = -10000;
	const MAX_Y = 10000;
	const MIN_Y = -10000;
	const MAX_Z = 10000;
	const MIN_Z = -5000;

	if(x > MAX_X)
	  x = MAX_X;
	else if(x < MIN_X)
	  x = MIN_X;
	if(y > MAX_Y)
	  y = MAX_Y;
	else if(y < MIN_Y)
	  y = MIN_Y;
	if(z > MAX_Z)
	  z = MAX_Z;
	else if(z < MIN_Z)
	  z = MIN_Z;

	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	
	this.camAxisX = this.centerX - x;
	this.camAxisY = this.centerY - y;
	this.camera.x = this.centerX - offX;
	this.camera.y = this.centerY - offY;
	this.camera.depth = z;
};

VC.prototype.getPosition = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camAxisX;
	loc['y'] = this.centerY - this.camAxisY;
	loc['z'] = this.camera.depth;
	return loc;
};

VC.prototype.resetPosition = function() {
	this.setPosition(0, 0);
};

VC.prototype.zoomBy = function(zoom) {
	this.setZoom( (this.getZoom() * zoom) / 100);
};

VC.prototype.setZoom = function(zoom) {
	const MAX_zoom = 10000;
	const MIN_zoom = 1;
	if(zoom > MAX_zoom)
	zoom = MAX_zoom;
	else if(zoom < MIN_zoom)
	zoom = MIN_zoom;
	this.camera.scaleX = 100 / zoom;
	this.camera.scaleY = 100 / zoom;
};

VC.prototype.getZoom = function() {
	return 100 / this.camera.scaleX;
};

VC.prototype.resetZoom = function() {
	this.setZoom(100);
};

VC.prototype.rotateBy = function(angle) {
	this.setRotation( this.getRotation() + angle );
};

VC.prototype.setRotation = function(angle) {
	const MAX_angle = 180;
	const MIN_angle = -179;
	if(angle > MAX_angle)
		angle = MAX_angle;
	else if(angle < MIN_angle)
		angle = MIN_angle;
	this.camera.rotation = -angle;
};

VC.prototype.getRotation = function() {
	return -this.camera.rotation;
};

VC.prototype.resetRotation = function() {
	this.setRotation(0);
};

VC.prototype.reset = function() {
	this.resetPosition();
	this.resetZoom();
	this.resetRotation();
	this.unpinCamera();
};
VC.prototype.setZDepth = function(zDepth) {
	const MAX_zDepth = 10000;
	const MIN_zDepth = -5000;
	if(zDepth > MAX_zDepth)
		zDepth = MAX_zDepth;
	else if(zDepth < MIN_zDepth)
		zDepth = MIN_zDepth;
	this.camera.depth = zDepth;
}
VC.prototype.getZDepth = function() {
	return this.camera.depth;
}
VC.prototype.resetZDepth = function() {
	this.camera.depth = 0;
}

VC.prototype.pinCameraToObject = function(obj, offsetX, offsetY, offsetZ) {

	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;

	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;

	offsetZ = typeof offsetZ !== 'undefined' ? offsetZ : 0;
	if(obj === undefined)
		return;
	this.camera.pinToObject = obj;
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
};

VC.prototype.setPinOffset = function(offsetX, offsetY, offsetZ) {
	if(this.camera.pinToObject != undefined) {
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
	}
};

VC.prototype.unpinCamera = function() {
	this.camera.pinToObject = undefined;
};
VC.prototype.___getCamPosition___ = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camera.x;
	loc['y'] = this.centerY - this.camera.y;
	loc['z'] = this.depth;
	return loc;
};

this.getCamera = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	if(_camera[timeline] == undefined)
	_camera[timeline] = new VC(timeline);
	return _camera[timeline];
}

this.getCameraAsMovieClip = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	return this.getCamera(timeline).camera;
}
}


// Layer depth API : 

an.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;