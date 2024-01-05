import React from "react";

function formatNumberWithSuffix(number) {
  const suffixes = ["st", "nd", "rd"];
  const lastDigit = number % 10;
  const lastTwoDigits = number % 100;
  const suffix = suffixes[lastDigit - 1] || "th";

  // Handle special case for numbers ending with 11
  if (lastTwoDigits === 11) {
    return number + "th";
  }

  return number + suffix;
}

const Response = ({ correctItemsCount, submissions }) => {
  return (
    <div className="flex justify-center">
      <div className="">
        <p>
          You got {correctItemsCount} items in the correct order. This was your{" "}
          {formatNumberWithSuffix(submissions)} guess
        </p>
      </div>
    </div>
  );
};

export default Response;
