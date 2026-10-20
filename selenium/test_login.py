
from selenium import webdriver
from selenium.webdriver.common.by import By
import time

driver = webdriver.Chrome()

driver.get("file:///home/yogesh/WT/selenium/login.html")

driver.find_element(By.ID, "username").send_keys("admin")
driver.find_element(By.ID, "password").send_keys("1234")

driver.find_element(By.ID, "login").click()

time.sleep(1)

result = driver.find_element(By.ID, "result").text
print(result)

driver.quit()
