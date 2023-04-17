.PHONY: connect

curl:
	python3 athena-x/coralmicro/scripts/flashtool.py -e curl --subapp curl_wifi --wifi_config wifi.txt

pose:
	python3 athena-x/coralmicro/scripts/flashtool.py -a multicore_model_cascade --subapp multicore_model_cascade_wifi --wifi_config wifi.txt

console:
	screen /dev/cu.usbmodem* 115200

bare-face:
	python3 athena-x/coralmicro/scripts/flashtool.py -e detect_faces --nodata

face:
	python3 athena-x/coralmicro/scripts/flashtool.py -e detect_faces

camera:
	python3 athena-x/coralmicro/apps/multicore_model_cascade/multicore_model_cascade.py --device_ip_address $(IP)

stream:
	python3 athena-x/coralmicro/scripts/flashtool.py -e camera_streaming_rpc --subapp camera_streaming_rpc_wifi --wifi_config wifi.txt

rpc:
	python3 athena-x/coralmicro/examples/camera_streaming_rpc/camera_streaming_app.py --host_ip $(IP)

segment:
	python3 athena-x/coralmicro/scripts/flashtool.py -e segment_poses --wifi_config wifi.txt

speech:
	python3 athena-x/coralmicro/scripts/flashtool.py -e classify_speech

