#!/usr/bin/env python3
"""This module contains an async routine that returns a list
of floats 'n' times using imported function task_wait_random"""
from typing import List
import asyncio

task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """Executes task_wait_random n times and returns a list of floats
    in asc order representing random delays"""
    result: List[float] = await asyncio.gather(
        # Unpacks tasks. Waits for all the complete and collects the result.
        *(task_wait_random(max_delay) for _ in range(n)))
    return sorted(result)
