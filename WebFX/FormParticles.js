var canv = document.getElementById('canvas'),
            ctx  = canv.getContext('2d');
        canv.width = window.innerWidth;
        canv.height = window.innerHeight;

        function Particle(x, y, dx, dy, opacity, choseForm) {
            this.x          = x;
            this.y          = y;
            this.dx         = dx;
            this.dy         = dy;
            this.opacity    = opacity;
            this.choseForm  = choseForm;
            
            this.draw = function(){
                ctx.beginPath();
                ctx.moveTo(this.x,this.y)
                
                if(this.choseForm == 1){
                    ctx.quadraticCurveTo(this.x - 6,this.y + 3,this.x - 2,this.y + 2);
                }
                else if(this.choseForm == 2){
                    ctx.quadraticCurveTo(this.x,this.y + 2,this.x - 2,this.y + 2);
                    ctx.quadraticCurveTo(this.x,this.y + 1,this.x,this.y);
                }
                
                else if(this.choseForm == 3){
                    ctx.quadraticCurveTo(this.x + 2,this.y + 1,this.x - 2,this.y + 2);
                }
                
                else if(this.choseForm == 4){
                    ctx.quadraticCurveTo(this.x + 2,this.y - 1,this.x + 3,this.y - 2);
                }
                
                else if(this.choseForm == 5){
                    ctx.quadraticCurveTo(this.x + 1,this.y + 1,this.x + 2,this.y + 1);
                    ctx.quadraticCurveTo(this.x + 2,this.y + 3,this.x + 1,this.y + 3);
                    ctx.quadraticCurveTo(this.x - 1,this.y,this.x - 1,this.y + 1);
                }
                
                else if(this.choseForm == 6){
                    ctx.arc(this.x, this.y, 0.9, 0, Math.PI * 2, false);
                }
                                
                else if(this.choseForm == 7){
                    ctx.arc(this.x, this.y, 0.5, 0, Math.PI * 2, false);
                }
                                
                else if(this.choseForm == 8){
                    ctx.arc(this.x, this.y, 0.2, 0, Math.PI * 2, false);
                }
                                
                else if(this.choseForm == 9){
                    ctx.quadraticCurveTo(this.x + 2,this.y + 2,this.x + 4,this.y + 2);
                }
                                
                else if(this.choseForm == 10){
                    ctx.quadraticCurveTo(this.x + 2,this.y + 2,this.x + 3,this.y + 1);
                    ctx.quadraticCurveTo(this.x - 1,this.y + 1,this.x,this.y);
                }
                                
                else if(this.choseForm == 11){
                    ctx.quadraticCurveTo(this.x - 2,this.y + 6,this.x - 4,this.y + 5);
                }
                
                else if(this.choseForm == 12){
                    ctx.quadraticCurveTo(this.x,this.y + 2,this.x + 5,this.y);
                }
                
                else if(this.choseForm == 13){
                    ctx.quadraticCurveTo(this.x,this.y + 2,this.x + 3,this.y + 5);
                }
                
                else if(this.choseForm == 14){
                    ctx.quadraticCurveTo(this.x,this.y + 2,this.x + 3,this.y + 3);
                }
                
                ctx.strokeStyle = 'rgba(244, 238, 233, ' + this.opacity / 100 + ')';
                ctx.fillStyle = 'rgba(244, 238, 233, ' + this.opacity / 100 + ')';
                ctx.stroke();
                ctx.fill();
            };
            
            this.update = function(){
                this.x += this.dx;
                this.y += this.dy;
                if (this.opacity < 40) this.opacity++;
                this.draw();
            }
        }
        
        var particlesArray = [];
        
        function addParticle() {
            var x       = Math.random() * innerWidth,
                y       = Math.random() * innerHeight,
                dx      = (Math.random()/5)-0.1,
                dy      = Math.random()/2,
                opacity = 1,
                choseForm = Math.floor((Math.random() * 14) + 1);
            particlesArray.push(new Particle(x, y, dx, dy, opacity, choseForm));
        }

        for(var i=0; i < 300 ; i++) addParticle();
        
        function animate() {
            requestAnimationFrame(animate);
            ctx.clearRect(0, 0, innerWidth, innerHeight);
            for (var i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
                if (particlesArray[i].x > innerWidth || particlesArray[i].x < 0 || particlesArray[i].y > innerHeight || particlesArray[i].y < 0) {
                    particlesArray.splice(i, 1);
                    addParticle();
                }
            }
        }
        
        animate();