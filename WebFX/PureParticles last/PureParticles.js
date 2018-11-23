var canv = document.getElementById('canvas'),
            ctx  = canv.getContext('2d');
        canv.width = window.innerWidth;
        canv.height = window.innerHeight;
        
        function Particle(x, y, dx, dy, dotWidth, dotHeight, opacity) {
            this.x          = x;
            this.y          = y;
            this.dx         = dx;
            this.dy         = dy;
            this.dotWidth   = dotWidth;
            this.dotHeight  = dotHeight;
            this.opacity    = opacity;
            
            this.draw = function(){
                ctx.beginPath();
                ctx.strokeStyle = 'rgba(181, 185, 194, ' + this.opacity / 100 + ')';
                ctx.fillStyle = 'rgba(181, 185, 194, ' + this.opacity / 100 + ')';
                ctx.fillRect(this.x,this.y,this.dotWidth,this.dotHeight);
                ctx.strokeRect(this.x,this.y,this.dotWidth,this.dotHeight);
                
            };
            
            this.update = function(){
                this.x += this.dx;
                this.y += this.dy;
                if (this.opacity < 100) this.opacity++;
                this.draw();
            }
        }
        
        var particlesArray = [];
        
        function addParticle() {
            var x       = Math.random() * innerWidth,
                y       = Math.random() * innerHeight,
                dx      = Math.random() - 0.5,
                dy      = Math.random(),
                dotWidth  = Math.floor(Math.random() * 2) + 1,
                dotHeight  = Math.floor(Math.random() * 2) + 1,
                opacity = 1;
            particlesArray.push(new Particle(x, y, dx, dy, dotWidth, dotHeight, opacity));
        }

        for(var i=0; i < 200 ; i++) addParticle();
        
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