// Drawing Mesh
export const drawMesh = (predictions, emo, ctx, canvas) => {
if (predictions.length > 0) {
    for (let i = 0; i < predictions.length; i++) {
        const start = predictions[i].topLeft;
        const end = predictions[i].bottomRight;
        const size = [end[0] - start[0], end[1] - start[1]];
  
        // Render a rectangle over each detected face.
        let color = 'magenta';
        if (emo === 'Angry'){
          color = 'red';
        }
        else if (emo === 'Neutral'){
          color = 'green';
        }
        else if (emo === 'Happy'){
          color = 'orange';
        }
        else if (emo === 'Surprise'){
          color = 'cyan';
        }
        else if (emo === 'Sad'){
          color = 'blue';
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.lineWidth = "2";
        ctx.fillStyle = color;
        ctx.globalAlpha = 0.2;
        ctx.rect(start[0], start[1], size[0], size[1]);
        ctx.fillRect(start[0], start[1], size[0], size[1]);
        ctx.stroke();
        ctx.font="20px Georgia";
        ctx.textAlign="center"; 
        ctx.textBaseline = "middle";
        ctx.fillStyle = "#000000";
        ctx.fillText(emo, start[0]+40, start[1]+15);
      }
  }
};