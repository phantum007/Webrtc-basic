const rc = {"type":"offer","sdp":"v=0\r\no=- 5165883794284263768 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS\r\nm=application 52542 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 192.168.1.170\r\na=candidate:145165799 1 udp 2122194687 192.168.1.170 52542 typ host generation 0 network-id 1 network-cost 10\r\na=ice-ufrag:BA+Y\r\na=ice-pwd:SgCRBjPGzUXQXuXjq617ka7/\r\na=ice-options:trickle\r\na=fingerprint:sha-256 D7:38:50:A2:19:D2:82:2D:C3:14:2C:F0:85:3A:D3:9A:A8:30:DB:46:D4:DB:65:20:C0:65:51:FD:BC:AA:26:FC\r\na=setup:actpass\r\na=mid:0\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n"}
// undefined
const offer = {"type":"offer","sdp":"v=0\r\no=- 5165883794284263768 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS\r\nm=application 52542 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 192.168.1.170\r\na=candidate:145165799 1 udp 2122194687 192.168.1.170 52542 typ host generation 0 network-id 1 network-cost 10\r\na=ice-ufrag:BA+Y\r\na=ice-pwd:SgCRBjPGzUXQXuXjq617ka7/\r\na=ice-options:trickle\r\na=fingerprint:sha-256 D7:38:50:A2:19:D2:82:2D:C3:14:2C:F0:85:3A:D3:9A:A8:30:DB:46:D4:DB:65:20:C0:65:51:FD:BC:AA:26:FC\r\na=setup:actpass\r\na=mid:0\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n"}
// undefined
const rc = new RTCPeerConnection()

// undefined
rc.onicecandidate =e=> console.log("new ice candidate"+ JSON.stringify(rc.localDescription))
// e=> console.log("new ice candidate"+ JSON.stringify(rc.localDescription))

rc.ondatachannel = e => {
    rc.dc = e.channel;
     rc.dc.onmessage = e =>console.log("new message from client"+e.data)
}
// e => {
//     rc.dc = e.channel;
//      rc.dc.onmessage = e =>console.log("new message from client"+e.data)
// }
rc.setRemoteDescription(offer).then(a=> console.log("ofer set"))
// Promise {<pending>}
// VM1591:1 ofer set
rc.createAnswer().then(a => rc.setLocalDescription(a)).then(a=>console.log("answer created"))
// Promise {<pending>}
// VM1811:1 answer created
// VM1279:1 new ice candidate{"type":"answer","sdp":"v=0\r\no=- 3241320029619427704 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS\r\nm=application 64570 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 192.168.1.170\r\na=candidate:1745210176 1 udp 2122194687 192.168.1.170 64570 typ host generation 0 network-id 1 network-cost 10\r\na=ice-ufrag:fmfO\r\na=ice-pwd:FX8ZeNl35auka5ln9Fg0aozG\r\na=ice-options:trickle\r\na=fingerprint:sha-256 24:B3:5F:39:CF:19:0A:43:9A:AC:1C:BA:B8:98:42:2D:50:C5:85:1D:4C:4A:27:7E:A8:F5:6C:CB:E1:32:E7:0F\r\na=setup:active\r\na=mid:0\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n"}
// VM1279:1 new ice candidate{"type":"answer","sdp":"v=0\r\no=- 3241320029619427704 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS\r\nm=application 64570 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 192.168.1.170\r\na=candidate:1745210176 1 udp 2122194687 192.168.1.170 64570 typ host generation 0 network-id 1 network-cost 10\r\na=candidate:828693002 1 udp 2122262783 2a00:23ee:1340:89a1:240f:a98f:b9f4:cc95 57581 typ host generation 0 network-id 2 network-cost 10\r\na=ice-ufrag:fmfO\r\na=ice-pwd:FX8ZeNl35auka5ln9Fg0aozG\r\na=ice-options:trickle\r\na=fingerprint:sha-256 24:B3:5F:39:CF:19:0A:43:9A:AC:1C:BA:B8:98:42:2D:50:C5:85:1D:4C:4A:27:7E:A8:F5:6C:CB:E1:32:E7:0F\r\na=setup:active\r\na=mid:0\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n"}
// VM1279:1 new ice candidate{"type":"answer","sdp":"v=0\r\no=- 3241320029619427704 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS\r\nm=application 64570 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 192.168.1.170\r\na=candidate:1745210176 1 udp 2122194687 192.168.1.170 64570 typ host generation 0 network-id 1 network-cost 10\r\na=candidate:828693002 1 udp 2122262783 2a00:23ee:1340:89a1:240f:a98f:b9f4:cc95 57581 typ host generation 0 network-id 2 network-cost 10\r\na=ice-ufrag:fmfO\r\na=ice-pwd:FX8ZeNl35auka5ln9Fg0aozG\r\na=ice-options:trickle\r\na=fingerprint:sha-256 24:B3:5F:39:CF:19:0A:43:9A:AC:1C:BA:B8:98:42:2D:50:C5:85:1D:4C:4A:27:7E:A8:F5:6C:CB:E1:32:E7:0F\r\na=setup:active\r\na=mid:0\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n"}
// VM1466:3 new message from clientdfdf
rc.dc.send("fine hows you")
// undefined
