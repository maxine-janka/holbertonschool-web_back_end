#!/usr/bin/env python3
"""The module conatins an async function that executes another
function four times concurrently and returns the runtime"""


from time import perf_counter
import asyncio
async_comprehension = __import__("1-async_comprehension").async_comprehension


async def measure_runtime() -> float:
    """Measures the runtime of async_comprehension running
    concurrently 4 times and returns time in seconds as a float"""
    time_start: float = perf_counter()
    # Create list of 4 coroutine objects
    coroutines = [async_comprehension() for _ in range(4)]
    # Unpack and execute coroutines
    await asyncio.gather(*coroutines)
    time_stop: float = perf_counter()
    total_time: float = time_stop - time_start
    return total_time

# Yielding 10 floats with 1 second delay, 4 times. Takes ~10s in total not 40s
# because corountines run concurrently.
