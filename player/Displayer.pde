class Displayer extends PApplet {
  //SyphonClient client;
  Spout client;
  PGraphics movie;
  Description desc;
  
  public Displayer(Description desc) {
    super();
    this.desc = desc;
    PApplet.runSketch(new String[]{this.getClass().getName()}, this);
    surface.setTitle(desc.videoSrc);
    if (desc.locX != -1 && desc.locY != -1)
      surface.setLocation(desc.locX, desc.locY);
    
  }

  public void settings() {
    if (desc.screenNumber == -1) {
      size(desc.width, desc.height, P3D);
    } else {
      fullScreen(P3D, desc.screenNumber);
    }
  }

  public void setup() { 
    noCursor();
    //client = new SyphonClient(this, "", desc.videoSrc);
    client = new Spout(this);
    client.setReceiverName(desc.videoSrc);
    background(0);
  }

  public void draw() {
    //if (!client.newFrame()) return;
    //movie = client.getGraphics(movie);
    movie = client.receiveTexture(movie);


    float _size = 1.0/desc.cropeList.size();
    for (int i = 0; i < desc.cropeList.size(); i ++) {
      pushMatrix();
      translate(i * width * _size, height);
      scale(1, -1);
      drawFrame(movie, width * _size, desc.cropeList.get(i));
      popMatrix();
    }
  }

  void drawFrame(PImage src, float width, java.awt.geom.Rectangle2D.Float dimension) {
    pushMatrix();

    

    noStroke();
    beginShape();
    texture(src);
    vertex(0, 0, dimension.x * src.width, dimension.y * src.height);
    vertex(width, 0, (dimension.x + dimension.width) * src.width, dimension.y * src.height);
    vertex(width, height, (dimension.x + dimension.width) * src.width, (dimension.y + dimension.height) * src.height);
    vertex(0, height, dimension.x * src.width, (dimension.y + dimension.height) * src.height);
    endShape();
    popMatrix();
  }
}
