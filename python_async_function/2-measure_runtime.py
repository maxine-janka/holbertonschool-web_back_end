#!/usr/bin/env python3
"""This module contains a function that measures the total execution time
for another imported function 'wait_n' returning total_time/n as a float"""
from time import perf_counter
import asyncio

wait_n = __import__("1-concurrent_coroutines").wait_n


def measure_time(n: int, max_delay: int) -> float:
    """Measures total execution time of wait_n and returns total_time / n"""
    time_start: float = perf_counter()
    asyncio.run(wait_n(n, max_delay))
    time_stop: float = perf_counter()
    total_time: float = time_stop - time_start
    return total_time / n