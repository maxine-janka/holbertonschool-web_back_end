#!/usr/bin/env python3
"""This module contains an async routine that returns a list
of floats 'n' times using imported function wait_random"""
from typing import List
import asyncio

wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """Executes wait_random n times and returns a list of floats
    in asc order representing random delays"""
    result: List[float] = await asyncio.gather(
        *(wait_random(max_delay) for _ in range(n)))
    return sorted(result)
