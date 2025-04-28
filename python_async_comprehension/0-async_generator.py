#!/usr/bin/env python3
"""This module contains an async coroutine that yields a random number
10 times and waits 1 sec each time"""


import asyncio
from typing import AsyncGenerator
import random


async def async_generator() -> AsyncGenerator[float, None]:
    """Yields 10 random floats with 1 second async delay"""
    
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
