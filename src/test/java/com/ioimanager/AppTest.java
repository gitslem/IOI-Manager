package com.ioimanager;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
class AppTest {

    @Test
    void contextLoads() {
        // Simple sanity check
        assertTrue(true, "Application context should load without errors");
    }
}
