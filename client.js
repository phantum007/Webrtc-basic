const lc = new RTCPeerConnection()
// undefined
// lc
// RTCPeerConnection {localDescription: null, currentLocalDescription: null, pendingLocalDescription: null, remoteDescription: null, currentRemoteDescription: null, …}
const dc = lc.createDataChannel('channel')
// undefined
dc.onmessage = e=> console.log("just got a message " + e.data);
// e=> console.log("just got a message " + e.data)
dc.onopen = e=> console.log("connection open")
// e=> console.log("connection open")
lc.onicecandidate = e=> console.log("new ice candidate"+ JSON.stringify(lc.localDescription))
// e=> console.log("new ice candidate"+ JSON.stringify(lc.localDescription))
lc.createOffer().then(o=>lc.setLocalDescription(o)).then(o=> console.log("set successfully"))
// Promise {<pending>}
// VM979:1 set successfully
// VM776:1 new ice candidate{"type":"offer","sdp":"v=0\r\no=- 5165883794284263768 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS\r\nm=application 52542 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 192.168.1.170\r\na=candidate:145165799 1 udp 2122194687 192.168.1.170 52542 typ host generation 0 network-id 1 network-cost 10\r\na=ice-ufrag:BA+Y\r\na=ice-pwd:SgCRBjPGzUXQXuXjq617ka7/\r\na=ice-options:trickle\r\na=fingerprint:sha-256 D7:38:50:A2:19:D2:82:2D:C3:14:2C:F0:85:3A:D3:9A:A8:30:DB:46:D4:DB:65:20:C0:65:51:FD:BC:AA:26:FC\r\na=setup:actpass\r\na=mid:0\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n"}
// VM776:1 new ice candidate{"type":"offer","sdp":"v=0\r\no=- 5165883794284263768 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS\r\nm=application 52542 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 192.168.1.170\r\na=candidate:145165799 1 udp 2122194687 192.168.1.170 52542 typ host generation 0 network-id 1 network-cost 10\r\na=candidate:3666563227 1 udp 2122262783 2a00:23ee:1340:89a1:240f:a98f:b9f4:cc95 63301 typ host generation 0 network-id 2 network-cost 10\r\na=ice-ufrag:BA+Y\r\na=ice-pwd:SgCRBjPGzUXQXuXjq617ka7/\r\na=ice-options:trickle\r\na=fingerprint:sha-256 D7:38:50:A2:19:D2:82:2D:C3:14:2C:F0:85:3A:D3:9A:A8:30:DB:46:D4:DB:65:20:C0:65:51:FD:BC:AA:26:FC\r\na=setup:actpass\r\na=mid:0\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n"}
// VM776:1 new ice candidate{"type":"offer","sdp":"v=0\r\no=- 5165883794284263768 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS\r\nm=application 52542 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 192.168.1.170\r\na=candidate:145165799 1 udp 2122194687 192.168.1.170 52542 typ host generation 0 network-id 1 network-cost 10\r\na=candidate:3666563227 1 udp 2122262783 2a00:23ee:1340:89a1:240f:a98f:b9f4:cc95 63301 typ host generation 0 network-id 2 network-cost 10\r\na=candidate:1986588543 1 tcp 1518214911 192.168.1.170 9 typ host tcptype active generation 0 network-id 1 network-cost 10\r\na=ice-ufrag:BA+Y\r\na=ice-pwd:SgCRBjPGzUXQXuXjq617ka7/\r\na=ice-options:trickle\r\na=fingerprint:sha-256 D7:38:50:A2:19:D2:82:2D:C3:14:2C:F0:85:3A:D3:9A:A8:30:DB:46:D4:DB:65:20:C0:65:51:FD:BC:AA:26:FC\r\na=setup:actpass\r\na=mid:0\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n"}
// VM776:1 new ice candidate{"type":"offer","sdp":"v=0\r\no=- 5165883794284263768 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS\r\nm=application 52542 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 192.168.1.170\r\na=candidate:145165799 1 udp 2122194687 192.168.1.170 52542 typ host generation 0 network-id 1 network-cost 10\r\na=candidate:3666563227 1 udp 2122262783 2a00:23ee:1340:89a1:240f:a98f:b9f4:cc95 63301 typ host generation 0 network-id 2 network-cost 10\r\na=candidate:1986588543 1 tcp 1518214911 192.168.1.170 9 typ host tcptype active generation 0 network-id 1 network-cost 10\r\na=candidate:2755965443 1 tcp 1518283007 2a00:23ee:1340:89a1:240f:a98f:b9f4:cc95 9 typ host tcptype active generation 0 network-id 2 network-cost 10\r\na=ice-ufrag:BA+Y\r\na=ice-pwd:SgCRBjPGzUXQXuXjq617ka7/\r\na=ice-options:trickle\r\na=fingerprint:sha-256 D7:38:50:A2:19:D2:82:2D:C3:14:2C:F0:85:3A:D3:9A:A8:30:DB:46:D4:DB:65:20:C0:65:51:FD:BC:AA:26:FC\r\na=setup:actpass\r\na=mid:0\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n"}
// VM776:1 new ice candidate{"type":"offer","sdp":"v=0\r\no=- 5165883794284263768 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS\r\nm=application 52542 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 192.168.1.170\r\na=candidate:145165799 1 udp 2122194687 192.168.1.170 52542 typ host generation 0 network-id 1 network-cost 10\r\na=candidate:3666563227 1 udp 2122262783 2a00:23ee:1340:89a1:240f:a98f:b9f4:cc95 63301 typ host generation 0 network-id 2 network-cost 10\r\na=candidate:1986588543 1 tcp 1518214911 192.168.1.170 9 typ host tcptype active generation 0 network-id 1 network-cost 10\r\na=candidate:2755965443 1 tcp 1518283007 2a00:23ee:1340:89a1:240f:a98f:b9f4:cc95 9 typ host tcptype active generation 0 network-id 2 network-cost 10\r\na=ice-ufrag:BA+Y\r\na=ice-pwd:SgCRBjPGzUXQXuXjq617ka7/\r\na=ice-options:trickle\r\na=fingerprint:sha-256 D7:38:50:A2:19:D2:82:2D:C3:14:2C:F0:85:3A:D3:9A:A8:30:DB:46:D4:DB:65:20:C0:65:51:FD:BC:AA:26:FC\r\na=setup:actpass\r\na=mid:0\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n"}
lc.setRemoteDescription(answer)
// VM1863:1 Uncaught ReferenceError: answer is not defined
//     at <anonymous>:1:25
// (anonymous) @ VM1863:1
const answer = {"type":"answer","sdp":"v=0\r\no=- 3241320029619427704 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS\r\nm=application 64570 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 192.168.1.170\r\na=candidate:1745210176 1 udp 2122194687 192.168.1.170 64570 typ host generation 0 network-id 1 network-cost 10\r\na=ice-ufrag:fmfO\r\na=ice-pwd:FX8ZeNl35auka5ln9Fg0aozG\r\na=ice-options:trickle\r\na=fingerprint:sha-256 24:B3:5F:39:CF:19:0A:43:9A:AC:1C:BA:B8:98:42:2D:50:C5:85:1D:4C:4A:27:7E:A8:F5:6C:CB:E1:32:E7:0F\r\na=setup:active\r\na=mid:0\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n"}
// undefined
lc.setRemoteDescription(answer)
// Promise {<pending>}
// VM541:1 connection open
dc.send("dfdf")
// undefined
// VM448:1 just got a message fine hows you
