import assert from 'node:assert';
import { describe, it } from 'node:test';
import { createLuaJsLoader } from './utils.ts';
import {
  AO_LOADER_HANDLER_ENV,
  STUB_ADDRESS,
  DEFAULT_HANDLE_OPTIONS,
} from '../tools/constants.ts';

describe('aos', async () => {
  const { handle: originalHandle, memory: startMemory } =
    await createLuaJsLoader();

  async function handle(options = {}, mem = startMemory) {
    return originalHandle(
      mem,
      {
        ...DEFAULT_HANDLE_OPTIONS,
        ...options,
      },
      AO_LOADER_HANDLER_ENV,
    );
  }

  it('Should return process info', async () => {
    const result = await handle({
      Tags: [{ name: 'Action', value: 'Info' }],
    });

    console.dir(result, { depth: null });

    const info = JSON.parse(result.Messages[0].Data);
    assert(info.Owner);
    assert(info.Name);
  });
});
