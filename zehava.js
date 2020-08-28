(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"zehava_atlas_1", frames: [[35,17,9,7],[43,37,8,8],[43,59,10,3],[18,39,14,14],[54,49,5,8],[35,0,13,15],[0,39,16,18],[43,55,6,2],[21,0,12,24],[43,47,9,6],[21,26,31,9],[50,0,9,21],[34,37,7,23],[54,23,7,24],[0,0,9,37],[11,0,8,37]]}
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



(lib.Path_1_15 = function() {
	this.initialize(ss["zehava_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Path_1_17 = function() {
	this.initialize(ss["zehava_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Path_1_19 = function() {
	this.initialize(ss["zehava_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Path_1_8 = function() {
	this.initialize(ss["zehava_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Path_2_11 = function() {
	this.initialize(ss["zehava_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Path_3_9 = function() {
	this.initialize(ss["zehava_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Path_47 = function() {
	this.initialize(ss["zehava_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Path_4_2 = function() {
	this.initialize(ss["zehava_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Path_54 = function() {
	this.initialize(ss["zehava_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Path_57 = function() {
	this.initialize(ss["zehava_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Path_5_3 = function() {
	this.initialize(ss["zehava_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Path_6_5 = function() {
	this.initialize(ss["zehava_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Path_7_5 = function() {
	this.initialize(ss["zehava_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Path_8_3 = function() {
	this.initialize(ss["zehava_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Path_9_4 = function() {
	this.initialize(ss["zehava_atlas_1"]);
	this.gotoAndStop(15);
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
	this.shape.setTransform(84.4299,84.4537,0.8432,0.8609);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3C393E").s().p("AgJAjQgQgEgHgNQgHgOAFgOQAEgOAOgIQANgHAOAEQAOAFAHANQAIAOgEAOQgFAOgNAIQgJAEgIAAQgFAAgFgCg");
	this.shape_1.setTransform(85.5447,78.5049,0.8432,0.8609);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3C393E").s().p("AgIAfQgNgEgGgMQgGgLADgMQAEgNAMgGQAMgHALAEQANAEAGAMQAHALgEAMQgEANgMAGQgHAEgIAAIgIgBg");
	this.shape_2.setTransform(95.062,75.5343,0.8432,0.8609);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3C393E").s().p("AgIAfQgNgEgGgMQgGgLADgMQAEgNAMgGQALgGAMADQANAEAGAMQAHALgEAMQgEANgMAGQgHAEgIAAIgIgBg");
	this.shape_3.setTransform(79.2093,70.6887,0.8432,0.8609);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgGAYQgZgIAIgXQAHgYAXAIQAZAHgHAXQgGATgQAAIgJgCgAgIgEIgBAEQgDAKAJADQAJADADgLIABgEQAEgKgKgDIgEgBQgFAAgDAJg");
	this.shape_4.setTransform(85.0898,106.1737,0.8424,0.8604);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUASIAOguIAOAEIgKAiIAXAHIgEAMg");
	this.shape_5.setTransform(80.7107,104.9643,0.8424,0.8604);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgUASIAOguIAOAEIgJAiIAWAHIgEAMg");
	this.shape_6.setTransform(76.9833,103.8242,0.8424,0.8604);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgZASIANguIAnALIgEAMIgYgIIgCAHIAVAGIgEAKIgUgGIgBAHIAYAHIgEALg");
	this.shape_7.setTransform(73.4664,102.6196,0.8424,0.8604);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AABAaIAGgSIgQgFIgFASIgPgEIAPguIAOAEIgFARIAPAFIAFgRIAPAEIgOAug");
	this.shape_8.setTransform(69.0651,101.2859,0.8424,0.8604);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2FCAFE").s().p("AiYAEIAbhbIEWBUIgbBbg");
	this.shape_9.setTransform(78.0821,103.8896,0.8432,0.8609);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00C077").s().p("AjqBWIBXkeIF9BzIhVEeg");
	this.shape_10.setTransform(76.9437,107.8069,0.8432,0.8609);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00C077").s().p("AjpBWIBVkdIF/ByIhXEdg");
	this.shape_11.setTransform(85.5447,78.5132,0.8432,0.8609);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F13536").s().p("AgKAkQgPgEgHgOQgIgOAFgOQAEgPAOgHQAOgIAOAFQAPAEAHAOQAHAOgEAOQgFAPgNAHQgJAFgJAAQgEAAgGgCg");
	this.shape_12.setTransform(84.4094,52.9431,0.8432,0.8609);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2FCAFE").s().p("AghA9IAmiCIAdAJIgmCCg");
	this.shape_13.setTransform(82.1929,60.4764,0.8432,0.8609);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F13536").s().p("AgKAkQgPgEgHgOQgIgOAFgOQAEgPAOgHQAOgIAOAFQAPAEAHAOQAHAOgEAOQgFAPgNAHQgJAFgJAAQgEAAgGgCg");
	this.shape_14.setTransform(100.2622,57.8074,0.8432,0.8609);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2FCAFE").s().p("AghA9IAmiCIAdAJIgmCCg");
	this.shape_15.setTransform(98.0456,65.3407,0.8432,0.8609);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F7C42B").s().p("AgXBBQgPgFgHgNQgIgOAFgPIAThBQAFgPANgHQANgIAPAFIAiAKIgpCJg");
	this.shape_16.setTransform(68.63,72.8014,0.8432,0.8609);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F7C42B").s().p("AgQBJIgigKIApiJIAhAKQAPAEAIAOQAHAOgFAOIgTBCQgFAPgNAHQgJAFgIAAQgFAAgGgCg");
	this.shape_17.setTransform(102.7998,82.7184,0.8432,0.8609);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2FCAFE").s().p("AhCAIIAMggQAVgeAyAPQAxAOABAkQAAATgKAPg");
	this.shape_18.setTransform(74.0346,143.5147,0.8432,0.8609);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2FCAFE").s().p("AhCAIIALggQAVgeAxAOQAyAPACAlQAAASgJAQg");
	this.shape_19.setTransform(59.6375,139.0496,0.8432,0.8609);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F7C42B").s().p("AhSBxIBLj8IBaAbIhLD8g");
	this.shape_20.setTransform(77.8291,131.526,0.8432,0.8609);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F7C42B").s().p("AhSBxIBLj8IBaAbIhLD8g");
	this.shape_21.setTransform(63.431,127.1137,0.8432,0.8609);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#4A4A4A").s().p("AguA2IAlh8IA4ARIglB8g");
	this.shape_22.setTransform(61.4283,97.1958,0.8432,0.8609);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#4A4A4A").s().p("AguA2IAlh8IA4ARIglB8g");
	this.shape_23.setTransform(95.6213,107.6778,0.8432,0.8609);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#4A4A4A").s().p("Ag1AkIAchfIBPAYIgcBeg");
	this.shape_24.setTransform(81.3075,92.9556,0.8432,0.8609);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2FCAFE").s().p("AAUA2QAHgLACgNQAEgZgZgGQgXgIgMAWIgHAYIgngMQgGgTAGgSQAJgdAbgNQAcgOAeAJQAeAJAQAbQAPAagIAcQgFATgQANg");
	this.shape_25.setTransform(45.971,116.3802,0.8432,0.8609);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F7C42B").s().p("Ag2CKQgmgCgcgfQAFgyASg2QAlhsA8gXQAagKAfAEQAVACAsAOIgvBmQgKgIgSAPQgiAdghB0QgMAEgPAAIgHAAg");
	this.shape_26.setTransform(53.3333,102.8016,0.8432,0.8609);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#2FCAFE").s().p("AANA0QAHgLABgNQADgagYgGQgYgHgLAWIgGAYIgggKQgGgUAGgRQAIgdAcgNQAcgOAdAJQAfAJAQAbQAPAagIAcQgGAUgPAMg");
	this.shape_27.setTransform(97.772,132.2216,0.8432,0.8609);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F7C42B").s().p("AgwCWIgagVQAjh0gMgrQgDgOgIgFIgIgCIARhvQArAMAUAKQAbAOAQAXQAnA0geBuQgOA3gXAtQgOAEgNAAQgZAAgVgNg");
	this.shape_28.setTransform(100.9673,116.4455,0.8432,0.8609);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#FEFFFB","#F9F9F6","#EAE8E7","#E0DCDD"],[0,0.329,0.773,1],13.5,-44.8,-51.5,172.2).s().p("AprIBIGA0CINXEBImAUBg");
	this.shape_29.setTransform(79.5525,95.1124,0.8424,0.8604);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#59544F").s().p("AqBITIGO0vIN1EKImNUug");
	this.shape_30.setTransform(79.5314,95.1124,0.8424,0.8604);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#D8D8D8").s().p("AqBITIGO0vIN1EKImNUug");
	this.shape_31.setTransform(79.5314,95.1124,0.8424,0.8604);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#2FCAFE").s().p("AtOJuIHi5GIS7FrIniZGg");
	this.shape_32.setTransform(79.5314,95.1339,0.8424,0.8604);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#B5B5B5").s().p("AtcJ4IHp5hITQFxInqZig");
	this.shape_33.setTransform(79.5314,95.1339,0.8424,0.8604);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#FEFFFB","#FCFDF9","#F5F5F2","#EAE7E7","#E0DCDD"],[0,0.459,0.702,0.894,1],53.9,59.9,-116.1,-129.1).s().p("AtcJ4IHp5hITQFxInqZig");
	this.shape_34.setTransform(79.5314,95.1339,0.8424,0.8604);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFE228").s().p("AvLKwIIa8FIV+GmIobcFg");
	this.shape_35.setTransform(79.5314,95.1339,0.8424,0.8604);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#DBCFB8").s().p("AvLKwIIa8FIV+GmIobcFg");
	this.shape_36.setTransform(79.5314,95.1339,0.8424,0.8604);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-2.4,-0.3,163.9,190.9), null);


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
	this.shape_10.setTransform(168.1228,160.9401,1.0568,1.0568);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF66FF").s().p("AgcQRIwZIOIDdyAIs3tDISMiRIIbwTIHyQnISGDAItYMhICvSIg");
	this.shape_11.setTransform(168.071,160.7701,0.8503,0.8503);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8,p:{scaleX:1,scaleY:1,x:114.6456,y:140.1428}},{t:this.shape_7,p:{scaleX:1,scaleY:1,x:147.5386,y:139.1218}},{t:this.shape_6,p:{scaleX:1,scaleY:1,x:180.8391,y:141.6357}},{t:this.shape_5,p:{scaleX:1,scaleY:1,x:214.9402,y:139.9936}},{t:this.shape_4,p:{scaleX:1,scaleY:1,x:98.8928,y:221.2321}},{t:this.shape_3,p:{scaleX:1,scaleY:1,x:137.8444,y:220.2437}},{t:this.shape_2,p:{scaleX:1,scaleY:1,x:172.7395,y:221.2321}},{t:this.shape_1,p:{scaleX:1,scaleY:1,x:200.6158,y:220.0899}},{t:this.shape,p:{scaleX:1,scaleY:1,x:229.9999,y:221.7981}}]}).to({state:[{t:this.shape_10},{t:this.shape_8,p:{scaleX:1.0566,scaleY:1.0566,x:111.6895,y:139.0309}},{t:this.shape_7,p:{scaleX:1.0566,scaleY:1.0566,x:146.4456,y:137.9521}},{t:this.shape_6,p:{scaleX:1.0566,scaleY:1.0566,x:181.6324,y:140.6084}},{t:this.shape_5,p:{scaleX:1.0566,scaleY:1.0566,x:217.6651,y:138.8733}},{t:this.shape_4,p:{scaleX:1.0566,scaleY:1.0566,x:95.0444,y:224.7134}},{t:this.shape_3,p:{scaleX:1.0566,scaleY:1.0566,x:136.2023,y:223.669}},{t:this.shape_2,p:{scaleX:1.0566,scaleY:1.0566,x:173.074,y:224.7134}},{t:this.shape_1,p:{scaleX:1.0566,scaleY:1.0566,x:202.5293,y:223.5065}},{t:this.shape,p:{scaleX:1.0566,scaleY:1.0566,x:233.5778,y:225.3115}}]},1).to({state:[{t:this.shape_11},{t:this.shape_8,p:{scaleX:0.8502,scaleY:0.8502,x:122.6714,y:143.1491}},{t:this.shape_7,p:{scaleX:0.8502,scaleY:0.8502,x:150.6369,y:142.281}},{t:this.shape_6,p:{scaleX:0.8502,scaleY:0.8502,x:178.949,y:144.4183}},{t:this.shape_5,p:{scaleX:0.8502,scaleY:0.8502,x:207.9416,y:143.0222}},{t:this.shape_4,p:{scaleX:0.8502,scaleY:0.8502,x:109.2785,y:212.091}},{t:this.shape_3,p:{scaleX:0.8502,scaleY:0.8502,x:142.395,y:211.2507}},{t:this.shape_2,p:{scaleX:0.8502,scaleY:0.8502,x:172.0627,y:212.091}},{t:this.shape_1,p:{scaleX:0.8502,scaleY:0.8502,x:195.7631,y:211.1199}},{t:this.shape,p:{scaleX:0.8502,scaleY:0.8502,x:220.7454,y:212.5722}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.4,-9,355.09999999999997,340);


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
	this.shape.setTransform(206.8149,180.6808,0.7146,0.7146);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#11003F").s().p("ACQEqQgUgFgbhiQgYhVgDgqQAAgEgFAAQgTAAgkADQgoADgMAEQgMAHgOAiQgIAUgRAvQgiBYglgJQgQgDgLgQQgKgOAAgRQgNg4BOi2QBHikAngvQAXgiAGgGQAUgVAbAAQAsAAAQAJQA3AhAYDcQAOCCAACNQAAAWgNAVQgNAXgWAAIgLgCgAAGhzQgZBGAAAVIBVAEQAAhTgBgQQgDg/gPgLQgNAEgcBKg");
	this.shape_1.setTransform(174.9966,182.4095,0.7146,0.7146);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#11003F").s().p("AizETQgBgJAAgyQAAiBAVibQAfjsA8AAQAdAAAcAbQAbAbAAAdIAAADQAFAjgYCcQgbCnAAAZQAAAGABABQABACAFAAIAGAAIArgKIAvgJQApgIAYACQBMAFg7BjQghAgiIAPQgoAFgeAAQhPAAgQgeg");
	this.shape_2.setTransform(143.9555,179.768,0.7146,0.7146);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#11003F").s().p("AjHE2QgMgFgHgnIABhCQADhfANiKQAPicAHhNQACgMALgGQAKgGAMAAIACABIALADIALABIALgEQApgPBAgFQBRgGBFAoQBKAqgBBCQgEB/hgBRQhFA7hJAMIgDAUQgPBSgQAhQgcA1g5AJQgHACgMAAIgmgBgAgTjZIgJDKIACAAQAaABA3goQBGgzAEhCQACgfg5gMQgcgGgdAAQgRAAgTADg");
	this.shape_3.setTransform(113.2709,180.8494,0.7146,0.7146);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF99").s().p("AAANCIvVKjIFUx2IuxrUISmgeIGNxiIGMRiISmAgIuxLTIFSR2g");
	this.shape_4.setTransform(158.725,151);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCCFF").s().p("AAAPTIx/MYIGO08IxVtSIV1gjIHS0mIHRUmIV1AlIxVNRIGNU8g");
	this.shape_5.setTransform(158.725,151);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF33FF").s().p("AAAJwIreH5ID+tXIrEodIN8gWIEotJIEpNJIN7AXIrDIdID9NXg");
	this.shape_6.setTransform(158.75,151.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3,p:{scaleX:0.7146,scaleY:0.7146,x:113.2709,y:180.8494}},{t:this.shape_2,p:{scaleX:0.7146,scaleY:0.7146,x:143.9555,y:179.768}},{t:this.shape_1,p:{scaleX:0.7146,scaleY:0.7146,x:174.9966,y:182.4095}},{t:this.shape,p:{scaleX:0.7146,scaleY:0.7146,x:206.8149,y:180.6808}}]}).to({state:[{t:this.shape_5},{t:this.shape_3,p:{scaleX:0.8389,scaleY:0.8389,x:105.556,y:186.0646}},{t:this.shape_2,p:{scaleX:0.8389,scaleY:0.8389,x:141.5784,y:184.795}},{t:this.shape_1,p:{scaleX:0.8389,scaleY:0.8389,x:178.0193,y:187.8961}},{t:this.shape,p:{scaleX:0.8389,scaleY:0.8389,x:215.3724,y:185.8667}}]},1).to({state:[{t:this.shape_6},{t:this.shape_3,p:{scaleX:0.535,scaleY:0.535,x:124.6845,y:173.1595}},{t:this.shape_2,p:{scaleX:0.535,scaleY:0.535,x:147.657,y:172.3499}},{t:this.shape_1,p:{scaleX:0.535,scaleY:0.535,x:170.8965,y:174.3276}},{t:this.shape,p:{scaleX:0.535,scaleY:0.535,x:194.7177,y:173.0334}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.6,-26.2,372.70000000000005,354.5);


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

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


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

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


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

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


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

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


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
	this.shape.graphics.f("#592400").s().p("AgZAfQgpgPgYgeQgIgJgCgHIAEgKQACATAPARQANAOAVAKQAHADAMABQAPABgDgIQgCgGgLgKIAOAFQAcAHAcgCQAfgCAXgOQAAAAAAAAQABAAAAAAQABAAABABQAAAAABAAIgBADIgBABQgLASgDALIAAADQgSAGgQACIgUABQgdAAgbgKg");
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
	this.shape.graphics.f("#402917").s().p("AjBCbQhjg+gNh1QgFgkAHgmQA3BJBMAiQCNBACghUQAygaAtgyQAhglAshDIACgEQADANAAAIQAOB2hRBpQhQBph/AfQgpALgoAAQhOAAhCgpg");
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},9).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[]},1).wait(20));

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
	this.shape.graphics.f("#403D0E").s().p("AgOBDIgxgIIgFh6IBagDIgKA8IAnANQAhAUgcAbQgPANgkAAIgTAAg");
	this.shape.setTransform(57.7873,62.3838,2.0908,2.0908);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#593D31").s().p("AiNkoIEbgLIhjJhIijAGg");
	this.shape_1.setTransform(55.9,30.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#403D0E").s().p("AgzA7QgfgaAggWIAlgQIgOg7IBagEIAEB6QgVAIgbAEQgSADgNAAQgbAAgMgKg");
	this.shape_2.setTransform(17.2679,63.8481,2.0908,2.0908);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#593D31").s().p("AhJiMICIgFIALEgIhOADg");
	this.shape_3.setTransform(15.4389,32.0739,2.0908,2.0908);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#593E31").s().p("AiNkoIEbgLIhjJhIijAGg");
	this.shape_4.setTransform(53.4574,31.5557,1,1,-20.9478);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#593E31").s().p("AhJiMICIgFIALEgIhOADg");
	this.shape_5.setTransform(16.351,32.1049,2.0908,2.0908,6.4663);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3,p:{rotation:0,x:15.4389,y:32.0739}},{t:this.shape_2,p:{rotation:0,x:17.2679,y:63.8481}},{t:this.shape_1,p:{rotation:0,x:55.9,y:30.775}},{t:this.shape,p:{rotation:0,x:57.7873,y:62.3838,scaleX:2.0908,scaleY:2.0908}}]}).to({state:[{t:this.shape_5,p:{rotation:6.4663,x:16.351,y:32.1049}},{t:this.shape_2,p:{rotation:6.4663,x:14.59,y:63.8829}},{t:this.shape_4,p:{rotation:-20.9478,x:53.4574,y:31.5557}},{t:this.shape,p:{rotation:-20.9475,x:66.5323,y:60.4978,scaleX:2.0908,scaleY:2.0908}}]},2).to({state:[{t:this.shape_5,p:{rotation:12.4661,x:17.174,y:32.2038}},{t:this.shape_2,p:{rotation:12.4661,x:12.1011,y:63.6233}},{t:this.shape_4,p:{rotation:-29.8919,x:52.6489,y:32.0223}},{t:this.shape,p:{rotation:-29.8916,x:70.0594,y:58.6211,scaleX:2.0907,scaleY:2.0907}}]},2).to({state:[{t:this.shape_5,p:{rotation:20.9605,x:18.2756,y:32.4029}},{t:this.shape_2,p:{rotation:20.9605,x:8.6173,y:62.7286}},{t:this.shape_4,p:{rotation:-39.6173,x:58.1826,y:28.462}},{t:this.shape,p:{rotation:-39.6167,x:79.8037,y:51.7806,scaleX:2.0907,scaleY:2.0907}}]},2).to({state:[{t:this.shape_5,p:{rotation:20.9605,x:18.2756,y:32.4029}},{t:this.shape_2,p:{rotation:20.9605,x:8.6173,y:62.7286}},{t:this.shape_4,p:{rotation:-39.6173,x:58.1826,y:28.462}},{t:this.shape,p:{rotation:-39.6167,x:79.8037,y:51.7806,scaleX:2.0907,scaleY:2.0907}}]},1).to({state:[{t:this.shape_5,p:{rotation:12.4661,x:17.174,y:32.2038}},{t:this.shape_2,p:{rotation:12.4661,x:12.1011,y:63.6233}},{t:this.shape_4,p:{rotation:-29.8919,x:52.6489,y:32.0223}},{t:this.shape,p:{rotation:-29.8916,x:70.0594,y:58.6211,scaleX:2.0907,scaleY:2.0907}}]},2).to({state:[{t:this.shape_3,p:{rotation:6.4663,x:16.351,y:32.1049}},{t:this.shape_2,p:{rotation:6.4663,x:14.59,y:63.8829}},{t:this.shape_1,p:{rotation:-20.9478,x:53.4574,y:31.5557}},{t:this.shape,p:{rotation:-20.9475,x:66.5323,y:60.4978,scaleX:2.0908,scaleY:2.0908}}]},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.4,-4.3,103.5,82.7);


(lib.darkpic2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#D2D5D5").s().p("AgcAjQgOgMgCgTQgCgSAMgOQANgOASgCQARgCAPAMQAOAMACATQACASgMAOQgNAOgSACIgEAAQgQAAgMgKg");
	this.shape.setTransform(87.9783,68.6375,0.8386,0.856);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3C393E").s().p("Ag6BIQgegZgEgnQgDglAZgeQAZgdAmgEQAlgDAeAZQAdAYAEAnQADAlgYAeQgZAdgnAEIgIAAQghAAgZgVg");
	this.shape_1.setTransform(87.9577,68.6379,0.8386,0.856);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D2D5D5").s().p("AgcAjQgOgMgCgTQgCgSANgOQALgOATgCQASgCAOAMQAOANACASQABASgLAOQgMAOgTACIgEAAQgPAAgNgKg");
	this.shape_2.setTransform(55.8177,71.5695,0.8386,0.856);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3C393E").s().p("Ag6BIQgegZgEgnQgDglAZgdQAYgeAngEQAlgDAeAZQAdAYAEAnQAEAlgZAeQgZAdgnAEIgIAAQghAAgZgVg");
	this.shape_3.setTransform(55.8018,71.5484,0.8386,0.856);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F7C42B").s().p("AgggQIA+gFIADAnIg0AEQgJgWgEgQg");
	this.shape_4.setTransform(38.249,71.4651,0.8401,0.8577);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F7494A").s().p("AgpA3QgBhLBSgkQAIBSgaAUQgPALgYAAQgLAAgNgCg");
	this.shape_5.setTransform(38.5586,62.1294,0.8401,0.8577);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F7C42B").s().p("AgNAwQgkgMgChUQAaADAXALQAmASAQA3QgpAKgPAAIgJgBg");
	this.shape_6.setTransform(102.7059,56.2393,0.8401,0.8577);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3C393E").s().p("AgmgIIBLgHIACAYIhLAHg");
	this.shape_7.setTransform(84.0976,56.349,0.8401,0.8577);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3C393E").s().p("AgmgIIBLgHIACAYIhLAHg");
	this.shape_8.setTransform(65.3213,58.0428,0.8401,0.8577);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F0F1F1").s().p("AAIguQANAFANAJIgjBMIggADg");
	this.shape_9.setTransform(78.4391,47.5359,0.8386,0.856);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F0F1F1").s().p("AARg0IAOACIgvBmIgOABg");
	this.shape_10.setTransform(74.5815,47.3433,0.8386,0.856);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D2D5D5").s().p("AAAglQAdAXAIAuIhJAHg");
	this.shape_11.setTransform(81.4162,48.0282,0.8386,0.856);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D2D5D5").s().p("AANgzQAIACAPAFIgqBdIgdADg");
	this.shape_12.setTransform(76.133,47.3861,0.8386,0.856);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D2D5D5").s().p("AgegvIASgEQAWgDAVACIgvBpIgFABg");
	this.shape_13.setTransform(73.4075,47.3305,0.8386,0.856);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F0F1F1").s().p("AARg1IAPgBIgyBsIgNABg");
	this.shape_14.setTransform(61.6041,48.3706,0.8386,0.856);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F0F1F1").s().p("AAPgxIARgEIgxBqIgOACg");
	this.shape_15.setTransform(57.9771,48.7558,0.8386,0.856);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D2D5D5").s().p("AAPg2IAMABIAJBlIhHAGg");
	this.shape_16.setTransform(63.0926,48.3278,0.8386,0.856);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D2D5D5").s().p("AALgzQARgDALgBIgwBsIgdADg");
	this.shape_17.setTransform(59.7382,48.5204,0.8386,0.856);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D2D5D5").s().p("AAkg0IguBnIgZACQgBhPBIgag");
	this.shape_18.setTransform(56.2155,49.0554,0.8386,0.856);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F7C42B").s().p("Aheg3IAagFQAggEAcAFQBZAOAOBbIiyAQg");
	this.shape_19.setTransform(78.91,47.7775,0.8401,0.8577);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F7C42B").s().p("AgFg2QAqgPArADIAKB2IizAQQgBhcBVgeg");
	this.shape_20.setTransform(60.5736,49.052,0.8401,0.8577);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2FCAFE").s().p("Al8AFQAwgfBAgEQgJhiBQgoQA1gaCEgMQCagOBCBJQAhAkABAnIAsgBQAyABAhAPQA0AYALBYQAFAsgFAoIiBALQACgWgLgVQgXgphEAGQhDAGgMAsQgGAXAHAVIjOASQAGgWgKgVQgSgqhLAHQhKAHgLArQgGAVAKAUIiLANQhOiNBghAg");
	this.shape_21.setTransform(71.4409,58.1878,0.8401,0.8577);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF8095").s().p("AojlBIQGhcIBBLfIwGBcg");
	this.shape_22.setTransform(69.6757,57.3377,0.8386,0.856);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#FEFFFB","#F9F9F6","#EAE8E7","#E0DCDD"],[0,0.329,0.773,1],5.2,-41,-9.8,78.6).s().p("AsAnDIWliBIBdQII2mCBg");
	this.shape_23.setTransform(69.6547,57.3377,0.8386,0.856);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E76857").s().p("AtMoUIYtiNIBsS2I4tCOg");
	this.shape_24.setTransform(69.6547,57.3163,0.8386,0.856);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.2,-0.4,141.7,115.5);


(lib.darkpic = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#2FCAFE").s().p("Ag0DUIAEi+QAAgPAGgMIBfjbIgJDuQgBARgGALIhNCyIgJAFg");
	this.shape.setTransform(68.1662,48.509,0.8401,0.8577);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2FCAFE").s().p("AACAAIBwgaIgKBdgAhkhBIBmBBIhzAbgAACAAg");
	this.shape_1.setTransform(64.8058,74.9675,0.8401,0.8577);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00C077").s().p("AgKgDIB6AGIg2BWgAhwgJIAmhPIBABVg");
	this.shape_2.setTransform(62.7896,86.5672,0.8401,0.8577);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F7494A").s().p("Ag1BgIA1hrIgqhfIBWAGIgsBZIA2B2g");
	this.shape_3.setTransform(47.3107,92.6137,0.8401,0.8577);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2FCAFE").s().p("Ag6CTQgkgIgkgQQgUgJgNgHIAGgKQACACAXAKQAeAOAeAJQBgAbA4glQBbg8gXjXIALgBQAYDfhhA+QgkAYgxAAQgbAAgggIg");
	this.shape_4.setTransform(49.81,79.5213,0.8386,0.856);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00C077").s().p("AB5BbQhHgshGgLQg1gIgwALIAeiDQBFgCBIAcIBICfg");
	this.shape_5.setTransform(76.6513,53.5819,0.8401,0.8577);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFE228").s().p("ACkBoQhFg7hIgaQhrgnhVAvIAch8QBugcCFBQIBFCXg");
	this.shape_6.setTransform(78.2895,65.4808,0.8401,0.8577);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F7494A").s().p("AimgYQBVgxBsAoQBHAbBFA6g");
	this.shape_7.setTransform(77.9954,69.9683,0.8401,0.8577);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00C077").s().p("AARAnQhFgWhTAJICFhuQBMAGA+AgIgeCDQgngfgygPg");
	this.shape_8.setTransform(57.5284,49.6454,0.8401,0.8577);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFE228").s().p("AgNABQhLgGhZAWIgHgCIB/hpQCcgPBWBKIgcB8Qg5hRhxgLg");
	this.shape_9.setTransform(50.8181,59.7918,0.8401,0.8577);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F7494A").s().p("AimgdQBYgWBLAHQByALA4BQg");
	this.shape_10.setTransform(49.915,63.7897,0.8401,0.8577);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#8D48A3","#803399"],[0,1],-8.8,2.5,7.5,-0.8).s().p("AgGBHQgwgLgigmIBzhgIA/CJQgfAMgfAAQgRAAgRgEg");
	this.shape_11.setTransform(70.3505,35.6671,0.8401,0.8577);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFE228").s().p("AhGBTIAsi/IBhDZQhIgdhFADg");
	this.shape_12.setTransform(74.8871,38.5388,0.8401,0.8577);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFE228").s().p("AhaA6IC1iZIgsC/Qg8ghhNgFg");
	this.shape_13.setTransform(64.9318,37.4238,0.8401,0.8577);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#FEFFFB","#F9F9F6","#EAE8E7","#E0DCDD"],[0,0.329,0.773,1],-6.4,-31.4,36.3,177.7).s().p("Ap8mPIQpjaIDQP5IwpDag");
	this.shape_14.setTransform(64.0385,67.2923,0.8414,0.8593);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFAE1E").s().p("AsEoKIT+kGIEMUbIz/EGg");
	this.shape_15.setTransform(64.0385,67.2923,0.8414,0.8593);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-0.1,130.1,134.79999999999998);


(lib.darkdresser = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.rf(["#EFE6E0","#E9DCD4","#DBC3B3","#DAC2B2"],[0,0.349,0.98,1],0,0,0,0,0,4.1).s().p("AgkAXQgOgKAAgNQAAgNAOgJQAPgKAVAAQAVAAAPAKQAQAJgBANQABANgQAKQgPAKgVAAQgVAAgPgKg");
	this.shape.setTransform(65.9832,179.8213,0.8401,0.8577);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7E7372").s().p("AgnAaQgRgLAAgPQAAgOARgLQAQgKAXAAQAYAAARAKQAQALAAAOQAAAPgQALQgRAKgYAAQgXAAgQgKg");
	this.shape_1.setTransform(65.9832,179.8213,0.8401,0.8577);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#F7EBD6","#F4E3C7","#F1DBB8"],[0,0.455,1],0,-23,0,20.5).s().p("Ar9DqIAAnTIX7AAIAAHTg");
	this.shape_2.setTransform(67.4914,193.6047,0.8414,0.8593);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7E7372").s().p("AsID6IAAnzIYRAAIAAHzg");
	this.shape_3.setTransform(67.4914,193.6047,0.8414,0.8593);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#EFE6E0","#E9DCD4","#DBC3B3","#DAC2B2"],[0,0.349,0.98,1],0,0,0,0,0,4.1).s().p("AgkAXQgOgJAAgOQAAgNAOgJQAPgKAVAAQAVAAAPAKQAQAJgBANQABAOgQAJQgPAKgVAAQgVAAgPgKg");
	this.shape_4.setTransform(65.9832,138.311,0.8401,0.8577);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7E7372").s().p("AgnAaQgRgLAAgPQAAgOARgLQAQgKAXAAQAYAAARAKQAQALAAAOQAAAPgQALQgRAKgYAAQgXAAgQgKg");
	this.shape_5.setTransform(65.9832,138.311,0.8401,0.8577);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#F7EBD6","#F4E3C7","#F1DBB8"],[0,0.455,1],0,-21.7,0,22.4).s().p("Ar9DqIAAnTIX7AAIAAHTg");
	this.shape_6.setTransform(67.4914,152.0368,0.8414,0.8593);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7E7372").s().p("AsID6IAAnzIYRAAIAAHzg");
	this.shape_7.setTransform(67.4914,152.0154,0.8414,0.8593);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#EFE6E0","#E9DCD4","#DBC3B3","#DAC2B2"],[0,0.349,0.98,1],0,0,0,0,0,4.1).s().p("AgkAXQgOgJAAgOQAAgMAOgKQAPgKAVAAQAVAAAPAKQAQAKgBAMQABAOgQAJQgPAKgVAAQgVAAgPgKg");
	this.shape_8.setTransform(65.9832,96.8007,0.8401,0.8577);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7E7372").s().p("AgnAaQgRgLAAgPQAAgOARgKQAQgLAXAAQAYAAARALQAQAKAAAOQAAAPgQALQgRAKgYAAQgXAAgQgKg");
	this.shape_9.setTransform(65.9832,96.8007,0.8401,0.8577);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#F7EBD6","#F4E3C7","#F1DBB8"],[0,0.455,1],0,-20.8,0,21.8).s().p("Ar9DqIAAnTIX7AAIAAHTg");
	this.shape_10.setTransform(67.4914,110.4475,0.8414,0.8593);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#7E7372").s().p("AsID6IAAnzIYRAAIAAHzg");
	this.shape_11.setTransform(67.4914,110.4475,0.8414,0.8593);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.rf(["#EFE6E0","#E9DCD4","#DBC3B3","#DAC2B2"],[0,0.349,0.98,1],0,0,0,0,0,4.1).s().p("AgkAXQgOgKAAgNQAAgNAOgJQAPgJAVAAQAVAAAPAJQAQAJgBANQABANgQAKQgPAJgVAAQgVAAgPgJg");
	this.shape_12.setTransform(65.9832,55.3118,0.8401,0.8577);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#7E7372").s().p("AgnAaQgRgLAAgPQAAgOARgKQAQgMAXAAQAYAAARAMQAQAKAAAOQAAAPgQALQgRALgYAAQgXAAgQgLg");
	this.shape_13.setTransform(65.9832,55.3118,0.8401,0.8577);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#F7EBD6","#F4E3C7","#F1DBB8"],[0,0.455,1],0,-23.7,0,24.2).s().p("Ar9DqIAAnTIX7AAIAAHTg");
	this.shape_14.setTransform(67.4914,68.8582,0.8414,0.8593);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#7E7372").s().p("AsID6IAAnzIYRAAIAAHzg");
	this.shape_15.setTransform(67.4914,68.8797,0.8414,0.8593);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.rf(["#EFE6E0","#E9DCD4","#DBC3B3","#DAC2B2"],[0,0.349,0.98,1],0,0,0,0,0,4.1).s().p("AgkAXQgOgKAAgNQAAgNAOgJQAPgKAVAAQAVAAAPAKQAQAJgBANQABANgQAKQgPAKgVAAQgVAAgPgKg");
	this.shape_16.setTransform(67.4914,14.7233,0.8414,0.8593);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#7E7372").s().p("AgnAaQgRgLAAgPQAAgOARgLQAQgKAXAAQAYAAARAKQAQALAAAOQAAAPgQALQgRAKgYAAQgXAAgQgKg");
	this.shape_17.setTransform(67.4914,14.7233,0.8414,0.8593);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#F7EBD6","#F4E3C7","#F1DBB8"],[0,0.455,1],0,-21,0,23.8).s().p("Ar9DqIAAnTIX7AAIAAHTg");
	this.shape_18.setTransform(69.5545,28.1974,0.8432,0.8609);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#7E7372").s().p("AsID6IAAnzIYRAAIAAHzg");
	this.shape_19.setTransform(69.5545,28.1974,0.8432,0.8609);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#F1DBB8","#F4E3C7","#F7EBD6"],[0,0.545,1],-83.1,0,83.2,0).s().p("As+UfMAAAgo9IZ9AAMAAAAo9g");
	this.shape_20.setTransform(69.5755,112.6072,0.8432,0.8609);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.2,140.2,225.7);


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


(lib.Symbol7 = function(mode,startPosition,loop,reversed) {
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
	this.shape.setTransform(376.2258,170.7416,2.0869,2.0869);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#562915").s().p("AgCAHIACgOIADABIgDAOg");
	this.shape_1.setTransform(376.7475,164.5852,2.0869,2.0869);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#562915").s().p("AgDAGIADgNIAFACIgFANg");
	this.shape_2.setTransform(378.3648,158.5854,2.0869,2.0869);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#562915").s().p("AgFAFIAHgMIAEADIgHAMg");
	this.shape_3.setTransform(381.2343,152.8986,2.0869,2.0869);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#562915").s().p("AgGAEIAKgKIADAEIgKAJg");
	this.shape_4.setTransform(385.3559,148.0987,2.0869,2.0869);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#562915").s().p("AgHACIAMgHIADAEIgMAHg");
	this.shape_5.setTransform(390.521,144.1336,2.0869,2.0869);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#562915").s().p("AgHABIAOgFIABAEIgOAFg");
	this.shape_6.setTransform(396.4687,141.2641,2.0869,2.0869);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#562915").s().p("AgHAAIAOgDIABADIgOAEg");
	this.shape_7.setTransform(402.8337,139.3337,2.0869,2.0869);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#562915").s().p("AgHAAIAPgBIAAABIgPACg");
	this.shape_8.setTransform(409.4596,138.1859,2.0869,2.0869);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#562915").s().p("AgHAAIAPAAIgPAAg");
	this.shape_9.setTransform(416.1377,137.7686,2.0869,2.0869);

	this.instance = new lib.Group_11();
	this.instance.setTransform(466,175.2,2.0901,2.0901,0,0,0,14.1,10.7);
	this.instance.alpha = 0.5;
	this.instance.compositeOperation = "multiply";

	this.instance_1 = new lib.CompoundPath_9();
	this.instance_1.setTransform(548.15,198.6,2.0895,2.0895,0,0,0,28.7,9.1);
	this.instance_1.alpha = 0.5;
	this.instance_1.compositeOperation = "multiply";

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CB8149").s().p("AAIAGIgEgDIgZgSIAJADQAJADAHAGIAIAFIAFAGIAFAIg");
	this.shape_10.setTransform(476.2396,161.5775,2.0841,2.0841);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CB8149").s().p("AANAGIgDgBIgDgCIgZgMIAHAAIAHACIAHADIAHAEIAFAEIAEAGg");
	this.shape_11.setTransform(565.44,194.8714,2.0841,2.0841);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CB8149").s().p("AgagHIASACIATAFIAQAIg");
	this.shape_12.setTransform(458.3683,174.3949,2.0841,2.0841);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CB8149").s().p("AANgEIgCgBIgJgDQgGgCgQAAIgrgCIArgCQAQAAAIABIAGACIADABIAuAWIAFADg");
	this.shape_13.setTransform(451.5428,167.4131,2.0841,2.0841);

	this.instance_2 = new lib.Path_56();
	this.instance_2.setTransform(534.25,195.7,2.0895,2.0895,0,0,0,16.4,5.5);

	this.instance_3 = new lib.Path_1_18();
	this.instance_3.setTransform(473.65,174.25,2.0895,2.0895,0,0,0,7.8,8.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.rf(["#FDE3C6","#EEBD8C","#EEB581","#EE9E64","#EE9A5F"],[0.161,0.533,0.635,0.812,0.835],8.5,-7.7,0,8.5,-7.7,42.5).s().p("AgxAgIiWgwQgYgXAMgWIAQgRIB9AVQCMAZBQARIAEgBQAiARATAZQAVAbgbASQggAGgXACIgDAAQgpAAiXgvg");
	this.shape_14.setTransform(530.7299,196.1301,2.0841,2.0841);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.rf(["#FDE3C6","#EEBD8C","#EEB581","#EE9E64","#EE9A5F"],[0.161,0.533,0.635,0.812,0.835],-16.1,-8.9,0,-16.1,-8.9,42.5).s().p("AgnAOQgTgXgigTIAVgGIA1gYQA0AFAjAmQASARAGARIgZAJQg7ATg2AMQAbgSgVgbg");
	this.shape_15.setTransform(582.1651,198.5707,2.0841,2.0841);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.rf(["#FDE3C6","#EEBD8C","#EEB581","#EE9E64","#EE9A5F"],[0.161,0.533,0.635,0.812,0.835],8.5,-7.7,0,8.5,-7.7,42.5).s().p("AgxAgIiWgwQgYgXAMgWIAQgRIB9AVQCMAZBQARIAEgBQAiARATAZQAVAbgbASQggAGgXACIgDAAQgpAAiXgvg");
	this.shape_16.setTransform(530.7299,196.1301,2.0841,2.0841);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.rf(["#FDE3C6","#EEBD8C","#EEB581","#EE9E64","#EE9A5F"],[0.161,0.533,0.635,0.812,0.835],4,-8.7,0,4,-8.7,23.9).s().p("AA8BfQgVgIgPgPQgPgRgPgHQgrgShEACQgQAAADgMQADgMAXgBIBEgCQghgFgJgEQgXACgQgGQgRgFACgIQACgGALgEIALgCQgIgDgHgEQgQgIAEgJQABgEAcgBQAYgBAeACQAVACAdAOQAOAIAKAHQgBgGgGgGQgKgMgQgEQgbgHgVgIQgcgLAAgJQgBgJASABQAMACAeAIQAuAOAfANIAGgIQAHgHAKABQAHABABAKQABAQAFAIIAaAlQATAbAGARIgRARQgLAWAXAXQgJACgOAAIgDAAQgaAAgUgHg");
	this.shape_17.setTransform(461.3903,171.7186,2.0841,2.0841);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.rf(["#FDE3C6","#EEBD8C","#EEB581","#EE9E64","#EE9A5F"],[0.161,0.533,0.635,0.812,0.835],-16.1,-8.9,0,-16.1,-8.9,42.5).s().p("AgnAOQgTgXgigTIAVgGIA1gYQA0AFAjAmQASARAGARIgZAJQg7ATg2AMQAbgSgVgbg");
	this.shape_18.setTransform(584.6548,200.3755,2.0869,2.0869);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.rf(["#EDBFDA","#E57CAF","#E35C8F","#E1487C"],[0,0.663,0.82,0.941],-13.8,-19.1,0,-13.8,-19.1,36.3).s().p("AgfBNQgYgkgqgUQgfgPACgCQAGgIATAFQAVAGAdAXQgFgMgOgQIgNgMIAJgIQARgLAlgQQA6gZA0gPQBAgIguA9QgrA3hBAkQADANgLALQgFAEgEAAQgIAAgGgKg");
	this.shape_19.setTransform(612.2624,185.2337,2.0869,2.0869);

	this.instance_4 = new lib.Path_55();
	this.instance_4.setTransform(584.2,88.2,2.0891,2.0891,0,0,0,9,14.9);
	this.instance_4.alpha = 0.3984;
	this.instance_4.compositeOperation = "multiply";

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.rf(["#E0A055","#DF9753","#DC7F4D","#DB794C","#D6764A","#C96E45","#B3613B","#934E2E","#6B361E","#562915"],[0,0.09,0.243,0.271,0.388,0.514,0.651,0.788,0.929,0.996],-14.2,-9.3,0,-14.2,-9.3,25.5).s().p("Ag5BdQgSg0AagsIgLAEQgLAHgFAJQgLgVATgeQAVgiAvgMQgMgBgMgHQgXgPACgdIAiATQApAPAogUIALgFQgsAhgZAiQg4BMAdBwQgEABgEAAQgUAAgOgog");
	this.shape_20.setTransform(580.2534,87.3933,2.0847,2.0847);

	this.instance_5 = new lib.Path_53();
	this.instance_5.setTransform(631.2,20.35,2.0902,2.0902,0,0,0,4.9,3.6);
	this.instance_5.compositeOperation = "screen";

	this.instance_6 = new lib.Path_1_16();
	this.instance_6.setTransform(637.2,8.35,2.0902,2.0902,0,0,0,5.2,2.2);
	this.instance_6.compositeOperation = "screen";

	this.instance_7 = new lib.Path_2_10();
	this.instance_7.setTransform(654.4,20.8,2.0902,2.0902,0,0,0,7,7.8);
	this.instance_7.compositeOperation = "screen";

	this.instance_8 = new lib.Path_3_8();
	this.instance_8.setTransform(670.35,28.85,2.0902,2.0902,0,0,0,8.4,9.6);
	this.instance_8.compositeOperation = "screen";

	this.instance_9 = new lib.Path_4_1();
	this.instance_9.setTransform(679.75,42.75,2.0902,2.0902,0,0,0,6.3,12.3);
	this.instance_9.compositeOperation = "screen";

	this.instance_10 = new lib.Path_5_2();
	this.instance_10.setTransform(692.6,48.8,2.0902,2.0902,0,0,0,4.7,11.1);
	this.instance_10.compositeOperation = "screen";

	this.instance_11 = new lib.Path_6_4();
	this.instance_11.setTransform(699.25,58.75,2.0902,2.0902,0,0,0,3.7,11.7);
	this.instance_11.compositeOperation = "screen";

	this.instance_12 = new lib.Path_7_4();
	this.instance_12.setTransform(709.75,69.3,2.0902,2.0902,0,0,0,3.6,12.3);
	this.instance_12.compositeOperation = "screen";

	this.instance_13 = new lib.Path_8_2();
	this.instance_13.setTransform(725.15,71.4,2.0902,2.0902,0,0,0,4.7,19.2);
	this.instance_13.compositeOperation = "screen";

	this.instance_14 = new lib.Path_9_3();
	this.instance_14.setTransform(743.95,74.4,2.0902,2.0902,0,0,0,4.5,19);
	this.instance_14.compositeOperation = "screen";

	this.instance_15 = new lib.Group_2_1();
	this.instance_15.setTransform(709.8,20.75,2.0902,2.0902,0,0,0,16.9,10);
	this.instance_15.alpha = 0.5;
	this.instance_15.compositeOperation = "multiply";

	this.instance_16 = new lib.Group_4_1();
	this.instance_16.setTransform(628.1,6.7,2.0902,2.0902,0,0,0,3.6,3.1);
	this.instance_16.alpha = 0.5;
	this.instance_16.compositeOperation = "multiply";

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CB8149").s().p("AgGAOIgIgCIgGgFQgFgGAAgEQAAgEABgEIABgCIAEAJIADADQAAAAAAABQAAAAABAAQAAAAABAAQAAABABAAQADACAFABIAUgCIALgCQgDAEgGADQgDADgHACIgLACIgCAAg");
	this.shape_21.setTransform(604.9914,68.6612,2.0875,2.0875);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.rf(["#FDE3C6","#EEBD8C","#EEB581","#EE9E64","#EE9A5F"],[0.161,0.533,0.635,0.812,0.835],-1.7,-1.3,0,-1.7,-1.3,10.8).s().p("AgIAYQgPgBgFgMQgEgLANgMQAQgNARADQAUADgGAYQgBAFgFAFQgKAJgSAAIgCAAg");
	this.shape_22.setTransform(605.8153,65.8826,2.0875,2.0875);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CB8149").s().p("AADAeIgDAAIgNgEIgGgDIgIgGIgGgGIgDgFIgEgJIgCgRIACgKIACAKIAGAPIACADIADADIACAEIAGAFIAKAHIAFACIAJADIASADIAIAAIAMABIgMADQgDABgEAAIgKABg");
	this.shape_23.setTransform(641.0188,87.0733,2.0875,2.0875);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.rf(["#FDE3C6","#EEBD8C","#EEB581","#EE9E64","#EE9A5F"],[0.161,0.533,0.635,0.812,0.835],-4.6,-7.8,0,-4.6,-7.8,25).s().p("AgmAPQgGgJgCgLIgBgKQAAgLAQgIQATgJAXAKQAbAKAHAbQAHAbgQAHIgUABQglAAgRgYg");
	this.shape_24.setTransform(642.228,84.3297,2.0875,2.0875);

	this.instance_17 = new lib.Path_50();
	this.instance_17.setTransform(597.25,72.7,2.0897,2.0897,0,0,0,1.5,1.7);
	this.instance_17.alpha = 0.3008;

	this.instance_18 = new lib.Path_1_14();
	this.instance_18.setTransform(595.55,79.2,2.0897,2.0897,0,0,0,4.5,5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.rf(["#E0A055","#DF9753","#DC7F4D","#DB794C","#D6764A","#C96E45","#B3613B","#934E2E","#6B361E","#562915"],[0,0.09,0.243,0.271,0.388,0.514,0.651,0.788,0.929,0.996],4.1,-4.4,0,4.1,-4.4,6.5).s().p("AATAbQgCgDAAgGIABgKQgCgLgJgJQgIgLgMACQgLAEgBgBQgDgDAQgFQAOgFALAMQAMALABARQAAAJgBAHQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAAAIgDgBg");
	this.shape_25.setTransform(613.2751,51.0864,2.0851,2.0851);

	this.instance_19 = new lib.Path_1_11();
	this.instance_19.setTransform(617.4,53.4,2.0898,2.0898,0,0,0,3.3,3.4);
	this.instance_19.alpha = 0.3984;
	this.instance_19.compositeOperation = "multiply";

	this.instance_20 = new lib.Group_8();
	this.instance_20.setTransform(650.65,75.55,2.0897,2.0897,0,0,0,5.5,4.5);
	this.instance_20.alpha = 0.3008;
	this.instance_20.compositeOperation = "multiply";

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.rf(["#E0A055","#DF9753","#DC7F4D","#DB794C","#D6764A","#C96E45","#B3613B","#934E2E","#6B361E","#562915"],[0,0.09,0.243,0.271,0.388,0.514,0.651,0.788,0.929,0.996],5,-7.9,0,5,-7.9,10.5).s().p("AApAlQABgJgBgKQgDgUgUgLQgQgKgRAAIgOAEQgKACgEgDQgGgEAHgFIAWgHQAZgDAVAOQAWAOgBAZQgBAXgEAAIgBAAg");
	this.shape_26.setTransform(646.1026,73.4126,2.0847,2.0847);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CB8149").s().p("AhBAHIAIgFIAYgMIAPgEIAIgCIAIAAIAHgBIAIAAIAPACIAaAHIARAIIAGADIgYgIIgagGIgWgBIgOABIgIABIgOAEIgEABIgJAEIgLAFIgJAFIgMAJg");
	this.shape_27.setTransform(641.1228,95.5555,2.0847,2.0847);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CB8149").s().p("AAIAiIgHgBIgOgEIgKgEIgDgCIgHgDIgIgHIgCgDIgEgFIgGgKIgDgPIgBgHIABgEIAAgCIAAAGIACAHIAFAOIACAFIAEADIAEAFIAEAFIALAHIANAGIANADIAGABIANACIAlAAIgPACIgKABIgMAAIgDAAIgKAAg");
	this.shape_28.setTransform(595.799,109.9032,2.082,2.082);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#CB8149").s().p("AAFARIgDgDIgCgDIgDgEIgFgHIgCgEIgBgIIAAgIIABACIACAGIAIARIAMAQg");
	this.shape_29.setTransform(607.1978,113.6334,2.082,2.082);

	this.instance_21 = new lib.Path_47();
	this.instance_21.setTransform(680.45,130.5,2.0897,2.0897);

	this.instance_22 = new lib.Group_7();
	this.instance_22.setTransform(687.2,129.8,2.0891,2.0891,0,0,0,3,2.6);
	this.instance_22.alpha = 0.2695;
	this.instance_22.compositeOperation = "multiply";

	this.instance_23 = new lib.Path_46();
	this.instance_23.setTransform(695.35,125.05,2.0891,2.0891,0,0,0,4,4.5);
	this.instance_23.alpha = 0.7188;
	this.instance_23.compositeOperation = "multiply";

	this.instance_24 = new lib.Path_1_9();
	this.instance_24.setTransform(692.65,125.25,2.0891,2.0891,0,0,0,5.6,4.6);
	this.instance_24.compositeOperation = "multiply";

	this.instance_25 = new lib.Group_1_1();
	this.instance_25.setTransform(691.9,125.1,2.0891,2.0891,0,0,0,5.6,4.8);
	this.instance_25.alpha = 0.3906;
	this.instance_25.compositeOperation = "multiply";

	this.instance_26 = new lib.Path_1_8();
	this.instance_26.setTransform(693.2,117.55,2.0897,2.0897);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.rf(["#FDE3C6","#EEBD8C","#EEB581","#EE9E64","#EE9A5F"],[0.161,0.533,0.635,0.812,0.835],-19.3,-9.5,0,-19.3,-9.5,56).s().p("AgHE4Qg1gBg4gTQiOgygfh2QgdhwA5hMQAegpA6gpQATgRANghQAOglAIgKQAggdAlgoIgFARQgFAVABAVQADBCA6AlQgOgaATgwIAXgrIgGAPQgHATgBAUQgCA/A3AzQgDgaAJgkIAJgeIAAAVQACAaAGAXQAVBKA9ATQgNgSAFguIAHgqIAFA2QAKA7AWAYIAEAYQAGAbAOARQgSA/gUAdIAMgJQAOgMAOgPQATgWAaANQAZAOgIAfQgJAmgwASQgyAUgLgvQgYAOgogBQgxgBgSgiQgPAbAaAVQAWARAYAAQgpAQgUAaIgMAWIA2gZIgJAGQgIAIgCAKQgWAPgtAAIgIgBg");
	this.shape_30.setTransform(638.2412,89.002,2.0847,2.0847);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.rf(["#E0A055","#DF9753","#DC7F4D","#DB794C","#D6764A","#C96E45","#B3613B","#934E2E","#6B361E","#562915"],[0,0.09,0.243,0.271,0.388,0.514,0.651,0.788,0.929,0.996],-44.7,-44.5,0,-44.7,-44.5,113).s().p("AhCGKQgYgaAPghQgOAVACAVQAAALAEAGQgRgCgPgLQgfgWAGgqQACgJAJgIIAIgGIg2AZIAMgXQAVgZApgRQgYAAgWgRQgbgUAQgbQARAhAyACQAoAAAXgOQAMAvAxgTQAwgTAJglQAIgggagNQgZgNgUAVQgOAQgNAMIgLAJQASgeASg/QgNgQgHgbIgDgYQgWgZgJg7IgGg1IgHAqQgEAtANASQg+gSgUhKQgHgYgBgZIAAgWIgKAfQgJAjAEAaQg4gyADhAQABgUAGgSIAHgPIgXAqQgVAwAPAaQg6glgDhCQgBgUAFgVIAFgRQgmAogfAcQgMgkAPgpQAQgsAlgQQgNgDgLgJQgXgRAJgdIAEAHQAHAIANAEQAnAPBPgXQBZgaBnAZQBgAXAqAuQANgUACgIIAOALQANAQgGATQAkAHAOAPQAGAIAAAHIgmgPIAbAVQAgAcAVAlQBEB3g7CpQgXA7g1A1QgZAZhHA2Qg3AqgRAaQgZAmATArQhAAMAAhDQgIAZAEAMQAEANAVANQg2AAgZgcg");
	this.shape_31.setTransform(680.7588,84.7389,2.0307,2.0307);

	this.instance_27 = new lib.Group_4_0();
	this.instance_27.setTransform(586.75,164.9,2.0907,2.0907,0,0,0,15.5,12.6);
	this.instance_27.compositeOperation = "multiply";

	this.instance_28 = new lib.CompoundPath_8();
	this.instance_28.setTransform(597.55,171.1,2.0907,2.0907,0,0,0,24.4,19.3);
	this.instance_28.alpha = 0.3008;
	this.instance_28.compositeOperation = "multiply";

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.rf(["#EDBFDA","#E57CAF","#E35C8F","#E1487C"],[0,0.663,0.82,0.941],-5.1,-11.1,0,-5.1,-11.1,36.3).s().p("AAWC1IAZgJQgGgRgSgSQgiglg1gGIg1AYQgJgqgUg7Qgoh0g3hUIAUgFQAagEAfABQBhAEBqA3Qg5AzAtAcQAeASApgKQAbgHAagRQA/AnATAfQAXAnglAfQgnAigvAfQgiAXgFAIQgLASgMAFQgGACgGAAQgQAAgVgLg");
	this.shape_32.setTransform(597.0095,170.419,2.09,2.09);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.rf(["#EDBFDA","#E57CAF","#E35C8F","#E1487C"],[0,0.663,0.82,0.941],-13.7,8.4,0,-13.7,8.4,18.7).s().p("AgzAiQgugcA6gyIALAGQglAgAKATQAJASAjACQAlABAigYIAMAHQgaASgbAGQgPAEgNAAQgXAAgTgLg");
	this.shape_33.setTransform(613.538,152.0773,2.09,2.09);

	this.instance_29 = new lib.Group_5_0();
	this.instance_29.setTransform(614.2,151.75,2.0907,2.0907,0,0,0,5.8,3.9);
	this.instance_29.alpha = 0.5;
	this.instance_29.compositeOperation = "multiply";

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.rf(["#FDE3C6","#EEBD8C","#EEB581","#EE9E64","#EE9A5F"],[0.161,0.533,0.635,0.812,0.835],-8.2,-0.9,0,-8.2,-0.9,12.3).s().p("AgMAkQgjgCgJgSQgKgTAlggIAEACQAzAbAhATQggAXgjAAIgEAAg");
	this.shape_34.setTransform(613.6929,151.4208,2.09,2.09);

	this.instance_30 = new lib.Group_2();
	this.instance_30.setTransform(526.1,161.1,2.0903,2.0903,0,0,0,40.9,40);
	this.instance_30.compositeOperation = "multiply";

	this.instance_31 = new lib.Path_44();
	this.instance_31.setTransform(31.15,203.2,2.0897,2.0897,0,0,0,12.5,6.3);
	this.instance_31.alpha = 0.5;
	this.instance_31.compositeOperation = "multiply";

	this.instance_32 = new lib.Path_1_6();
	this.instance_32.setTransform(194.6,154.9,2.0897,2.0897,0,0,0,11.4,10.5);
	this.instance_32.alpha = 0.5;
	this.instance_32.compositeOperation = "multiply";

	this.instance_33 = new lib.Path_2_7();
	this.instance_33.setTransform(163.6,180.2,2.0897,2.0897,0,0,0,4.9,3.8);
	this.instance_33.alpha = 0.8008;
	this.instance_33.compositeOperation = "multiply";

	this.instance_34 = new lib.Path_43();
	this.instance_34.setTransform(72.95,190.75,2.0899,2.0899,0,0,0,10.1,8.7);
	this.instance_34.alpha = 0.3008;
	this.instance_34.compositeOperation = "screen";

	this.instance_35 = new lib.Path_1_5();
	this.instance_35.setTransform(157.55,164.1,2.0899,2.0899,0,0,0,13.2,6.4);
	this.instance_35.alpha = 0.3008;
	this.instance_35.compositeOperation = "screen";

	this.instance_36 = new lib.Path_2_6();
	this.instance_36.setTransform(239.9,176.25,2.0899,2.0899,0,0,0,27.4,16.4);
	this.instance_36.alpha = 0.3008;
	this.instance_36.compositeOperation = "screen";

	this.instance_37 = new lib.Path_3_6();
	this.instance_37.setTransform(318.6,92.15,2.0899,2.0899,0,0,0,36.9,14.8);
	this.instance_37.alpha = 0.3008;
	this.instance_37.compositeOperation = "screen";

	this.instance_38 = new lib.Group_1();
	this.instance_38.setTransform(541,166.65,2.0899,2.0899,0,0,0,30.9,33.5);
	this.instance_38.compositeOperation = "multiply";

	this.instance_39 = new lib.CompoundPath_5();
	this.instance_39.setTransform(279.15,151.35,2.0899,2.0899,0,0,0,131.9,46.3);
	this.instance_39.alpha = 0.8008;
	this.instance_39.compositeOperation = "multiply";

	this.instance_40 = new lib.Path_42();
	this.instance_40.setTransform(526.95,218.85,2.0893,2.0893,0,0,0,20.9,1.7);
	this.instance_40.compositeOperation = "multiply";

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFB000").s().p("AhQACIgWAAIgUgBIgbgCIErgBIgNABIgiABIidADIgHAAIgTgBg");
	this.shape_35.setTransform(376.3293,223.6126,2.0886,2.0886);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFB000").s().p("AhjACIgTgDIgPgCIgLgCIBCAFIBOACQAcAAAagCIBbgFIhbAJIg2ACg");
	this.shape_36.setTransform(253.3652,220.0447,2.0886,2.0886);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFB000").s().p("AgNAHIgNgBIgWgFIgVgIIAWAGIA7AFIA6gEIgGABIgmAHg");
	this.shape_37.setTransform(102.0489,204.0672,2.0886,2.0886);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFB000").s().p("ABZAQIgNgCIgPgBIgPAAIhPgEIgfgEIg2gOIgwgUIBKAZIAcAEIAfAEIBeAFIA3AHIAWAFIAdAJg");
	this.shape_38.setTransform(129.4091,215.3454,2.0886,2.0886);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFB000").s().p("ABOBJIgJAAIgdgDIhigVIgTgGQgUgGgSgIIgRgIIgQgIIgPgKIgEgFIgEgIQgEgLAAgPIABgUIAFgRIgEARIAAAUQAAAPAFAKIADAHIAFAEIAeARIARAIQARAHAUAHIB1AbIAcADIAJABIBiABIgOACIgWABg");
	this.shape_39.setTransform(80.7456,207.4089,2.0886,2.0886);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFB000").s().p("AgoAuIgCgLIADgQIAFgKQACgGAFgEIAJgKIAKgKIAKgIIAUgMIAPgIIAGgCIgmAZIgTASQgLAJgFAJIgHAQIgCANIAAANg");
	this.shape_40.setTransform(116.0945,178.5867,2.0886,2.0886);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFB000").s().p("AhDBKIASgNIAKgHIAKgIIAVgRIAmglIBOhZQgJAPgRAWIhEBKIgTASIgVARIgnAcIgqAVg");
	this.shape_41.setTransform(198.436,154.3072,2.0886,2.0886);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFB000").s().p("AmvDqIAmgIIAPgFQAYgGAIgEIBagpIBfg/IAmgdIAmggQAkgeAmgmIAjgjIAngfQAsghAngWQBMgqBYgaQA8gQBBgIIAhgCIghADQg7AHhBATQhVAZhNAsQgvAagjAcQgTAOgUASIgjAjQgiAggoAkIgmAgIgnAdIgnAbIgmAYIhCAiIgsARIggAKIg2AMQgaADgKAAIAkgEg");
	this.shape_42.setTransform(224.2037,158.9542,2.0886,2.0886);

	this.instance_41 = new lib.Group_0();
	this.instance_41.setTransform(531.85,160.25,2.0893,2.0893,0,0,0,42.6,40.6);
	this.instance_41.alpha = 0.5;
	this.instance_41.compositeOperation = "multiply";

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.rf(["#FFE9D9","#FFE9B1","#FFE983","#FFE967","#FFE95C","#FFCC2D","#FFB80C","#FFB000"],[0,0.102,0.231,0.333,0.392,0.655,0.878,1],-15.8,-65.6,0,-15.8,-65.6,213.7).s().p("AFbHBQkzgJhTAAQhwAAiCAHQh1AHg3gBQg/gChkgIQhngJgpgBQgbgBhSgKQhAgJhKAFQhYAFhXggQhIgbgpgmQghgfAngaQAjgYCOgwQANgtBYgaQBPgWDEgWIEJhSQCyg5AXgYQBciFB9hgQB+hhB8gdQBwgbBuAMQBLAIBgAgQBvAjBgAcQCcB2BpDNQBSCfAcCfQAGAdAIAIQAKALAyAYQA0AfAaAsIjdAIQiaAGiGABIg5ABQifAAj0gHg");
	this.shape_43.setTransform(278.5193,150.8382,2.0886,2.0886);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FAF1FF").s().p("AAYFAQgxgYgKgLQgIgIgGgeQgcifhSifQhpjMich2IAcAIIC4AuQB6AmBWBFQBpBXBCC6QAOAoAnCeQAGAZAMAIQAHAFArANQAlALArAUQAoAUAHAJQAMAQg6AOQg8AOhTgCQgnAAhZACQgagrg0gfg");
	this.shape_44.setTransform(531.9854,160.364,2.0886,2.0886);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.instance_41},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.shape_34},{t:this.instance_29},{t:this.shape_33},{t:this.shape_32},{t:this.instance_28},{t:this.instance_27},{t:this.shape_31},{t:this.shape_30},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.instance_20},{t:this.instance_19},{t:this.shape_25},{t:this.instance_18},{t:this.instance_17},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.shape_20},{t:this.instance_4},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.instance_3},{t:this.instance_2},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.instance_1},{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(3.8,-0.9,747.5,246.9), null);


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
	this.shape.graphics.f("#CCCCCC").s().p("AgOAQQgIgEgCgHQgBgGAGgHQAHgGAJgDQAJgCAJAEQAIAEABAHQACAGgGAHQgGAGgKACIgGABQgGAAgGgCg");
	this.shape.setTransform(42.0464,92.7395,2.09,2.09);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#590000").s().p("AhPBdQgpgRgWgfQgWgfAIgfQAGgYAYgWQAmglAzgEQBQgJAzAWQAxAVALApQANAsgYAgQgXAdgqARQgmAPgoAAIgFAAQgmAAgkgPg");
	this.shape_1.setTransform(48.4069,96.8846);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#706557").s().p("AgJAuQgQgCgIgOQgHgOAEgPQAHgaATgNQAOgJAMACQASAFAEASQAEARgIAPQgRAkgWAAIgEAAgAAIgqQgSACgNATQgKAOgBANQgCASALALQAHAHAJABQAJACAHgGQAOgJAIgQQAJgQgCgPQgCgLgHgHQgIgIgIAAIgDABg");
	this.shape_2.setTransform(37.3886,83.7817,1.6001,1.5995);

	this.instance = new lib.Path_39();
	this.instance.setTransform(36.6,83.15,1.6001,1.5995,0,0,0,4.1,5.2);
	this.instance.compositeOperation = "multiply";

	this.instance_1 = new lib.CompoundPath_3();
	this.instance_1.setTransform(36.05,83.55,1.5997,1.5991,0,0,0,1.9,2.8);
	this.instance_1.alpha = 0.5;
	this.instance_1.compositeOperation = "multiply";

	this.instance_2 = new lib.CompoundPath_1_1();
	this.instance_2.setTransform(36.8,83.5,1.5997,1.5991,0,0,0,2.5,2.8);
	this.instance_2.alpha = 0.5;
	this.instance_2.compositeOperation = "multiply";

	this.instance_3 = new lib.Path_3_4();
	this.instance_3.setTransform(35.2,82.05,1.5997,1.5991,0,0,0,3.7,4.5);
	this.instance_3.compositeOperation = "multiply";

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#336600").s().p("AgcAyQgQgKgBgVQgBgTAQgXQATgeAbgCQAKgBAJAKQAIAJACAMQAEAUgMAWQgLAYgTAKQgJAFgIAAQgJAAgJgGg");
	this.shape_3.setTransform(36.0737,82.6552);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgJAuQgQgCgIgOQgHgOAEgPQAHgaATgNQAOgJAMACQASAFAEASQAEARgIAPQgRAkgWAAIgEAAg");
	this.shape_4.setTransform(37.3886,83.7817,1.6001,1.5995);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#706557").s().p("AgVBgQgigFgQgdQgPgdAIgfQAQg5AogaQAegTAYAFQAmAJAIAnQAJAigQAiQgkBMgvAAIgJgBgAAPhaQglAFgcAnQgVAdgBAdQgFAmAWAWQAPAQATACQAUADAPgMQAdgSARgjQASgigEggQgDgWgQgPQgPgQgSAAIgHABg");
	this.shape_5.setTransform(77.0552,85.709);

	this.instance_4 = new lib.Path_39();
	this.instance_4.setTransform(76.15,84.8,2.09,2.09,0,0,0,4.1,5.1);
	this.instance_4.compositeOperation = "multiply";

	this.instance_5 = new lib.CompoundPath_3();
	this.instance_5.setTransform(75.4,85.3,2.0894,2.0894,0,0,0,1.9,2.7);
	this.instance_5.alpha = 0.5;
	this.instance_5.compositeOperation = "multiply";

	this.instance_6 = new lib.CompoundPath_1_1();
	this.instance_6.setTransform(76.35,85.4,2.0894,2.0894,0,0,0,2.5,2.8);
	this.instance_6.alpha = 0.5;
	this.instance_6.compositeOperation = "multiply";

	this.instance_7 = new lib.Path_3_4();
	this.instance_7.setTransform(74.15,83.35,2.0894,2.0894,0,0,0,3.6,4.4);
	this.instance_7.compositeOperation = "multiply";

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#006600").s().p("AgRAfQgKgGgBgNQAAgMAKgOQALgTARgBQAGgBAGAHQAFAFABAIQACAMgHAOQgHAPgMAGQgEADgGAAQgGAAgFgEg");
	this.shape_6.setTransform(75.3243,84.2299,2.0894,2.0894);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgJAuQgQgCgIgOQgHgOAEgPQAHgaATgNQAOgJAMACQASAFAEASQAEARgIAPQgRAkgWAAIgEAAg");
	this.shape_7.setTransform(77.0473,85.6971,2.09,2.09);

	this.instance_8 = new lib.Path_1_3();
	this.instance_8.setTransform(65.6,36.4,2.0906,2.0906,0,0,0,5,8.3);
	this.instance_8.compositeOperation = "overlay";

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#592100").s().p("AgvA6IgmgEIgjgKIgWgMQgNgHgHgIIgIgLQAFAGAEADQAIAHAMAHIAWAKIAYAHIAYADIAYABIAYAAIAvgGIAugQIAVgLIAmgcIASgWIgCABIhpAeIhtALIgtgBIhBgIIBYADIBXgGIBogXIBQgfIgsA1IgTAQIgsAZIgvAOIgxAHg");
	this.shape_8.setTransform(58.475,119.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#BE2E1A","#3B0006"],[0.51,0.996],-14.3,-8.6,0,-14.3,-8.6,21.5).s().p("AhRgCQAmAHAvgGQAsgHAigPQgIALgMAMQgbAXgtABIgFAAQguAAgUgag");
	this.shape_9.setTransform(57.7069,120.3226,2.0894,2.0894);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#780000").s().p("AinB9QhSghguhAQgOgTgFgUQgHgbAUgIQAVgJAtATQBeAkB/gXQBqgVA7gmQAoghAWgOQAogbAiAKQAiAMgEAkQgDAbgUAiQghAzgXAbQgiApgnAWQhMArhhADIgMAAQhQAAhDgZg");
	this.shape_10.setTransform(57.0962,117.1349);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00541F").s().p("Ah6AOIABgDQAmAVBAgGQA6gEArgVQAWgKARgUIACABQgSAWgWAJQgtAWg5AEIgXABQgyAAgegQg");
	this.shape_11.setTransform(58.5574,114.7644,2.09,2.09);

	this.instance_9 = new lib.Path_2_2();
	this.instance_9.setTransform(88.35,40.4,2.0906,2.0906,0,0,0,10.2,4.4);
	this.instance_9.alpha = 0.5;
	this.instance_9.compositeOperation = "multiply";

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#481B00").s().p("Ag1BiQhWghgzhAQgQgSgFgOQALgbADgOIAGgcQAEgHADgKQALACAAAGQAAAKAGAOIAKAXQANAdAQARQAmAsA9AQQA8AQA7gEQBAgFAwgfQADgCAGAEIgCAHIgBABIgQAeQgKATgEANIgBAHQgmANggADQgWADgVAAQg9AAg4gUgAi4g9QgHAWAAAGQAAAMAJAOQAwBHBTAcQBWAeBSgTQAkgGARgLQAFgCAHgOIAHgSIADgKQg1AYhDgBQhAAAg4gWQhDgZgegnQgYgcgMgag");
	this.shape_12.setTransform(89.2,37.7236);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#5E460B").s().p("AifAfQgngjgJggQAFgIAJgdQAGgZACgPQgBAJAHASIANAaQAdBABHAfQA+AcBOgDQBSgCA0ghQgFADgIAbIgQAjQg5AXgyABIgQAAQh9AAhahTg");
	this.shape_13.setTransform(89.45,37.6787);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#897668").s().p("AgOAgQgLgIACgIQABgFAEgEIAIgIQABgCgCgGQgDgHABgDQADgIAGgDQARgIALAKIAAABQgGgEgJACQgJABgEAFQgDAFACAFIADAKQABADgHAFIgIAJQgEAIAIAEQAIAFAFgDQAGgCAEgEIAJgJQABAAgBAAQgOAVgLAAQgFAAgEgCg");
	this.shape_14.setTransform(114.6731,100.1013,2.0906,2.0906);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#40001B").s().p("ADHBqQgVgDgKgTQgKgSAKgTQgTgCgLgOQgLgPAGgRQgVAGgUgFQgXgFgHgSQgQATgkACQgRABgOgEQgTgFgHgMQgNAYgjAGQglAGgKgZQgQAFgPgJQgOgIgIgQQgJgSAGgTQAGgUASgJIAAAAQgPAMgEASQgEASAJARQARAdAmgJQABAAAAAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAABIgHADQAQAVAdgIQAZgFATgWIAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABABIAAAAIACgDIABAAIABABIgCAEQAXAVAkgDQAngDAQgaQAAgBAAAAQAAAAAAAAQAAABABAAQAAAAAAABQgBAEgFAIQASAYAmgEQAmgFAAghQAAgBAAAAQAAAAABAAQAAAAAAAAQAAAAABABQAFAZgZANQgDAXAKALQAHAGAKADQAHACANACQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgLABQgFAYAHAKQAEAHAIAFIAOAJQABAAAAAAQAAABAAAAQAAAAAAAAQAAABAAAAIgBABIgBAAg");
	this.shape_15.setTransform(67.1669,73.8932,2.0906,2.0906);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AhHChQgngCgbgSQAAABAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQglgDgugfQgmgagKgbQgHgTADgUQAEgSAMgRQAGgJAKgIQgJgIgBgNQgBgMAHgKQATgYARACIAEgLQANgeAYgVIABAAQAAABAAAAQABAAAAAAQAAABgBAAQAAAAAAAAQgZAZgKAoIgBAAIgEAVQAAAAAAABQABAAAAAAQAAABgBAAQAAABAAAAIgFAXQAGAAAFACIABABIgCABQgHgBgGACIgCACIgDAAQgIAEgLAKQgQAQgGAPQgNAjAUAcQAQAZAhASQAVAMANAFIAdAIIgKgJIAAgCIABAAQAnAaApACQAzAEA0gbIgRAMIgBAAQApgDANgDQAlgIAYgRQAkgYAOgbQAMgYgHgWIgNggQAAgBAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIANAYQAGAOABALIABABQAMAKAUgJQAPgIANgOQAcgfgPgbQgJgPgNgFQgPgGgOAJQgWAPgFAZIgBABIgBgBQABgQAJgOQAKgOAPgFQAQgFAPAIQANAHAIARQAIARgHATQgGARgQANQgkAhgXgOQgBAJgDAIQgKAdgiAZQgfAYgkAIQgsALgkgCQgdAMgeAAIgJgBgAjlhVQgIAFgEAJQgJAPALATQAIgFAJgDIAAgBQADgEACgIIABgOQgGgCgFAHQgGAIABAJQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAQgEgEACgIQACgGAEgEQAGgIAIABIADgOQgJABgIAGg");
	this.shape_16.setTransform(68.5406,104.0385,2.0906,2.0906);

	this.instance_10 = new lib.Path_5_1();
	this.instance_10.setTransform(89.75,34.4,2.0906,2.0906,0,0,0,17.4,14);
	this.instance_10.alpha = 0.3984;
	this.instance_10.compositeOperation = "multiply";

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000033").s().p("AAqCZQgkgEg0gUQhtgogOhMQgIgqAXgUQAZgVAlgCQgBgVgDgKQgDgPAAgFQABgKAJgHQALgKAWgCQAkgEAlAIQAaAFAoAOQAeALAOAKQA0AkgYAZIgeAmIADACQAvAkgDAkQgBAVgLATQgMATgRAMQgdASgnAAIgVgBg");
	this.shape_17.setTransform(90.0648,32.2076,2.0906,2.0906);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#59250F").s().p("AghBDIgBgDQgCgFgBgIIgBgOQgGgWgNgHQAAAAAAgBQgBAAAAgBQABAAAAAAQAAgBABAAIABgBQAVgSAJgMIAJgLIAIgNIABgFIABAAIABgBQgBgEABgDIABAAIgBgDIAAgBIABAAQADACAAAEQABADAEAIQAHAMAGAIQAMANAGAFQAMAKALgCIAAAAIgFADIgBAAIgMAFIgNAGQgSALgHAHIgSATIgQAVIgBABIAAgCg");
	this.shape_18.setTransform(38.3835,84.243,2.0906,2.0906);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#59250F").s().p("AgoAXQgMgZgXgJQASABAbgSIAfgVQAQgNAFgGIAEgEQAAAIAGAMIASAoQANAaANAMQgRAAgbAKQgTAHgNAHIgMAKIgQANQgBgbgLgXg");
	this.shape_19.setTransform(76.9691,85.6919,2.0906,2.0906);

	this.instance_11 = new lib.Path_7_3();
	this.instance_11.setTransform(21.8,87,2.0906,2.0906,0,0,0,1.9,3.5);
	this.instance_11.alpha = 0.5;
	this.instance_11.compositeOperation = "multiply";

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CCCCCC").s().p("AiWFTQhQgEg4glQAAAFgFAAQhSgIhag8QhPgzgWg7QgOgnAGgoQAHgoAZghQAUgYAOgLQgSgQgDgaQgBgaAPgVQAlgxAlAFIAJgYQAYg3ApgmQANADAOAAIAZgDIACACQAZAYAhAIQAjAHAggMQAOgFAMgIQAOgMAJgGQAGgCAHgJIAKgOQAPAMAVALQAYALASABIAfAEQARACAMgBQAzgDApgfQArA9BngUIABAAIgBAJQAAAsAdAYQAZAVAVAHQgMAuARAdQAIAQAiARQAFACAEgEIABAAIAAgCIABgCQAWgtApgOQAjgLAeARQAbAOARAjQAQAigPApQgNAjgfAbQhKBDgygdQgCATgGARQgXA8hFAyQg/AwhOATQhdAVhJgEQg8AYg/AAIgUgBg");
	this.shape_20.setTransform(68.5456,103.0066);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#40001B").s().p("AgQEGQhIgBg/gVQhAgVgegUQgwgfgCgjQgUAIgRgEQgTgFgHgTQgEgOADgOQAEgQAMgGQgUgFgEgcQgEgcARgLQgKgHgEgOQgEgOAEgNQAFgTAPgNQAQgOASAEQgFgWATgSQATgTAUALQAHgQAOgDQACgMAMgKQANgKAMAAQgEgHACgJQAGgUAZgOQAbgQAUADQAZACAOAQQAMgUAcACQAcABANARQAJgKARgCQAQgDAOAFQAUAGAKAQIABAAQAagGAXASQAXASgDAYQAWgEATAIQAWAJAEAUQAPgFAQAIQARAJgCAPQAZgFATAXQASAXgMAWQAXgBASAOQAJAHAEAKQAEAMgHAHQAFAHAAADQACAJgCAIQgCALgHADQAHAJABASQAAAOgEANQgJAbgcAIQAHANgJAOQgIAOgPAFQAGATgSAUQgPAQgVAHQgNAEgNgBQgPgBgJgGQgLAZgiAFQghAEgSgVQgKAIgSAEIgeAFQgaAEgcAAIgNgBgAkcCAIgHADQARAsArAYQAfASA4ARQA+AUA/ACQBDACA5gUIgEgJIABgBIABAAIAGAJIABgBQAAAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAIAAACQASARAdgFQAcgFANgVQgHgHgCgJQAAAAAAAAQAAAAAAAAQAAgBAAAAQABAAAAAAIABAAQAFAIAGAFIACABQAHAGAJABQAPADASgHQAUgHALgNQAGgHADgJIADgRQgMACgJgGQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQAUAFAOgMQAOgMgEgUQgJADgMgDQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAQAWgCANgHQAQgIAFgUQAIgkgVgTQgDgCAEAAQAFABAFADQAKgMgEgMIgEgJIAAgBIgDgDIgLgGIgBAAQAIgHAIAJQAEgKgEgGQgFgIgKgGQgUgLgWAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABgBIAIgCQAGgZgOgRQgOgPgZgEQgBAEgCAEIgBABIgBgBQADgSgOgKQgMgIgSADIgCACQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAIgFABIAAgBIAEgCQgHgTgSgHQgOgGgXABQgCAJgHAJQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAAAQABgBAAAAQAEgIACgJIAAgCQAEgVgPgPQgUgTgdADQADAHABAKQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQgJgfgegHQgXgFgZAOQAHAOgIAQQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAgBQAEgQgHgMQgHgLgRgEQgbgFgVATIAFAKQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAABgBgBQAAAAAAAAQAAAAgBAAQgVgcgbAAQgSAAgUAMQgVAMgHAOQgEALAIAJIAAABIAIAHIgBABQgHgBgFgFQgVAFgLANQgMAPAJATQgLgHABgLQgOAJgEANQgEAMAFAJIgBAAQgIgIAEgRQgZgBgLANQgLANACAUIAAAAIAAABIAAAAIABAIQAAABAAAAQAAAAAAABQAAAAgBAAQAAgBgBAAQgDgEgBgFQgRACgNAJQgOAKgEARQgGAVAJAOQAIANAVAEQAAAAABAAQAAAAAAAAQAAAAAAABQAAAAAAAAIgBABQgLACgKgFQgLATACASQABAWAUAJIADgBIABABIgBABQAAAAAAAAQAAABgBAAQAAAAAAAAQAAAAAAAAIgBAAQgWAXAIAWQAGASAOAEQAKADANgCIAXgGQABAAAAABQAAAAABABQAAAAgBAAQAAABAAAAg");
	this.shape_21.setTransform(78.4325,72.3995,2.0906,2.0906);

	this.instance_12 = new lib.Path_10_2();
	this.instance_12.setTransform(85.85,40.9,2.0906,2.0906,0,0,0,21.1,11.6);
	this.instance_12.alpha = 0.6992;
	this.instance_12.compositeOperation = "multiply";

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#401425").s().p("AgQEGQhIgBg/gVQhAgVgfgUQgvgfgCgjQgUAIgRgEQgTgFgHgTQgEgOADgOQAEgQAMgGQgUgFgEgcQgEgcARgLQgKgHgEgOQgFgOAEgNQAGgTAPgNQAQgOASAEQgGgVATgTQAUgTATALQAIgQAOgDQACgMAMgKQANgKAMAAQgFgIADgIQAGgTAYgPQAbgQAVADQAaACANAQQAMgUAcACQAcABANARQAJgKARgCQAPgDAOAFQAUAGALAQIABAAQAagGAXASQAXARgDAZQAVgEAUAIQAWAJAEAUQAPgFAQAIQARAJgCAPQAZgFATAXQASAXgMAWQAKAAAMADQAMAEAHAGQAJAHADAKQAEAMgHAHQAEAFACAFQACAJgCAIQgCALgHADQAHAJABASQAAAOgEANQgJAbgcAIQAHANgJAOQgIAOgPAFQAGATgSAUQgPAQgVAHQgNAEgNgBQgPgBgJgGQgLAZgiAFQgiAEgSgVQgJAIgSAEIgeAFQgaAEgcAAIgNgBg");
	this.shape_22.setTransform(78.079,72.3995,2.0906,2.0906);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.instance_12},{t:this.shape_21},{t:this.shape_20},{t:this.instance_11},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.instance_10},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.instance_9},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.instance_8},{t:this.shape_7},{t:this.shape_6},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0.4,0,155.7,137.9), null);


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
	this.instance.setTransform(52.5,69.6,1.0357,1.0365,0,-30.2212,-30.322,76.3,67.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:78.2,regY:68.9,scaleX:1.0358,scaleY:1.0366,skewX:-26.9627,skewY:-27.0633,x:56.4,y:70.15},0).wait(1).to({skewX:-23.702,skewY:-23.8026,x:57.65,y:70.25},0).wait(1).to({skewX:-20.4413,skewY:-20.5418,x:58.95,y:70.35},0).wait(1).to({skewX:-17.1806,skewY:-17.2811,x:60.25,y:70.5},0).wait(1).to({skewX:-13.9198,skewY:-14.0204,x:61.55,y:70.6},0).wait(1).to({scaleY:1.0365,skewX:-10.6591,skewY:-10.7597,x:62.75,y:70.7},0).wait(1).to({scaleY:1.0366,skewX:-7.3984,skewY:-7.4989,x:64,y:70.75},0).wait(1).to({skewX:-4.1377,skewY:-4.2382,x:65.3,y:70.85},0).wait(1).to({scaleY:1.0365,skewX:-0.877,skewY:-0.9775,x:66.55,y:70.95},0).wait(1).to({scaleY:1.0366,skewX:2.3838,skewY:2.2832,x:67.8,y:71.1},0).wait(1).to({skewX:5.6445,skewY:5.5439,x:69},0).wait(1).to({skewX:8.9052,skewY:8.8047,x:70.15,y:71.2},0).wait(1).to({skewX:12.1659,skewY:12.0654,x:71.35,y:71.3},0).wait(1).to({skewX:15.4266,skewY:15.3261,x:72.55,y:71.35},0).wait(1).to({skewX:18.6874,skewY:18.5868,x:73.75,y:71.4},0).wait(1).to({skewX:21.9481,skewY:21.8476,x:75,y:71.45},0).wait(1).to({skewX:25.2088,skewY:25.1083,x:76.2},0).wait(1).to({skewX:28.4695,skewY:28.369,x:77.35,y:71.55},0).wait(1).to({skewX:31.7303,skewY:31.6297,x:78.55},0).wait(1).to({skewX:34.991,skewY:34.8904,x:79.75},0).wait(1).to({skewX:38.2517,skewY:38.1512,x:80.95,y:71.6},0).wait(1).to({skewX:41.5124,skewY:41.4119,x:82.1},0).wait(1).to({skewX:44.7731,skewY:44.6726,x:83.3,y:71.55},0).wait(1).to({skewX:41.5592,skewY:41.4587,x:82.15},0).wait(1).to({skewX:38.3453,skewY:38.2447,x:81,y:71.45},0).wait(1).to({skewX:35.1313,skewY:35.0308,x:79.85,y:71.4},0).wait(1).to({skewX:31.9174,skewY:31.8168,x:78.75,y:71.35},0).wait(1).to({skewX:28.7034,skewY:28.6029,x:77.55},0).wait(1).to({skewX:25.4895,skewY:25.3889,x:76.4,y:71.25},0).wait(1).to({skewX:22.2755,skewY:22.175,x:75.3,y:71.15},0).wait(1).to({skewX:19.0616,skewY:18.961,x:74.15,y:71.05},0).wait(1).to({skewX:15.8476,skewY:15.7471,x:72.95,y:71},0).wait(1).to({skewX:12.6337,skewY:12.5331,x:71.8,y:70.9},0).wait(1).to({skewX:9.4197,skewY:9.3192,x:70.65,y:70.75},0).wait(1).to({skewX:6.2058,skewY:6.1053,x:69.5,y:70.65},0).wait(1).to({skewX:2.9918,skewY:2.8913,x:68.3,y:70.55},0).wait(1).to({skewX:-0.2221,skewY:-0.3226,x:67.15,y:70.4},0).wait(1).to({skewX:-3.436,skewY:-3.5366,x:65.95,y:70.25},0).wait(1).to({skewX:-6.65,skewY:-6.7505,x:64.7,y:70.15},0).wait(1).to({skewX:-9.8639,skewY:-9.9645,x:63.55,y:70},0).wait(1).to({skewX:-13.0779,skewY:-13.1784,x:62.3,y:69.85},0).wait(1).to({skewX:-16.2918,skewY:-16.3924,x:61.1,y:69.7},0).wait(1).to({skewX:-19.5058,skewY:-19.6063,x:59.85,y:69.5},0).wait(1).to({skewX:-22.7197,skewY:-22.8203,x:58.6,y:69.45},0).wait(1).to({skewX:-25.9337,skewY:-26.0342,x:57.4,y:69.3},0).wait(1).to({skewX:-29.1476,skewY:-29.2482,x:56.1,y:69.1},0).wait(1).to({skewX:-32.3616,skewY:-32.4621,x:54.9,y:69},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.2,-16.7,196.8,183.79999999999998);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgcAxIACgKQACABAEAAQAHAAADgHIAGgLIgehHIAMAAIAWA5IAXg5IAMAAIgjBVQgEAOgQAAIgIgBg");
	this.shape.setTransform(729.6624,703.9016,0.5884,0.5884);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgVAlIAAALIgLAAIAAhgIALAAIAAAlQAJgMAOAAQAOAAAIAKQAJAKAAAQQAAAQgJALQgIAJgOABQgOgBgJgMgAgVgCIAAAfQAHALAOAAQAJAAAHgHQAGgIAAgMQAAgMgGgHQgHgIgJABQgOAAgHALg");
	this.shape_1.setTransform(725.4114,702.3277,0.5884,0.5884);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgXAoQgJgLAAgQQAAgQAJgKQAJgKANAAQAPAAAIAMIAAglIALAAIAABgIgLAAIAAgLQgIAMgPABQgNgBgJgJgAgOgGQgHAHABAMQgBALAHAJQAFAHAKAAQAPAAAGgLIAAgfQgGgLgPAAQgKgBgFAIg");
	this.shape_2.setTransform(718.4244,702.3277,0.5884,0.5884);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgYAbQgJgLgBgQQABgOAJgLQAKgLAOAAQAQAAAJALQAKALAAAPIAAADIg5AAQABAKAGAHQAIAHAJAAQAOAAAJgJIAEAHQgKALgSAAQgPAAgKgKgAgQgTQgGAHAAAJIAuAAQgBgJgFgHQgHgIgLAAQgJAAgHAIg");
	this.shape_3.setTransform(713.8644,703.0632,0.5884,0.5884);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AATAkIAAgtQAAgQgQAAQgNAAgIALIAAAyIgLAAIAAhGIALAAIAAALQALgMAOAAQAWAAABAXIAAAwg");
	this.shape_4.setTransform(709.2751,703.019,0.5884,0.5884);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgcAoIAFgIQAIAKAPAAQAWAAAAgWIAAgKQgKANgNAAQgOAAgIgKQgJgKAAgQQAAgRAJgJQAIgKAOAAQAOAAAJAMIAAgLIALAAIAABEQAAAeghABQgSAAgKgLgAgPggQgGAHAAAMQAAAMAGAHQAGAHAKAAQAOAAAHgMIAAgdQgHgLgOAAQgKgBgGAIg");
	this.shape_5.setTransform(704.5239,703.8575,0.5884,0.5884);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgEAwIAAhGIAKAAIAABGgAgHgnQAAgIAHAAQAHAAAAAIQAAAHgHAAQgHAAAAgHg");
	this.shape_6.setTransform(701.4202,702.3424,0.5884,0.5884);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgbAaIAFgIQAJAKAOAAQAHABAFgEQAEgDABgGQAAgIgWgFQgVgEAAgPQgBgIAIgGQAGgGAMAAQAPAAAMAKIgGAIQgHgJgOAAQgPAAAAALQAAAGAWAGQAVAFAAAPQAAAJgHAGQgIAGgMAAQgRAAgLgLg");
	this.shape_7.setTransform(698.596,703.0632,0.5884,0.5884);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgXAbQgKgLAAgQQAAgOAKgLQAJgLAPAAQAPAAAJALQAJALAAAPIAAADIg4AAQABAKAHAHQAGAHALAAQAOAAAHgJIAGAHQgLALgRAAQgQAAgJgKgAgQgTQgFAHgBAJIAtAAQAAgJgFgHQgHgIgKAAQgKAAgHAIg");
	this.shape_8.setTransform(694.4479,703.0632,0.5884,0.5884);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgXAoQgJgLAAgQQAAgQAJgKQAIgKAOAAQAOAAAJAMIAAglIALAAIAABgIgLAAIAAgLQgJAMgOABQgOgBgIgJgAgPgGQgGAHAAAMQAAALAGAJQAGAHAKAAQAOAAAHgLIAAgfQgHgLgOAAQgKgBgGAIg");
	this.shape_9.setTransform(689.6379,702.3277,0.5884,0.5884);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AALA1IgagdIAAAdIgTAAIAAhpIATAAIAAA7IAagYIAYAAIgjAgIAjAmg");
	this.shape_10.setTransform(769.3044,702.0482,0.5884,0.5884);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgJA2IAAhHIATAAIAABHgAgIggQgDgDAAgFQAAgGADgDQAEgEAEAAQAFAAAEAEQADAEAAAFQAAAFgDADQgEAEgFAAQgEAAgEgEg");
	this.shape_11.setTransform(765.9213,702.0188,0.5884,0.5884);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgkAzIAAhkIASAAIAAAIQAJgKALABQAPAAALAKQAKALAAAQQAAAPgKALQgLALgPAAQgMAAgHgKIAAAlgAgOgbQgEAGAAAIQAAAIAEAGQAGAFAIAAQAIAAAEgGQAFgFABgIQgBgIgFgFQgEgHgIAAQgIABgGAFg");
	this.shape_12.setTransform(762.6116,703.8869,0.5884,0.5884);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgYAbQgLgKAAgRQABgQAJgKQALgLAOAAQAQAAAKALQAKAKgBAQIAAAGIgyAAQADAPAOAAQAKAAAJgHIALANQgLALgUAAQgPAAgKgLgAgPgGIAfAAQgDgOgNAAQgMAAgDAOg");
	this.shape_13.setTransform(757.8163,703.0779,0.5884,0.5884);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgYAbQgLgKAAgRQABgQAJgKQALgLAOAAQAQAAAJALQALAKgBAQIAAAGIgyAAQADAPAOAAQAKAAAJgHIALANQgLALgUAAQgPAAgKgLgAgPgGIAfAAQgDgOgNAAQgMAAgDAOg");
	this.shape_14.setTransform(753.3152,703.0779,0.5884,0.5884);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgYAlIAAhHIATAAIAAAIQAFgKAOAAQAGAAAFAEIgKAPIgGAAQgOAAAAAQIAAAmg");
	this.shape_15.setTransform(750.0203,703.019,0.5884,0.5884);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgNA2IAAg2IgOAAIAAgQIAOAAIAAgJQAAgNAGgIQAHgHAMAAQAJAAAGADIAAARQgHgDgGABQgIABAAAJIAAAJIAVAAIAAAQIgVAAIAAA2g");
	this.shape_16.setTransform(746.49,701.9894,0.5884,0.5884);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag7AgIgBgMQAAgYASgRQASgSAYAAQAXAAARAPQARAPADAVIABAGQgXATgrACIgRABQgaAAgLgIgAgigFQgFAFAAAHQAAAHAFAGQAGAFAHAAQAIAAAFgFQAGgGAAgHQAAgHgGgFQgFgGgIAAQgHAAgGAGgAAQgGQgEAEAAAFQAAAFAEAEQAEAEAGAAQAFAAAEgEQAEgEAAgFQAAgFgEgEQgEgEgFAAQgGAAgEAEg");
	this.shape_17.setTransform(738.7047,701.2523,0.5884,0.5884);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AghAOQgPgJgIgNIANADQAMACANAAIALAAQAUgBATgGQANgEAMgIQgGAUgQAMQgRAMgUAAQgRABgOgJg");
	this.shape_18.setTransform(738.8223,704.262,0.5884,0.5884);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgQgKIAEgHQAIAGAFAGIAEgEQAAgFAFgBQAGAAABAFQABAHgGAAIgCAAIgEADIAJAPIgGADQgJgSgQgKg");
	this.shape_19.setTransform(741.8858,699.7463,0.5884,0.5884);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgYAKQAJgEAMgDIgBgFQgEgBAAgEQgBgHAHgBQAGgBABAHQABADgDADIAAAGIAFgBIARACIgCAIIgPgCQgPAAgOAHg");
	this.shape_20.setTransform(738.2046,697.8745,0.5884,0.5884);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgHATQABgKADgIIgEgBIgBAAQgHAAAAgFQAAgGAFgBQAFAAABAFIAEADQAGgKAGgFIAFAFQgPAPgCATg");
	this.shape_21.setTransform(734.8068,700.5406,0.5884,0.5884);

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

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#606060").p("AiEAAQAAA3AnAnQAnAmA2AAQA3AAAmgmQAognAAg3QAAg2gognQgmgmg3AAQg2AAgnAmQgnAnAAA2g");
	this.shape_22.setTransform(1118.3635,518.5121,0.3268,0.3267);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#606060").p("AiEAAQAAA3AoAmQAnAoA1AAQA3AAAngoQAngmAAg3QAAg2gngnQgngng3AAQg1AAgnAnQgoAoAAA1g");
	this.shape_23.setTransform(1114.3114,495.261,0.3268,0.3267);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#606060").p("AiEAAQAAA3AoAnQAmAmA2AAQA3AAAngmQAngnAAg3QAAg2gngnQgngmg3AAQg2AAgmAmQgoAnAAA2g");
	this.shape_24.setTransform(1106.632,481.3038,0.3268,0.3267);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#606060").p("Ai+AAQAABPA4A4QA4A4BOAAQBPAAA4g4QA4g4AAhPQAAhOg4g4Qg4g4hPAAQhOAAg4A4Qg4A4AABOg");
	this.shape_25.setTransform(1124.6132,505.0613,0.3268,0.3267);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#606060").p("AiWC0QBKA/BhgJQBhgIA+hLQA/hKgJhgQgJhihKg+QhLg/hgAJQhhAJg+BKQg/BLAJBgQAIBhBLA+g");
	this.shape_26.setTransform(1124.1394,483.5415,0.3268,0.3267);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#606060").p("Ai+AAQAABPA4A4QA4A4BOAAQBPAAA4g4QA4g4AAhPQAAhOg4g4Qg4g4hPAAQhOAAg4A4Qg4A4AABOg");
	this.shape_27.setTransform(1104.0586,465.4274,0.3268,0.3267);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AlBRyQlYiDjXkFQhdhxhEiIQgshYgdhaQgihpgUiAQgmj3AtjCQBKk8ErjxQEpjvGihTIAWAAQD7AADmBiQDeBeCsCrQCrCrBeDfQBhDmAAD6QAADshVDZQhSDRiXCoQiXCnjHBoQjMBqjlAZQjRgWjFhLg");
	this.shape_28.setTransform(1099.5279,494.2483,0.3268,0.3267);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#CCCCCC").s().p("ABER1QjcheisirQisirhdjfQhijnAAj7QAAj5BgjkQBcjcCoirQCoirDahgQDhhjD5gEQmiBTknDvQksDxhKE8QgtDCAmD3QAUCAAiBpQAdBaAtBYQBDCIBdBxQDXEFFXCDQDFBLDSAWQhIAIhBAAQj8AAjnhig");
	this.shape_29.setTransform(1079.8196,494.379,0.3268,0.3267);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").p("ECO2BQKMkdrAAAMAAAigTMEdrAAAg");
	this.shape_30.setTransform(970.8582,548.2188,0.3268,0.3266);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#11003F").s().p("EiO1BQKMAAAigTMEdrAAAMAAACgTg");
	this.shape_31.setTransform(970.8582,548.2188,0.3268,0.3266);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(1,1,1).p("AlDA3ICalzIGQAgIBeGHIlXDSg");
	this.shape_32.setTransform(976.85,626.925);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFF99").s().p("AlEA3ICalzIGRAgIBdGHIlWDSg");
	this.shape_33.setTransform(976.85,626.925);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(17,0,63,0)").s().p("EiO1BQKMAAAigTMEdrAAAMAAACgTg");
	this.shape_34.setTransform(335.1251,419.7912,0.3163,0.3162);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").p("EgtKgZVMBaVAAAMAAAAyrMhaVAAAg");
	this.shape_35.setTransform(335.125,419.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(17,0,63,0.039)").s().p("EgtKAZWMAAAgyrMBaVAAAMAAAAyrg");
	this.shape_36.setTransform(335.125,419.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(17,0,63,0.078)").s().p("EgtKAZWMAAAgyrMBaVAAAMAAAAyrg");
	this.shape_37.setTransform(335.125,419.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(17,0,63,0.122)").s().p("EgtKAZWMAAAgyrMBaVAAAMAAAAyrg");
	this.shape_38.setTransform(335.125,419.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(17,0,63,0.161)").s().p("EgtKAZWMAAAgyrMBaVAAAMAAAAyrg");
	this.shape_39.setTransform(335.125,419.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(17,0,63,0.2)").s().p("EgtKAZWMAAAgyrMBaVAAAMAAAAyrg");
	this.shape_40.setTransform(335.125,419.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(17,0,63,0.239)").s().p("EgtKAZWMAAAgyrMBaVAAAMAAAAyrg");
	this.shape_41.setTransform(335.125,419.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(17,0,63,0.278)").s().p("EgtKAZWMAAAgyrMBaVAAAMAAAAyrg");
	this.shape_42.setTransform(335.125,419.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(17,0,63,0.322)").s().p("EgtKAZWMAAAgyrMBaVAAAMAAAAyrg");
	this.shape_43.setTransform(335.125,419.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(17,0,63,0.361)").s().p("EgtKAZWMAAAgyrMBaVAAAMAAAAyrg");
	this.shape_44.setTransform(335.125,419.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(17,0,63,0.4)").s().p("EgtKAZWMAAAgyrMBaVAAAMAAAAyrg");
	this.shape_45.setTransform(335.125,419.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(17,0,63,0.439)").s().p("EgtKAZWMAAAgyrMBaVAAAMAAAAyrg");
	this.shape_46.setTransform(335.125,419.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(17,0,63,0.478)").s().p("EgtKAZWMAAAgyrMBaVAAAMAAAAyrg");
	this.shape_47.setTransform(335.125,419.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(17,0,63,0.522)").s().p("EgtKAZWMAAAgyrMBaVAAAMAAAAyrg");
	this.shape_48.setTransform(335.125,419.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(17,0,63,0.561)").s().p("EgtKAZWMAAAgyrMBaVAAAMAAAAyrg");
	this.shape_49.setTransform(335.125,419.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(17,0,63,0.6)").s().p("EgtKAZWMAAAgyrMBaVAAAMAAAAyrg");
	this.shape_50.setTransform(335.125,419.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(17,0,63,0.639)").s().p("EgtKAZWMAAAgyrMBaVAAAMAAAAyrg");
	this.shape_51.setTransform(335.125,419.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(17,0,63,0.678)").s().p("EgtKAZWMAAAgyrMBaVAAAMAAAAyrg");
	this.shape_52.setTransform(335.125,419.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(17,0,63,0.722)").s().p("EgtKAZWMAAAgyrMBaVAAAMAAAAyrg");
	this.shape_53.setTransform(335.125,419.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(17,0,63,0.761)").s().p("EgtKAZWMAAAgyrMBaVAAAMAAAAyrg");
	this.shape_54.setTransform(335.125,419.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(17,0,63,0.8)").s().p("EgtKAZWMAAAgyrMBaVAAAMAAAAyrg");
	this.shape_55.setTransform(335.125,419.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(17,0,63,0.839)").s().p("EgtKAZWMAAAgyrMBaVAAAMAAAAyrg");
	this.shape_56.setTransform(335.125,419.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(17,0,63,0.878)").s().p("EgtKAZWMAAAgyrMBaVAAAMAAAAyrg");
	this.shape_57.setTransform(335.125,419.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(17,0,63,0.922)").s().p("EgtKAZWMAAAgyrMBaVAAAMAAAAyrg");
	this.shape_58.setTransform(335.125,419.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(17,0,63,0.961)").s().p("EgtKAZWMAAAgyrMBaVAAAMAAAAyrg");
	this.shape_59.setTransform(335.125,419.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31,p:{scaleX:0.3268,scaleY:0.3266,x:970.8582,y:548.2188}},{t:this.shape_30,p:{scaleX:0.3268,scaleY:0.3266,x:970.8582,y:548.2188}},{t:this.shape_29,p:{scaleX:0.3268,scaleY:0.3267,x:1079.8196,y:494.379}},{t:this.shape_28,p:{scaleX:0.3268,scaleY:0.3267,x:1099.5279,y:494.2483}},{t:this.shape_27,p:{scaleX:0.3268,scaleY:0.3267,x:1104.0586,y:465.4274}},{t:this.shape_26,p:{scaleX:0.3268,scaleY:0.3267,x:1124.1394,y:483.5415}},{t:this.shape_25,p:{scaleX:0.3268,scaleY:0.3267,x:1124.6132,y:505.0613}},{t:this.shape_24,p:{scaleX:0.3268,scaleY:0.3267,x:1106.632,y:481.3038}},{t:this.shape_23,p:{scaleX:0.3268,scaleY:0.3267,x:1114.3114,y:495.261}},{t:this.shape_22,p:{scaleX:0.3268,scaleY:0.3267,x:1118.3635,y:518.5121}},{t:this.instance_6,p:{regX:490.7,regY:75.9,scaleX:0.3268,scaleY:0.3267,x:985.55,y:573.25}},{t:this.instance_5,p:{regX:23.9,regY:24.4,scaleX:1,scaleY:1,x:1223.7,y:627.6}},{t:this.instance_4,p:{regX:24.1,regY:24.6,scaleX:1.4897,scaleY:1.4897,x:877.45,y:480.6}},{t:this.instance_3,p:{regX:24.2,regY:24.7,scaleX:0.8808,scaleY:0.8808,x:1039.95,y:426.45}},{t:this.instance_2,p:{regX:24.2,regY:24.8,scaleX:0.8808,scaleY:0.8808,x:830,y:623.35}},{t:this.instance_1,p:{regX:24.2,regY:24.8,scaleX:0.8808,scaleY:0.8808,x:1267.55,y:464.65}},{t:this.instance,p:{regX:24.3,regY:24.8,scaleX:0.8807,scaleY:0.8807,x:787.85,y:408.65}},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},2).to({state:[{t:this.shape_34},{t:this.shape_30,p:{scaleX:0.3163,scaleY:0.3162,x:335.1251,y:419.7912}}]},666).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_37},{t:this.shape_35}]},1).to({state:[{t:this.shape_38},{t:this.shape_35}]},1).to({state:[{t:this.shape_39},{t:this.shape_35}]},1).to({state:[{t:this.shape_40},{t:this.shape_35}]},1).to({state:[{t:this.shape_41},{t:this.shape_35}]},1).to({state:[{t:this.shape_42},{t:this.shape_35}]},1).to({state:[{t:this.shape_43},{t:this.shape_35}]},1).to({state:[{t:this.shape_44},{t:this.shape_35}]},1).to({state:[{t:this.shape_45},{t:this.shape_35}]},1).to({state:[{t:this.shape_46},{t:this.shape_35}]},1).to({state:[{t:this.shape_47},{t:this.shape_35}]},1).to({state:[{t:this.shape_48},{t:this.shape_35}]},1).to({state:[{t:this.shape_49},{t:this.shape_35}]},1).to({state:[{t:this.shape_50},{t:this.shape_35}]},1).to({state:[{t:this.shape_51},{t:this.shape_35}]},1).to({state:[{t:this.shape_52},{t:this.shape_35}]},1).to({state:[{t:this.shape_53},{t:this.shape_35}]},1).to({state:[{t:this.shape_54},{t:this.shape_35}]},1).to({state:[{t:this.shape_55},{t:this.shape_35}]},1).to({state:[{t:this.shape_56},{t:this.shape_35}]},1).to({state:[{t:this.shape_57},{t:this.shape_35}]},1).to({state:[{t:this.shape_58},{t:this.shape_35}]},1).to({state:[{t:this.shape_59},{t:this.shape_35}]},1).to({state:[{t:this.shape_31,p:{scaleX:0.3163,scaleY:0.3162,x:335.1251,y:419.7912}},{t:this.shape_30,p:{scaleX:0.3163,scaleY:0.3162,x:335.1251,y:419.7912}}]},1).to({state:[{t:this.shape_31,p:{scaleX:0.3163,scaleY:0.3162,x:346.117,y:413.8646}},{t:this.shape_30,p:{scaleX:0.3163,scaleY:0.3162,x:346.117,y:413.8646}},{t:this.shape_29,p:{scaleX:0.3163,scaleY:0.3162,x:451.5645,y:361.7637}},{t:this.shape_28,p:{scaleX:0.3163,scaleY:0.3162,x:470.6425,y:361.6372}},{t:this.shape_27,p:{scaleX:0.3163,scaleY:0.3162,x:475.0283,y:333.7384}},{t:this.shape_26,p:{scaleX:0.3163,scaleY:0.3162,x:494.4667,y:351.273}},{t:this.shape_25,p:{scaleX:0.3163,scaleY:0.3162,x:494.9254,y:372.1042}},{t:this.shape_24,p:{scaleX:0.3163,scaleY:0.3162,x:477.5194,y:349.1069}},{t:this.shape_23,p:{scaleX:0.3163,scaleY:0.3162,x:484.9531,y:362.6175}},{t:this.shape_22,p:{scaleX:0.3163,scaleY:0.3162,x:488.8756,y:385.1247}},{t:this.instance_6,p:{regX:492.1,regY:81,scaleX:0.3161,scaleY:0.316,x:361.05,y:428.7}},{t:this.instance_5,p:{regX:24.9,regY:25.3,scaleX:0.9685,scaleY:0.9685,x:591.8,y:491.8}},{t:this.instance_4,p:{regX:24.7,regY:25.2,scaleX:1.4427,scaleY:1.4427,x:256.3,y:349.35}},{t:this.instance_3,p:{regX:25.3,regY:25.8,scaleX:0.853,scaleY:0.853,x:413.75,y:297}},{t:this.instance_2,p:{regX:25.1,regY:25.8,scaleX:0.8529,scaleY:0.8529,x:210.3,y:487.7}},{t:this.instance_1,p:{regX:25.3,regY:25.9,scaleX:0.8529,scaleY:0.8529,x:634.25,y:334}},{t:this.instance,p:{regX:24.9,regY:25.9,scaleX:0.8529,scaleY:0.8529,x:169.35,y:279.75}}]},1).wait(2));

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
	this.replaybutton.setTransform(280.9,446.9,0.3493,0.3493,0,0,0,2.5,2.3);
	new cjs.ButtonHelper(this.replaybutton, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.playbutton}]}).to({state:[]},2).to({state:[{t:this.replaybutton}]},692).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_eyes = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// eyes
	this.instance = new lib.eye("synched",0);
	this.instance.setTransform(350.1,652.95,0.9746,0.9735,0,0,0,97,91.4);

	this.instance_1 = new lib.eye("synched",0);
	this.instance_1.setTransform(353.2,624,0.9761,0.9761,0,0,0,67,61.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},169).wait(527));

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
	this.instance.filters = [new cjs.ColorFilter(0.3, 0.3, 0.3, 1, 0, 0, 0, 0)];
	this.instance.cache(-2,-2,111,100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:59.85},0).wait(1).to({x:66.3},0).wait(1).to({x:72.8},0).wait(1).to({x:79.25},0).wait(1).to({x:85.7},0).wait(1).to({x:92.2},0).wait(1).to({x:98.65},0).wait(1).to({x:105.15},0).wait(1).to({x:100.05},0).wait(1).to({x:95},0).wait(1).to({x:89.95},0).wait(1).to({x:84.9},0).wait(1).to({x:79.85},0).wait(1).to({x:74.75},0).wait(1).to({x:69.7},0).wait(1).to({x:64.65},0).wait(1).to({x:59.6},0).wait(1).to({x:54.55},0).wait(1).to({x:47.65},0).wait(1).to({x:40.75},0).wait(1).to({x:33.85},0).wait(1).to({x:26.95},0).wait(1).to({x:20.05},0).wait(1).to({x:13.15},0).wait(1).to({x:6.25},0).wait(1).to({x:-0.65},0).wait(1).to({x:-7.55},0).wait(1).to({x:-14.45},0).wait(1).to({x:-8.8},0).wait(1).to({x:-3.15},0).wait(1).to({x:2.5},0).wait(1).to({x:8.1},0).wait(1).to({x:13.75},0).wait(1).to({x:19.4},0).wait(1).to({x:25},0).wait(1).to({x:30.65},0).wait(1).to({x:36.3},0).wait(1).to({x:41.9},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.8,-0.1,226.3,96.3);


(lib.pillow = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Path_1_7();
	this.instance.setTransform(280.3,138.4,2.0903,2.0903,0,0,0,12.1,15.3);
	this.instance.alpha = 0.3008;
	this.instance.compositeOperation = "screen";

	this.instance_1 = new lib.Path_2_8();
	this.instance_1.setTransform(250.55,79.75,2.0903,2.0903,0,0,0,22.9,16.4);
	this.instance_1.alpha = 0.3008;
	this.instance_1.compositeOperation = "screen";

	this.instance_2 = new lib.Path_3_7();
	this.instance_2.setTransform(214.2,135.15,2.0903,2.0903,0,0,0,16.5,8.7);
	this.instance_2.alpha = 0.5;
	this.instance_2.compositeOperation = "screen";

	this.instance_3 = new lib.Group_5();
	this.instance_3.setTransform(213.8,137.65,2.0903,2.0903,0,0,0,42.4,19.9);
	this.instance_3.alpha = 0.5;
	this.instance_3.compositeOperation = "multiply";

	this.instance_4 = new lib.Group_1_0();
	this.instance_4.setTransform(207.3,126.7,2.0903,2.0903,0,0,0,50.4,26.4);
	this.instance_4.compositeOperation = "multiply";

	this.instance_5 = new lib.Group_2_0();
	this.instance_5.setTransform(215.85,141.85,2.0903,2.0903,0,0,0,27.2,16.7);
	this.instance_5.compositeOperation = "multiply";

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAF1FF").s().p("AjEAcQBrhNBEgbQA9gZB7gXQB8gZAegLQBKgdAfgDQhRBigoBAQgoBBghAkQgzA4hCAcQg5AYjNAFQjwAEgeAFQBZg+CIhng");
	this.shape.setTransform(214.2466,137.9534,2.0903,2.0903);

	this.instance_6 = new lib.Group_3();
	this.instance_6.setTransform(157.8,93.85,2.0903,2.0903,0,0,0,75.4,44.9);
	this.instance_6.compositeOperation = "multiply";

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFB000","#FFB80C","#FFCC2D","#FFE95C","#FFE967","#FFE983","#FFE9B1","#FFE9D9"],[0,0.122,0.345,0.608,0.667,0.769,0.898,1],-8.2,-12.3,0,-8.2,-12.3,102.3).s().p("ABYG9QhTgChygJQhXgHgjACQgtACgOgOQgNgNAPgeQgIg0iYiTQh1hwhZhEQgrgggbg+Qgag5gIgEQgmgXAagJQAagKAmAPQBuitCVg4QB7guCyAaQD7AeDhB0QCjBTCOB8QAhAdAVAJQAKADAyAJQAjAHgDAYQgCAMgIALQgiAfgdAYQgTAPgcAvIhEB4QhHCAifAoQhOAUiGAAIg/gBg");
	this.shape_1.setTransform(164.0625,94.6193,2.0903,2.0903);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance_6},{t:this.shape},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,327.4,187.9);


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
	this.instance._off = true;
	this.instance.filters = [new cjs.ColorFilter(0.25, 0.25, 0.25, 1, 0, 0, 0, 0)];
	this.instance.cache(-4,-2,168,195);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).wait(94).to({regX:79.5,regY:95.1,rotation:3.4091,x:79.45,y:107.95},0).wait(1).to({rotation:6.8181,x:79.5,y:120.75},0).wait(1).to({rotation:10.2272,x:79.6,y:133.55},0).wait(1).to({rotation:13.6363,x:79.65,y:146.4},0).wait(1).to({rotation:17.0453,x:79.7,y:159.2},0).wait(1).to({rotation:20.4544,x:79.8,y:172.1},0).wait(1).to({rotation:23.8635,x:79.95,y:184.9},0).wait(1).to({rotation:27.2725,y:197.85},0).wait(1).to({rotation:30.6816,x:80.05,y:210.65},0).wait(1).to({rotation:34.0907,x:80.25,y:223.5},0).wait(1).to({rotation:37.4998,x:80.3,y:236.4},0).wait(1).to({rotation:40.9088,x:80.45,y:249.25},0).wait(1).to({rotation:44.3179,x:80.6,y:262.2},0).wait(1).to({rotation:47.727,x:80.8,y:275.05},0).wait(1).to({rotation:51.136,x:80.9,y:287.95},0).wait(1).to({rotation:54.5451,x:81.05,y:300.85},0).wait(1).to({rotation:57.9542,x:81.2,y:313.8},0).wait(1).to({rotation:61.3632,x:81.35,y:326.7},0).wait(1).to({rotation:64.7723,x:81.5,y:339.65},0).wait(1).to({rotation:68.1814,x:81.65,y:352.6},0).wait(1).to({rotation:71.5904,x:81.8,y:365.6},0).wait(1).to({rotation:74.9995,x:82,y:378.5},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.7,-0.3,202.1,442.8);


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
	this.instance.filters = [new cjs.ColorFilter(0.25, 0.25, 0.25, 1, 0, 0, 0, 0)];
	this.instance.cache(-2,-2,509,484);

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
	this.instance = new lib.Symbol7();
	this.instance.setTransform(429.35,123.1,1,1,0,0,0,430.2,123.3);
	this.instance.filters = [new cjs.ColorFilter(0.3, 0.3, 0.3, 1, 0, 0, 0, 0)];
	this.instance.cache(2,-3,752,251);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:377.5,regY:122.5,scaleY:0.9924,x:376.65,y:122.25},0).wait(1).to({scaleY:0.9849,y:122.3},0).wait(1).to({scaleY:0.9773,y:122.25},0).wait(1).to({scaleY:0.9698,y:122.3},0).wait(1).to({scaleY:0.9622},0).wait(1).to({scaleY:0.9547},0).wait(1).to({scaleY:0.9471},0).wait(1).to({scaleY:0.9396},0).wait(1).to({scaleY:0.932},0).wait(1).to({scaleY:0.9245,y:122.35},0).wait(1).to({scaleY:0.9169,y:122.3},0).wait(1).to({scaleY:0.9238},0).wait(1).to({scaleY:0.9308},0).wait(1).to({scaleY:0.9377},0).wait(1).to({scaleY:0.9446},0).wait(1).to({scaleY:0.9515},0).wait(1).to({scaleY:0.9585},0).wait(1).to({scaleY:0.9654},0).wait(1).to({scaleY:0.9723},0).wait(1).to({scaleY:0.9792},0).wait(1).to({scaleY:0.9862},0).wait(1).to({scaleY:0.9931},0).wait(1).to({scaleY:1},0).wait(1));

	// Layer_2
	this.instance_1 = new lib.pillow("synched",0);
	this.instance_1.setTransform(697,140.1,1,1,0,0,0,163.7,94);
	this.instance_1.filters = [new cjs.ColorFilter(0.3, 0.3, 0.3, 1, 0, 0, 0, 0)];
	this.instance_1.cache(-2,-2,331,192);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.9,-1.1,857.8000000000001,246.9);


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
	this.instance = new lib.Path_0();
	this.instance.setTransform(35.6,22.1,1,1,0,0,0,35.6,22.1);
	this.instance.compositeOperation = "screen";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_4, new cjs.Rectangle(0,0,71.4,44.1), null);


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

	// eye
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF1010").s().p("AgkAkQgPgOAAgWQAAgUAPgPQAPgPAVgBQAVABAPAPQAPAPABAUQgBAWgPAOQgPAQgVAAQgVAAgPgQg");
	this.shape.setTransform(81.95,100.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF1010").s().p("AgjAlQgQgPABgWQgBgUAQgPQAPgQAUABQAWgBAPAQQAOAPAAAUQAAAWgOAPQgPAOgWAAQgUAAgPgOg");
	this.shape_1.setTransform(107.2,86.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF1010").s().p("AgSApQgSgCgIgNQgHgOAIgPQAHgQAUgLQARgLASACQASABAHANQAIAMgIARQgHAQgTALQgQAKgPAAIgFAAg");
	this.shape_2.setTransform(107.2116,86.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF1010").s().p("AgSApQgSgCgIgNQgHgNAHgQQAIgRASgLQASgKASACQATABAHANQAIAOgIAPQgHARgTALQgQAJgOAAIgGAAg");
	this.shape_3.setTransform(82.05,100.3994);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF1010").s().p("AgpAXQgIgHAGgLQAGgKASgJQARgKAQgCQATgCAIAHQAJAGgGALQgGALgRAJQgRAKgSABIgIABQgMAAgHgFg");
	this.shape_4.setTransform(107.3247,86.1906);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF1010").s().p("AgnAbQgJgHAFgOQAFgMAQgLQAQgLASgCQASgDAJAHQAKAHgFANQgFANgRALQgRALgQACIgKABQgLAAgHgFg");
	this.shape_5.setTransform(82.1083,100.4729);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF1010").s().p("AgqAQQgHgDAGgHQAHgGASgGQASgGAQgDQATgDAIAEQAHADgGAGQgHAGgRAGQgSAHgRACIgPABQgIAAgEgBg");
	this.shape_6.setTransform(107.3269,86.1752);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF1010").s().p("AgiAdQgJgBAEgJQADgJAPgLQAPgMAPgIQARgIAJABQAJABgEAJQgEAJgPALQgOAMgQAIQgPAHgIAAIgCAAg");
	this.shape_7.setTransform(82.1108,100.475);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF1010").s().p("AgqAMIAagKIAhgKIAZgFQAIgBgHADIgZAJIgiALIgaAFIgCAAQgBAAAAAAQAAAAAAAAQAAgBABAAQABgBABAAg");
	this.shape_8.setTransform(107.3258,86.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF1010").s().p("AgmAUIAVgMIAggRIAYgLQAHgDgGAEIgYAMIgeAQIgYAMIgEABIAEgCg");
	this.shape_9.setTransform(82.15,100.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},118).to({state:[{t:this.shape_3,p:{scaleY:1,skewX:0,skewY:0,x:82.05,y:100.3994}},{t:this.shape_2,p:{scaleY:1,rotation:0,x:107.2116,y:86.1}}]},9).to({state:[{t:this.shape_5},{t:this.shape_4}]},2).to({state:[{t:this.shape_7},{t:this.shape_6}]},3).to({state:[{t:this.shape_2,p:{scaleY:0.0852,rotation:-16.0102,x:107.3198,y:86.1802}},{t:this.shape_3,p:{scaleY:0.0378,skewX:-42.056,skewY:-27.2962,x:82.1536,y:100.393}}]},7).to({state:[{t:this.shape_9},{t:this.shape_8}]},18).to({state:[{t:this.shape_7},{t:this.shape_6}]},8).to({state:[{t:this.shape_5},{t:this.shape_4}]},4).to({state:[{t:this.shape_3,p:{scaleY:1,skewX:0,skewY:0,x:82.05,y:100.3994}},{t:this.shape_2,p:{scaleY:1,rotation:0,x:107.2116,y:86.1}}]},2).to({state:[{t:this.shape_1},{t:this.shape}]},2).wait(8));

	// Layer_1
	this.instance = new lib.Path_30();
	this.instance.setTransform(139.65,250.55,2.0908,2.0908,0,0,0,25.5,25.3);
	this.instance.alpha = 0.3203;
	this.instance.compositeOperation = "multiply";

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#371C40").s().p("AkJguQgDhgAphFQBhgVBEgyQBDADBFAmQBiA3BfB9IgpA9Qg0BHg8A2IgBAAIAAAAQhEA8hfA4QgxAbgiAPQiAivgEiag");
	this.shape_10.setTransform(140.2685,248.5729,2.0908,2.0908);

	this.instance_1 = new lib.dolllegs();
	this.instance_1.setTransform(140.2,305.15,1,1,0,0,0,36.1,39.1);

	this.instance_2 = new lib.Path_26();
	this.instance_2.setTransform(102.8,172.7,2.0899,2.0899,0,0,0,34,16.4);
	this.instance_2.alpha = 0.3203;
	this.instance_2.compositeOperation = "multiply";

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#403D0E").s().p("AgPFgQgOgChHgPIgFgEIihlIIilDeIkNizIEAkGQA5grBFgKIC2gbQAzAzBIgUQA2gPAYgtIC7gcQBEgKBEAYIE5C7IjHDvIjdikIg+GQQgWACgxAPQgvAOgeACIgYABQgcAAgigFg");
	this.shape_11.setTransform(102.975,169.6353);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#593E31").s().p("AAWCJQgFgEABgMIACgKQgNAdgHgJQgFgFAGgNIAHgMQgFAEgGADQgMAFgGgIQgDgGAMgIIAMgHIhDi9IA/ghIAlDUIAWASQAUATgLAGQgGABgJgJQANAfgNgFQgIgEgEgKIgDgKQgBAcgHAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_12.setTransform(170.1252,189.6491,2.0908,2.0908);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#593E31").s().p("AgzBlQgBAVgJAEQgNAFAJgiQgIARgNABQgJABAHgNIAJgMQgLAFgFgDQgJgIAZgMQANgGAOgEIBli+IAyAzIh7CfQAWAUgIAGQgIAGgKgJIgJgKQAJAZgKAGIgDABQgIAAgCgbg");
	this.shape_13.setTransform(35.3172,199.2777,2.0908,2.0908);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#660000").s().p("AhAg3ICBAYIgxBXg");
	this.shape_14.setTransform(112.7962,53.6618,2.0908,2.0908);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#660000").s().p("AhDANIBUhOIAzCDg");
	this.shape_15.setTransform(89.8695,32.6283,2.0908,2.0908);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#330000").s().p("AhOA6QgigVgbglIgUghQCihVBfA6QAvAdAPAtQhSBHhIAAQgsAAgogbg");
	this.shape_16.setTransform(103.7537,57.2036,2.0908,2.0908);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#660000").s().p("AgxA5IAlh1IA+B5g");
	this.shape_17.setTransform(50.4916,83.9256,2.0908,2.0908);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#660000").s().p("Ag3goIBvghIghCTg");
	this.shape_18.setTransform(43.5921,57.6343,2.0908,2.0908);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#330000").s().p("AhgA6QgBhvCchgIASAjQASAqACAoQAEB/ikA3QggglgBg3g");
	this.shape_19.setTransform(59.1278,80.7372,2.0908,2.0908);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#660000").s().p("Ag5ATIAaANQAfAKAVgMQAWgNAHgfIABgdQAPAcgTAcQgKAPgNAIQgOAHgQABIgFAAQgfAAgPgZg");
	this.shape_20.setTransform(100.0449,104.2726,2.0908,2.0908);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#593E31").s().p("AhLDJQhXgQgohGQgnhGAfhSQAghTBUgwQBUgvBWAQQBXAPAoBGQAnBGgfBSQggBThUAwQg/AjhAAAQgVAAgWgDg");
	this.shape_21.setTransform(92.3068,89.1297,2.0908,2.0908);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#330000").s().p("ABDCuQgwgBgChFIgBg+QgEglgNgVQghgzg3AOQg2AOgXA3QgBgwATgwQAnhgBnADQA1ACAhAgQA/A+gfBNQgLAbgCAZQgBAaAIAKQARATAsggQABAagMAZQgXAwg/AAIgDAAg");
	this.shape_22.setTransform(135.4409,45.761,2.0908,2.0908);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#330000").s().p("ABkGDQgjgDglgRIgcgQQBmgsgPgyQgKgagwgZQgvgZg8gKQisgcgriyQgWhdA2hjQBpi9DVAiQBsASBWA3Qh+gShRBQQhUBUA2BxQAZAyA+AtQAFAEBpBCQA9AnARAeQAYAqgeA0Qg+BuhlAAIgUgBg");
	this.shape_23.setTransform(30.0149,105.8596);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#593429").s().p("Ah1h6IC0gtIA3EiIizAtg");
	this.shape_24.setTransform(98.275,130.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#593E31").s().p("AhFDpQgFAlgZAMQgSAHAHgdIAJgfQgSASgMgCQgXgLAqgoQAUgUAZgSIBLm+ICFBEIiLGPQA4AZgLARQgLASgbgLIgWgOQAgAsgPASQgQATgbg9QANAqgQANQgFAEgEAAQgPAAgDg6g");
	this.shape_25.setTransform(43.3931,199.7305);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#330000").s().p("AAwC5QgRgBgSgIIgNgIQAxgVgIgYQgEgMgXgMQgWgMgdgFQhSgNgVhVQgKgsAagwQAyhaBlAQQA0AJApAaQg8gJgnAnQgoAoAaA2QAMAXAdAWIA1AhQAdATAIAOQAMAUgPAZQgdA1gxAAIgJgBg");
	this.shape_26.setTransform(30.009,105.8718,2.0908,2.0908);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF1010").s().p("AiqBlQACgIAQgNQAQgMATgKQAUgKAMAAQANgBgCAJQgDAIgPAMQgQANgUAKQgTAJgNABIgBAAQgMAAADgIgABdgmQAEgMAOgRQAPgQAQgMQAQgMAIgBQAJAAgFALQgFAMgOARQgPAQgQAMQgQAMgIABQgIgBAFgKg");
	this.shape_27.setTransform(94.4724,93.0254);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF1010").s().p("AgGAaQgLgDgFgKQgFgJACgKQADgKAKgGQAJgFAKADQAKADAGAJQAFAKgDAJQgDALgJAFQgHADgGAAIgGAAg");
	this.shape_28.setTransform(107.6138,86.2147,2.0907,0.3155,0,135,-44.9991);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF1010").s().p("AgGAaQgKgDgGgKQgFgKADgJQADgKAJgGQAKgFAJADQALADAFAJQAFAKgDAJQgDALgJAFQgHADgGAAIgGAAg");
	this.shape_29.setTransform(82.1373,100.8748,2.0907,0.3156,-29.9992);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF1010").s().p("AgiAiQgPgCABgLQABgMAOgNQAPgOATgJQAVgIANACQAPACgBAMQgBALgOANQgPAPgTAJQgPAGgMAAIgHgBg");
	this.shape_30.setTransform(107.525,86.1357);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF1010").s().p("AgiAiQgPgCABgLQABgMAOgNQAPgOATgJQAVgIANACQAPACgBAMQgBALgOANQgPAPgTAJQgPAGgMAAIgHgBg");
	this.shape_31.setTransform(82.175,100.8357);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF1010").s().p("AgjAlQgQgPABgWQgBgUAQgPQAPgQAUABQAWgBAPAQQAOAPAAAUQAAAWgOAPQgPAOgWAAQgUAAgPgOg");
	this.shape_32.setTransform(81.95,100.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF1010").s().p("AgjAlQgQgPABgWQgBgUAQgPQAPgQAUABQAWgBAPAQQAOAPAAAUQAAAWgOAPQgPAOgWAAQgUAAgPgOg");
	this.shape_33.setTransform(107.2,86.05);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#371C40").s().p("AkJgtQgDhfAphFQBfgWBJg0QBBACBFAoQBhA4BfB9IgpA8Qg0BIg8A2IgBAAIAAAAQhEA9hfA3QgxAbgiAPQiAivgEiag");
	this.shape_34.setTransform(140.2685,248.3115,2.0908,2.0908);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#593E31").s().p("AieGjQi2gghTiSQhTiTBCisQBCivCwhjQCvhjC2AhQC2AgBTCTQBTCShCCtQhCCtiwBkQiEBKiHAAQgtAAgtgIg");
	this.shape_35.setTransform(92.3,89.1281);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#371C40").s().p("AkJgvQgDhgAphFQAugKAfgMQAwgSAngdQCpAHChDTIgpA9Qg0BHg8A2IgBABIAAAAQhEA8hfA3QgxAcgiAPQiAivgEiag");
	this.shape_36.setTransform(140.2685,248.8342,2.0908,2.0908);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#403D0E").s().p("AgOFgQgPgChHgPIgEgEIiilIIilDdIkOiyIEBkHQA6grBFgJIC1gbQAzAzBJgVQA1gPAYgtIC7gcQBEgJBEAYIE5C7IjHDuIjcikIg+GRQgXACgwAOQgwAPgeACIgWABQgeAAghgFg");
	this.shape_37.setTransform(103.3,170.0082);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#660000").s().p("Ag5ATIAXAKQAcAHAVgMQAWgNAKgcIAEgaQAPAcgTAcQgKAPgNAIQgOAHgQABIgFAAQgfAAgPgZg");
	this.shape_38.setTransform(100.0448,104.2726,2.0908,2.0908);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF1010").s().p("AiiBsQgPgPAAgWQAAgVAPgPQAPgPAWAAQAVAAAPAPQAPAPAAAVQAAAWgPAPQgPAPgVAAQgWAAgPgPgABagiQgPgPAAgVQAAgWAPgPQAPgPAVAAQAWAAAPAPQAPAPAAAWQAAAVgPAPQgPAPgWAAQgVAAgPgPg");
	this.shape_39.setTransform(94.575,93.175);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#371C40").s().p("AoshiQgGjIBWiQQBbgWBGgbQBhgmBUg9QCPAGCQBPQDPByDFEEIhUB/QhtCWh/BxIgBABIgBAAQiOB/jIBzQhlA5hIAfQkMlugIlCg");
	this.shape_40.setTransform(140.2555,248.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#660000").s().p("Ag5ATIAWAFQAbADAVgNQAWgNALgWIAFgWQAPAcgTAcQgKAPgNAIQgOAHgQABIgFAAQgfAAgPgZg");
	this.shape_41.setTransform(100.0448,104.2726,2.0908,2.0908);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#371C40").s().p("AkJgvQgDhfAphFQBggWBDgxQBEADBFAmQBjA3BfB8IgpA9Qg0BHg8A2IgBAAIAAAAQhEA9hfA3QgxAcgiAPQiAivgEibg");
	this.shape_42.setTransform(140.2685,248.6774,2.0908,2.0908);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#660000").s().p("Ag5ATIAUABQAZgBAVgMQAWgMANgUQAGgKABgIQAPAcgTAcQgKAPgNAIQgOAHgQABIgFAAQgfAAgPgZg");
	this.shape_43.setTransform(100.0448,104.2726,2.0908,2.0908);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#371C40").s().p("AkJgvQgDhfAphFQBegVBEgyQBEADBGAmQBjA3BfB8IgpA9Qg0BHg8A2IgBAAIAAAAQhEA9hfA3QgxAcgiAPQiAivgEibg");
	this.shape_44.setTransform(140.2685,248.6774,2.0908,2.0908);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#660000").s().p("Ag5ATQAcAAAigTQAXgNAOgQQAHgIACgGQAPAcgTAcQgKAPgNAIQgOAHgQABIgFAAQgfAAgPgZg");
	this.shape_45.setTransform(100.0448,104.2726,2.0908,2.0908);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#371C40").s().p("AkJgtQgDhfAphFQBdgVBJg1QBCACBFAoQBiA4BfB9IgpA8Qg0BIg8A2IgBAAIAAAAQhEA9hfA3QgxAbgiAPQiAivgEiag");
	this.shape_46.setTransform(140.2685,248.3115,2.0908,2.0908);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#660000").s().p("Ag5ATQAWgIAjgTQAkgUAPgPQAPAcgTAcQgKAPgNAIQgOAHgQABIgFAAQgfAAgPgZg");
	this.shape_47.setTransform(100.0448,104.2726,2.0908,2.0908);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#371C40").s().p("AkJgvQgDhfAphFQAtgKAhgNQAwgTAogdQCmAGCiDWIgpA9Qg0BHg8A2IgBAAIAAAAQhEA9hfA3QgxAcgiAPQiAivgEibg");
	this.shape_48.setTransform(140.2685,248.6774,2.0908,2.0908);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#660000").s().p("Ag5ATQAVgPAkgTQAjgUAQgIQAPAcgTAcQgKAPgNAIQgOAHgQABIgFAAQgfAAgPgZg");
	this.shape_49.setTransform(100.0448,104.2726,2.0908,2.0908);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#371C40").s().p("AoshhQgGjIBWiQQBcgVBJgcQBlgoBUg9QCMAFCPBRQDKBzDGEEIhUCAQhtCVh/BxIgBABIgBAAQiOB/jIBzQhlA5hIAgQkMlugIlDg");
	this.shape_50.setTransform(140.2555,248.575);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#660000").s().p("Ag5ATQALAAAjgTQAjgUAbgXQAPAcgTAcQgKAPgNAIQgOAHgQABIgFAAQgfAAgPgZg");
	this.shape_51.setTransform(100.0448,104.2726,2.0908,2.0908);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#660000").s().p("Ag5ATIAGgIQAKgLAWgLQAjgVAjgLQAPAcgTAcQgKAPgNAIQgOAHgQABIgFAAQgfAAgPgZg");
	this.shape_52.setTransform(100.0448,104.2726,2.0908,2.0908);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#660000").s().p("Ag5ATQAAgHAFgIQAKgRAWgNQAVgNAcgDQANgCAJABQAPAcgTAcQgKAPgNAIQgOAHgQABIgFAAQgfAAgPgZg");
	this.shape_53.setTransform(100.0448,104.2378,2.0908,2.0908);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FF1010").s().p("AimBXIAWgMIAhgRIAXgMQAHgDgGAEIgXANIggARIgYALIgDACIADgDgABRg+IAagKIAigLIAZgFQAIgBgHADIgZAJIgjAMIgaAFIgCAAQgBAAAAAAQAAAAAAAAQABgBAAAAQABgBABAAg");
	this.shape_54.setTransform(94.9069,93.6782);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#403D0E").s().p("AgPFgQgOgChHgPIgFgEIiilIIikDdIkNiyIEAkGQA5grBFgKIC2gbQAzAzBIgVQA2gOAYgtIC7gcQBEgKBEAYIE5C7IjIDvIjcilIg+GRQgWACgxAOQgvAPgeACIgXABQgdAAgigFg");
	this.shape_55.setTransform(102.925,169.5832);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#660000").s().p("Ag5AVQAAgJAEgLQAIgVAWgNQAXgNAcACQAOAAAKADQAPAcgUAcQgJAPgNAIQgOAHgRABIgFAAQgfAAgPgZg");
	this.shape_56.setTransform(100.039,103.8905,2.0908,2.0908);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#403D0E").s().p("AgOFgQgQgChHgPIgDgEIiilIIilDdIkNiyIEAkHQA6gqBEgKIC2gbQAzAzBJgVQA1gOAYgtIC7gdQBDgJBEAYIE6C7IjIDuIjcikIg9GRQgWACgxAOQgwAPgeACIgZABQgcAAgggFg");
	this.shape_57.setTransform(102.95,169.608);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20,p:{x:100.0449,y:104.2726}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13,p:{rotation:0,x:35.3172,y:199.2777}},{t:this.shape_12,p:{scaleX:2.0908,scaleY:2.0908,rotation:0,x:170.1252,y:189.6491}},{t:this.shape_11},{t:this.instance_2,p:{regX:34,regY:16.4,scaleX:2.0899,scaleY:2.0899,x:102.8,y:172.7}},{t:this.instance_1},{t:this.shape_10},{t:this.instance}]}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20,p:{x:100.0448,y:104.2726}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13,p:{rotation:0,x:35.3172,y:199.2777}},{t:this.shape_12,p:{scaleX:2.0908,scaleY:2.0908,rotation:0,x:170.1252,y:189.6491}},{t:this.shape_11},{t:this.instance_2,p:{regX:34,regY:16.4,scaleX:2.0899,scaleY:2.0899,x:102.8,y:172.7}},{t:this.instance_1},{t:this.shape_10},{t:this.instance}]},84).to({state:[{t:this.shape_27},{t:this.shape_24},{t:this.shape_26},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20,p:{x:100.0448,y:104.2726}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_25,p:{rotation:0,x:43.3931,y:199.7305,scaleX:1,scaleY:1}},{t:this.shape_12,p:{scaleX:2.0908,scaleY:2.0908,rotation:0,x:170.1252,y:189.6491}},{t:this.shape_11},{t:this.instance_2,p:{regX:34,regY:16.4,scaleX:2.0899,scaleY:2.0899,x:102.8,y:172.7}},{t:this.instance_1},{t:this.shape_10},{t:this.instance}]},28).to({state:[{t:this.shape_24},{t:this.shape_26},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20,p:{x:100.0448,y:104.2726}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13,p:{rotation:-14.9991,x:40.3043,y:199.3185}},{t:this.shape_12,p:{scaleX:2.0908,scaleY:2.0908,rotation:0,x:170.1252,y:189.6491}},{t:this.shape_11},{t:this.instance_2,p:{regX:34,regY:16.4,scaleX:2.0899,scaleY:2.0899,x:102.8,y:172.7}},{t:this.instance_1},{t:this.shape_10},{t:this.instance},{t:this.shape_29},{t:this.shape_28}]},2).to({state:[{t:this.shape_24},{t:this.shape_26},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20,p:{x:100.0448,y:104.2726}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_25,p:{rotation:0,x:43.3931,y:199.7305,scaleX:1,scaleY:1}},{t:this.shape_12,p:{scaleX:2.0908,scaleY:2.0908,rotation:0,x:170.1252,y:189.6491}},{t:this.shape_11},{t:this.instance_2,p:{regX:34,regY:16.4,scaleX:2.0899,scaleY:2.0899,x:102.8,y:172.7}},{t:this.instance_1},{t:this.shape_10},{t:this.instance},{t:this.shape_31},{t:this.shape_30}]},2).to({state:[{t:this.shape_24},{t:this.shape_26},{t:this.shape_22},{t:this.shape_35,p:{x:92.3}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_25,p:{rotation:0,x:43.3931,y:199.7305,scaleX:1,scaleY:1}},{t:this.shape_12,p:{scaleX:2.0908,scaleY:2.0908,rotation:0,x:170.1252,y:189.6491}},{t:this.shape_11},{t:this.instance_2,p:{regX:34,regY:16.4,scaleX:2.0899,scaleY:2.0899,x:102.8,y:172.7}},{t:this.instance_1},{t:this.shape_34},{t:this.instance},{t:this.shape_33},{t:this.shape_32},{t:this.shape_20,p:{x:100.0448,y:104.3226}}]},2).to({state:[{t:this.shape_39},{t:this.shape_24},{t:this.shape_26},{t:this.shape_22},{t:this.shape_35,p:{x:92.3}},{t:this.shape_38},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_25,p:{rotation:0,x:43.3931,y:199.7305,scaleX:1,scaleY:1}},{t:this.shape_12,p:{scaleX:2.0908,scaleY:2.0908,rotation:0,x:170.1252,y:189.6491}},{t:this.shape_37},{t:this.instance_2,p:{regX:33.5,regY:15.8,scaleX:2.0906,scaleY:2.0906,x:102.95,y:172.7}},{t:this.instance_1},{t:this.shape_36},{t:this.instance}]},1).to({state:[{t:this.shape_24},{t:this.shape_26},{t:this.shape_22},{t:this.shape_35,p:{x:92.3}},{t:this.shape_41},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_25,p:{rotation:-7.9507,x:45.8529,y:199.7584,scaleX:1,scaleY:1}},{t:this.shape_12,p:{scaleX:2.0907,scaleY:2.0907,rotation:-4.4541,x:172.242,y:188.66}},{t:this.shape_11},{t:this.instance_2,p:{regX:34,regY:16.4,scaleX:2.0899,scaleY:2.0899,x:102.8,y:172.7}},{t:this.instance_1},{t:this.shape_40},{t:this.instance}]},2).to({state:[{t:this.shape_24},{t:this.shape_26},{t:this.shape_22},{t:this.shape_35,p:{x:92.3}},{t:this.shape_43},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_25,p:{rotation:-13.6756,x:47.9324,y:199.756,scaleX:1,scaleY:1}},{t:this.shape_12,p:{scaleX:2.0908,scaleY:2.0908,rotation:0.5114,x:169.7187,y:188.7522}},{t:this.shape_37},{t:this.instance_2,p:{regX:33.5,regY:15.8,scaleX:2.0906,scaleY:2.0906,x:102.95,y:172.7}},{t:this.instance_1},{t:this.shape_42},{t:this.instance}]},2).to({state:[{t:this.shape_24},{t:this.shape_35,p:{x:92.3}},{t:this.shape_26},{t:this.shape_22},{t:this.shape_45},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_25,p:{rotation:-21.1432,x:50.0607,y:199.7769,scaleX:1,scaleY:1}},{t:this.shape_12,p:{scaleX:2.0907,scaleY:2.0907,rotation:-5.283,x:170.8336,y:183.2504}},{t:this.shape_11},{t:this.instance_2,p:{regX:34,regY:16.4,scaleX:2.0899,scaleY:2.0899,x:102.8,y:172.7}},{t:this.instance_1},{t:this.shape_44},{t:this.instance}]},2).to({state:[{t:this.shape_24},{t:this.shape_26},{t:this.shape_22},{t:this.shape_35,p:{x:92.3}},{t:this.shape_47},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_25,p:{rotation:-21.1432,x:50.0607,y:199.7769,scaleX:1,scaleY:1}},{t:this.shape_12,p:{scaleX:2.0907,scaleY:2.0907,rotation:-5.283,x:170.8336,y:183.2504}},{t:this.shape_11},{t:this.instance_2,p:{regX:34,regY:16.4,scaleX:2.0899,scaleY:2.0899,x:102.8,y:172.7}},{t:this.instance_1},{t:this.shape_46},{t:this.instance}]},2).to({state:[{t:this.shape_24},{t:this.shape_26},{t:this.shape_22},{t:this.shape_35,p:{x:92.3}},{t:this.shape_49},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_25,p:{rotation:-9.9266,x:45.3208,y:199.7516,scaleX:1,scaleY:1}},{t:this.shape_12,p:{scaleX:2.0907,scaleY:2.0907,rotation:-13.0025,x:172.6851,y:180.3198}},{t:this.shape_11},{t:this.instance_2,p:{regX:34,regY:16.4,scaleX:2.0899,scaleY:2.0899,x:102.8,y:172.7}},{t:this.instance_1},{t:this.shape_48},{t:this.instance}]},2).to({state:[{t:this.shape_24},{t:this.shape_26},{t:this.shape_22},{t:this.shape_35,p:{x:92.3}},{t:this.shape_49},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_25,p:{rotation:-9.9266,x:45.3208,y:199.7516,scaleX:1,scaleY:1}},{t:this.shape_12,p:{scaleX:2.0907,scaleY:2.0907,rotation:-13.0025,x:172.6851,y:180.3198}},{t:this.shape_11},{t:this.instance_2,p:{regX:34,regY:16.4,scaleX:2.0899,scaleY:2.0899,x:102.8,y:172.7}},{t:this.instance_1},{t:this.shape_48},{t:this.instance}]},2).to({state:[{t:this.shape_24},{t:this.shape_26},{t:this.shape_22},{t:this.shape_35,p:{x:92.3}},{t:this.shape_51},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_25,p:{rotation:5.0724,x:40.4629,y:199.7745,scaleX:1,scaleY:1}},{t:this.shape_12,p:{scaleX:2.0907,scaleY:2.0907,rotation:-28.0018,x:175.1154,y:176.1527}},{t:this.shape_11},{t:this.instance_2,p:{regX:34,regY:16.4,scaleX:2.0899,scaleY:2.0899,x:102.8,y:172.7}},{t:this.instance_1},{t:this.shape_50},{t:this.instance}]},1).to({state:[{t:this.shape_24},{t:this.shape_26},{t:this.shape_22},{t:this.shape_35,p:{x:92.3}},{t:this.shape_52},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_25,p:{rotation:20.0714,x:38.6636,y:198.4299,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_12,p:{scaleX:2.0907,scaleY:2.0907,rotation:-43.0013,x:179.3695,y:174.7472}},{t:this.shape_11},{t:this.instance_2,p:{regX:34,regY:16.4,scaleX:2.0899,scaleY:2.0899,x:102.8,y:172.7}},{t:this.instance_1},{t:this.shape_50},{t:this.instance}]},7).to({state:[{t:this.shape_54},{t:this.shape_24},{t:this.shape_26},{t:this.shape_22},{t:this.shape_35,p:{x:92.3}},{t:this.shape_53},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_25,p:{rotation:20.0714,x:36.2136,y:199.8299,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_12,p:{scaleX:2.0907,scaleY:2.0907,rotation:-43.0013,x:181.8195,y:176.4972}},{t:this.shape_11},{t:this.instance_2,p:{regX:34,regY:16.4,scaleX:2.0899,scaleY:2.0899,x:102.8,y:172.7}},{t:this.instance_1},{t:this.shape_50},{t:this.instance}]},7).to({state:[{t:this.shape_54},{t:this.shape_24},{t:this.shape_26},{t:this.shape_22},{t:this.shape_35,p:{x:92.3}},{t:this.shape_56},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_25,p:{rotation:20.0714,x:36.2136,y:199.8299,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_12,p:{scaleX:2.0907,scaleY:2.0907,rotation:-43.0013,x:181.8195,y:176.4972}},{t:this.shape_55},{t:this.instance_2,p:{regX:34,regY:16.5,scaleX:2.0898,scaleY:2.0898,x:102.6,y:172.75}},{t:this.instance_1},{t:this.shape_50},{t:this.instance}]},7).to({state:[{t:this.shape_24},{t:this.shape_26},{t:this.shape_22},{t:this.shape_35,p:{x:92.3}},{t:this.shape_53},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_25,p:{rotation:20.0714,x:36.2136,y:199.8299,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_12,p:{scaleX:2.0907,scaleY:2.0907,rotation:-43.0013,x:181.8195,y:176.4972}},{t:this.shape_57},{t:this.instance_2,p:{regX:34,regY:16.4,scaleX:2.0898,scaleY:2.0898,x:102.7,y:172.6}},{t:this.instance_1},{t:this.shape_50},{t:this.instance}]},6).to({state:[{t:this.shape_54},{t:this.shape_24},{t:this.shape_26},{t:this.shape_22},{t:this.shape_35,p:{x:92.3}},{t:this.shape_52},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_25,p:{rotation:20.0714,x:38.6636,y:198.4299,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_12,p:{scaleX:2.0907,scaleY:2.0907,rotation:-43.0013,x:179.3695,y:174.7472}},{t:this.shape_57},{t:this.instance_2,p:{regX:34,regY:16.4,scaleX:2.0898,scaleY:2.0898,x:102.7,y:172.6}},{t:this.instance_1},{t:this.shape_50},{t:this.instance}]},6).to({state:[{t:this.shape_24},{t:this.shape_26},{t:this.shape_22},{t:this.shape_35,p:{x:92.3}},{t:this.shape_51},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_25,p:{rotation:5.0724,x:40.4629,y:199.7745,scaleX:1,scaleY:1}},{t:this.shape_12,p:{scaleX:2.0907,scaleY:2.0907,rotation:-28.0018,x:175.1154,y:176.1527}},{t:this.shape_57},{t:this.instance_2,p:{regX:34,regY:16.4,scaleX:2.0898,scaleY:2.0898,x:102.7,y:172.6}},{t:this.instance_1},{t:this.shape_50},{t:this.instance}]},2).to({state:[{t:this.shape_24},{t:this.shape_26},{t:this.shape_22},{t:this.shape_35,p:{x:92.3}},{t:this.shape_49},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_25,p:{rotation:-9.9266,x:45.3208,y:199.7516,scaleX:1,scaleY:1}},{t:this.shape_12,p:{scaleX:2.0907,scaleY:2.0907,rotation:-13.0025,x:172.6851,y:180.3198}},{t:this.shape_57},{t:this.instance_2,p:{regX:34,regY:16.4,scaleX:2.0898,scaleY:2.0898,x:102.7,y:172.6}},{t:this.instance_1},{t:this.shape_48},{t:this.instance}]},2).to({state:[{t:this.shape_24},{t:this.shape_26},{t:this.shape_22},{t:this.shape_35,p:{x:92.3}},{t:this.shape_47},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_25,p:{rotation:-21.1432,x:50.0607,y:199.7769,scaleX:1,scaleY:1}},{t:this.shape_12,p:{scaleX:2.0907,scaleY:2.0907,rotation:-5.283,x:170.8336,y:183.2504}},{t:this.shape_57},{t:this.instance_2,p:{regX:34,regY:16.4,scaleX:2.0898,scaleY:2.0898,x:102.7,y:172.6}},{t:this.instance_1},{t:this.shape_46},{t:this.instance}]},2).to({state:[{t:this.shape_24},{t:this.shape_26},{t:this.shape_22},{t:this.shape_35,p:{x:92.3}},{t:this.shape_45},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_25,p:{rotation:-21.1432,x:50.0607,y:199.7769,scaleX:1,scaleY:1}},{t:this.shape_12,p:{scaleX:2.0907,scaleY:2.0907,rotation:-5.283,x:170.8336,y:183.2504}},{t:this.shape_57},{t:this.instance_2,p:{regX:34,regY:16.4,scaleX:2.0898,scaleY:2.0898,x:102.7,y:172.6}},{t:this.instance_1},{t:this.shape_44},{t:this.instance}]},2).to({state:[{t:this.shape_24},{t:this.shape_26},{t:this.shape_22},{t:this.shape_35,p:{x:92.3}},{t:this.shape_43},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_25,p:{rotation:-13.6756,x:47.9324,y:199.756,scaleX:1,scaleY:1}},{t:this.shape_12,p:{scaleX:2.0908,scaleY:2.0908,rotation:0.5114,x:169.7187,y:188.7522}},{t:this.shape_37},{t:this.instance_2,p:{regX:33.5,regY:15.8,scaleX:2.0906,scaleY:2.0906,x:102.95,y:172.7}},{t:this.instance_1},{t:this.shape_42},{t:this.instance}]},2).to({state:[{t:this.shape_24},{t:this.shape_26},{t:this.shape_22},{t:this.shape_35,p:{x:92.25}},{t:this.shape_41},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_25,p:{rotation:-7.9507,x:45.8529,y:199.7584,scaleX:1,scaleY:1}},{t:this.shape_12,p:{scaleX:2.0907,scaleY:2.0907,rotation:-4.4541,x:172.242,y:188.66}},{t:this.shape_57},{t:this.instance_2,p:{regX:34,regY:16.4,scaleX:2.0898,scaleY:2.0898,x:102.7,y:172.6}},{t:this.instance_1},{t:this.shape_40},{t:this.instance}]},2).to({state:[{t:this.shape_39},{t:this.shape_24},{t:this.shape_26},{t:this.shape_22},{t:this.shape_35,p:{x:92.25}},{t:this.shape_38},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_25,p:{rotation:0,x:43.3931,y:199.7305,scaleX:1,scaleY:1}},{t:this.shape_12,p:{scaleX:2.0908,scaleY:2.0908,rotation:0,x:170.1252,y:189.6491}},{t:this.shape_37},{t:this.instance_2,p:{regX:33.5,regY:15.8,scaleX:2.0906,scaleY:2.0906,x:102.95,y:172.7}},{t:this.instance_1},{t:this.shape_36},{t:this.instance}]},2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,9.4,209.4,335);


(lib.darrkfishebawl = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Path_9();
	this.instance.setTransform(49.8,42.85,0.8429,0.8607,0,0,0,5.5,6.4);
	this.instance.alpha = 0.75;
	this.instance.compositeOperation = "screen";

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKALQgGgEAAgHQAAgGAGgEQAFgGAFAAQAHAAAEAGQAGAEAAAGQAAAHgGAEQgEAGgHAAQgFAAgFgGg");
	this.shape.setTransform(46.6398,17.333,0.8401,0.8577);

	this.instance_1 = new lib.Path_2_0();
	this.instance_1.setTransform(47.4,46.95,0.8429,0.8607,0,0,0,6.4,6.9);
	this.instance_1.alpha = 0.75;
	this.instance_1.compositeOperation = "screen";

	this.instance_2 = new lib.Path_3_1();
	this.instance_2.setTransform(48.5,13.4,0.8429,0.8607,0,0,0,6.5,7.5);
	this.instance_2.compositeOperation = "screen";

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FDFC03","#FDF503","#FEE002","#FEBF01","#FFAA00"],[0.016,0.204,0.482,0.824,1],-2.8,0,2.9,0).s().p("AgcAaQAAgFAOgZIAOgZQADgHAFAJQAYAhgDAPQgDALgaABIgEAAQgXAAgBgHg");
	this.shape_1.setTransform(17.3761,36.3154,0.8386,0.856);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4A4A4A").s().p("AgIAJQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAAEADQADAEAAAEQAAAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_2.setTransform(14.805,26.7612,0.8386,0.856);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FDFCDA").s().p("AgRASQgHgIAAgKQAAgJAHgIQAIgHAJAAQAKAAAIAHQAHAIAAAJQAAAKgHAIQgIAHgKAAQgJAAgIgHg");
	this.shape_3.setTransform(14.9308,26.3332,0.8386,0.856);

	this.instance_3 = new lib.Path_3_0();
	this.instance_3.setTransform(20.65,32.7,0.8423,0.8601,0,0,0,9.8,8);
	this.instance_3.alpha = 0.3203;
	this.instance_3.compositeOperation = "multiply";

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FDFC03").s().p("AgnAPIgagUQAKABARAEQATACAJABQAUACAUgMQARgMALgTQANAIgJASQgGALgNAKQgVATgdALQgMgHgUgRg");
	this.shape_4.setTransform(16.354,30.8061,0.8386,0.856);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F86A14").s().p("AgcAxQgVgSgFgDQgMgGgIgHQgJgHAHABQAKACALgHIgSgEQgGgCAJgIIAigfQAigZAwgJQgPArApAdQANAIgJASQgGALgNALQgVATgeAMQgLgIgXgTg");
	this.shape_5.setTransform(15.1732,27.7029,0.8386,0.856);

	this.instance_4 = new lib.ClipGroup();
	this.instance_4.setTransform(27.15,28.35,0.8423,0.8601,0,0,0,22.9,16.9);

	this.instance_5 = new lib.Path_6_0();
	this.instance_5.setTransform(19.55,35.45,0.8423,0.8601,0,0,0,8.2,9);
	this.instance_5.alpha = 0.75;
	this.instance_5.compositeOperation = "multiply";

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FDFC03","#FDF503","#FEE002","#FEBF01","#FFAA00"],[0.016,0.204,0.482,0.824,1],-2.9,0,2.9,0).s().p("AgPAUQgTgIAIgCQAJgDAkggIALAGIgDATQgFAVgJAEIgIABQgIAAgMgGg");
	this.shape_6.setTransform(14.8943,35.1411,0.8386,0.856);

	this.instance_6 = new lib.Path_8();
	this.instance_6.setTransform(30.8,38.45,0.8423,0.8601,0,0,0,9.8,11.1);
	this.instance_6.alpha = 0.75;
	this.instance_6.compositeOperation = "multiply";

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#FDFC03","#FDF503","#FDE002","#FEBE02","#FF9000","#FF7C00"],[0.016,0.122,0.275,0.463,0.678,0.761],3.8,3.5,-1.6,-5.8).s().p("Ag0ACQgKgNgGgPIgEgNQAKAAALgLIAOALQAVANAXAFQAWAGAZgHQALgEAIgFQAAAUgQANQgSAPAAAEQgDANAGAQQg+gFgggrg");
	this.shape_7.setTransform(28.4534,38.1681,0.8386,0.856);

	this.instance_7 = new lib.Path_10();
	this.instance_7.setTransform(33.65,22.35,0.8423,0.8601,0,0,0,12.5,9.2);
	this.instance_7.alpha = 0.75;
	this.instance_7.compositeOperation = "multiply";

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#FDFC03","#FDF503","#FDE002","#FEBE02","#FF9000","#FF7C00"],[0.016,0.122,0.275,0.463,0.678,0.761],2.1,-5.2,-1.5,4.4).s().p("AhfAJIAUgfQAYghAYADQANABApAWQAlATAggDIgDARQgGARgUABQgaACgNAGQgQAHgIAQQgugdg1gPg");
	this.shape_8.setTransform(31.1998,20.4188,0.8386,0.856);

	this.instance_8 = new lib.Path_12();
	this.instance_8.setTransform(47.35,32.65,0.8423,0.8601,0,0,0,13.1,11.3);
	this.instance_8.alpha = 0.75;
	this.instance_8.compositeOperation = "multiply";

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#FDFC03","#FDF503","#FDE002","#FEBE02","#FF9000","#FF7C00"],[0.016,0.122,0.275,0.463,0.678,0.761],9.8,-1,-10.5,2.2).s().p("AgPBwQgVgIgYgoQgagrgagNQAGgOgIgJIAVgPQAYgRAQgPQA5gzAfABQA2ABAagEIgTAXIgZAhQgGALgjAXQgjAXgSADIAVASQAVAVAFARQAEATAOALQAMALALgBQgJAHgPAGQgQAGgPAAQgMAAgNgEg");
	this.shape_9.setTransform(45.2884,27.8271,0.8386,0.856);

	this.instance_9 = new lib.Path_4();
	this.instance_9.setTransform(15.25,29.8,0.8429,0.8607,0,0,0,11.3,25.9);
	this.instance_9.alpha = 0.5508;
	this.instance_9.compositeOperation = "screen";

	this.instance_10 = new lib.Path_5();
	this.instance_10.setTransform(55.7,29.8,0.8429,0.8607,0,0,0,10.8,25.9);
	this.instance_10.alpha = 0.5508;
	this.instance_10.compositeOperation = "screen";

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#D0EAF1","#D0FCF1"],[0.09,1],-33.8,15.1,33.8,-19.4).s().p("AiTEmIhFgPQgkgNgogtQhBhIgShwQgShyBIh+QAkhAAogpIHrAAIAZAcQAdAkAWAoQBIB/gSByQgSBvhCBJQgnAsgkAOQgcAHgpAIQhTAPhBAAQhAAAhTgPgAjqkLQgiAjgfA3Qg+BvARBiQAQBhA8A/QAkAmAhANIBAAMQBMAMA7AAQA8AABMgMQAlgHAagGQAhgMAlgmQA8g/AQhiQARhig9huQgTgjgZgfIgVgYg");
	this.shape_10.setTransform(31.8759,28.5683,0.8401,0.8577);

	this.instance_11 = new lib.Path_6();
	this.instance_11.setTransform(35.25,54.45,0.8429,0.8607,0,0,0,24.1,8.2);
	this.instance_11.compositeOperation = "multiply";

	this.instance_12 = new lib.Path_7();
	this.instance_12.setTransform(24.65,54.45,0.8429,0.8607,0,0,0,13.1,8.2);
	this.instance_12.alpha = 0.5508;
	this.instance_12.compositeOperation = "multiply";

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#D0EAF1","#D0FCF1"],[0.09,1],-20.6,11.3,47,-23.2).s().p("AjVAhIAbhBIC6ALIC8gLIAaBBg");
	this.shape_11.setTransform(31.875,54.0405,0.8401,0.8577);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.rf(["#EAF6F9","#C0E4ED"],[0.039,1],0,0,0,0,0,1.4).s().p("AgIAKQgEgFAAgFQAAgEAEgEQADgFAFAAQAFAAAEAFQAEAEAAAEQAAAFgEAFQgEADgFAAQgFAAgDgDg");
	this.shape_12.setTransform(37.2797,32.4754,0.8386,0.856);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.rf(["#EAF6F9","#C0E4ED"],[0.039,1],0,0,0,0,0,0.9).s().p("AgIAAQAAgIAIAAQAEAAACADQADACAAADQAAAEgDACQgCADgEAAQgIAAAAgJg");
	this.shape_13.setTransform(39.2085,46.0009,0.8386,0.856);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.rf(["#EAF6F9","#C0E4ED"],[0.039,1],0,0,0,0,0,0.9).s().p("AgFAGQgDgCAAgEQAAgDADgCQADgDACAAQAEAAACADQADACAAADQAAAEgDACQgCADgEAAQgCAAgDgDg");
	this.shape_14.setTransform(20.3818,46.0009,0.8386,0.856);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.rf(["#EAF6F9","#C0E4ED"],[0.039,1],0,0,0,0,0,1.4).s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAFAAAFAEQAEAEAAAFQAAAGgEAEQgFAEgFAAQgFAAgEgEg");
	this.shape_15.setTransform(5.7271,32.5182,0.8386,0.856);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.rf(["#EAF6F9","#C0E4ED"],[0.039,1],0,0,0,0,0,1.3).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgFAAgDgEg");
	this.shape_16.setTransform(15.0357,22.6308,0.8386,0.856);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.rf(["#EAF6F9","#C0E4ED"],[0.039,1],0,0,0,0,0,1.5).s().p("AgJALQgFgFAAgGQAAgFAFgEQAEgFAFAAQAGAAAFAFQAEAEAAAFQAAAGgEAFQgFAEgGAAQgFAAgEgEg");
	this.shape_17.setTransform(49.4395,42.5125,0.8386,0.856);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.rf(["#EAF6F9","#C0E4ED"],[0.039,1],0,0,0,0,0,1.1).s().p("AgHAIQgDgEAAgEQAAgDADgEQADgDAEAAQAFAAADADQADAEAAADQAAAEgDAEQgDADgFAAQgEAAgDgDg");
	this.shape_18.setTransform(55.3098,22.802,0.8386,0.856);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.rf(["#EAF6F9","#C0E4ED"],[0.039,1],0,0,0,0,0,1).s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_19.setTransform(51.0958,32.7536,0.8386,0.856);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.rf(["#EAF6F9","#C0E4ED"],[0.039,1],0,0,0,0,0,1).s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_20.setTransform(27.3003,25.0277,0.8386,0.856);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.rf(["#EAF6F9","#C0E4ED"],[0.039,1],0,0,0,0,0,0.7).s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_21.setTransform(14.5115,30.7419,0.8386,0.856);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.rf(["#EAF6F9","#C0E4ED"],[0.039,1],0,0,0,0,0,2.3).s().p("AgPAQQgGgHAAgJQAAgIAGgHQAHgGAIAAQAJAAAHAGQAGAHAAAIQAAAJgGAHQgHAGgJAAQgIAAgHgGg");
	this.shape_22.setTransform(12.0796,39.3452,0.8386,0.856);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.rf(["#EAF6F9","#C0E4ED"],[0.039,1],0,0,0,0,0,1.6).s().p("AgKALQgFgEAAgHQAAgFAFgGQAEgEAGAAQAHAAAFAEQAEAGAAAFQAAAHgEAEQgFAFgHAAQgGAAgEgFg");
	this.shape_23.setTransform(30.3612,44.4172,0.8386,0.856);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.rf(["#EAF6F9","#C0E4ED"],[0.039,1],0,0,0,0,0,1.3).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAGAAAEAEQADADAAAFQAAAFgDAEQgEAEgGAAQgEAAgEgEg");
	this.shape_24.setTransform(42.9823,39.0027,0.8386,0.856);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.rf(["#EAF6F9","#C0E4ED"],[0.039,1],0,0,0,0,0,2.5).s().p("AgRASQgGgIAAgKQAAgJAGgHQAIgIAJAAQAKAAAHAIQAHAHAAAJQAAAKgHAIQgHAHgKAAQgJAAgIgHg");
	this.shape_25.setTransform(46.8608,25.8624,0.8386,0.856);

	this.instance_13 = new lib.Path_14();
	this.instance_13.setTransform(29.45,32.55,0.8423,0.8601,0,0,0,8.2,8.9);
	this.instance_13.alpha = 0.5508;

	this.instance_14 = new lib.Path_15();
	this.instance_14.setTransform(9.95,21.4,0.8423,0.8601,0,0,0,7.3,8.1);
	this.instance_14.alpha = 0.5508;

	this.instance_15 = new lib.Group_4();
	this.instance_15.setTransform(34.6,33.9,0.8423,0.8601,0,0,0,41.4,28.4);
	this.instance_15.alpha = 0.3203;
	this.instance_15.compositeOperation = "screen";

	this.instance_16 = new lib.CompoundPath_1();
	this.instance_16.setTransform(35.25,28.85,0.8429,0.8607,0,0,0,40.5,33.8);
	this.instance_16.alpha = 0.3203;
	this.instance_16.compositeOperation = "screen";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.instance_12},{t:this.instance_11},{t:this.shape_10},{t:this.instance_10},{t:this.instance_9},{t:this.shape_9},{t:this.instance_8},{t:this.shape_8},{t:this.instance_7},{t:this.shape_7},{t:this.instance_6},{t:this.shape_6},{t:this.instance_5},{t:this.instance_4},{t:this.shape_5},{t:this.shape_4},{t:this.instance_3},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance_2},{t:this.instance_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,-0.2,64,57.1);


(lib.darkbed = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#F1DBB8","#F4E3C7","#F7EBD6"],[0,0.545,1],-63,0,63,0).s().p("Ap1BEIAAiHITrAAIAACHg");
	this.shape.setTransform(60.1075,217.8222,0.8432,0.8609);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#F1DBB8","#F4E3C7","#F7EBD6"],[0,0.545,1],-63,0,63,0).s().p("Ap1BEIAAiHITrAAIAACHg");
	this.shape_1.setTransform(60.1075,180.6319,0.8432,0.8609);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#F1DBB8","#F4E3C7","#F7EBD6"],[0,0.545,1],-63,0,63,0).s().p("Ap1BEIAAiHITrAAIAACHg");
	this.shape_2.setTransform(60.1075,143.4201,0.8432,0.8609);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#F1DBB8","#F4E3C7","#F7EBD6"],[0,0.545,1],-63,0,63,0).s().p("Ap1BEIAAiHITrAAIAACHg");
	this.shape_3.setTransform(60.1075,106.2083,0.8432,0.8609);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#F7EBD6","#F4E3C7","#F1DBB8"],[0,0.455,1],0,-134.5,0,135.9).s().p("Ag+V0MAAAgrnIB9AAMAAAArng");
	this.shape_4.setTransform(114.2905,166.6917,1.194,1.194);

	this.instance = new lib.Path_12_0();
	this.instance.setTransform(304,210.2,0.8448,0.8624,0,0,0,51.1,10.2);
	this.instance.alpha = 0.6484;
	this.instance.compositeOperation = "multiply";

	this.instance_1 = new lib.Group_12();
	this.instance_1.setTransform(200.25,295.05,0.8448,0.8624,0,0,0,219.1,32.2);
	this.instance_1.alpha = 0.3203;
	this.instance_1.compositeOperation = "multiply";

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#EFE6E0","#E9DCD4","#DBC3B3","#DAC2B2"],[0,0.349,0.98,1],0,0,0,0,0,4.2).s().p("AgkAeQgOgNAAgRQAAgRAOgMQAPgMAVAAQAVAAAPAMQAPAMAAARQAAARgPANQgPAMgVAAQgVAAgPgMg");
	this.shape_5.setTransform(58.9273,281.6153,0.8414,0.8593);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7E7372").s().p("AgnAhQgRgOAAgTQAAgTARgNQAQgOAXgBQAYABARAOQARANAAATQAAATgRAOQgRAPgYAAQgXAAgQgPg");
	this.shape_6.setTransform(58.9273,281.6153,0.8414,0.8593);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#F7EBD6","#F4E3C7","#F1DBB8"],[0,0.455,1],0,-32,0,28).s().p("AoSEyIAApiIQkAAIAAJig");
	this.shape_7.setTransform(60.0864,294.7638,0.8432,0.8609);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#7E7372").s().p("AocFHIAAqNIQ5AAIAAKNg");
	this.shape_8.setTransform(60.0864,294.7638,0.8432,0.8609);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#EFE6E0","#E9DCD4","#DBC3B3","#DAC2B2"],[0,0.349,0.98,1],0,0,0,0,0,4.2).s().p("AgjAeQgPgNgBgRQABgRAPgMQAPgMAUAAQAWAAAOAMQAQAMAAARQAAARgQANQgOAMgWAAQgUAAgPgMg");
	this.shape_9.setTransform(185.1419,281.6153,0.8414,0.8593);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#7E7372").s().p("AgoAhQgQgOAAgTQAAgTAQgNQARgOAXgBQAXABARAOQASANgBATQABATgSAOQgRAPgXAAQgXAAgRgPg");
	this.shape_10.setTransform(185.1419,281.6153,0.8414,0.8593);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#F7EBD6","#F4E3C7","#F1DBB8"],[0,0.455,1],0,-32,0,28).s().p("AsBEyIAApiIYDAAIAAJig");
	this.shape_11.setTransform(186.5733,294.7638,0.8432,0.8609);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#7E7372").s().p("AsMFHIAAqNIYZAAIAAKNg");
	this.shape_12.setTransform(186.5733,294.7638,0.8432,0.8609);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.rf(["#EFE6E0","#E9DCD4","#DBC3B3","#DAC2B2"],[0,0.349,0.98,1],0,0,0,0,0,4.2).s().p("AgkAeQgPgNAAgRQAAgRAPgMQAQgMAUAAQAWAAAPAMQAPAMAAARQAAARgPANQgPAMgWAAQgUAAgQgMg");
	this.shape_13.setTransform(316.4682,281.6153,0.8414,0.8593);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#7E7372").s().p("AgnAhQgRgOAAgTQAAgTARgNQAQgOAXgBQAYABARAOQAQANAAATQAAATgQAOQgRAPgYAAQgXAAgQgPg");
	this.shape_14.setTransform(316.4682,281.6153,0.8414,0.8593);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#F7EBD6","#F4E3C7","#F1DBB8"],[0,0.455,1],0,-32,0,28).s().p("AsBEyIAApiIYDAAIAAJig");
	this.shape_15.setTransform(318.183,294.7638,0.8432,0.8609);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#7E7372").s().p("AsLFHIAAqNIYXAAIAAKNg");
	this.shape_16.setTransform(318.183,294.7638,0.8432,0.8609);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#F7EBD6","#F4E3C7","#F1DBB8"],[0,0.455,1],0,-191.8,0,206.5).s().p("AhYeNMAAAg8ZICxAAMAAAA8Zg");
	this.shape_17.setTransform(393.0613,166.7588,0.8448,0.8624);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#F7EBD6","#F4E3C7","#F1DBB8"],[0,0.455,1],0,-186.3,0,188.1).s().p("AhYeNMAAAg8ZICxAAMAAAA8Zg");
	this.shape_18.setTransform(7.8099,166.7588,0.8448,0.8624);

	this.instance_2 = new lib.Path_16();
	this.instance_2.setTransform(118.45,10.85,0.8448,0.8624,0,0,0,10.3,5.9);
	this.instance_2.alpha = 0.3203;
	this.instance_2.compositeOperation = "multiply";

	this.instance_3 = new lib.Path_17();
	this.instance_3.setTransform(107.8,218.6,0.8448,0.8624,0,0,0,7.5,7);
	this.instance_3.alpha = 0.3203;
	this.instance_3.compositeOperation = "multiply";

	this.instance_4 = new lib.Path_18();
	this.instance_4.setTransform(13.95,218.6,0.8448,0.8624,0,0,0,7.6,7);
	this.instance_4.alpha = 0.3203;
	this.instance_4.compositeOperation = "multiply";

	this.instance_5 = new lib.Path_19();
	this.instance_5.setTransform(107.8,181.35,0.8448,0.8624,0,0,0,7.5,6.9);
	this.instance_5.alpha = 0.3203;
	this.instance_5.compositeOperation = "multiply";

	this.instance_6 = new lib.Path_20();
	this.instance_6.setTransform(13.95,181.35,0.8448,0.8624,0,0,0,7.6,6.9);
	this.instance_6.alpha = 0.3203;
	this.instance_6.compositeOperation = "multiply";

	this.instance_7 = new lib.Path_21();
	this.instance_7.setTransform(107.8,144.25,0.8448,0.8624,0,0,0,7.5,7.2);
	this.instance_7.alpha = 0.3203;
	this.instance_7.compositeOperation = "multiply";

	this.instance_8 = new lib.Path_22();
	this.instance_8.setTransform(13.95,144.25,0.8448,0.8624,0,0,0,7.6,7.2);
	this.instance_8.alpha = 0.3203;
	this.instance_8.compositeOperation = "multiply";

	this.instance_9 = new lib.Path_23();
	this.instance_9.setTransform(107.8,106.8,0.8448,0.8624,0,0,0,7.5,6.9);
	this.instance_9.alpha = 0.3203;
	this.instance_9.compositeOperation = "multiply";

	this.instance_10 = new lib.Path_24();
	this.instance_10.setTransform(13.95,106.8,0.8448,0.8624,0,0,0,7.6,6.9);
	this.instance_10.alpha = 0.3203;
	this.instance_10.compositeOperation = "multiply";

	this.instance_11 = new lib.Path_25();
	this.instance_11.setTransform(389.55,10.85,0.8448,0.8624,0,0,0,11.6,5.9);
	this.instance_11.alpha = 0.3203;
	this.instance_11.compositeOperation = "multiply";

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#F7EBD6","#F4E3C7","#F1DBB8"],[0,0.455,1],0,-6.3,0,6.4).s().p("A6vA4IAAhvMA1fAAAIAABvg");
	this.shape_19.setTransform(254.6056,10.8862,0.8448,0.8624);

	this.instance_12 = new lib.Path_27();
	this.instance_12.setTransform(114.3,70.1,0.8448,0.8624,0,0,0,15.2,11.3);
	this.instance_12.alpha = 0.3203;
	this.instance_12.compositeOperation = "multiply";

	this.instance_13 = new lib.Path_28();
	this.instance_13.setTransform(390.15,70.1,0.8448,0.8624,0,0,0,12.3,11.3);
	this.instance_13.alpha = 0.3203;
	this.instance_13.compositeOperation = "multiply";

	this.instance_14 = new lib.Path_29();
	this.instance_14.setTransform(10.3,70.1,0.8448,0.8624,0,0,0,12.2,11.3);
	this.instance_14.alpha = 0.3203;
	this.instance_14.compositeOperation = "multiply";

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#F7EBD6","#F4E3C7","#F1DBB8"],[0,0.455,1],0,-10.5,0,8.8).s().p("EglBABwIAAjfMBKDAAAIAADfg");
	this.shape_20.setTransform(200.4356,76.3829,0.8448,0.8624);

	this.instance_15 = new lib.Path_31();
	this.instance_15.setTransform(390.3,257.9,0.8448,0.8624,0,0,0,12.3,11.6);
	this.instance_15.alpha = 0.3203;
	this.instance_15.compositeOperation = "multiply";

	this.instance_16 = new lib.Path_32();
	this.instance_16.setTransform(113.75,257.9,0.8448,0.8624,0,0,0,15.3,11.6);
	this.instance_16.alpha = 0.3203;
	this.instance_16.compositeOperation = "multiply";

	this.instance_17 = new lib.Path_33();
	this.instance_17.setTransform(10.4,257.9,0.8448,0.8624,0,0,0,12.3,11.6);
	this.instance_17.alpha = 0.3203;
	this.instance_17.compositeOperation = "multiply";

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#F7EBD6","#F4E3C7","#F1DBB8"],[0,0.455,1],0,-10,0,15.9).s().p("EglBABwIAAjgMBKDAAAIAADgg");
	this.shape_21.setTransform(200.4356,257.9756,0.8448,0.8624);

	this.instance_18 = new lib.Path_35();
	this.instance_18.setTransform(200.25,52.55,0.8448,0.8624,0,0,0,228.1,4.3);
	this.instance_18.alpha = 0.3203;
	this.instance_18.compositeOperation = "screen";

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#8D48A3","#803399"],[0,1],0,-16.8,0,3.7).s().p("EgjnACwIAAlfMBHPAAAIAAFfg");
	this.shape_22.setTransform(200.4567,64.3529,0.8448,0.8624);

	this.instance_19 = new lib.Group_16();
	this.instance_19.setTransform(254.4,15.75,0.8448,0.8624,0,0,0,131.9,6);
	this.instance_19.compositeOperation = "multiply";

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#F7EBD6","#F4E3C7","#F1DBB8"],[0,0.455,1],0,-34.2,0,34.5).s().p("Ag2FYIAAqvIBtAAIAAKvg");
	this.shape_23.setTransform(361.2562,40.6163,0.8448,0.8624);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#F7EBD6","#F4E3C7","#F1DBB8"],[0,0.455,1],0,-34.2,0,34.5).s().p("Ag1FYIAAqvIBrAAIAAKvg");
	this.shape_24.setTransform(330.7816,40.6163,0.8448,0.8624);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#F7EBD6","#F4E3C7","#F1DBB8"],[0,0.455,1],0,-34.2,0,34.5).s().p("Ag2FYIAAqvIBtAAIAAKvg");
	this.shape_25.setTransform(300.307,40.6163,0.8448,0.8624);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#F7EBD6","#F4E3C7","#F1DBB8"],[0,0.455,1],0,-34.2,0,34.5).s().p("Ag2FYIAAqvIBsAAIAAKvg");
	this.shape_26.setTransform(269.8324,40.6163,0.8448,0.8624);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#F7EBD6","#F4E3C7","#F1DBB8"],[0,0.455,1],0,-34.2,0,34.5).s().p("Ag1FYIAAqvIBsAAIAAKvg");
	this.shape_27.setTransform(239.3789,40.6163,0.8448,0.8624);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#F7EBD6","#F4E3C7","#F1DBB8"],[0,0.455,1],0,-34.2,0,34.5).s().p("Ag2FYIAAqvIBtAAIAAKvg");
	this.shape_28.setTransform(208.9043,40.6163,0.8448,0.8624);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#F7EBD6","#F4E3C7","#F1DBB8"],[0,0.455,1],0,-34.2,0,34.5).s().p("Ag2FYIAAqvIBsAAIAAKvg");
	this.shape_29.setTransform(178.4297,40.6163,0.8448,0.8624);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#F7EBD6","#F4E3C7","#F1DBB8"],[0,0.455,1],0,-34.2,0,34.5).s().p("Ag2FYIAAqvIBtAAIAAKvg");
	this.shape_30.setTransform(147.9551,40.6163,0.8448,0.8624);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.instance_19},{t:this.shape_22},{t:this.instance_18},{t:this.shape_21},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.shape_20},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.shape_19},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.instance_1},{t:this.instance},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400.6,333.5);


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
	this.shape_1.setTransform(66.62,210.3644,2.0845,2.0845);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4D4D4D").s().p("AAZAIQgCgEgIgBQgKgCgOAEIgUgHIAMgFQASgHANACQAPACABAPQAAAHgCABIgBAAQgCAAAAgFg");
	this.shape_2.setTransform(70.1129,210.7801,2.0845,2.0845);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4D4D4D").s().p("AgMAKQADgKAKgJQAHAGAFACQgLAGgDAFg");
	this.shape_3.setTransform(59.8468,214.7533,2.0845,2.0845);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4D4D4D").s().p("AAAAYQgPgFgMgJQgTgOABgSQAAgIACABQACABAAAGQACAGAKAJQAMAJARAHQARAGANgBQAKgBACgFQAAgGADABQACABAAAIQgBAQgPABIgFABQgMAAgOgGg");
	this.shape_4.setTransform(66.62,197.3364,2.0845,2.0845);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4D4D4D").s().p("AgMALQAAgOAOgOIALAIQgRAKgDALQAAAFgCABQgDAAAAgHg");
	this.shape_5.setTransform(59.6368,203.4972,2.0845,2.0845);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4D4D4D").s().p("AAZAIQgCgEgIgBQgKgCgOAEIgUgHIAMgFQARgHAOACQAPABABAPQAAAIgCABIgBAAQgCAAAAgFg");
	this.shape_6.setTransform(70.1129,197.7505,2.0845,2.0845);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4D4D4D").s().p("AAAAYQgPgFgMgJQgTgOABgSQAAgIACABQACAAAAAHQACAGAKAJQAMAJARAGQARAHANgCQAKgBACgEQAAgGADABQACABAAAHQgBAQgPACIgFABQgMAAgOgGg");
	this.shape_7.setTransform(66.62,184.3085,2.0845,2.0845);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4D4D4D").s().p("AAZAIQgCgEgIgBQgKgCgOAEIgUgHIAMgFQASgHANACQAPACABAPQAAAIgCABQgDAAAAgGg");
	this.shape_8.setTransform(70.1129,184.6572,2.0845,2.0845);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4D4D4D").s().p("AgMAMQAAgQAOgOIALAJQgRAKgDALQAAAFgCACQgDgBAAgGg");
	this.shape_9.setTransform(59.6368,190.4171,2.0845,2.0845);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4D4D4D").s().p("AAaAeQgOAAgMgGQgQgFgLgJQgTgOABgSQAAgIACABQACABAAAGQACAGAKAJQAMAJARAHQARAGANgBQAKgBACgFQAAgGADABQACABAAAIQgBAQgPACg");
	this.shape_10.setTransform(66.62,171.1763,2.0845,2.0845);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4D4D4D").s().p("AAZAIQgCgEgIgBQgKgCgOAEIgUgHIAMgFQATgHAMACQAPACABAPQAAAHgCABIgBAAQgCAAAAgFg");
	this.shape_11.setTransform(70.1129,171.5903,2.0845,2.0845);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4D4D4D").s().p("AgMALQAAgPAOgOIALAJQgRALgDAJQAAAHgCAAQgDABAAgIg");
	this.shape_12.setTransform(59.6368,177.3892,2.0845,2.0845);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4D4D4D").s().p("AAAAYQgPgFgMgJQgTgOABgSQAAgIACABQACABAAAGQACAGAKAJQAMAJARAGQARAHANgBQAKgBACgFQAAgGADABQACABAAAIQgBAQgPABIgFABQgMAAgOgGg");
	this.shape_13.setTransform(66.62,158.1483,2.0845,2.0845);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4D4D4D").s().p("AAZAIQgCgEgIgBQgKgCgOAEIgHgCIgNgFIAMgFQARgHAOACQAPABABAPQAAAIgCABIgBAAQgCAAAAgFg");
	this.shape_14.setTransform(70.1129,158.5614,2.0845,2.0845);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#4D4D4D").s().p("AgMALQgBgOAPgOIALAIQgRAKgEAKQAAAGgCABQgCAAAAgHg");
	this.shape_15.setTransform(59.6889,164.3091,2.0845,2.0845);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#4D4D4D").s().p("AAAAZQgPgGgMgJQgTgOABgSQAAgIACABQACABAAAGQACAGAKAJQAMAJARAHQARAGANgBQAKgBACgFQAAgGADABQACABAAAIQgBAQgPACIgFAAQgMAAgOgFg");
	this.shape_16.setTransform(66.62,145.0683,2.0845,2.0845);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#4D4D4D").s().p("AAZAIQgCgEgIgBQgKgCgOAEIgUgHIAMgFQASgHANACQAPACABAPQAAAHgCABIgBAAQgCAAAAgFg");
	this.shape_17.setTransform(70.1129,145.4319,2.0845,2.0845);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#4D4D4D").s().p("AgMAMQgBgPAPgOQAGAFAFACQgRALgEALQAAAFgCACQgCgBAAgGg");
	this.shape_18.setTransform(59.6889,151.229,2.0845,2.0845);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#4D4D4D").s().p("AAAAYQgPgFgMgJQgTgOABgSQAAgIACABQACABAAAGQACAGAKAJQAMAJARAHQARAGANgBQAKgBACgFQAAgGADABQACABAAAIQgBAQgPABIgFABQgMAAgOgGg");
	this.shape_19.setTransform(66.62,130.7375,2.0845,2.0845);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#4D4D4D").s().p("AAXAIQgFgHgRACQgLgCgJgDIgHgCIAGgDQASgHANACQAPACABAPQAAAHgCABIgBAAQgCAAABgFg");
	this.shape_20.setTransform(70.6861,132.4022,2.0845,2.0845);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#4D4D4D").s().p("AgPANQgBgSATgOQAIAFAFADQgLAGgIAHQgGAHgCAEQAAAHgCAAIAAAAQgCAAAAgHg");
	this.shape_21.setTransform(60.3146,137.8363,2.0845,2.0845);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#4D4D4D").s().p("AgtAWQgBgRATgOQAMgJAPgGQARgGAOABQAPACABAQQAAAIgCABQgDABAAgGQgCgFgKgBQgNgBgRAGQgRAHgMAJQgKAIgCAHQAAAGgCAAIAAABQgCAAAAgIg");
	this.shape_22.setTransform(66.62,121.6523,2.0845,2.0845);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#474544").s().p("Ai5AwQhkgWAAgaQAAgZBkgWQBcgUBdAAQBeAABcAUQBkAWAAAZQAAAahkAWQhcAUheAAQhdAAhcgUg");
	this.shape_23.setTransform(68.275,220);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2B2B2B").s().p("Ah3BEQgygQAAgXQAAgFADgGIAhhlIEMAAIAfBlQAEAFAAAGQAAAXgyAQQgyAQhGAAQhFAAgygQg");
	this.shape_24.setTransform(68.3171,236.6728,2.0901,2.0901);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(48));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.9,-11.6,196.4,265.90000000000003);


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

	// bear
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E92425").ss(0.3).p("ADFjHQioE5iEBKQhDAlgigaQAYiHC/iQg");
	this.shape.setTransform(96.8218,183.9822);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AjIDCQAYiHC/iQIC6h3QioE5iEBKQgoAWgcAAQgTAAgOgLg");
	this.shape_1.setTransform(96.425,184.4573);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#660000").s().p("AgiAFQAAgNAiAGQARACASAFg");
	this.shape_2.setTransform(42.0727,109.6379,2.0905,2.0905);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#660000").s().p("AABgHQARACARAFIhFAIQADgSAgADg");
	this.shape_3.setTransform(38.3098,103.4368,2.0905,2.0905);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#660000").s().p("AgCgFQATgEAUgCIhJAWQgFgKAngGg");
	this.shape_4.setTransform(34.5505,93.9165,2.0905,2.0905);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#660000").s().p("AgOAAIgQhGIA9CNQgZgCgUhFg");
	this.shape_5.setTransform(39.146,100.5538,2.0905,2.0905);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#660000").s().p("AhCACIA1AVIgXhSIBnBjIhQg6IAVBOg");
	this.shape_6.setTransform(64.5456,243.7008,2.0905,2.0905);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ag0gIQABgOA0ASQAaAHAaAMg");
	this.shape_7.setTransform(105.4671,64.3486,2.0905,2.0905);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgHg1IAMAaQAJAjgVAug");
	this.shape_8.setTransform(105.0395,65.538,2.0905,2.0905);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ag6BCQgcgOgEgeQgDgcAZgbQAYgcAlgJQAlgKAcAPQAdAOAEAeQADAcgZAbQgYAbglAKQgOAEgNAAQgVAAgSgJg");
	this.shape_9.setTransform(88.3368,85.1863,2.0891,2.0891);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgUAmQgMgLgCgTQgBgRAIgPQAJgQAOgEQAOgDALAKQAMALACASQACASgJAPQgIAQgPADIgGABQgKAAgJgHg");
	this.shape_10.setTransform(72.982,69.2047,2.0891,2.0891);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#80664D").s().p("AjsEpQh4hFgPiJQgPiIBih6QBhh7CbgnQCaglB3BGQB4BGAPCHQAPCHhiB8QhiB7iaAmQg1AOgzAAQhbAAhOgug");
	this.shape_11.setTransform(91.1067,106.654);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#59311F").s().p("AhUBoQgagkAGg4QAHg3AjgrQAjgrArgFQArgFAaAkQAbAlgHA3QgHA4gjAqQgjArgrAFIgKABQglAAgWggg");
	this.shape_12.setTransform(176.7371,255.9355,2.0899,2.0899);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#59311F").s().p("AhUDrQhZgygnhnQgmhoAihhQAkhiBXgiQBYghBZAxQBaAyAmBpQAnBmgjBiQgjBihYAhQgjAOgkAAQg0AAg2geg");
	this.shape_13.setTransform(42.7556,288.912);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#402A15").s().p("Aj2EsQhMhpAUiiQATihBlh8QBnh8B8gOQB+gPBMBpQBMBogUCiQgTChhmB9QhnB8h9APQgOABgOAAQhqAAhChcg");
	this.shape_14.setTransform(176.3,251.8581);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#402A15").s().p("Ah0FGQh7hFg3iRQg1iPAwiHQAxiGB7guQB5gvB7BFQB7BDA3CRQA1CPgwCHQgwCGh6AvQgzATgyAAQhIAAhJgog");
	this.shape_15.setTransform(42.2944,284.8291);

	this.instance = new lib.Group_6();
	this.instance.setTransform(103.35,235.05,2.0905,2.0905,0,0,0,38.9,31.2);
	this.instance.alpha = 0.3203;
	this.instance.compositeOperation = "multiply";

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#402917").s().p("AleF0QgSgdgKgqIgFgjIB1irQhBlBB/h5QAngmA2gNQAbgHATABIAtgQQA1gOAuARQCSA2AJFQICUBoIACAlQAAArgKAlQgiBziBgDIhkiWIhuAhIhvAWIg9C+QgyAagnAAQg5AAghg3g");
	this.shape_16.setTransform(102.6895,208.7032,2.0905,2.0905);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#59311F").s().p("AkbD+QhCg8gMhoQgLhoAwhYQAxhYBSgUQAzgNAxAVQAvAWAgAwQAUg9AogrQAqgqAzgOQBQgUBCA7QBCA8ALBpQALBngwBYQgxBYhRAUQgzANgygWQgugVghgwQgTA9gnArQgpArg1ANQgUAFgTAAQg6AAgxgsg");
	this.shape_17.setTransform(86.85,68.95);

	this.instance_1 = new lib.Group_9();
	this.instance_1.setTransform(89.15,100.4,2.0905,2.0905,0,0,0,31.2,20.1);
	this.instance_1.alpha = 0.3203;
	this.instance_1.compositeOperation = "multiply";

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#402917").s().p("AjBD/Qhjg+gNh2QgOh1BRhpQBQhqB/gfQB+gfBjA9QBjA+ANB2QAOB1hRBqQhQBph/AfQgpALgoAAQhOAAhCgpg");
	this.shape_18.setTransform(88.1094,79.9159,2.0899,2.0899);

	this.instance_2 = new lib.Group_12_0();
	this.instance_2.setTransform(54.55,175.5,2.0905,2.0905,0,0,0,8.6,20.6);
	this.instance_2.alpha = 0.3203;
	this.instance_2.compositeOperation = "multiply";

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#402917").s().p("AhkDyQgdgCgRgWQgmgwANhGQALg4Ang9QA1hTBqhPIBgg+IApCyIhEBsQhRB3g7A0QgfAagfAAIgFAAg");
	this.shape_19.setTransform(36.5056,184.8938,2.0899,2.0899);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#59311F").s().p("AhqCbQgvg1gChTQgChTAthBQArhABBgIQBAgHAvA1QAvA2ACBUQACBTgtA/QgsBBhAAHIgQACQg3AAgogwg");
	this.shape_20.setTransform(32.625,49.2612);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#59311F").s().p("AhOChQgrgegUg5QgVg3AIg9QAGgmAOgfQATgrAkgfQAYANAaAAQAYAAAWgLQAhA6BBAAIAIAAIgBgKIABgKIAKATQAQAgAFAlQALBFgeBFQgPAigcAcQgmAlguAFIgMABQgoAAgigZg");
	this.shape_21.setTransform(133.9202,25.9368);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#402917").s().p("AikDvQhIhTgDiAQgDiABEhiQBEhjBjgMQBigMBKBSQBIBTADCBQADB/hEBjQhEBkhjALIgXACQhUAAhBhJg");
	this.shape_22.setTransform(32.625,49.2881);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#402917").s().p("Ah5DwQhDgvgfhaQgfhYAPhgQAHgxAVgxQAag6ArgoQAJA0AyAYQAYANAaAAQAYAAAWgLQAhA6BBAAIAIAAIgBgKIABgKIAKATQAQAgAFAlQAhAhAvAAIAHAAQAABTghBJQgaA5gpAoQg5A3hGAJIgWABQg8AAg1gmg");
	this.shape_23.setTransform(133.9414,27.5175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.instance_2},{t:this.shape_18},{t:this.instance_1},{t:this.shape_17},{t:this.shape_16},{t:this.instance},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(72));

	// hand
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#402A17").s().p("ABGCuQhEgUhmhKIhYhGIgBi7IBpANQB1AXBFA1QAzAoAWAwQAbA7gYBAQgMAcgbAQQgUALgWAAQgNAAgOgEg");
	this.shape_24.setTransform(165.7376,163.2313,2.0887,2.0887);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#BFB8B4").s().p("AhJBkQAAgIAQgOIAQgNIgRgcQgPgYAAgGQAAgJAWgXQAQgRgFgBQgOgFgDgXQgEgdAQgDQAIgBAIAEIBnBkIhmBXQgdARgKAAQgFAAgBgEg");
	this.shape_25.setTransform(132.5134,147.441,2.0897,2.0897);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E8DFDA").s().p("AAJBpIgkgVIgljIIA5AGQA2ALgEAXQgFAWAIAPIAOAbQAFAPAAAdQAAAcgFAMQgEAHABANQAAANgEAJQgCADgGAAQgLAAgZgMg");
	this.shape_26.setTransform(145.7093,152.423,2.0905,2.0905);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#402917").s().p("ABGCuQhEgUhmhKIhYhGIgBi7IBpANQB1AXBFA1QAzAoAWAwQAbA7gYBAQgMAcgbAQQgUALgWAAQgNAAgOgEg");
	this.shape_27.setTransform(172.0743,164.456,2.0888,2.0888,14.9989);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#BFB8B4").s().p("AivDAQADgRAogUIAngRIgThCQgRg4ADgLQAFgUA5gjQApgZgJgFQgZgSAFgwQAJg9AiAEQAPABAPAOICbECIj/B5Qg0ANgXAAQgYAAADgMg");
	this.shape_28.setTransform(141.4083,137.5157);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#402917").s().p("AgmGpQhmhrhsjxIhXjbIDElVICuCEQC+CnBFCnQAyB8gKBuQgNCKhvBaQgyAnhDAAQhMgBg3g6g");
	this.shape_29.setTransform(176.5326,162.475);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#BFB8B4").s().p("AhhCRQhmgcASgTQALgNAtADIArAFIAQhDQANg4AIgIQAPgPBCgCQAwgCgFgJQgNgcAdgnQAlgwAcAUQAOAJAGATIAEEtg");
	this.shape_30.setTransform(168.565,127.0705);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#402917").s().p("AiiHQQhBgngThOQgjiQAbkFIAjjqIFSjFIBWDKQBRDvgYCyQgSCGhABZQhRByiLAVQgOACgOAAQgxAAgtgag");
	this.shape_31.setTransform(195.6466,164.6799);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#BFB8B4").s().p("AiEBJQhbg1AWgOQAOgIAqANIAoAPIAhg7QAcg0AKgFQASgLBAAPQAvALgDgKQgFgeAmgeQAxglAVAaQALANABAUIhKEjg");
	this.shape_32.setTransform(186.5858,128.447);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#BFB8B4").s().p("AihgCQhLhLAZgIQAQgFAlAZIAjAZIAvgxQApgsALgDQAUgFA6AgQAqAWABgKQACgfAtgTQA4gXAOAfQAHAPgEAUIiTEGg");
	this.shape_33.setTransform(204.1953,135.2352);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#402917").s().p("AltEzQgzgngRhAQgThKAqhFQBNh9DNinIC9iNIF7BlIhTDMQhvDhiQBuQhqBRhtATQgdAFgdAAQhoAAhahCg");
	this.shape_34.setTransform(221.5291,180.9222);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#BFB6B3").s().p("Ai2hbQABhpAXAMQAPAHAJAsIAHAqIBEgBQA7gCAJAFQASALAUBAQANAtAIgHQAXgUAtASQA4AYgMAfQgFAQgRALIkhBSg");
	this.shape_35.setTransform(261.9059,162.4137);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#402917").s().p("AkpEIQiCgxg6iCQgZg7ARg/QAVhKBGgnQCChHEFgqIDqgaIEWEUIitCHQjSCMiyAXQgqAFgmAAQhWAAhHgag");
	this.shape_36.setTransform(234.581,197.1627);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#BFB8B4").s().p("AinCFIBekJQA2hbAOAWQAIAOgNAqIgQAoIA8AhQA0AcAFAKQALASgPBAQgLAuAKgCQAegFAeAmQAlAxgaAVQgNALgUABg");
	this.shape_37.setTransform(274.953,196.9368);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#BFB8B4").s().p("ABpDZIkGiTICfjoQBMhKAHAZQAGAQgZAlIgZAjIAxAvQArApADALQAGAUggA6QgWAqAKAAQAeADAUAsQAXA5gfAOQgJAEgMAAQgHAAgHgBg");
	this.shape_38.setTransform(276.3603,215.6297);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#402917").s().p("ACxFZQj2gxiPhuQhrhTguhkQg5h9AziFQAYg7A5giQBDgmBOAXQCOAqDVCbIC5CTIABGIg");
	this.shape_39.setTransform(239.0514,217.4878);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#402917").s().p("AiBEGQiFgShahAQhxhRgWiLQgJhAAhg6QAnhCBOgTQCQgiEGAaIDqAjIDEFTIjKBVQi5A/iUAAQgrAAgpgFg");
	this.shape_40.setTransform(250.6286,230.6224);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#BFB8B4").s().p("AinCFIBfkJQA1hbAOAWQAIAOgNAqIgPAoIA6AhQA1AcAGAKQAKASgPBAQgLAuAKgCQAegFAeAmQAlAxgaAVQgNALgUABg");
	this.shape_41.setTransform(286.953,221.6368);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26,p:{scaleX:2.0905,scaleY:2.0905,x:145.7093,y:152.423}},{t:this.shape_25,p:{x:132.5134,scaleX:2.0897,scaleY:2.0897,rotation:0,y:147.441}},{t:this.shape_24,p:{x:165.7376}}]}).to({state:[{t:this.shape_26,p:{scaleX:2.0905,scaleY:2.0905,x:145.7093,y:152.423}},{t:this.shape_25,p:{x:138.8134,scaleX:2.0897,scaleY:2.0897,rotation:0,y:147.441}},{t:this.shape_24,p:{x:172.0376}}]},29).to({state:[{t:this.shape_26,p:{scaleX:2.0908,scaleY:2.0908,x:145.7625,y:152.538}},{t:this.shape_28},{t:this.shape_27,p:{scaleX:2.0888,scaleY:2.0888,rotation:14.9989,x:172.0743,y:164.456}}]},4).to({state:[{t:this.shape_25,p:{x:157.2767,scaleX:2.0901,scaleY:2.0901,rotation:29.9979,y:135.8474}},{t:this.shape_29}]},3).to({state:[{t:this.shape_30},{t:this.shape_27,p:{scaleX:2.089,scaleY:2.089,rotation:44.997,x:188.3538,y:167.662}}]},3).to({state:[{t:this.shape_32},{t:this.shape_31}]},3).to({state:[{t:this.shape_33},{t:this.shape_27,p:{scaleX:2.0887,scaleY:2.0887,rotation:74.9958,x:200.4133,y:172.1883}}]},3).to({state:[{t:this.shape_25,p:{x:227.6614,scaleX:2.0896,scaleY:2.0896,rotation:89.9866,y:144.154}},{t:this.shape_27,p:{scaleX:2.0888,scaleY:2.0888,rotation:89.9828,x:211.8139,y:177.2883}}]},3).to({state:[{t:this.shape_25,p:{x:243.1361,scaleX:2.0901,scaleY:2.0901,rotation:104.9972,y:154.3662}},{t:this.shape_34}]},3).to({state:[{t:this.shape_35},{t:this.shape_27,p:{scaleX:2.0885,scaleY:2.0885,rotation:119.9961,x:226.0961,y:188.5113}}]},3).to({state:[{t:this.shape_25,p:{x:264.9426,scaleX:2.0896,scaleY:2.0896,rotation:134.9956,y:185.2538}},{t:this.shape_36}]},3).to({state:[{t:this.shape_37},{t:this.shape_27,p:{scaleX:2.0886,scaleY:2.0886,rotation:149.9855,x:234.8251,y:205.4263}}]},3).to({state:[{t:this.shape_38},{t:this.shape_27,p:{scaleX:2.0889,scaleY:2.0889,rotation:164.9916,x:239.2727,y:211.8709}}]},3).to({state:[{t:this.shape_25,p:{x:272.3015,scaleX:2.0897,scaleY:2.0897,rotation:179.9912,y:233.3371}},{t:this.shape_39}]},3).to({state:[{t:this.shape_41},{t:this.shape_40}]},3).wait(3));

	// bearback
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#402917").s().p("AAAgDIABAAIgBAIg");
	this.shape_42.setTransform(150.7625,85.55);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#BFB7B3").s().p("AAmDkQgrkyh9iLIgGgbIB4ANQBzAXgKAvQgJAvAQAgIAdA3QAMAiAAA7QAAA8gMAYQgIAPACAcQgBAbgHASQgFAHgMAAQgTAAglgRg");
	this.shape_43.setTransform(145.7,152.4285);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42}]}).wait(72));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,-0.3,303.90000000000003,321.8);


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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},366).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},203).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_5,p:{regX:481.4,regY:-1.7,scaleX:0.9989,scaleY:0.7976,x:445.3,y:495.5,startPosition:0}}]},50).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_5,p:{regX:476.1,regY:6.2,scaleX:0.997,scaleY:0.7957,x:509,y:518.7,startPosition:1}}]},1).wait(76));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_plane = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// plane
	this.instance = new lib.plane();
	this.instance.setTransform(-345.85,363.4,0.4036,0.412,0,0,0,50.1,51.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(696));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_pic = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// pic
	this.instance = new lib.pic("synched",10,false);
	this.instance.setTransform(752,364.65,1,1,0,0,0,82,95.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(696));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_horse = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// horse
	this.instance = new lib.horse();
	this.instance.setTransform(964.25,563.45,0.5149,0.5149,0,0,0,252.5,240.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(696));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_doll = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// doll
	this.instance = new lib.doll("synched",0,false);
	this.instance.setTransform(-54.7,341.95,0.4328,0.3845,0,0,0,104.3,177.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(132).to({_off:false},0).wait(564));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_bear = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// bear
	this.instance = new lib.bear("synched",0,false);
	this.instance.setTransform(-278.05,314.7,0.4686,0.3847,0,0,0,40.8,70.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(317).to({_off:false},0).wait(379));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


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
	this.instance = new lib.darkbed("synched",0);
	this.instance.setTransform(279.35,406.15,1,1,0,0,0,200.3,166.7);
	this.instance.filters = [new cjs.ColorFilter(0.25, 0.25, 0.25, 1, 0, 0, 0, 0)];
	this.instance.cache(-2,-2,405,338);

	this.instance_1 = new lib.darkpic2("synched",0);
	this.instance_1.setTransform(-366.25,245.2,1,1,0,0,0,71,57.9);
	this.instance_1.filters = [new cjs.ColorFilter(0.25, 0.25, 0.25, 1, 0, 0, 0, 0)];
	this.instance_1.cache(-3,-2,146,120);

	this.instance_2 = new lib.darkdresser("synched",0);
	this.instance_2.setTransform(559.45,461.35,0.9999,0.9999,0,0,0,70.3,113);
	this.instance_2.filters = [new cjs.ColorFilter(0.25, 0.25, 0.25, 1, 0, 0, 0, 0)];
	this.instance_2.cache(-2,-2,144,230);

	this.instance_3 = new lib.darrkfishebawl("synched",0);
	this.instance_3.setTransform(546.25,316.1,1,1,0,0,0,32.6,28.8);
	this.instance_3.filters = [new cjs.ColorFilter(0.25, 0.25, 0.25, 1, 0, 0, 0, 0)];
	this.instance_3.cache(-2,-2,68,61);

	this.instance_4 = new lib.tree();
	this.instance_4.setTransform(1016.05,390.1,0.3419,0.2398,0,0,180,204.2,122.8);

	this.instance_5 = new lib.tree();
	this.instance_5.setTransform(1054.4,281.35,0.5327,0.5327,0,0,180,204.6,122.6);

	this.instance_6 = new lib.tree();
	this.instance_6.setTransform(1086.65,223,0.5327,0.5327,0,0,0,204.6,122.6);

	this.instance_7 = new lib.tree();
	this.instance_7.setTransform(1086,354.85,0.5327,0.5327,0,0,0,204.6,122.6);

	this.instance_8 = new lib.clown();
	this.instance_8.setTransform(-193.65,264.1,0.4913,0.4913,0,0,0,-4.5,4.5);

	this.instance_9 = new lib.girl();
	this.instance_9.setTransform(292.5,414.65,0.4038,0.4122,0,0,0,432.2,125.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#403D2F").s().p("AglC8IAAl3IBLAAIAAF3g");
	this.shape.setTransform(-334.6106,397.9399,0.8448,0.8624);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#403D2F").s().p("AgrCxIAAlhIBXAAIAAFhg");
	this.shape_1.setTransform(-15.5247,397.6238,0.8448,0.8624);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#403D2F").s().p("EgjyAA2IAAhsMBHlAAAIAABsg");
	this.shape_2.setTransform(-173.3464,386.5747,0.8448,0.8624);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#071540").s().p("AzgVOMAAAgqbMAnBAAAMAAAAqbg");
	this.shape_3.setTransform(1070.525,283.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#403D2F").s().p("A2ZY8MAAAgx3MAszAAAMAAAAx3g");
	this.shape_4.setTransform(1068.375,283.05);

	this.instance_10 = new lib.Path_7_1();
	this.instance_10.setTransform(-367.05,251.3,0.8448,0.8624,0,0,0,84.3,67.5);
	this.instance_10.compositeOperation = "multiply";

	this.instance_11 = new lib.Path_11_0();
	this.instance_11.setTransform(408.2,460.35,0.8448,0.8624,0,0,0,18,5.6);
	this.instance_11.alpha = 0.6484;
	this.instance_11.compositeOperation = "multiply";

	this.instance_12 = new lib.Path_13();
	this.instance_12.setTransform(361.7,453.95,0.8448,0.8624,0,0,0,25.3,9);
	this.instance_12.alpha = 0.6484;
	this.instance_12.compositeOperation = "multiply";

	this.instance_13 = new lib.Path_37();
	this.instance_13.setTransform(279.3,449.75,0.8448,0.8624,0,0,0,228.1,8.7);
	this.instance_13.compositeOperation = "screen";
	this.instance_13.filters = [new cjs.ColorFilter(0.14, 0.14, 0.14, 1, 0, 0, 0, 0)];
	this.instance_13.cache(-2,-2,460,21);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#210F27").s().p("EgjnAF2IAArrMBHPAAAIAALrg");
	this.shape_5.setTransform(279.5067,474.8963,0.8448,0.8624);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("A9rDqIAAnTMA7XAAAIAAHTg");
	this.shape_6.setTransform(279.975,549.475);

	this.instance_14 = new lib.Path_48();
	this.instance_14.setTransform(540.1,319.05,0.8448,0.8624,0,0,0,38.3,32.1);
	this.instance_14.compositeOperation = "multiply";

	this.instance_15 = new lib.Path();
	this.instance_15.setTransform(541.75,273.7,0.8441,0.8617,0,0,0,2,2.8);
	this.instance_15.compositeOperation = "multiply";

	this.instance_16 = new lib.Path_1();
	this.instance_16.setTransform(466.4,274.3,0.8441,0.8617,0,0,0,1.9,2.6);
	this.instance_16.compositeOperation = "multiply";

	this.instance_17 = new lib.Path_2();
	this.instance_17.setTransform(530.05,459.5,0.8441,0.8617,0,0,0,85.2,133.9);
	this.instance_17.compositeOperation = "multiply";

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#403D2F").s().p("EiZ7AL0IAA3nMEz3AAAIAAXng");
	this.shape_7.setTransform(294.75,648.375);

	this.instance_18 = new lib.darkpic("synched",0);
	this.instance_18.setTransform(347,304.15,1,1,0,0,0,65.1,67.5);
	this.instance_18.filters = [new cjs.ColorFilter(0.25, 0.25, 0.25, 1, 0, 0, 0, 0)];
	this.instance_18.cache(-3,-2,134,139);

	this.instance_19 = new lib.Path_8_0();
	this.instance_19.setTransform(345.55,309.95,0.8448,0.8624,0,0,0,77.5,78.6);
	this.instance_19.compositeOperation = "multiply";

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#042C2F").s().p("EiaDAtdMAAAha5ME0HAAAMAAABa5g");
	this.shape_8.setTransform(293.95,291.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(1,1,1).p("A13BqIAAjTMArvAAAIAADT");
	this.shape_9.setTransform(1071.725,453.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.instance_19},{t:this.instance_18},{t:this.shape_7},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.shape_6},{t:this.shape_5},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(696));

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
	this.streamSoundSymbolsList[1] = [{id:"הבובהזהבהAudioTrimmercom",startFrame:1,endFrame:696,loop:1,offset:0}];
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
		var self=this;
		self.stop();
		
		self.playbutton.addEventListener("click", play);
		
		function play(){
			self.gotoAndPlay(1);
		}
	}
	this.frame_1 = function() {
		var soundInstance = playSound("הבובהזהבהAudioTrimmercom",0);
		this.InsertIntoSoundStreamData(soundInstance,1,696,1);
	}
	this.frame_694 = function() {
		this.replaybutton = this.playbutton.replaybutton;
		var self=this;
		self.stop();
		
		self.replaybutton.addEventListener("click", play);
		
		function play(){
			self.gotoAndPlay(1);
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

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).wait(48).to({regX:0,regY:0,scaleX:0.4652,scaleY:0.4652,x:968.5842,y:543.3103},0).wait(1).to({scaleX:0.4669,scaleY:0.4669,x:966.4615,y:537.1042},0).wait(1).to({scaleX:0.4686,scaleY:0.4686,x:964.3388,y:530.8981},0).wait(1).to({scaleX:0.4703,scaleY:0.4703,x:962.216,y:524.692},0).wait(1).to({scaleX:0.472,scaleY:0.472,x:960.0933,y:518.4859},0).wait(1).to({scaleX:0.4737,scaleY:0.4737,x:957.9706,y:512.2798},0).wait(1).to({scaleX:0.4753,scaleY:0.4753,x:955.8478,y:506.0737},0).wait(1).to({scaleX:0.477,scaleY:0.477,x:953.7251,y:499.8676},0).wait(1).to({scaleX:0.4787,scaleY:0.4787,x:951.6024,y:493.6615},0).wait(1).to({scaleX:0.4804,scaleY:0.4804,x:949.4796,y:487.4554},0).wait(1).to({scaleX:0.4821,scaleY:0.4821,x:947.3569,y:481.2493},0).wait(1).to({scaleX:0.4838,scaleY:0.4838,x:945.2342,y:475.0432},0).wait(1).to({scaleX:0.4855,scaleY:0.4855,x:943.1115,y:468.8371},0).wait(1).to({scaleX:0.4872,scaleY:0.4872,x:940.9887,y:462.631},0).wait(1).to({scaleX:0.4889,scaleY:0.4889,x:938.866,y:456.4249},0).wait(1).to({scaleX:0.4906,scaleY:0.4906,x:936.7433,y:450.2188},0).wait(1).to({scaleX:0.4923,scaleY:0.4923,x:934.6205,y:444.0127},0).wait(1).to({scaleX:0.494,scaleY:0.494,x:932.4978,y:437.8066},0).wait(1).to({scaleX:0.4957,scaleY:0.4957,x:930.3751,y:431.6005},0).wait(1).to({scaleX:0.4974,scaleY:0.4974,x:928.2523,y:425.3944},0).wait(1).to({scaleX:0.499,scaleY:0.499,x:926.1296,y:419.1883},0).wait(1).to({scaleX:0.5007,scaleY:0.5007,x:924.0069,y:412.9822},0).wait(1).to({scaleX:0.5024,scaleY:0.5024,x:921.8842,y:406.7761},0).wait(1).to({scaleX:0.5041,scaleY:0.5041,x:919.7614,y:400.57},0).wait(1).to({scaleX:0.5058,scaleY:0.5058,x:917.6387,y:394.3639},0).wait(1).to({scaleX:0.5075,scaleY:0.5075,x:915.516,y:388.1578},0).wait(1).to({scaleX:0.5092,scaleY:0.5092,x:913.3932,y:381.9517},0).wait(1).to({scaleX:0.5109,scaleY:0.5109,x:911.2705,y:375.7456},0).wait(1).to({scaleX:0.5126,scaleY:0.5126,x:909.1478,y:369.5395},0).wait(1).to({scaleX:0.5143,scaleY:0.5143,x:907.025,y:363.3334},0).wait(1).to({scaleX:0.516,scaleY:0.516,x:904.9023,y:357.1274},0).wait(1).to({scaleX:0.5177,scaleY:0.5177,x:902.7796,y:350.9213},0).wait(1).to({scaleX:0.5194,scaleY:0.5194,x:900.6569,y:344.7152},0).wait(1).to({scaleX:0.5211,scaleY:0.5211,x:898.5341,y:338.5091},0).wait(1).to({scaleX:0.5227,scaleY:0.5227,x:896.4114,y:332.303},0).wait(1).to({scaleX:0.5244,scaleY:0.5244,x:894.2887,y:326.0969},0).wait(1).to({scaleX:0.5261,scaleY:0.5261,x:892.1659,y:319.8908},0).wait(1).to({scaleX:0.5278,scaleY:0.5278,x:890.0432,y:313.6847},0).wait(1).to({scaleX:0.5295,scaleY:0.5295,x:887.9205,y:307.4786},0).wait(1).to({scaleX:0.5312,scaleY:0.5312,x:885.7977,y:301.2725},0).wait(1).to({scaleX:0.5329,scaleY:0.5329,x:883.675,y:295.0664},0).wait(1).to({scaleX:0.5346,scaleY:0.5346,x:881.5523,y:288.8603},0).wait(1).to({scaleX:0.5363,scaleY:0.5363,x:879.4296,y:282.6542},0).wait(1).to({scaleX:0.538,scaleY:0.538,x:877.3068,y:276.4481},0).wait(1).to({scaleX:0.5397,scaleY:0.5397,x:875.1841,y:270.242},0).wait(1).to({scaleX:0.5414,scaleY:0.5414,x:874.6888,y:270.3748},0).wait(1).to({scaleX:0.5431,scaleY:0.5431,x:874.1935,y:270.5077},0).wait(1).to({scaleX:0.5448,scaleY:0.5448,x:873.6982,y:270.6405},0).wait(1).to({scaleX:0.5464,scaleY:0.5464,x:873.2029,y:270.7733},0).wait(1).to({scaleX:0.5481,scaleY:0.5481,x:872.7076,y:270.9061},0).wait(1).to({scaleX:0.5498,scaleY:0.5498,x:872.2123,y:271.039},0).wait(1).to({scaleX:0.5515,scaleY:0.5515,x:871.7169,y:271.1718},0).wait(1).to({scaleX:0.5532,scaleY:0.5532,x:871.2216,y:271.3046},0).wait(1).to({scaleX:0.5549,scaleY:0.5549,x:870.7263,y:271.4374},0).wait(1).to({scaleX:0.5566,scaleY:0.5566,x:870.231,y:271.5703},0).wait(1).to({scaleX:0.5583,scaleY:0.5583,x:869.7357,y:271.7031},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:869.2404,y:271.8359},0).wait(1).to({scaleX:0.5617,scaleY:0.5617,x:868.7451,y:271.9687},0).wait(1).to({scaleX:0.5634,scaleY:0.5634,x:868.2498,y:272.1016},0).wait(1).to({scaleX:0.5651,scaleY:0.5651,x:867.7545,y:272.2344},0).wait(1).to({scaleX:0.5668,scaleY:0.5668,x:867.2592,y:272.3672},0).wait(1).to({scaleX:0.5684,scaleY:0.5684,x:866.7639,y:272.5001},0).wait(1).to({scaleX:0.5701,scaleY:0.5701,x:866.2686,y:272.6329},0).wait(1).to({scaleX:0.5718,scaleY:0.5718,x:865.7732,y:272.7657},0).wait(1).to({scaleX:0.5735,scaleY:0.5735,x:865.2779,y:272.8985},0).wait(1).to({scaleX:0.5752,scaleY:0.5752,x:864.7826,y:273.0314},0).wait(1).to({scaleX:0.5769,scaleY:0.5769,x:864.2873,y:273.1642},0).wait(1).to({scaleX:0.5786,scaleY:0.5786,x:863.792,y:273.297},0).wait(1).to({scaleX:0.5835,scaleY:0.5835,x:840.0894,y:279.7442},0).wait(1).to({scaleX:0.5885,scaleY:0.5885,x:816.3868,y:286.1914},0).wait(1).to({scaleX:0.5934,scaleY:0.5934,x:792.6842,y:292.6386},0).wait(1).to({scaleX:0.5983,scaleY:0.5983,x:768.9816,y:299.0858},0).wait(1).to({scaleX:0.6033,scaleY:0.6033,x:745.279,y:305.5329},0).wait(1).to({scaleX:0.6082,scaleY:0.6082,x:721.5764,y:311.9801},0).wait(1).to({scaleX:0.6131,scaleY:0.6131,x:697.8738,y:318.4273},0).wait(1).to({scaleX:0.6181,scaleY:0.6181,x:674.1712,y:324.8745},0).wait(1).to({scaleX:0.623,scaleY:0.623,x:650.4686,y:331.3217},0).wait(1).to({scaleX:0.6279,scaleY:0.6279,x:626.766,y:337.7689},0).wait(1).to({scaleX:0.6328,scaleY:0.6328,x:603.0634,y:344.2161},0).wait(1).to({scaleX:0.6378,scaleY:0.6378,x:579.3608,y:350.6632},0).wait(1).to({scaleX:0.6427,scaleY:0.6427,x:555.6582,y:357.1104},0).wait(1).to({scaleX:0.6476,scaleY:0.6476,x:531.9556,y:363.5576},0).wait(1).to({scaleX:0.6526,scaleY:0.6526,x:508.2531,y:370.0048},0).wait(1).to({scaleX:0.6575,scaleY:0.6575,x:484.5505,y:376.452},0).wait(1).to({scaleX:0.6624,scaleY:0.6624,x:460.8479,y:382.8992},0).wait(1).to({scaleX:0.6674,scaleY:0.6674,x:437.1453,y:389.3463},0).wait(1).to({scaleX:0.6723,scaleY:0.6723,x:413.4427,y:395.7935},0).wait(1).to({scaleX:0.6772,scaleY:0.6772,x:389.7401,y:402.2407},0).wait(1).to({scaleX:0.6822,scaleY:0.6822,x:366.0375,y:408.6879},0).wait(1).to({scaleX:0.6871,scaleY:0.6871,x:342.3349,y:415.1351},0).wait(1).to({scaleX:0.692,scaleY:0.692,x:318.6323,y:421.5823},0).wait(1).to({scaleX:0.6858,scaleY:0.6858,x:318.2859,y:422.5521},0).wait(1).to({scaleX:0.6795,scaleY:0.6795,x:317.9395,y:423.5219},0).wait(1).to({scaleX:0.6732,scaleY:0.6732,x:317.5932,y:424.4916},0).wait(1).to({scaleX:0.667,scaleY:0.667,x:317.2468,y:425.4614},0).wait(1).to({scaleX:0.6607,scaleY:0.6607,x:316.9005,y:426.4312},0).wait(1).to({scaleX:0.6545,scaleY:0.6545,x:316.5541,y:427.401},0).wait(1).to({scaleX:0.6482,scaleY:0.6482,x:316.2077,y:428.3708},0).wait(1).to({scaleX:0.6419,scaleY:0.6419,x:315.8614,y:429.3406},0).wait(1).to({scaleX:0.6357,scaleY:0.6357,x:315.515,y:430.3104},0).wait(1).to({scaleX:0.6294,scaleY:0.6294,x:315.1687,y:431.2802},0).wait(1).to({scaleX:0.6232,scaleY:0.6232,x:314.8223,y:432.25},0).wait(1).to({scaleX:0.6169,scaleY:0.6169,x:314.4759,y:433.2198},0).wait(1).to({scaleX:0.6107,scaleY:0.6107,x:314.1296,y:434.1896},0).wait(1).to({scaleX:0.6044,scaleY:0.6044,x:313.7832,y:435.1594},0).wait(1).to({scaleX:0.5981,scaleY:0.5981,x:313.4368,y:436.1292},0).wait(1).to({scaleX:0.5919,scaleY:0.5919,x:313.0905,y:437.0989},0).wait(1).to({scaleX:0.5856,scaleY:0.5856,x:312.7441,y:438.0687},0).wait(1).to({scaleX:0.5794,scaleY:0.5794,x:312.3978,y:439.0385},0).wait(1).to({scaleX:0.5731,scaleY:0.5731,x:312.0514,y:440.0083},0).wait(1).to({scaleX:0.5668,scaleY:0.5668,x:311.705,y:440.9781},0).wait(1).to({scaleX:0.5606,scaleY:0.5606,x:311.3587,y:441.9479},0).wait(1).to({scaleX:0.5543,scaleY:0.5543,x:311.0123,y:442.9177},0).wait(1).to({scaleX:0.5481,scaleY:0.5481,x:310.6659,y:443.8875},0).wait(1).to({scaleX:0.5418,scaleY:0.5418,x:310.3196,y:444.8573},0).wait(1).to({scaleX:0.5355,scaleY:0.5355,x:309.9732,y:445.8271},0).wait(1).to({scaleX:0.5293,scaleY:0.5293,x:309.6269,y:446.7969},0).wait(1).to({scaleX:0.523,scaleY:0.523,x:309.2805,y:447.7667},0).wait(1).to({scaleX:0.5168,scaleY:0.5168,x:308.9341,y:448.7364},0).wait(1).to({scaleX:0.5105,scaleY:0.5105,x:308.5878,y:449.7062},0).wait(1).to({scaleX:0.5043,scaleY:0.5043,x:308.2414,y:450.676},0).wait(1).to({scaleX:0.498,scaleY:0.498,x:307.8951,y:451.6458},0).wait(1).to({scaleX:0.4917,scaleY:0.4917,x:307.5487,y:452.6156},0).wait(1).to({scaleX:0.4855,scaleY:0.4855,x:307.2023,y:453.5854},0).wait(1).to({scaleX:0.4792,scaleY:0.4792,x:306.856,y:454.5552},0).wait(1).to({scaleX:0.473,scaleY:0.473,x:306.5096,y:455.525},0).wait(1).to({scaleX:0.4667,scaleY:0.4667,x:306.1632,y:456.4948},0).wait(1).to({scaleX:0.4604,scaleY:0.4604,x:305.8169,y:457.4646},0).wait(1).to({scaleX:0.4542,scaleY:0.4542,x:305.4705,y:458.4344},0).wait(1).to({scaleX:0.4479,scaleY:0.4479,x:305.1242,y:459.4042},0).wait(1).to({scaleX:0.4417,scaleY:0.4417,x:304.7778,y:460.3739},0).wait(1).to({scaleX:0.4354,scaleY:0.4354,x:304.4314,y:461.3437},0).wait(1).to({scaleX:0.4292,scaleY:0.4292,x:304.0851,y:462.3135},0).wait(1).to({scaleX:0.4229,scaleY:0.4229,x:303.7387,y:463.2833},0).wait(1).to({scaleX:0.4166,scaleY:0.4166,x:303.3923,y:464.2531},0).wait(1).to({scaleX:0.4104,scaleY:0.4104,x:303.046,y:465.2229},0).wait(1).to({scaleX:0.4041,scaleY:0.4041,x:302.6996,y:466.1927},0).wait(1).to({scaleX:0.3979,scaleY:0.3979,x:302.3533,y:467.1625},0).wait(1).to({scaleX:0.3916,scaleY:0.3916,x:302.0069,y:468.1323},0).wait(1).to({scaleX:0.3853,scaleY:0.3853,x:301.6605,y:469.1021},0).wait(1).to({scaleX:0.3791,scaleY:0.3791,x:301.3142,y:470.0719},0).wait(1).to({scaleX:0.3728,scaleY:0.3728,x:300.9678,y:471.0417},0).wait(1).to({scaleX:0.3666,scaleY:0.3666,x:300.6215,y:472.0115},0).wait(1).to({scaleX:0.3603,scaleY:0.3603,x:300.2751,y:472.9812},0).wait(1).to({scaleX:0.354,scaleY:0.354,x:299.9287,y:473.951},0).wait(1).to({scaleX:0.3478,scaleY:0.3478,x:299.5824,y:474.9208},0).wait(1).to({scaleX:0.3415,scaleY:0.3415,x:299.236,y:475.8906},0).wait(1).to({scaleX:0.3353,scaleY:0.3353,x:298.8896,y:476.8604},0).wait(1).to({scaleX:0.329,scaleY:0.329,x:298.5433,y:477.8302},0).wait(1).to({scaleX:0.3228,scaleY:0.3228,x:298.1969,y:478.8},0).wait(1).to({scaleX:0.3165,scaleY:0.3165,x:297.8506,y:479.7698},0).wait(1).to({scaleX:0.3102,scaleY:0.3102,x:297.5042,y:480.7396},0).wait(1).to({scaleX:0.304,scaleY:0.304,x:297.1578,y:481.7094},0).wait(1).to({scaleX:0.2977,scaleY:0.2977,x:296.8115,y:482.6792},0).wait(1).to({scaleX:0.2915,scaleY:0.2915,x:296.4651,y:483.649},0).wait(1).to({scaleX:0.2852,scaleY:0.2852,x:296.1187,y:484.6187},0).wait(1).to({scaleX:0.2829,scaleY:0.2829,x:286.9939,y:480.7088},0).wait(1).to({scaleX:0.2806,scaleY:0.2806,x:277.869,y:476.7988},0).wait(1).to({scaleX:0.2784,scaleY:0.2784,x:268.7442,y:472.8888},0).wait(1).to({scaleX:0.2761,scaleY:0.2761,x:259.6193,y:468.9788},0).wait(1).to({scaleX:0.2738,scaleY:0.2738,x:250.4944,y:465.0688},0).wait(1).to({scaleX:0.2715,scaleY:0.2715,x:241.3696,y:461.1588},0).wait(1).to({scaleX:0.2692,scaleY:0.2692,x:232.2447,y:457.2488},0).wait(1).to({scaleX:0.267,scaleY:0.267,x:223.1199,y:453.3388},0).wait(1).to({scaleX:0.2647,scaleY:0.2647,x:213.995,y:449.4288},0).wait(1).to({scaleX:0.2624,scaleY:0.2624,x:204.8701,y:445.5188},0).wait(1).to({scaleX:0.2601,scaleY:0.2601,x:195.7453,y:441.6088},0).wait(1).to({scaleX:0.2578,scaleY:0.2578,x:186.6204,y:437.6988},0).wait(1).to({scaleX:0.2556,scaleY:0.2556,x:177.4956,y:433.7888},0).wait(1).to({scaleX:0.2533,scaleY:0.2533,x:168.3707,y:429.8788},0).wait(1).to({scaleX:0.251,scaleY:0.251,x:159.2458,y:425.9688},0).wait(1).to({scaleX:0.2487,scaleY:0.2487,x:150.121,y:422.0588},0).wait(1).to({scaleX:0.2464,scaleY:0.2464,x:140.9961,y:418.1488},0).wait(1).to({scaleX:0.2442,scaleY:0.2442,x:131.8713,y:414.2388},0).wait(1).to({scaleX:0.2419,scaleY:0.2419,x:122.7464,y:410.3288},0).wait(1).to({scaleX:0.2396,scaleY:0.2396,x:113.6215,y:406.4188},0).wait(1).to({scaleX:0.2373,scaleY:0.2373,x:104.4967,y:402.5088},0).wait(1).to({scaleX:0.235,scaleY:0.235,x:95.3718,y:398.5988},0).wait(1).to({scaleX:0.2327,scaleY:0.2327,x:86.247,y:394.6888},0).wait(1).to({scaleX:0.2305,scaleY:0.2305,x:77.1221,y:390.7789},0).wait(1).to({scaleX:0.2282,scaleY:0.2282,x:67.9972,y:386.8689},0).wait(1).to({scaleX:0.2259,scaleY:0.2259,x:58.8724,y:382.9589},0).wait(1).to({scaleX:0.2236,scaleY:0.2236,x:49.7475,y:379.0489},0).wait(1).to({scaleX:0.2213,scaleY:0.2213,x:40.6227,y:375.1389},0).wait(1).to({scaleX:0.2191,scaleY:0.2191,x:31.4978,y:371.2289},0).wait(1).to({scaleX:0.2168,scaleY:0.2168,x:22.3729,y:367.3189},0).wait(1).to({scaleX:0.2145,scaleY:0.2145,x:13.2481,y:363.4089},0).wait(1).to({scaleX:0.2122,scaleY:0.2122,x:4.1232,y:359.4989},0).wait(1).to({scaleX:0.2099,scaleY:0.2099,x:-5.0016,y:355.5889},0).wait(1).to({scaleX:0.2077,scaleY:0.2077,x:-14.1265,y:351.6789},0).wait(1).to({scaleX:0.2054,scaleY:0.2054,x:-23.2514,y:347.7689},0).wait(1).to({scaleX:0.2031,scaleY:0.2031,x:-32.3762,y:343.8589},0).wait(1).to({scaleX:0.2008,scaleY:0.2008,x:-41.5011,y:339.9489},0).wait(46).to({x:-41.587,y:339.9522},0).wait(1).to({x:-41.6729,y:339.9554},0).wait(1).to({x:-41.7589,y:339.9587},0).wait(1).to({x:-41.8448,y:339.9619},0).wait(1).to({x:-41.9307,y:339.9652},0).wait(1).to({x:-42.0166,y:339.9685},0).wait(1).to({x:-42.1026,y:339.9717},0).wait(1).to({x:-42.1885,y:339.975},0).wait(1).to({x:-42.2744,y:339.9782},0).wait(1).to({x:-42.3604,y:339.9815},0).wait(1).to({x:-42.4463,y:339.9848},0).wait(1).to({x:-42.5322,y:339.988},0).wait(1).to({x:-42.6181,y:339.9913},0).wait(1).to({x:-42.7041,y:339.9945},0).wait(1).to({x:-42.79,y:339.9978},0).wait(1).to({x:-42.8759,y:340.0011},0).wait(1).to({x:-42.9618,y:340.0043},0).wait(1).to({x:-43.0478,y:340.0076},0).wait(1).to({x:-43.1337,y:340.0108},0).wait(1).to({x:-43.2196,y:340.0141},0).wait(1).to({x:-43.3055,y:340.0174},0).wait(1).to({x:-43.3915,y:340.0206},0).wait(1).to({x:-43.4774,y:340.0239},0).wait(1).to({x:-43.5633,y:340.0271},0).wait(1).to({x:-43.6492,y:340.0304},0).wait(1).to({x:-43.7352,y:340.0336},0).wait(1).to({x:-43.8211,y:340.0369},0).wait(1).to({x:-48.9783,y:340.2326},0).wait(1).to({x:-54.1355,y:340.4283},0).wait(1).to({x:-59.2927,y:340.624},0).wait(1).to({x:-64.4498,y:340.8197},0).wait(1).to({x:-69.607,y:341.0153},0).wait(1).to({x:-74.7642,y:341.211},0).wait(1).to({x:-79.9214,y:341.4067},0).wait(1).to({x:-85.0786,y:341.6024},0).wait(1).to({x:-90.2358,y:341.7981},0).wait(1).to({x:-95.393,y:341.9938},0).wait(1).to({x:-100.5502,y:342.1895},0).wait(1).to({x:-105.7073,y:342.3852},0).wait(1).to({x:-110.8645,y:342.5808},0).wait(1).to({x:-116.0217,y:342.7765},0).wait(1).to({x:-121.1789,y:342.9722},0).wait(1).to({x:-126.3361,y:343.1679},0).wait(1).to({x:-131.4933,y:343.3636},0).wait(1).to({x:-136.6505,y:343.5593},0).wait(1).to({x:-141.8077,y:343.755},0).wait(1).to({x:-146.9648,y:343.9507},0).wait(1).to({x:-152.122,y:344.1463},0).wait(1).to({x:-157.2792,y:344.342},0).wait(1).to({x:-162.4364,y:344.5377},0).wait(1).to({x:-167.5936,y:344.7334},0).wait(1).to({x:-172.7508,y:344.9291},0).wait(1).to({x:-177.908,y:345.1248},0).wait(1).to({x:-183.0652,y:345.3205},0).wait(1).to({x:-188.2223,y:345.5162},0).wait(1).to({x:-193.3795,y:345.7118},0).wait(1).to({x:-198.5367,y:345.9075},0).wait(1).to({x:-203.6939,y:346.1032},0).wait(1).to({x:-208.8511,y:346.2989},0).wait(1).to({scaleX:0.2009,scaleY:0.2009,x:-208.8127,y:346.3363},0).wait(1).to({x:-208.7743,y:346.3737},0).wait(1).to({scaleX:0.201,scaleY:0.201,x:-208.7359,y:346.4111},0).wait(1).to({scaleX:0.2011,scaleY:0.2011,x:-208.6975,y:346.4485},0).wait(1).to({x:-208.6591,y:346.4859},0).wait(1).to({scaleX:0.2012,scaleY:0.2012,x:-208.6207,y:346.5233},0).wait(1).to({x:-208.5823,y:346.5607},0).wait(1).to({scaleX:0.2013,scaleY:0.2013,x:-208.5439,y:346.5981},0).wait(1).to({scaleX:0.2014,scaleY:0.2014,x:-208.5055,y:346.6355},0).wait(1).to({x:-208.467,y:346.673},0).wait(1).to({scaleX:0.2015,scaleY:0.2015,x:-208.4286,y:346.7104},0).wait(1).to({x:-208.3902,y:346.7478},0).wait(1).to({scaleX:0.2016,scaleY:0.2016,x:-208.3518,y:346.7852},0).wait(1).to({scaleX:0.2017,scaleY:0.2017,x:-208.3134,y:346.8226},0).wait(1).to({x:-208.275,y:346.86},0).wait(1).to({scaleX:0.2018,scaleY:0.2018,x:-208.2366,y:346.8974},0).wait(1).to({x:-208.1982,y:346.9348},0).wait(1).to({scaleX:0.2019,scaleY:0.2019,x:-208.1598,y:346.9722},0).wait(1).to({scaleX:0.202,scaleY:0.202,x:-208.1214,y:347.0096},0).wait(1).to({x:-208.083,y:347.047},0).wait(1).to({scaleX:0.2021,scaleY:0.2021,x:-208.0446,y:347.0844},0).wait(1).to({x:-208.0062,y:347.1218},0).wait(1).to({scaleX:0.2022,scaleY:0.2022,x:-207.9678,y:347.1592},0).wait(1).to({scaleX:0.2023,scaleY:0.2023,x:-207.9294,y:347.1966},0).wait(1).to({x:-207.891,y:347.234},0).wait(1).to({scaleX:0.2024,scaleY:0.2024,x:-207.8526,y:347.2714},0).wait(1).to({x:-207.8142,y:347.3088},0).wait(1).to({scaleX:0.2025,scaleY:0.2025,x:-207.7758,y:347.3462},0).wait(1).to({scaleX:0.2026,scaleY:0.2026,x:-207.7374,y:347.3836},0).wait(1).to({x:-207.699,y:347.421},0).wait(1).to({scaleX:0.2027,scaleY:0.2027,x:-207.6606,y:347.4584},0).wait(1).to({x:-207.6222,y:347.4958},0).wait(1).to({scaleX:0.2028,scaleY:0.2028,x:-207.5837,y:347.5333},0).wait(1).to({scaleX:0.2029,scaleY:0.2029,x:-207.5453,y:347.5707},0).wait(1).to({x:-207.5069,y:347.6081},0).wait(1).to({scaleX:0.203,scaleY:0.203,x:-207.4685,y:347.6455},0).wait(1).to({x:-207.4301,y:347.6829},0).wait(1).to({scaleX:0.2031,scaleY:0.2031,x:-207.3917,y:347.7203},0).wait(1).to({scaleX:0.2032,scaleY:0.2032,x:-207.3533,y:347.7577},0).wait(1).to({x:-207.3149,y:347.7951},0).wait(1).to({scaleX:0.2033,scaleY:0.2033,x:-207.2765,y:347.8325},0).wait(1).to({x:-207.2381,y:347.8699},0).wait(1).to({scaleX:0.2034,scaleY:0.2034,x:-207.1997,y:347.9073},0).wait(1).to({scaleX:0.2035,scaleY:0.2035,x:-207.1613,y:347.9447},0).wait(1).to({x:-207.1229,y:347.9821},0).wait(1).to({scaleX:0.2036,scaleY:0.2036,x:-207.0845,y:348.0195},0).wait(1).to({x:-207.0461,y:348.0569},0).wait(1).to({scaleX:0.2037,scaleY:0.2037,x:-207.0077,y:348.0943},0).wait(1).to({scaleX:0.2038,scaleY:0.2038,x:-206.9693,y:348.1317},0).wait(1).to({x:-206.9309,y:348.1691},0).wait(1).to({scaleX:0.2039,scaleY:0.2039,x:-206.8925,y:348.2065},0).wait(1).to({x:-206.8541,y:348.2439},0).wait(1).to({scaleX:0.204,scaleY:0.204,x:-206.8157,y:348.2813},0).wait(1).to({scaleX:0.2041,scaleY:0.2041,x:-206.7773,y:348.3187},0).wait(1).to({x:-206.7389,y:348.3561},0).wait(1).to({scaleX:0.2042,scaleY:0.2042,x:-206.7004,y:348.3936},0).wait(1).to({x:-206.662,y:348.431},0).wait(1).to({scaleX:0.2043,scaleY:0.2043,x:-206.6236,y:348.4684},0).wait(1).to({scaleX:0.2044,scaleY:0.2044,x:-206.5852,y:348.5058},0).wait(1).to({x:-206.5468,y:348.5432},0).wait(1).to({scaleX:0.2045,scaleY:0.2045,x:-206.5084,y:348.5806},0).wait(1).to({scaleX:0.2046,scaleY:0.2046,x:-206.47,y:348.618},0).wait(1).to({x:-206.4316,y:348.6554},0).wait(1).to({scaleX:0.2047,scaleY:0.2047,x:-206.3932,y:348.6928},0).wait(1).to({x:-206.3548,y:348.7302},0).wait(1).to({scaleX:0.207,scaleY:0.207,x:-205.57,y:353.3718},0).wait(1).to({scaleX:0.2093,scaleY:0.2093,x:-204.7851,y:358.0134},0).wait(1).to({scaleX:0.2116,scaleY:0.2116,x:-204.0002,y:362.655},0).wait(1).to({scaleX:0.2139,scaleY:0.2139,x:-203.2154,y:367.2967},0).wait(1).to({scaleX:0.2162,scaleY:0.2162,x:-202.4305,y:371.9383},0).wait(1).to({scaleX:0.2185,scaleY:0.2185,x:-201.6457,y:376.5799},0).wait(1).to({scaleX:0.2208,scaleY:0.2208,x:-200.8608,y:381.2215},0).wait(1).to({scaleX:0.2231,scaleY:0.2231,x:-200.076,y:385.8631},0).wait(1).to({scaleX:0.2254,scaleY:0.2254,x:-199.2911,y:390.5047},0).wait(1).to({scaleX:0.2277,scaleY:0.2277,x:-198.5063,y:395.1463},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-197.7214,y:399.788},0).wait(1).to({scaleX:0.2323,scaleY:0.2323,x:-196.9365,y:404.4296},0).wait(1).to({scaleX:0.2346,scaleY:0.2346,x:-196.1517,y:409.0712},0).wait(1).to({scaleX:0.2369,scaleY:0.2369,x:-195.3668,y:413.7128},0).wait(1).to({scaleX:0.2392,scaleY:0.2392,x:-194.582,y:418.3544},0).wait(1).to({scaleX:0.2415,scaleY:0.2415,x:-193.7971,y:422.996},0).wait(1).to({scaleX:0.2438,scaleY:0.2438,x:-193.0123,y:427.6376},0).wait(1).to({scaleX:0.2461,scaleY:0.2461,x:-192.2274,y:432.2793},0).wait(1).to({scaleX:0.2484,scaleY:0.2484,x:-191.4426,y:436.9209},0).wait(1).to({scaleX:0.2507,scaleY:0.2507,x:-190.6577,y:441.5625},0).wait(1).to({scaleX:0.253,scaleY:0.253,x:-189.8728,y:446.2041},0).wait(1).to({scaleX:0.2553,scaleY:0.2553,x:-189.088,y:450.8457},0).wait(1).to({scaleX:0.2575,scaleY:0.2575,x:-188.3031,y:455.4873},0).wait(1).to({scaleX:0.2598,scaleY:0.2598,x:-187.5183,y:460.1289},0).wait(1).to({scaleX:0.2621,scaleY:0.2621,x:-186.7334,y:464.7706},0).wait(1).to({scaleX:0.2644,scaleY:0.2644,x:-185.9486,y:469.4122},0).wait(1).to({scaleX:0.2667,scaleY:0.2667,x:-185.1637,y:474.0538},0).wait(1).to({scaleX:0.269,scaleY:0.269,x:-184.3789,y:478.6954},0).wait(1).to({scaleX:0.2713,scaleY:0.2713,x:-183.594,y:483.337},0).wait(1).to({scaleX:0.2736,scaleY:0.2736,x:-182.8091,y:487.9786},0).wait(1).to({scaleX:0.2759,scaleY:0.2759,x:-182.0243,y:492.6203},0).wait(1).to({scaleX:0.2782,scaleY:0.2782,x:-181.2394,y:497.2619},0).wait(1).to({scaleX:0.2805,scaleY:0.2805,x:-180.4546,y:501.9035},0).wait(1).to({scaleX:0.2828,scaleY:0.2828,x:-179.6697,y:506.5451},0).wait(1).to({scaleX:0.2851,scaleY:0.2851,x:-178.8849,y:511.1867},0).wait(1).to({scaleX:0.2874,scaleY:0.2874,x:-178.1,y:515.8283},0).wait(1).to({scaleX:0.2897,scaleY:0.2897,x:-177.3152,y:520.4699},0).wait(1).to({scaleX:0.292,scaleY:0.292,x:-176.5303,y:525.1116},0).wait(1).to({scaleX:0.2943,scaleY:0.2943,x:-175.7454,y:529.7532},0).wait(1).to({scaleX:0.2966,scaleY:0.2966,x:-174.9606,y:534.3948},0).wait(1).to({scaleX:0.2989,scaleY:0.2989,x:-174.1757,y:539.0364},0).wait(1).to({scaleX:0.3012,scaleY:0.3012,x:-173.3909,y:543.678},0).wait(1).to({scaleX:0.3035,scaleY:0.3035,x:-172.606,y:548.3196},0).wait(1).to({scaleX:0.3058,scaleY:0.3058,x:-171.8212,y:552.9612},0).wait(1).to({scaleX:0.3081,scaleY:0.3081,x:-171.0363,y:557.6029},0).wait(1).to({scaleX:0.3104,scaleY:0.3104,x:-170.2515,y:562.2445},0).wait(1).to({scaleX:0.3127,scaleY:0.3127,x:-169.4666,y:566.8861},0).wait(1).to({scaleX:0.315,scaleY:0.315,x:-168.6817,y:571.5277},0).wait(1).to({scaleX:0.3173,scaleY:0.3173,x:-167.8969,y:576.1693},0).wait(1).to({scaleX:0.3195,scaleY:0.3195,x:-167.112,y:580.8109},0).wait(1).to({scaleX:0.3218,scaleY:0.3218,x:-166.3272,y:585.4525},0).wait(1).to({scaleX:0.3241,scaleY:0.3241,x:-165.5423,y:590.0942},0).wait(1).to({scaleX:0.3264,scaleY:0.3264,x:-164.7575,y:594.7358},0).wait(1).to({scaleX:0.3287,scaleY:0.3287,x:-163.9726,y:599.3774},0).wait(1).to({scaleX:0.3291,scaleY:0.3291,x:-159.2387,y:599.3025},0).wait(1).to({scaleX:0.3294,scaleY:0.3294,x:-154.5048,y:599.2276},0).wait(1).to({scaleX:0.3298,scaleY:0.3298,x:-149.7708,y:599.1526},0).wait(1).to({scaleX:0.3301,scaleY:0.3301,x:-145.0369,y:599.0777},0).wait(1).to({scaleX:0.3304,scaleY:0.3304,x:-140.303,y:599.0028},0).wait(1).to({scaleX:0.3308,scaleY:0.3308,x:-135.5691,y:598.9279},0).wait(1).to({scaleX:0.3311,scaleY:0.3311,x:-130.8352,y:598.853},0).wait(1).to({scaleX:0.3315,scaleY:0.3315,x:-126.1012,y:598.7781},0).wait(1).to({scaleX:0.3318,scaleY:0.3318,x:-121.3673,y:598.7032},0).wait(1).to({scaleX:0.3321,scaleY:0.3321,x:-116.6334,y:598.6282},0).wait(1).to({scaleX:0.3325,scaleY:0.3325,x:-111.8995,y:598.5533},0).wait(1).to({scaleX:0.3328,scaleY:0.3328,x:-107.1656,y:598.4784},0).wait(1).to({scaleX:0.3332,scaleY:0.3332,x:-102.4316,y:598.4035},0).wait(1).to({scaleX:0.3335,scaleY:0.3335,x:-97.6977,y:598.3286},0).wait(1).to({scaleX:0.3338,scaleY:0.3338,x:-92.9638,y:598.2537},0).wait(1).to({scaleX:0.3342,scaleY:0.3342,x:-88.2299,y:598.1787},0).wait(1).to({scaleX:0.3345,scaleY:0.3345,x:-83.4959,y:598.1038},0).wait(1).to({scaleX:0.3349,scaleY:0.3349,x:-78.762,y:598.0289},0).wait(1).to({scaleX:0.3352,scaleY:0.3352,x:-74.0281,y:597.954},0).wait(1).to({scaleX:0.3355,scaleY:0.3355,x:-69.2942,y:597.8791},0).wait(1).to({scaleX:0.3359,scaleY:0.3359,x:-64.5603,y:597.8042},0).wait(1).to({scaleX:0.3362,scaleY:0.3362,x:-59.8263,y:597.7293},0).wait(1).to({scaleX:0.3366,scaleY:0.3366,x:-55.0924,y:597.6543},0).wait(1).to({scaleX:0.3369,scaleY:0.3369,x:-50.3585,y:597.5794},0).wait(1).to({scaleX:0.3372,scaleY:0.3372,x:-45.6246,y:597.5045},0).wait(1).to({scaleX:0.3376,scaleY:0.3376,x:-40.8907,y:597.4296},0).wait(1).to({scaleX:0.3379,scaleY:0.3379,x:-36.1567,y:597.3547},0).wait(1).to({scaleX:0.3383,scaleY:0.3383,x:-31.4228,y:597.2798},0).wait(1).to({scaleX:0.3386,scaleY:0.3386,x:-26.6889,y:597.2048},0).wait(1).to({scaleX:0.339,scaleY:0.339,x:-21.955,y:597.1299},0).wait(1).to({scaleX:0.3393,scaleY:0.3393,x:-17.221,y:597.055},0).wait(1).to({scaleX:0.3396,scaleY:0.3396,x:-12.4871,y:596.9801},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:-7.7532,y:596.9052},0).wait(1).to({scaleX:0.3403,scaleY:0.3403,x:-3.0193,y:596.8303},0).wait(1).to({scaleX:0.3407,scaleY:0.3407,x:1.7146,y:596.7554},0).wait(1).to({scaleX:0.341,scaleY:0.341,x:6.4486,y:596.6804},0).wait(1).to({scaleX:0.3413,scaleY:0.3413,x:11.1825,y:596.6055},0).wait(1).to({scaleX:0.3417,scaleY:0.3417,x:15.9164,y:596.5306},0).wait(1).to({scaleX:0.342,scaleY:0.342,x:20.6503,y:596.4557},0).wait(1).to({scaleX:0.3424,scaleY:0.3424,x:25.3842,y:596.3808},0).wait(1).to({scaleX:0.3427,scaleY:0.3427,x:30.1182,y:596.3059},0).wait(1).to({scaleX:0.343,scaleY:0.343,x:34.8521,y:596.2309},0).wait(1).to({scaleX:0.3434,scaleY:0.3434,x:39.586,y:596.156},0).wait(1).to({scaleX:0.3437,scaleY:0.3437,x:44.3199,y:596.0811},0).wait(1).to({scaleX:0.3441,scaleY:0.3441,x:49.0539,y:596.0062},0).wait(1).to({scaleX:0.3444,scaleY:0.3444,x:53.7878,y:595.9313},0).wait(1).to({scaleX:0.3447,scaleY:0.3447,x:58.5217,y:595.8564},0).wait(1).to({scaleX:0.3451,scaleY:0.3451,x:63.2556,y:595.7815},0).wait(1).to({scaleX:0.3454,scaleY:0.3454,x:67.9895,y:595.7065},0).wait(1).to({scaleX:0.3458,scaleY:0.3458,x:72.7235,y:595.6316},0).wait(1).to({scaleX:0.3461,scaleY:0.3461,x:77.4574,y:595.5567},0).wait(1).to({scaleX:0.3464,scaleY:0.3464,x:82.1913,y:595.4818},0).wait(1).to({scaleX:0.3468,scaleY:0.3468,x:86.9252,y:595.4069},0).wait(1).to({scaleX:0.3471,scaleY:0.3471,x:91.6591,y:595.332},0).wait(1).to({scaleX:0.3475,scaleY:0.3475,x:96.3931,y:595.257},0).wait(1).to({scaleX:0.3478,scaleY:0.3478,x:101.127,y:595.1821},0).wait(1).to({scaleX:0.3481,scaleY:0.3481,x:105.8609,y:595.1072},0).wait(1).to({scaleX:0.3485,scaleY:0.3485,x:110.5948,y:595.0323},0).wait(1).to({scaleX:0.3488,scaleY:0.3488,x:115.3288,y:594.9574},0).wait(1).to({scaleX:0.3492,scaleY:0.3492,x:120.0627,y:594.8825},0).wait(1).to({scaleX:0.3495,scaleY:0.3495,x:124.7966,y:594.8076},0).wait(1).to({scaleX:0.3498,scaleY:0.3498,x:129.5305,y:594.7326},0).wait(1).to({scaleX:0.3502,scaleY:0.3502,x:134.2644,y:594.6577},0).wait(1).to({scaleX:0.3505,scaleY:0.3505,x:138.9984,y:594.5828},0).wait(1).to({scaleX:0.3509,scaleY:0.3509,x:143.7323,y:594.5079},0).wait(1).to({scaleX:0.3512,scaleY:0.3512,x:148.4662,y:594.433},0).wait(1).to({scaleX:0.3515,scaleY:0.3515,x:153.2001,y:594.3581},0).wait(1).to({scaleX:0.3519,scaleY:0.3519,x:157.934,y:594.2831},0).wait(1).to({scaleX:0.3522,scaleY:0.3522,x:162.668,y:594.2082},0).wait(1).to({scaleX:0.3526,scaleY:0.3526,x:167.4019,y:594.1333},0).wait(1).to({scaleX:0.3529,scaleY:0.3529,x:172.1358,y:594.0584},0).wait(1).to({scaleX:0.3533,scaleY:0.3533,x:176.8697,y:593.9835},0).wait(1).to({scaleX:0.3536,scaleY:0.3536,x:181.6037,y:593.9086},0).wait(1).to({scaleX:0.3539,scaleY:0.3539,x:186.3376,y:593.8337},0).wait(1).to({scaleX:0.3543,scaleY:0.3543,x:191.0715,y:593.7587},0).wait(1).to({scaleX:0.3546,scaleY:0.3546,x:195.8054,y:593.6838},0).wait(1).to({scaleX:0.355,scaleY:0.355,x:200.5393,y:593.6089},0).wait(1).to({scaleX:0.3553,scaleY:0.3553,x:205.2733,y:593.534},0).wait(1).to({scaleX:0.3556,scaleY:0.3556,x:210.0072,y:593.4591},0).wait(1).to({scaleX:0.356,scaleY:0.356,x:214.7411,y:593.3842},0).wait(1).to({scaleX:0.3563,scaleY:0.3563,x:219.475,y:593.3092},0).wait(1).to({scaleX:0.3567,scaleY:0.3567,x:224.2089,y:593.2343},0).wait(1).to({scaleX:0.357,scaleY:0.357,x:228.9429,y:593.1594},0).wait(1).to({scaleX:0.3573,scaleY:0.3573,x:233.6768,y:593.0845},0).wait(1).to({scaleX:0.3577,scaleY:0.3577,x:238.4107,y:593.0096},0).wait(1).to({scaleX:0.358,scaleY:0.358,x:243.1446,y:592.9347},0).wait(1).to({scaleX:0.3584,scaleY:0.3584,x:247.8786,y:592.8598},0).wait(1).to({scaleX:0.3587,scaleY:0.3587,x:252.6125,y:592.7848},0).wait(1).to({scaleX:0.359,scaleY:0.359,x:257.3464,y:592.7099},0).wait(1).to({scaleX:0.3594,scaleY:0.3594,x:262.0803,y:592.635},0).wait(1).to({scaleX:0.3597,scaleY:0.3597,x:266.8142,y:592.5601},0).wait(1).to({scaleX:0.3601,scaleY:0.3601,x:271.5482,y:592.4852},0).wait(1).to({scaleX:0.3604,scaleY:0.3604,x:276.2821,y:592.4103},0).wait(1).to({scaleX:0.3607,scaleY:0.3607,x:281.016,y:592.3353},0).wait(1).to({scaleX:0.3611,scaleY:0.3611,x:285.7499,y:592.2604},0).wait(1).to({scaleX:0.3614,scaleY:0.3614,x:290.4838,y:592.1855},0).wait(1).to({scaleX:0.3618,scaleY:0.3618,x:295.2178,y:592.1106},0).wait(1).to({scaleX:0.3621,scaleY:0.3621,x:299.9517,y:592.0357},0).wait(1).to({scaleX:0.3641,scaleY:0.3641,x:299.9281,y:589.5162},0).wait(1).to({scaleX:0.3662,scaleY:0.3662,x:299.9045,y:586.9968},0).wait(1).to({scaleX:0.3682,scaleY:0.3682,x:299.8809,y:584.4774},0).wait(1).to({scaleX:0.3703,scaleY:0.3703,x:299.8573,y:581.9579},0).wait(1).to({scaleX:0.3723,scaleY:0.3723,x:299.8337,y:579.4385},0).wait(1).to({scaleX:0.3744,scaleY:0.3744,x:299.81,y:576.919},0).wait(1).to({scaleX:0.3764,scaleY:0.3764,x:299.7864,y:574.3996},0).wait(1).to({scaleX:0.3784,scaleY:0.3784,x:299.7628,y:571.8802},0).wait(1).to({scaleX:0.3805,scaleY:0.3805,x:299.7392,y:569.3607},0).wait(1).to({scaleX:0.3825,scaleY:0.3825,x:299.7156,y:566.8413},0).wait(1).to({scaleX:0.3846,scaleY:0.3846,x:299.692,y:564.3218},0).wait(1).to({scaleX:0.3866,scaleY:0.3866,x:299.6684,y:561.8024},0).wait(1).to({scaleX:0.3887,scaleY:0.3887,x:299.6448,y:559.283},0).wait(1).to({scaleX:0.3907,scaleY:0.3907,x:299.6212,y:556.7635},0).wait(1).to({scaleX:0.3927,scaleY:0.3927,x:299.5976,y:554.2441},0).wait(1).to({scaleX:0.3948,scaleY:0.3948,x:299.574,y:551.7246},0).wait(1).to({scaleX:0.3968,scaleY:0.3968,x:299.5504,y:549.2052},0).wait(1).to({scaleX:0.3989,scaleY:0.3989,x:299.5268,y:546.6858},0).wait(1).to({scaleX:0.4009,scaleY:0.4009,x:299.5031,y:544.1663},0).wait(1).to({scaleX:0.403,scaleY:0.403,x:299.4795,y:541.6469},0).wait(1).to({scaleX:0.405,scaleY:0.405,x:299.4559,y:539.1274},0).wait(1).to({scaleX:0.407,scaleY:0.407,x:299.4323,y:536.608},0).wait(1).to({scaleX:0.4091,scaleY:0.4091,x:299.4087,y:534.0886},0).wait(1).to({scaleX:0.4111,scaleY:0.4111,x:299.3851,y:531.5691},0).wait(1).to({scaleX:0.4132,scaleY:0.4132,x:299.3615,y:529.0497},0).wait(1).to({scaleX:0.4152,scaleY:0.4152,x:299.3379,y:526.5302},0).wait(1).to({scaleX:0.4173,scaleY:0.4173,x:299.3143,y:524.0108},0).wait(1).to({scaleX:0.4193,scaleY:0.4193,x:299.2907,y:521.4914},0).wait(1).to({scaleX:0.4213,scaleY:0.4213,x:299.2671,y:518.9719},0).wait(1).to({scaleX:0.4234,scaleY:0.4234,x:299.2435,y:516.4525},0).wait(1).to({scaleX:0.4254,scaleY:0.4254,x:299.2199,y:513.933},0).wait(1).to({scaleX:0.4275,scaleY:0.4275,x:299.1963,y:511.4136},0).wait(1).to({scaleX:0.4295,scaleY:0.4295,x:299.1726,y:508.8941},0).wait(1).to({scaleX:0.4316,scaleY:0.4316,x:299.149,y:506.3747},0).wait(1).to({scaleX:0.4336,scaleY:0.4336,x:299.1254,y:503.8553},0).wait(1).to({scaleX:0.4356,scaleY:0.4356,x:299.1018,y:501.3358},0).wait(1).to({scaleX:0.4377,scaleY:0.4377,x:299.0782,y:498.8164},0).wait(1).to({scaleX:0.4397,scaleY:0.4397,x:299.0546,y:496.2969},0).wait(1).to({scaleX:0.4418,scaleY:0.4418,x:299.031,y:493.7775},0).wait(1).to({scaleX:0.4438,scaleY:0.4438,x:299.0074,y:491.2581},0).wait(1).to({scaleX:0.4459,scaleY:0.4459,x:298.9838,y:488.7386},0).wait(1).to({scaleX:0.4479,scaleY:0.4479,x:298.9602,y:486.2192},0).wait(1).to({scaleX:0.4499,scaleY:0.4499,x:298.9366,y:483.6997},0).wait(1).to({scaleX:0.452,scaleY:0.452,x:298.913,y:481.1803},0).wait(1).to({scaleX:0.454,scaleY:0.454,x:298.8894,y:478.6609},0).wait(1).to({scaleX:0.4561,scaleY:0.4561,x:298.8658,y:476.1414},0).wait(1).to({scaleX:0.4581,scaleY:0.4581,x:298.8421,y:473.622},0).wait(1).to({scaleX:0.4602,scaleY:0.4602,x:298.8185,y:471.1025},0).wait(1).to({scaleX:0.4622,scaleY:0.4622,x:298.7949,y:468.5831},0).wait(1).to({scaleX:0.4642,scaleY:0.4642,x:298.7713,y:466.0637},0).wait(1).to({scaleX:0.4663,scaleY:0.4663,x:298.7477,y:463.5442},0).wait(1).to({scaleX:0.4683,scaleY:0.4683,x:298.7241,y:461.0248},0).wait(1).to({scaleX:0.4704,scaleY:0.4704,x:298.7005,y:458.5053},0).wait(1).to({scaleX:0.4724,scaleY:0.4724,x:298.6769,y:455.9859},0).wait(1).to({scaleX:0.4745,scaleY:0.4745,x:298.6533,y:453.4665},0).wait(1).to({scaleX:0.4765,scaleY:0.4765,x:298.6297,y:450.947},0).wait(1).to({scaleX:0.4785,scaleY:0.4785,x:298.6061,y:448.4276},0).wait(1).to({scaleX:0.4806,scaleY:0.4806,x:298.5825,y:445.9081},0).wait(1).to({scaleX:0.4826,scaleY:0.4826,x:298.5589,y:443.3887},0).wait(1).to({scaleX:0.4847,scaleY:0.4847,x:298.5352,y:440.8692},0).wait(1).to({scaleX:0.4867,scaleY:0.4867,x:298.5116,y:438.3498},0).wait(1).to({scaleX:0.4888,scaleY:0.4888,x:298.488,y:435.8304},0).wait(1).to({scaleX:0.4908,scaleY:0.4908,x:298.4644,y:433.3109},0).wait(1).to({scaleX:0.4928,scaleY:0.4928,x:298.4408,y:430.7915},0).wait(1).to({scaleX:0.4949,scaleY:0.4949,x:298.4172,y:428.272},0).wait(1).to({scaleX:0.4969,scaleY:0.4969,x:298.3936,y:425.7526},0).wait(1).to({scaleX:0.499,scaleY:0.499,x:298.37,y:423.2332},0).wait(1).to({scaleX:0.501,scaleY:0.501,x:298.3464,y:420.7137},0).wait(1).to({scaleX:0.5031,scaleY:0.5031,x:298.3228,y:418.1943},0).wait(1).to({scaleX:0.5051,scaleY:0.5051,x:298.2992,y:415.6748},0).wait(1).to({scaleX:0.5071,scaleY:0.5071,x:298.2756,y:413.1554},0).wait(1).to({scaleX:0.5092,scaleY:0.5092,x:298.252,y:410.636},0).wait(1).to({scaleX:0.5076,scaleY:0.5076,x:299.0269,y:410.8535},0).wait(1).to({scaleX:0.506,scaleY:0.506,x:299.8018,y:411.0711},0).wait(1).to({scaleX:0.5043,scaleY:0.5043,x:300.5767,y:411.2887},0).wait(1).to({scaleX:0.5027,scaleY:0.5027,x:301.3517,y:411.5063},0).wait(1).to({scaleX:0.5011,scaleY:0.5011,x:302.1266,y:411.7239},0).wait(1).to({scaleX:0.4995,scaleY:0.4995,x:302.9015,y:411.9415},0).wait(1).to({scaleX:0.4979,scaleY:0.4979,x:303.6764,y:412.1591},0).wait(1).to({scaleX:0.4962,scaleY:0.4962,x:304.4514,y:412.3766},0).wait(1).to({scaleX:0.4946,scaleY:0.4946,x:305.2263,y:412.5942},0).wait(1).to({scaleX:0.493,scaleY:0.493,x:306.0012,y:412.8118},0).wait(1).to({scaleX:0.4914,scaleY:0.4914,x:306.7761,y:413.0294},0).wait(1).to({scaleX:0.4898,scaleY:0.4898,x:307.551,y:413.247},0).wait(1).to({scaleX:0.4882,scaleY:0.4882,x:308.326,y:413.4646},0).wait(1).to({scaleX:0.4865,scaleY:0.4865,x:309.1009,y:413.6822},0).wait(1).to({scaleX:0.4849,scaleY:0.4849,x:309.8758,y:413.8997},0).wait(1).to({scaleX:0.4833,scaleY:0.4833,x:310.6507,y:414.1173},0).wait(1).to({scaleX:0.4817,scaleY:0.4817,x:311.4257,y:414.3349},0).wait(1).to({scaleX:0.4801,scaleY:0.4801,x:312.2006,y:414.5525},0).wait(1).to({scaleX:0.4785,scaleY:0.4785,x:312.9755,y:414.7701},0).wait(1).to({scaleX:0.4768,scaleY:0.4768,x:313.7504,y:414.9877},0).wait(1).to({scaleX:0.4752,scaleY:0.4752,x:314.5254,y:415.2052},0).wait(1).to({scaleX:0.4736,scaleY:0.4736,x:315.3003,y:415.4228},0).wait(1).to({scaleX:0.472,scaleY:0.472,x:316.0752,y:415.6404},0).wait(1).to({scaleX:0.4704,scaleY:0.4704,x:316.8501,y:415.858},0).wait(1).to({scaleX:0.4688,scaleY:0.4688,x:317.6251,y:416.0756},0).wait(1).to({scaleX:0.4671,scaleY:0.4671,x:318.4,y:416.2932},0).wait(1).to({scaleX:0.4655,scaleY:0.4655,x:319.1749,y:416.5108},0).wait(1).to({scaleX:0.4639,scaleY:0.4639,x:319.9498,y:416.7283},0).wait(1).to({scaleX:0.4623,scaleY:0.4623,x:320.7247,y:416.9459},0).wait(1).to({scaleX:0.4607,scaleY:0.4607,x:321.4997,y:417.1635},0).wait(1).to({scaleX:0.459,scaleY:0.459,x:322.2746,y:417.3811},0).wait(1).to({scaleX:0.4574,scaleY:0.4574,x:323.0495,y:417.5987},0).wait(1).to({scaleX:0.4558,scaleY:0.4558,x:323.8244,y:417.8163},0).wait(1).to({scaleX:0.4542,scaleY:0.4542,x:324.5994,y:418.0338},0).wait(1).to({scaleX:0.4526,scaleY:0.4526,x:325.3743,y:418.2514},0).wait(1).to({scaleX:0.451,scaleY:0.451,x:326.1492,y:418.469},0).wait(1).to({scaleX:0.4493,scaleY:0.4493,x:326.9241,y:418.6866},0).wait(1).to({scaleX:0.4477,scaleY:0.4477,x:327.6991,y:418.9042},0).wait(1).to({scaleX:0.4461,scaleY:0.4461,x:328.474,y:419.1218},0).wait(1).to({scaleX:0.4445,scaleY:0.4445,x:329.2489,y:419.3394},0).wait(1).to({scaleX:0.4429,scaleY:0.4429,x:330.0238,y:419.5569},0).wait(1).to({scaleX:0.4413,scaleY:0.4413,x:330.7988,y:419.7745},0).wait(1).to({scaleX:0.4396,scaleY:0.4396,x:331.5737,y:419.9921},0).wait(1).to({scaleX:0.438,scaleY:0.438,x:332.3486,y:420.2097},0).wait(1).to({scaleX:0.4364,scaleY:0.4364,x:333.1235,y:420.4273},0).wait(1).to({scaleX:0.4348,scaleY:0.4348,x:333.8984,y:420.6449},0).wait(1).to({scaleX:0.4332,scaleY:0.4332,x:334.6734,y:420.8625},0).wait(1).to({scaleX:0.4315,scaleY:0.4315,x:335.4483,y:421.08},0).wait(1).to({scaleX:0.4299,scaleY:0.4299,x:336.2232,y:421.2976},0).wait(1).to({scaleX:0.4283,scaleY:0.4283,x:336.9981,y:421.5152},0).wait(1).to({scaleX:0.4267,scaleY:0.4267,x:337.7731,y:421.7328},0).wait(1).to({scaleX:0.4251,scaleY:0.4251,x:338.548,y:421.9504},0).wait(1).to({scaleX:0.4235,scaleY:0.4235,x:339.3229,y:422.168},0).wait(1).to({scaleX:0.4218,scaleY:0.4218,x:340.0978,y:422.3855},0).wait(1).to({scaleX:0.4202,scaleY:0.4202,x:340.8728,y:422.6031},0).wait(1).to({scaleX:0.4186,scaleY:0.4186,x:341.6477,y:422.8207},0).wait(1).to({scaleX:0.417,scaleY:0.417,x:342.4226,y:423.0383},0).wait(1).to({scaleX:0.4154,scaleY:0.4154,x:343.1975,y:423.2559},0).wait(1).to({scaleX:0.4138,scaleY:0.4138,x:343.9725,y:423.4735},0).wait(1).to({scaleX:0.4121,scaleY:0.4121,x:344.7474,y:423.6911},0).wait(1).to({scaleX:0.4105,scaleY:0.4105,x:345.5223,y:423.9086},0).wait(1).to({scaleX:0.4089,scaleY:0.4089,x:346.2972,y:424.1262},0).wait(1));

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

	this.timeline.addTween(cjs.Tween.get(this.playbutton).wait(694).to({regX:478.3,regY:540,scaleX:2.4361,scaleY:2.4361,x:963.5,y:642.9},0).wait(2));

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

	this.timeline.addTween(cjs.Tween.get(this.start).wait(668).to({regX:475.1,regY:503.4,scaleX:2.2096,scaleY:2.2096,x:970.95,y:548.25},0).wait(1).to({regX:475.3,regY:503.3,scaleX:2.2176,scaleY:2.2176,x:971,y:548.2},0).wait(1).to({regX:475.5,regY:503.2,scaleX:2.2256,scaleY:2.2256,x:970.8},0).wait(1).to({regX:475.8,regY:503.1,scaleX:2.2336,scaleY:2.2336,x:970.95,y:548.15},0).wait(1).to({regX:476.1,scaleX:2.2417,scaleY:2.2417,x:971,y:548.25},0).wait(1).to({regX:476.3,regY:502.9,scaleX:2.2498,scaleY:2.2498,x:970.95,y:548.1},0).wait(1).to({regX:476.6,scaleX:2.2581,scaleY:2.2581,x:971,y:548.25},0).wait(1).to({regX:476.8,scaleX:2.2663,scaleY:2.2663,x:970.95,y:548.35},0).wait(1).to({regX:477,regY:502.7,scaleX:2.2747,scaleY:2.2747,x:970.85,y:548.2},0).wait(1).to({regX:477.3,regY:502.6,scaleX:2.2831,scaleY:2.2831,x:971,y:548.15},0).wait(1).to({regX:477.4,regY:502.5,scaleX:2.2915,scaleY:2.2915,x:970.7},0).wait(1).to({regX:477.8,scaleX:2.3001,scaleY:2.3001,x:971,y:548.25},0).wait(1).to({regX:477.9,regY:502.4,scaleX:2.3087,scaleY:2.3087,x:970.8,y:548.3},0).wait(1).to({regX:478.2,regY:502.3,scaleX:2.3173,scaleY:2.3173,x:970.85},0).wait(1).to({regX:478.4,scaleX:2.326,scaleY:2.326,x:970.75,y:548.35},0).wait(1).to({regX:478.7,regY:502.1,scaleX:2.3348,scaleY:2.3348,x:970.8,y:548.25},0).wait(1).to({regX:478.9,regY:502,scaleX:2.3437,scaleY:2.3437,x:970.9,y:548.2},0).wait(1).to({regX:479.2,regY:501.9,scaleX:2.3526,scaleY:2.3526,x:970.95,y:548.15},0).wait(1).to({regX:479.4,scaleX:2.3616,scaleY:2.3616,x:970.9,y:548.25},0).wait(1).to({regX:479.6,regY:501.8,scaleX:2.3706,scaleY:2.3706,x:970.8,y:548.35},0).wait(1).to({regX:479.9,regY:501.7,scaleX:2.3798,scaleY:2.3798,x:971,y:548.2},0).wait(1).to({regX:480.1,regY:501.6,scaleX:2.389,scaleY:2.389,x:970.8,y:548.3},0).wait(1).to({regX:480.3,regY:501.4,scaleX:2.3983,scaleY:2.3983,x:970.85,y:548.05},0).wait(1).to({regX:480.6,scaleX:2.4076,scaleY:2.4076,x:970.9,y:548.15},0).wait(1).to({regX:480.8,regY:501.3,scaleX:2.4171,scaleY:2.4171,x:970.8,y:548.2},0).wait(1).to({regX:481,regY:501.2,scaleX:2.4265,scaleY:2.4265,x:970.85,y:548.15},0).wait(1).to({regX:481.3,scaleX:2.4361,scaleY:2.4361,x:970.8,y:548.35},0).wait(2));

	// shaddows_obj_
	this.shaddows = new lib.Scene_1_shaddows();
	this.shaddows.name = "shaddows";
	this.shaddows.setTransform(0.1,0,2.1606,2.1606,0,0,0,672.3,382.6);
	this.shaddows.depth = 0;
	this.shaddows.isAttachedToCamera = 0
	this.shaddows.isAttachedToMask = 0
	this.shaddows.layerDepth = 0
	this.shaddows.layerIndex = 2
	this.shaddows.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.shaddows).wait(366).to({regX:-337.4,regY:274.4,scaleX:4.9476,scaleY:4.9476,x:-0.25,y:0.25},0).wait(203).to({regX:57.6,regY:435.6,scaleX:2.6426,scaleY:2.6426,x:0.15,y:0},0).wait(50).to({regX:-9,regY:272.9,scaleX:2.0809,scaleY:2.0809,x:-0.05,y:0.05},0).wait(1).to({regX:-10.3,regY:269.6,scaleX:2.0721,scaleY:2.0721,y:-0.05},0).wait(76));

	// plane_obj_
	this.plane = new lib.Scene_1_plane();
	this.plane.name = "plane";
	this.plane.setTransform(-344.5,361.9,2.1606,2.1606,0,0,0,512.8,550.1);
	this.plane.depth = 0;
	this.plane.isAttachedToCamera = 0
	this.plane.isAttachedToMask = 0
	this.plane.layerDepth = 0
	this.plane.layerIndex = 3
	this.plane.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.plane).wait(696));

	// bear_obj_
	this.bear = new lib.Scene_1_bear();
	this.bear.name = "bear";
	this.bear.setTransform(0.1,0,2.1606,2.1606,0,0,0,672.3,382.6);
	this.bear.depth = 0;
	this.bear.isAttachedToCamera = 0
	this.bear.isAttachedToMask = 0
	this.bear.layerDepth = 0
	this.bear.layerIndex = 4
	this.bear.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.bear).wait(317).to({regX:-198.1,regY:268.8,scaleX:4.9799,scaleY:4.9799,x:0,y:0.25},0).wait(379));

	// doll_obj_
	this.doll = new lib.Scene_1_doll();
	this.doll.name = "doll";
	this.doll.setTransform(0.1,0,2.1606,2.1606,0,0,0,672.3,382.6);
	this.doll.depth = 0;
	this.doll.isAttachedToCamera = 0
	this.doll.isAttachedToMask = 0
	this.doll.layerDepth = 0
	this.doll.layerIndex = 5
	this.doll.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.doll).wait(132).to({regX:36.9,regY:144.3,scaleX:1.5096,scaleY:1.5096,y:-0.05},0).wait(564));

	// eyes_obj_
	this.eyes = new lib.Scene_1_eyes();
	this.eyes.name = "eyes";
	this.eyes.setTransform(0.1,0,2.1606,2.1606,0,0,0,672.3,382.6);
	this.eyes.depth = 0;
	this.eyes.isAttachedToCamera = 0
	this.eyes.isAttachedToMask = 0
	this.eyes.layerDepth = 0
	this.eyes.layerIndex = 6
	this.eyes.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.eyes).wait(169).to({regX:-10.8,regY:272.4,scaleX:2.0081,scaleY:2.0081,x:-0.05,y:0.1},0).wait(527));

	// horse_obj_
	this.horse = new lib.Scene_1_horse();
	this.horse.name = "horse";
	this.horse.setTransform(963.95,563.25,2.1606,2.1606,0,0,0,1118.4,643.3);
	this.horse.depth = 0;
	this.horse.isAttachedToCamera = 0
	this.horse.isAttachedToMask = 0
	this.horse.layerDepth = 0
	this.horse.layerIndex = 7
	this.horse.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.horse).wait(696));

	// pic_obj_
	this.pic = new lib.Scene_1_pic();
	this.pic.name = "pic";
	this.pic.setTransform(749.4,364.05,2.1606,2.1606,0,0,0,1019.1,551.1);
	this.pic.depth = 0;
	this.pic.isAttachedToCamera = 0
	this.pic.isAttachedToMask = 0
	this.pic.layerDepth = 0
	this.pic.layerIndex = 8
	this.pic.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.pic).wait(696));

	// animation_obj_
	this.animation = new lib.Scene_1_animation();
	this.animation.name = "animation";
	this.animation.setTransform(293.95,362.1,2.1606,2.1606,0,0,0,808.3,550.2);
	this.animation.depth = 0;
	this.animation.isAttachedToCamera = 0
	this.animation.isAttachedToMask = 0
	this.animation.layerDepth = 0
	this.animation.layerIndex = 9
	this.animation.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.animation).wait(696));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-52,360.3,1332,372.8);
// library properties:
lib.properties = {
	id: 'C3BE14533565624190C091EDCA544C6C',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/zehava_atlas_1.png?1598603597914", id:"zehava_atlas_1"},
		{src:"sounds/הבובהזהבהAudioTrimmercom.mp3?1598603598337", id:"הבובהזהבהAudioTrimmercom"}
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