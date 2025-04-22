#!/usr/bin/env python3
"""This module contains an async function that takes an integer
 with a default value, waits for a delay and returns the
 random delay float number
"""


import random
import asyncio


async def wait_random(max_delay: float = 10) -> float:
    """Waits for a random delay between 1 and max_delay
    and returns the random delay number as a float"""
    delay: float = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay
