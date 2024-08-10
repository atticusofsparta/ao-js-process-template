local process = { _version = "0.0.1" }
ao = require(".ao")
local ducktape = require("ducktape")

function process.handle(msg, env)
	local result = ducktape.run_js("1 + 1")
	if msg.Data == "ping" then
		ao.send({ Target = msg.From, Data = result })
	end

	return ao.result({
		Output = result,
	})
end

return process
