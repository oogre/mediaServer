import java.util.Arrays;
import java.util.List;
import java.util.HashMap;
import java.util.Map;
import java.util.AbstractMap;
import processing.video.*;
//import codeanticode.syphon.*;
import spout.*;
import java.awt.geom.Rectangle2D.Float;


HashMap<String, Playlist> playlists;
List<Description> dataDesc ;
List<Displayer> displays;

void settings() {
  //fullScreen(P3D, 1);
  size(300, 600, P3D);
}

void setup() {
  noCursor();
  //playlists = new HashMap<String, Playlist> ();

  //playlists.put("pentura", new Playlist(this, "pentura"));
  //playlists.put("wallpaper", new Playlist(this, "wallpaper"));
  //playlists.put("bavenoire", new Playlist(this, "bavenoire"));

  //playlists.get("pentura").add(0, 1, "pentura.mov");
  //  playlists.get("wallpaper").add(1, 1, "wallpaper.mov");
  //  playlists.get("wallpaper").add(1, 2, "wallpaper2.mov");
 // playlists.get("bavenoire").add(2, 1, "baveNoire.mov");

 // playlists.get("pentura").play();
  //  playlists.get("wallpaper").play();
 // playlists.get("bavenoire").play();

  dataDesc = (List<Description>) Arrays.asList(
    new Description(
    "pentura",
    "pentura_croped", 720, 1280,
    (List<java.awt.geom.Rectangle2D.Float>) Arrays.asList(
    new java.awt.geom.Rectangle2D.Float(0.00, 0.00, 0.14, 1.00)
    )
    ),
    new Description(
    "pentura",
    4,
    (List<java.awt.geom.Rectangle2D.Float>) Arrays.asList(
    new java.awt.geom.Rectangle2D.Float(0.23, 0.00, 0.14, 1.00),
    new java.awt.geom.Rectangle2D.Float(0.43, 0.00, 0.14, 1.00),
    new java.awt.geom.Rectangle2D.Float(0.63, 0.00, 0.14, 1.00),
    new java.awt.geom.Rectangle2D.Float(0.83, 0.00, 0.14, 1.00)
    )
    ),
    new Description(
    "bave noire",
    3,
    (List<java.awt.geom.Rectangle2D.Float>) Arrays.asList(
    new java.awt.geom.Rectangle2D.Float(0.00, 0.00, 1.00, 1.00)
    )
    ),
    new Description(
    "wallpaper",
    2,
    (List<java.awt.geom.Rectangle2D.Float>) Arrays.asList(
    new java.awt.geom.Rectangle2D.Float(0.00, 0.00, 1.00, 1.00)
    )
    )
    );

  displays = new ArrayList<Displayer>();
  for (int i = 0; i < dataDesc.size(); i ++) {
    displays.add(new Displayer(dataDesc.get(i)));
  }

  background(0);
}


void draw() {
  /*for (Map.Entry<String, Playlist> set : playlists.entrySet()) {
    set.getValue().update();
  }*/
}
void keyReleased() {
  //if(key == '1')playlists.get("wallpaper").play(1, 1);
  //if(key == '2')playlists.get("wallpaper").play(1, 2);
}
