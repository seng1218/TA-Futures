import sys
import json
from datetime import datetime

try:
    payload = json.load(sys.stdin)
    tool = payload.get("tool_name", "unknown")
    tool_input = payload.get("tool_input", {})
    file_path = tool_input.get("file_path", tool_input.get("command", ""))
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    with open(".claude/hooks/change-log.txt", "a", encoding="utf-8") as f:
        f.write(f"[{timestamp}] {tool}: {file_path}\n")
except Exception:
    pass

sys.exit(0)
