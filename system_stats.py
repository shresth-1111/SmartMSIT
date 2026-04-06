import psutil
import socket

def get_system_stats():
    # CPU Usage
    cpu_usage = psutil.cpu_percent(interval=0.1)
    
    # RAM Usage
    ram_info = psutil.virtual_memory()
    ram_usage = ram_info.percent
    
    # Disk Usage
    disk_info = psutil.disk_usage('/')
    disk_usage = disk_info.percent
    
    # Check internet connection by trying to connect to Google DNS
    try:
        # Connect to the host -- tells us if the host is actually reachable
        socket.create_connection(("8.8.8.8", 53), timeout=1)
        internet_status = "Connected"
    except OSError:
        pass
        internet_status = "Not Connected"
        
    return {
        "cpu_usage": round(cpu_usage, 1),
        "ram_usage": round(ram_usage, 1),
        "disk_usage": round(disk_usage, 1),
        "internet_status": internet_status
    }
