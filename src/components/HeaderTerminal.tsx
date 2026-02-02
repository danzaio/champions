"use client";

export const HeaderTerminal = () => {
  const code = `local function angle_between(a, b)
    if not a or not b then return 0 end
    local lenA = math.sqrt(a.x * a.x + a.y * a.y)
    local lenB = math.sqrt(b.x * b.x + b.y * b.y)
    if lenA <= kEpsilon or lenB <= kEpsilon then
        return 0
    end
    local dot = (a.x * b.x + a.y * b.y) / (lenA * lenB)
    dot = math.max(-1, math.min(1, dot))
    return math.acos(dot) * 180.0 / PI
end

local function length_3d(v)
    if not v then return 0 end
    local x = v.x or 0
    local y = v.y or 0
    local z = v.z or 0
    return math.sqrt(x * x + y * y + z * z)
end

local function lerp_3d(start_pos, end_pos, t)
    if not start_pos or not end_pos then return start_pos or end_pos end
    t = math.max(0, math.min(1, t))
    local sx, sy, sz = start_pos.x or 0, start_pos.y or 0, start_pos.z or 0
    local ex, ey, ez = end_pos.x or 0, end_pos.y or 0, end_pos.z or 0
    return Math.Vector3(
        sx + (ex - sx) * t,
        sy + (ey - sy) * t,
        sz + (ez - sz) * t
    )
end`;

  // Robust syntax highlighting logic using a single pass to avoid nested tagging bugs
  const highlightedCode = code.replace(
    /\b(local function|local|if|then|end|return|not|or|and|for|do|math\.sqrt|math\.max|math\.min|math\.acos|angle_between|length_3d|lerp_3d|Math\.Vector3|PI|kEpsilon|\d+\.\d+|\d+)\b|(--.*)/g,
    (match) => {
      if (match.startsWith("--")) return `<span class="text-gray-500">${match}</span>`;
      if (["local function", "local", "if", "then", "end", "return", "not", "or", "and", "for", "do"].includes(match)) 
        return `<span class="text-purple-400">${match}</span>`;
      if (["math.sqrt", "math.max", "math.min", "math.acos"].includes(match)) 
        return `<span class="text-blue-300">${match}</span>`;
      if (["angle_between", "length_3d", "lerp_3d"].includes(match)) 
        return `<span class="text-blue-400 font-bold">${match}</span>`;
      if (match === "Math.Vector3") return `<span class="text-yellow-300">${match}</span>`;
      if (match === "PI" || match === "kEpsilon") return `<span class="text-orange-300">${match}</span>`;
      if (!isNaN(Number(match))) return `<span class="text-orange-400">${match}</span>`;
      return match;
    }
  );

  return (
    <div className="hidden lg:flex flex-col w-[650px] h-[500px] bg-[#1e1e1e] rounded-lg border border-white/10 shadow-2xl overflow-hidden backdrop-blur-md bg-opacity-90 text-left">
      {/* Mac-style Window Header */}
      <div className="flex items-center gap-1.5 px-3 py-2 bg-white/5 border-b border-white/5 shrink-0">
        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" /> {/* Red */}
        <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" /> {/* Yellow */}
        <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" /> {/* Green */}
        <div className="ml-2 text-[10px] text-white/30 font-sans font-medium">
          math_utils.lua
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-4 overflow-auto h-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
        <pre 
          className="font-mono text-[13px] leading-relaxed text-gray-300 whitespace-pre"
          dangerouslySetInnerHTML={{ __html: highlightedCode }}
        />
      </div>
    </div>
  );
};
