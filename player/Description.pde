class Description {
  String videoSrc;
  List<java.awt.geom.Rectangle2D.Float> cropeList;
  int width;
  int height;
  int locX = -1;
  int locY = -1;
  int screenNumber = -1;
  String spoutName;
  Description(String videoSrc, int screenNumber, List<java.awt.geom.Rectangle2D.Float> cropeList) {
    this.screenNumber = screenNumber;
    this.videoSrc = videoSrc;
    this.cropeList = cropeList;
  }
  Description(String videoSrc, String spoutName,int width, int height,  List<java.awt.geom.Rectangle2D.Float> cropeList) {
    this.spoutName = spoutName;
    this.videoSrc = videoSrc;
    this.cropeList = cropeList;
    
    this.width = width;
    this.height = height;
  }
  Description(String videoSrc, int width, int height, List<java.awt.geom.Rectangle2D.Float> cropeList) {
    this(videoSrc, -1, cropeList);
    this.width = width;
    this.height = height;
  }
  Description(String videoSrc, int width, int height, int locX, int locY, List<java.awt.geom.Rectangle2D.Float> cropeList) {
    this(videoSrc, width, height, cropeList);
    this.locX = locX;
    this.locY = locY;
  }
  void setVideoSrc(String videoSrc) {
    this.videoSrc = videoSrc;
  }
  void setCropeList(ArrayList<java.awt.geom.Rectangle2D.Float> cropeList) {
    this.cropeList = cropeList;
  }
}
