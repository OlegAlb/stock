var canv = document.getElementById('canvas'),
            ctx  = canv.getContext('2d');
        canv.width = window.innerWidth;
        canv.height = window.innerHeight;
        
        function Particle(x, y, dx, dy, radius, opacity) {
            this.x          = x;
            this.y          = y;
            this.dx         = dx;
            this.dy         = dy;
            this.radius     = radius;
            this.opacity    = opacity;
            
            this.draw = function(){
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                ctx.strokeStyle = 'rgba(255, 255, 255, ' + this.opacity / 100 + ')';
                ctx.fillStyle = 'rgba(255, 255, 255, ' + this.opacity / 100 + ')';
                ctx.stroke();
                ctx.fill();
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
                dy      = Math.random() - 0.5,
                radius  = Math.floor(Math.random() * (0.5 - 0.1 + 1)) + 0.1,
                opacity = 1;
            particlesArray.push(new Particle(x, y, dx, dy, radius, opacity));
        }

        for(var i=0; i < 600 ; i++) addParticle();
        
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