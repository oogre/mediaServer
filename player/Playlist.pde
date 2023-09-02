
public class Playlist {
  HashMap< Map.Entry<Integer, Integer>, Movie> playlist;
  PApplet p;
  Map.Entry<Integer, Integer> currentKey;
  //SyphonServer server;
  Spout server;

  Playlist(PApplet p, String serverName) {
    this.p = p;
    playlist = new HashMap<Map.Entry<Integer, Integer>, Movie>();
    //server = new SyphonServer(p, serverName);
    server = new Spout(p);
    server.setSenderName(serverName);
  }

  void add(int channel, int pitch, String MovieFile) {
    playlist.put(this.toKey(channel, pitch), new Movie(p, MovieFile));
  }

  void play(int channel, int pitch) {
     Map.Entry<Integer, Integer> key = this.toKey(channel, pitch);
    if (!playlist.containsKey(key))return;
    this.play(key);
  }

  void play( Map.Entry<Integer, Integer> key) {
    if (currentKey!= null)playlist.get(currentKey).stop();
    currentKey = key;
    playlist.get(currentKey).loop();
  }

  void play() {
    if (currentKey!= null)playlist.get(currentKey).stop();
    Map.Entry<Integer, Integer> entry = playlist.keySet().iterator().next();
    play(entry);
  }

   Map.Entry<Integer, Integer> toKey(int channel, int pitch) {
    return new AbstractMap.SimpleEntry<Integer, Integer>(channel, pitch);
  }

  void update() {
    if (!playlist.get(currentKey).available())return;
    playlist.get(currentKey).read();
    //server.sendImage(playlist.get(currentKey));
    server.sendTexture(playlist.get(currentKey));
  }
}
