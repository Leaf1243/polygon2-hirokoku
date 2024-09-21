function drawPolygon() {
    const sides = parseFloat(document.getElementById("sides").value);
    if (isNaN(sides) || sides < 3) {
      alert("3以上の数値を入力してください。");
      return;
    }
  
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 200;
    const angleStep = (2 * Math.PI) / sides;
  
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
  
    for (let i = 0; i < sides; i++) {
      const x = centerX + radius * Math.cos(i * angleStep);
      const y = centerY + radius * Math.sin(i * angleStep);
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.closePath();
    ctx.stroke();
  }